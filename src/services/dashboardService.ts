import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs
} from 'firebase/firestore'
import { db } from '../lib/firebase'
import type { InterviewSession } from '../types/interview'

interface DashboardStats {
  totalSessions: number
  averageScore: number
  totalPracticeTime: number
  achievementsCount: number
  improvementRate: number
  streakDays: number
}

interface SessionSummary {
  id: string
  type: string
  score: number
  date: string
  duration: string
}

interface WeeklyProgressData {
  name: string
  hr: number
  technical: number
  behavioral: number
}

interface SkillBreakdown {
  name: string
  value: number
}

class DashboardService {
  async getUserStats(userId: string): Promise<DashboardStats> {
    try {
      const sessionsQuery = query(
        collection(db, 'user_sessions'),
        where('userId', '==', userId),
        where('status', '==', 'completed')
      )
      
      const sessionsSnapshot = await getDocs(sessionsQuery)
      const sessions = sessionsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        startTime: doc.data().startTime?.toDate(),
        endTime: doc.data().endTime?.toDate(),
        createdAt: doc.data().createdAt?.toDate()
      })) as InterviewSession[]

      // Calculate statistics
      const totalSessions = sessions.length
      const completedSessions = sessions.filter(s => s.status === 'completed')
      
      const scores = completedSessions.map(s => s.overallScore || 0).filter(s => s > 0)
      const averageScore = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0
      
      const totalPracticeTime = completedSessions.reduce((total, session) => {
        return total + (session.totalDuration || 0)
      }, 0)

      // Calculate improvement rate (last 5 vs first 5 sessions)
      const recentSessions = completedSessions.slice(-5)
      const oldSessions = completedSessions.slice(0, 5)
      
      const recentAvg = recentSessions.length > 0 
        ? recentSessions.reduce((sum, s) => sum + (s.overallScore || 0), 0) / recentSessions.length 
        : 0
      const oldAvg = oldSessions.length > 0 
        ? oldSessions.reduce((sum, s) => sum + (s.overallScore || 0), 0) / oldSessions.length 
        : 0
      
      const improvementRate = oldAvg > 0 ? ((recentAvg - oldAvg) / oldAvg) * 100 : 0

      // Calculate streak days (sessions in consecutive days)
      let streakDays = 0
      const today = new Date()
      const sessionDates = completedSessions
        .map(s => s.createdAt)
        .filter(date => date)
        .sort((a, b) => b!.getTime() - a!.getTime())

      if (sessionDates.length > 0) {
        const uniqueDates = [...new Set(sessionDates.map(date => date!.toDateString()))]
        let currentDate = new Date(today)
        
        for (const dateStr of uniqueDates) {
          const sessionDate = new Date(dateStr)
          const diffDays = Math.floor((currentDate.getTime() - sessionDate.getTime()) / (1000 * 60 * 60 * 24))
          
          if (diffDays <= streakDays + 1) {
            streakDays++
            currentDate = sessionDate
          } else {
            break
          }
        }
      }

      return {
        totalSessions,
        averageScore: Math.round(averageScore * 10) / 10,
        totalPracticeTime: Math.floor(totalPracticeTime / 60), // Convert to minutes
        achievementsCount: Math.floor(totalSessions / 5) + (averageScore > 7 ? 2 : 0) + (streakDays > 3 ? 1 : 0),
        improvementRate: Math.round(improvementRate * 10) / 10,
        streakDays
      }
    } catch (error) {
      console.error('Error fetching user stats:', error)
      return {
        totalSessions: 0,
        averageScore: 0,
        totalPracticeTime: 0,
        achievementsCount: 0,
        improvementRate: 0,
        streakDays: 0
      }
    }
  }

  async getRecentSessions(userId: string, limitCount: number = 4): Promise<SessionSummary[]> {
    try {
      const sessionsQuery = query(
        collection(db, 'user_sessions'),
        where('userId', '==', userId),
        where('status', '==', 'completed'),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      )
      
      const sessionsSnapshot = await getDocs(sessionsQuery)
      
      return sessionsSnapshot.docs.map(doc => {
        const data = doc.data()
        const createdAt = data.createdAt?.toDate()
        const totalDuration = data.totalDuration || 0
        
        // Determine session type based on questions
        let sessionType = 'Mixed Interview'
        if (data.questions && data.questions.length > 0) {
          const questionTypes = data.questions.map((q: any) => q.type)
          const uniqueTypes = [...new Set(questionTypes)]
          if (uniqueTypes.length === 1) {
            sessionType = `${uniqueTypes[0]} Interview`
          }
        }

        return {
          id: doc.id,
          type: sessionType,
          score: data.overallScore || 0,
          date: createdAt ? createdAt.toLocaleDateString() : new Date().toLocaleDateString(),
          duration: `${Math.floor(totalDuration / 60)}m ${totalDuration % 60}s`
        }
      })
    } catch (error) {
      console.error('Error fetching recent sessions:', error)
      return []
    }
  }

  async getWeeklyProgress(userId: string): Promise<WeeklyProgressData[]> {
    try {
      const sevenDaysAgo = new Date()
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
      
      const sessionsQuery = query(
        collection(db, 'user_sessions'),
        where('userId', '==', userId),
        where('status', '==', 'completed'),
        where('createdAt', '>=', sevenDaysAgo),
        orderBy('createdAt', 'asc')
      )
      
      const sessionsSnapshot = await getDocs(sessionsQuery)
      const sessions = sessionsSnapshot.docs.map(doc => ({
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate()
      })) as InterviewSession[]

      // Group sessions by day and calculate averages by type
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const weeklyData: WeeklyProgressData[] = []
      
      for (let i = 6; i >= 0; i--) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        const dayName = dayNames[date.getDay()]
        
        const daySessions = sessions.filter(session => {
          if (!session.createdAt) return false
          return session.createdAt.toDateString() === date.toDateString()
        })

        // Calculate average scores by question type for this day
        const hrSessions = daySessions.flatMap(s => 
          s.answers?.filter(a => s.questions?.find(q => q.id === a.questionId)?.type === 'HR') || []
        )
        const techSessions = daySessions.flatMap(s => 
          s.answers?.filter(a => s.questions?.find(q => q.id === a.questionId)?.type === 'Technical') || []
        )
        const behavioralSessions = daySessions.flatMap(s => 
          s.answers?.filter(a => s.questions?.find(q => q.id === a.questionId)?.type === 'Behavioral') || []
        )

        const hrAvg = hrSessions.length > 0 
          ? hrSessions.reduce((sum, a) => sum + (a.feedback?.score || 0), 0) / hrSessions.length 
          : 0
        const techAvg = techSessions.length > 0 
          ? techSessions.reduce((sum, a) => sum + (a.feedback?.score || 0), 0) / techSessions.length 
          : 0
        const behavioralAvg = behavioralSessions.length > 0 
          ? behavioralSessions.reduce((sum, a) => sum + (a.feedback?.score || 0), 0) / behavioralSessions.length 
          : 0

        weeklyData.push({
          name: dayName,
          hr: Math.round(hrAvg * 10) / 10,
          technical: Math.round(techAvg * 10) / 10,
          behavioral: Math.round(behavioralAvg * 10) / 10
        })
      }

      return weeklyData
    } catch (error) {
      console.error('Error fetching weekly progress:', error)
      // Return mock data as fallback
      return [
        { name: 'Mon', hr: 0, technical: 0, behavioral: 0 },
        { name: 'Tue', hr: 0, technical: 0, behavioral: 0 },
        { name: 'Wed', hr: 0, technical: 0, behavioral: 0 },
        { name: 'Thu', hr: 0, technical: 0, behavioral: 0 },
        { name: 'Fri', hr: 0, technical: 0, behavioral: 0 },
        { name: 'Sat', hr: 0, technical: 0, behavioral: 0 },
        { name: 'Sun', hr: 0, technical: 0, behavioral: 0 }
      ]
    }
  }

  async getSkillsBreakdown(userId: string): Promise<SkillBreakdown[]> {
    try {
      const sessionsQuery = query(
        collection(db, 'user_sessions'),
        where('userId', '==', userId),
        where('status', '==', 'completed')
      )
      
      const sessionsSnapshot = await getDocs(sessionsQuery)
      const sessions = sessionsSnapshot.docs.map(doc => doc.data()) as InterviewSession[]

      // Aggregate scores by question type
      const skillScores: { [key: string]: number[] } = {
        'HR': [],
        'Technical': [],
        'Behavioral': []
      }

      sessions.forEach(session => {
        session.answers?.forEach(answer => {
          if (answer.feedback?.score) {
            const question = session.questions?.find(q => q.id === answer.questionId)
            if (question && skillScores[question.type]) {
              skillScores[question.type].push(answer.feedback.score)
            }
          }
        })
      })

      // Calculate averages
      const skillsBreakdown: SkillBreakdown[] = []
      
      Object.entries(skillScores).forEach(([skill, scores]) => {
        if (scores.length > 0) {
          const average = scores.reduce((sum, score) => sum + score, 0) / scores.length
          skillsBreakdown.push({
            name: skill,
            value: Math.round(average * 10) / 10
          })
        }
      })

      // If no data, return default structure
      if (skillsBreakdown.length === 0) {
        return [
          { name: 'HR', value: 0 },
          { name: 'Technical', value: 0 },
          { name: 'Behavioral', value: 0 }
        ]
      }

      return skillsBreakdown
    } catch (error) {
      console.error('Error fetching skills breakdown:', error)
      return [
        { name: 'HR', value: 0 },
        { name: 'Technical', value: 0 },
        { name: 'Behavioral', value: 0 }
      ]
    }
  }

  async getTodaysSchedule(userId: string): Promise<any[]> {
    // For now, return empty array - no scheduled sessions
    // This can be enhanced later with a scheduling system
    try {
      // Check if user has any sessions today
      const today = new Date()
      const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate())
      const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
      
      const todaysSessionsQuery = query(
        collection(db, 'user_sessions'),
        where('userId', '==', userId),
        where('createdAt', '>=', startOfDay),
        where('createdAt', '<', endOfDay)
      )
      
      const todaysSessionsSnapshot = await getDocs(todaysSessionsQuery)
      
      // If user already practiced today, return empty (no more suggestions)
      if (todaysSessionsSnapshot.docs.length > 0) {
        return []
      }
      
      // If no practice today, suggest based on user's practice history
      const stats = await this.getUserStats(userId)
      
      if (stats.totalSessions === 0) {
        // New user - suggest starting with IELTS or Interview practice
        return [
          {
            time: 'Anytime',
            type: 'IELTS Practice',
            topic: 'Start your first practice session'
          }
        ]
      }
      
      // Existing user - suggest continuing practice
      return [
        {
          time: 'Anytime',
          type: 'Continue Practice',
          topic: 'Keep improving your skills'
        }
      ]
    } catch (error) {
      console.error('Error generating schedule:', error)
      return []
    }
  }
}

export const dashboardService = new DashboardService()
export default dashboardService