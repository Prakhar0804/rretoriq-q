import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs
} from 'firebase/firestore'
import { db } from '../lib/firebase'

interface ProgressStats {
  overallIeltsScore: number
  interviewAverage: number
  totalPracticeHours: number
  streakDays: number
  weeklyImprovement: number
  interviewImprovement: number
  thisWeekHours: number
}

interface SessionData {
  id: string
  type: string
  date: string
  score: number
  duration: string
  improvement: string
}

interface WeeklyProgressData {
  date: string
  ielts: number
  interview: number
  sessions: number
}

interface SkillData {
  skill: string
  current: number
  target: number
  improvement: number
}

interface MonthlyData {
  month: string
  sessions: number
  avgScore: number
  timeSpent: number
}

interface RadarData {
  skill: string
  score: number
}

class ProgressService {
  async getProgressStats(userId: string): Promise<ProgressStats> {
    try {
      const sessionsQuery = query(
        collection(db, 'user_sessions'),
        where('userId', '==', userId),
        where('status', '==', 'completed'),
        orderBy('createdAt', 'desc')
      )
      
      const sessionsSnapshot = await getDocs(sessionsQuery)
      const sessions = sessionsSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
        createdAt: doc.data().createdAt?.toDate()
      }))

      if (sessions.length === 0) {
        return {
          overallIeltsScore: 0,
          interviewAverage: 0,
          totalPracticeHours: 0,
          streakDays: 0,
          weeklyImprovement: 0,
          interviewImprovement: 0,
          thisWeekHours: 0
        }
      }

      // Calculate IELTS scores
      const ieltsScores = sessions
        .filter((s: any) => s.sessionType === 'IELTS' && s.overallScore)
        .map((s: any) => s.overallScore)
      
      const overallIeltsScore = ieltsScores.length > 0 
        ? ieltsScores.reduce((a, b) => a + b, 0) / ieltsScores.length 
        : 0

      // Calculate interview scores
      const interviewScores = sessions
        .filter((s: any) => s.sessionType === 'Interview' && s.overallScore)
        .map((s: any) => s.overallScore)
      
      const interviewAverage = interviewScores.length > 0 
        ? interviewScores.reduce((a, b) => a + b, 0) / interviewScores.length 
        : 0

      // Calculate total practice time
      const totalMinutes = sessions.reduce((total: number, session: any) => {
        return total + (session.totalDuration || 0)
      }, 0)
      const totalPracticeHours = Math.round(totalMinutes / 60)

      // Calculate streak days
      const streakDays = this.calculateStreakDays(sessions)

      // Calculate this week's hours
      const oneWeekAgo = new Date()
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
      
      const thisWeekSessions = sessions.filter((s: any) => 
        s.createdAt && s.createdAt > oneWeekAgo
      )
      const thisWeekMinutes = thisWeekSessions.reduce((total: number, session: any) => {
        return total + (session.totalDuration || 0)
      }, 0)
      const thisWeekHours = Math.round(thisWeekMinutes / 60)

      // Calculate improvement trends
      const recentSessions = sessions.slice(0, 5)
      const olderSessions = sessions.slice(5, 10)
      
      const recentAvg = recentSessions.length > 0 
        ? recentSessions.reduce((sum: number, s: any) => sum + (s.overallScore || 0), 0) / recentSessions.length 
        : 0
      const olderAvg = olderSessions.length > 0 
        ? olderSessions.reduce((sum: number, s: any) => sum + (s.overallScore || 0), 0) / olderSessions.length 
        : 0
      
      const weeklyImprovement = olderAvg > 0 ? ((recentAvg - olderAvg) / olderAvg) * 100 : 0
      const interviewImprovement = weeklyImprovement // Simplified for now

      return {
        overallIeltsScore: Math.round(overallIeltsScore * 10) / 10,
        interviewAverage: Math.round(interviewAverage),
        totalPracticeHours,
        streakDays,
        weeklyImprovement: Math.round(weeklyImprovement * 10) / 10,
        interviewImprovement: Math.round(interviewImprovement),
        thisWeekHours
      }
    } catch (error) {
      console.error('Error fetching progress stats:', error)
      return {
        overallIeltsScore: 0,
        interviewAverage: 0,
        totalPracticeHours: 0,
        streakDays: 0,
        weeklyImprovement: 0,
        interviewImprovement: 0,
        thisWeekHours: 0
      }
    }
  }

  async getRecentSessions(userId: string, limitCount: number = 10): Promise<SessionData[]> {
    try {
      const sessionsQuery = query(
        collection(db, 'user_sessions'),
        where('userId', '==', userId),
        where('status', '==', 'completed'),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      )
      
      const sessionsSnapshot = await getDocs(sessionsQuery)
      
      return sessionsSnapshot.docs.map((doc, index) => {
        const data = doc.data()
        const createdAt = data.createdAt?.toDate()
        const totalDuration = data.totalDuration || 0
        
        // Calculate improvement (simplified - compare with average)
        const improvement = index < sessionsSnapshot.docs.length - 1 
          ? `+${Math.round(Math.random() * 5 * 10) / 10}` // Placeholder calculation
          : '+0.0'

        return {
          id: doc.id,
          type: data.sessionType === 'IELTS' ? 'IELTS Speaking' : `${data.sessionType} Interview`,
          date: createdAt ? createdAt.toLocaleDateString() : new Date().toLocaleDateString(),
          score: data.overallScore || 0,
          duration: `${Math.floor(totalDuration / 60)}m`,
          improvement
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
      }))

      const weeklyData: WeeklyProgressData[] = []
      
      for (let i = 6; i >= 0; i--) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        
        const daySessions = sessions.filter((session: any) => {
          if (!session.createdAt) return false
          return session.createdAt.toDateString() === date.toDateString()
        })

        const ieltsScores = daySessions
          .filter((s: any) => s.sessionType === 'IELTS')
          .map((s: any) => s.overallScore || 0)
        
        const interviewScores = daySessions
          .filter((s: any) => s.sessionType === 'Interview')
          .map((s: any) => s.overallScore || 0)

        const ieltsAvg = ieltsScores.length > 0 
          ? ieltsScores.reduce((a, b) => a + b, 0) / ieltsScores.length 
          : 0
        const interviewAvg = interviewScores.length > 0 
          ? interviewScores.reduce((a, b) => a + b, 0) / interviewScores.length 
          : 0

        weeklyData.push({
          date: date.toISOString().split('T')[0],
          ielts: Math.round(ieltsAvg * 10) / 10,
          interview: Math.round(interviewAvg),
          sessions: daySessions.length
        })
      }

      return weeklyData
    } catch (error) {
      console.error('Error fetching weekly progress:', error)
      return []
    }
  }

  async getSkillsBreakdown(userId: string): Promise<SkillData[]> {
    try {
      const sessionsQuery = query(
        collection(db, 'user_sessions'),
        where('userId', '==', userId),
        where('status', '==', 'completed')
      )
      
      const sessionsSnapshot = await getDocs(sessionsQuery)
      
      if (sessionsSnapshot.docs.length === 0) {
        return [
          { skill: 'Speaking', current: 0, target: 8.0, improvement: 0 },
          { skill: 'Listening', current: 0, target: 8.0, improvement: 0 },
          { skill: 'Reading', current: 0, target: 8.0, improvement: 0 },
          { skill: 'Writing', current: 0, target: 8.0, improvement: 0 }
        ]
      }

      // For now, return basic skills analysis based on overall scores
      // This can be enhanced with more detailed feedback analysis
      const sessions = sessionsSnapshot.docs.map(doc => doc.data())
      const avgScore = sessions.reduce((sum: number, s: any) => sum + (s.overallScore || 0), 0) / sessions.length

      return [
        { skill: 'Speaking', current: Math.round((avgScore * 0.9) * 10) / 10, target: 8.0, improvement: 0.3 },
        { skill: 'Listening', current: Math.round((avgScore * 0.85) * 10) / 10, target: 8.0, improvement: 0.2 },
        { skill: 'Reading', current: Math.round((avgScore * 1.1) * 10) / 10, target: 8.0, improvement: 0.4 },
        { skill: 'Writing', current: Math.round((avgScore * 0.8) * 10) / 10, target: 8.0, improvement: 0.1 }
      ]
    } catch (error) {
      console.error('Error fetching skills breakdown:', error)
      return [
        { skill: 'Speaking', current: 0, target: 8.0, improvement: 0 },
        { skill: 'Listening', current: 0, target: 8.0, improvement: 0 },
        { skill: 'Reading', current: 0, target: 8.0, improvement: 0 },
        { skill: 'Writing', current: 0, target: 8.0, improvement: 0 }
      ]
    }
  }

  async getMonthlyStats(userId: string): Promise<MonthlyData[]> {
    try {
      const fourMonthsAgo = new Date()
      fourMonthsAgo.setMonth(fourMonthsAgo.getMonth() - 4)
      
      const sessionsQuery = query(
        collection(db, 'user_sessions'),
        where('userId', '==', userId),
        where('status', '==', 'completed'),
        where('createdAt', '>=', fourMonthsAgo),
        orderBy('createdAt', 'asc')
      )
      
      const sessionsSnapshot = await getDocs(sessionsQuery)
      const sessions = sessionsSnapshot.docs.map(doc => ({
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate()
      }))

      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const monthlyData: MonthlyData[] = []
      
      for (let i = 3; i >= 0; i--) {
        const date = new Date()
        date.setMonth(date.getMonth() - i)
        const monthName = monthNames[date.getMonth()]
        
        const monthSessions = sessions.filter((session: any) => {
          if (!session.createdAt) return false
          return session.createdAt.getMonth() === date.getMonth() && 
                 session.createdAt.getFullYear() === date.getFullYear()
        })

        const avgScore = monthSessions.length > 0 
          ? monthSessions.reduce((sum: number, s: any) => sum + (s.overallScore || 0), 0) / monthSessions.length 
          : 0

        const timeSpent = monthSessions.reduce((total: number, session: any) => {
          return total + (session.totalDuration || 0)
        }, 0)

        monthlyData.push({
          month: monthName,
          sessions: monthSessions.length,
          avgScore: Math.round(avgScore * 10) / 10,
          timeSpent: Math.round(timeSpent / 60) // Convert to hours
        })
      }

      return monthlyData
    } catch (error) {
      console.error('Error fetching monthly stats:', error)
      return []
    }
  }

  async getRadarData(userId: string): Promise<RadarData[]> {
    try {
      const sessionsQuery = query(
        collection(db, 'user_sessions'),
        where('userId', '==', userId),
        where('status', '==', 'completed')
      )
      
      const sessionsSnapshot = await getDocs(sessionsQuery)
      
      if (sessionsSnapshot.docs.length === 0) {
        return [
          { skill: 'Fluency', score: 0 },
          { skill: 'Vocabulary', score: 0 },
          { skill: 'Grammar', score: 0 },
          { skill: 'Pronunciation', score: 0 },
          { skill: 'Coherence', score: 0 },
          { skill: 'Confidence', score: 0 }
        ]
      }

      // Calculate based on overall performance
      const sessions = sessionsSnapshot.docs.map(doc => doc.data())
      const avgScore = sessions.reduce((sum: number, s: any) => sum + (s.overallScore || 0), 0) / sessions.length
      const normalizedScore = (avgScore / 10) * 100 // Convert to percentage

      return [
        { skill: 'Fluency', score: Math.round(normalizedScore * 0.9) },
        { skill: 'Vocabulary', score: Math.round(normalizedScore * 0.85) },
        { skill: 'Grammar', score: Math.round(normalizedScore * 0.95) },
        { skill: 'Pronunciation', score: Math.round(normalizedScore * 1.1) },
        { skill: 'Coherence', score: Math.round(normalizedScore * 0.8) },
        { skill: 'Confidence', score: Math.round(normalizedScore * 0.75) }
      ]
    } catch (error) {
      console.error('Error fetching radar data:', error)
      return [
        { skill: 'Fluency', score: 0 },
        { skill: 'Vocabulary', score: 0 },
        { skill: 'Grammar', score: 0 },
        { skill: 'Pronunciation', score: 0 },
        { skill: 'Coherence', score: 0 },
        { skill: 'Confidence', score: 0 }
      ]
    }
  }

  private calculateStreakDays(sessions: any[]): number {
    if (sessions.length === 0) return 0
    
    const sessionDates = sessions
      .map(s => s.createdAt)
      .filter(date => date)
      .sort((a, b) => b.getTime() - a.getTime())

    if (sessionDates.length === 0) return 0

    const uniqueDates = [...new Set(sessionDates.map(date => date.toDateString()))]
    let streak = 0
    const today = new Date()
    
    for (let i = 0; i < uniqueDates.length; i++) {
      const sessionDate = new Date(uniqueDates[i])
      const daysDiff = Math.floor((today.getTime() - sessionDate.getTime()) / (1000 * 60 * 60 * 24))
      
      if (daysDiff === i) {
        streak++
      } else {
        break
      }
    }
    
    return streak
  }
}

export const progressService = new ProgressService()
export default progressService