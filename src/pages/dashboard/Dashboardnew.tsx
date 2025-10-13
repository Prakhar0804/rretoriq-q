import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { dashboardService } from '../../services/dashboardService'
import { getInstitution } from '../../services/adminService'
import { 
  BookOpen, 
  Briefcase, 
  BarChart3, 
  Clock, 
  Target, 
  Award, 
  Plus, 
  ArrowUpRight, 
  Loader2,
  TrendingUp,
  Activity,
  Sparkles,
  Users,
  Building2
} from 'lucide-react'

interface DashboardStats {
  totalSessions: number
  averageScore: number
  totalPracticeTime: number
  achievementsCount: number
}

interface InstitutionStats extends DashboardStats {
  totalStudents: number
  activeStudents: number
  institutionName: string
}

export default function Dashboard() {
  const { user } = useAuthStore()
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [dashboardData, setDashboardData] = useState<DashboardStats>({
    totalSessions: 0,
    averageScore: 0,
    totalPracticeTime: 0,
    achievementsCount: 0
  })
  const [institutionData, setInstitutionData] = useState<InstitutionStats | null>(null)

  useEffect(() => {
    const loadDashboardData = async () => {
      setLoading(true)
      try {
        if (user) {
          // Check if user is admin
          const userIsAdmin = (user as any)?.admin === true
          console.log('🔍 Dashboard: Checking admin status', { 
            userIsAdmin, 
            user: user,
            adminField: (user as any)?.admin 
          })
          setIsAdmin(userIsAdmin)

          if (userIsAdmin) {
            // Load institution-wide stats
            console.log('👑 User is admin, loading institution data...')
            try {
              console.log('📡 Fetching institution for user ID:', (user as any).id)
              const institutionInfo = await getInstitution((user as any).id)
              console.log('📊 Institution data received:', institutionInfo)
              
              if (institutionInfo.hasInstitution && institutionInfo.institution && institutionInfo.studentDetails) {
                console.log('✅ Institution found with students:', institutionInfo.studentDetails.length)
                // Calculate aggregated stats from all students
                let totalSessions = 0
                let totalScore = 0
                let totalPracticeTime = 0
                let totalAchievements = 0
                let studentsWithSessions = 0

                for (const student of institutionInfo.studentDetails) {
                  // Use the id field from the student object
                  const studentId = (student as any).id
                  console.log('📈 Loading stats for student:', studentId, student)
                  if (studentId) {
                    const stats = await dashboardService.getUserStats(studentId)
                    console.log('  Stats:', stats)
                    totalSessions += stats.totalSessions
                    if (stats.totalSessions > 0) {
                      totalScore += stats.averageScore
                      studentsWithSessions++
                    }
                    totalPracticeTime += stats.totalPracticeTime
                    totalAchievements += stats.achievementsCount
                  }
                }

                const aggregatedData = {
                  totalStudents: institutionInfo.studentDetails.length,
                  activeStudents: studentsWithSessions,
                  institutionName: institutionInfo.institution.institutionName || 'Your Institution',
                  totalSessions,
                  averageScore: studentsWithSessions > 0 ? totalScore / studentsWithSessions : 0,
                  totalPracticeTime,
                  achievementsCount: totalAchievements
                }
                console.log('🎯 Final aggregated data:', aggregatedData)
                setInstitutionData(aggregatedData)
              } else {
                console.warn('⚠️ No institution found - admin needs to create institution first')
                // Admin has no institution yet - show personal stats as fallback
                const userStats = await dashboardService.getUserStats(user.id)
                console.log('📊 Showing personal stats instead:', userStats)
                setDashboardData(userStats)
              }
            } catch (error) {
              console.error('❌ Error loading institution stats:', error)
              // Fallback to personal stats on error
              const userStats = await dashboardService.getUserStats(user.id)
              setDashboardData(userStats)
            }
          } else {
            console.log('👤 Regular user, loading personal stats...')
            // Load personal stats for regular users
            const userStats = await dashboardService.getUserStats(user.id)
            console.log('📊 Personal stats:', userStats)
            setDashboardData(userStats)
          }
        }
      } catch (error) {
        console.error('Error loading dashboard data:', error)
        // Use mock data on error
        setDashboardData({
          totalSessions: 0,
          averageScore: 0,
          totalPracticeTime: 0,
          achievementsCount: 0
        })
      } finally {
        setTimeout(() => setLoading(false), 800) // Smooth loading experience
      }
    }

    loadDashboardData()
  }, [user])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-purple-600" />
          <p className="text-sm text-gray-600 font-medium">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  // Use institution data if admin, otherwise personal data
  const displayData = isAdmin && institutionData ? institutionData : dashboardData

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pb-12">
      <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
      {/* Admin Institution Banner */}
      {isAdmin && institutionData && (
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{institutionData.institutionName}</h2>
                <p className="text-blue-100 text-sm mt-1">Institution Dashboard - Aggregated Student Statistics</p>
              </div>
            </div>
            <Link 
              to="/admin/dashboard"
              className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors"
            >
              Manage Institution
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 text-blue-100 text-sm mb-1">
                <Users className="w-4 h-4" />
                Total Students
              </div>
              <p className="text-2xl font-semibold">{institutionData.totalStudents}</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 text-blue-100 text-sm mb-1">
                <Activity className="w-4 h-4" />
                Active Students
              </div>
              <p className="text-2xl font-semibold">{institutionData.activeStudents}</p>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            {isAdmin && institutionData 
              ? `${institutionData.institutionName} Overview` 
              : `Welcome back, ${(user as any)?.displayName || (user as any)?.firstName || 'User'}`
            }
          </h1>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">
            {isAdmin && institutionData 
              ? 'Aggregated statistics from all students in your institution' 
              : "Here's your learning progress overview"
            }
          </p>
        </div>
        {!isAdmin && (
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center">
            <Plus className="w-4 h-4" />
            New Session
          </button>
        )}
      </div>

      {/* Stats Grid - Colorful and vibrant */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Total Sessions Card */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white hover:shadow-lg transition-all hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Target className="w-5 h-5 text-white" />
            </div>
          </div>
          <h3 className="text-white/80 text-sm font-medium mb-1">Total Sessions</h3>
          <p className="text-3xl font-bold">{displayData.totalSessions}</p>
          <p className="text-white/70 text-xs mt-2">All completed practice sessions</p>
        </div>

        {/* Average Score Card */}
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white hover:shadow-lg transition-all hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
          </div>
          <h3 className="text-white/80 text-sm font-medium mb-1">Average Score</h3>
          <p className="text-3xl font-bold">{displayData.averageScore.toFixed(1)}</p>
          <p className="text-white/70 text-xs mt-2">Across all practice areas</p>
        </div>

        {/* Practice Time Card */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white hover:shadow-lg transition-all hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Clock className="w-5 h-5 text-white" />
            </div>
          </div>
          <h3 className="text-white/80 text-sm font-medium mb-1">Practice Time</h3>
          <p className="text-3xl font-bold">{Math.floor(displayData.totalPracticeTime / 3600)}h</p>
          <p className="text-white/70 text-xs mt-2">Total learning hours</p>
        </div>

        {/* Achievements Card */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white hover:shadow-lg transition-all hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Award className="w-5 h-5 text-white" />
            </div>
          </div>
          <h3 className="text-white/80 text-sm font-medium mb-1">Achievements</h3>
          <p className="text-3xl font-bold">{displayData.achievementsCount}</p>
          <p className="text-white/70 text-xs mt-2">Milestones unlocked</p>
        </div>
      </div>

      {/* Quick Actions - Sana.ai inspired card layout - Hidden for admins */}
      {!isAdmin && (
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Let's Communicate Card */}
          <Link 
            to="/ielts"
            className="group bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">Let's Communicate</h3>
            <p className="text-sm text-blue-100 mb-4 leading-relaxed">
              Improve your communication skills with AI-powered feedback and personalized coaching sessions.
            </p>
            <div className="flex items-center text-white font-medium text-sm group-hover:translate-x-1 transition-transform">
              Start Practice
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </div>
          </Link>

          {/* Interview Practice Card */}
          <Link 
            to="/interview"
            className="group bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">Interview Practice</h3>
            <p className="text-sm text-emerald-100 mb-4 leading-relaxed">
              Prepare for job interviews with mock sessions, real-time feedback, and expert tips.
            </p>
            <div className="flex items-center text-white font-medium text-sm group-hover:translate-x-1 transition-transform">
              Start Interview
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </div>
          </Link>

          {/* Progress Analytics Card */}
          <Link 
            to="/progress"
            className="group bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">View Progress</h3>
            <p className="text-sm text-purple-100 mb-4 leading-relaxed">
              Track your improvement with detailed analytics, insights, and performance metrics.
            </p>
            <div className="flex items-center text-white font-medium text-sm group-hover:translate-x-1 transition-transform">
              View Analytics
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </div>
          </Link>
        </div>
      </div>
      )}

      {/* Recent Activity Section - Hidden for admins */}
      {!isAdmin && (
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-purple-100 shadow-lg p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-purple-50 last:border-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Completed IELTS Speaking Practice</p>
                  <p className="text-xs text-gray-500">Score: 8.5/9.0 • 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded-full">
                <TrendingUp className="w-3 h-3 mr-1" />
                +0.5
              </div>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-purple-50 last:border-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Mock Interview Session</p>
                  <p className="text-xs text-gray-500">Technical Interview • Yesterday</p>
                </div>
              </div>
              <div className="flex items-center text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
                <Activity className="w-3 h-3 mr-1" />
                85%
              </div>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-purple-50 last:border-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-sm">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Achievement Unlocked</p>
                  <p className="text-xs text-gray-500">First Perfect Score • 2 days ago</p>
                </div>
              </div>
              <div className="flex items-center text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded-full">
                <Sparkles className="w-3 h-3 mr-1" />
                New
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      </div>
    </div>
  )
}