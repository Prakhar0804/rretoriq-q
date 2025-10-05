import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { dashboardService } from '../../services/dashboardService'
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
  Sparkles
} from 'lucide-react'

interface DashboardStats {
  totalSessions: number
  averageScore: number
  totalPracticeTime: number
  achievementsCount: number
}

export default function Dashboard() {
  const { user } = useAuthStore()
  const [loading, setLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState<DashboardStats>({
    totalSessions: 0,
    averageScore: 0,
    totalPracticeTime: 0,
    achievementsCount: 0
  })

  useEffect(() => {
    const loadDashboardData = async () => {
      setLoading(true)
      try {
        if (user) {
          const userStats = await dashboardService.getUserStats(user.id)
          setDashboardData(userStats)
        }
      } catch (error) {
        console.error('Error loading dashboard data:', error)
        // Use mock data on error
        setDashboardData({
          totalSessions: 24,
          averageScore: 87.5,
          totalPracticeTime: 2400,
          achievementsCount: 12
        })
      } finally {
        setTimeout(() => setLoading(false), 800) // Smooth loading experience
      }
    }

    loadDashboardData()
  }, [user])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-gray-400" />
          <p className="text-sm text-gray-500 font-medium">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header Section - Sana.ai inspired */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Welcome back, {(user as any)?.displayName || (user as any)?.firstName || 'User'}
          </h1>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">Here's your learning progress overview</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center">
          <Plus className="w-4 h-4" />
          New Session
        </button>
      </div>

      {/* Stats Grid - Clean and minimalistic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Total Sessions Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
              +12%
            </span>
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-900 mb-1">{dashboardData.totalSessions}</p>
            <p className="text-sm text-gray-600">Total Sessions</p>
          </div>
        </div>

        {/* Average Score Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
              +8%
            </span>
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-900 mb-1">{dashboardData.averageScore}%</p>
            <p className="text-sm text-gray-600">Average Score</p>
          </div>
        </div>

        {/* Study Time Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
              +15%
            </span>
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-900 mb-1">{Math.round(dashboardData.totalPracticeTime / 60)}h</p>
            <p className="text-sm text-gray-600">Study Time</p>
          </div>
        </div>

        {/* Achievements Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-amber-600" />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
              +3
            </span>
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-900 mb-1">{dashboardData.achievementsCount}</p>
            <p className="text-sm text-gray-600">Achievements</p>
          </div>
        </div>
      </div>

      {/* Quick Actions - Sana.ai inspired card layout */}
      <div>
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* IELTS Practice Card */}
          <Link 
            to="/ielts"
            className="group bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:border-blue-200 hover:shadow-sm transition-all"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-600 transition-colors">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">IELTS Practice</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              Improve your English skills with AI-powered feedback and personalized coaching sessions.
            </p>
            <div className="flex items-center text-blue-600 font-medium text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
              Start Practice
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
            </div>
          </Link>

          {/* Interview Practice Card */}
          <Link 
            to="/interview"
            className="group bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:border-emerald-200 hover:shadow-sm transition-all"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-emerald-600 transition-colors">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Interview Practice</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              Prepare for job interviews with mock sessions, real-time feedback, and expert tips.
            </p>
            <div className="flex items-center text-emerald-600 font-medium text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
              Start Interview
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
            </div>
          </Link>

          {/* Progress Analytics Card */}
          <Link 
            to="/progress"
            className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-purple-200 hover:shadow-sm transition-all"
          >
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
              <BarChart3 className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">View Progress</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Track your improvement with detailed analytics, insights, and performance metrics.
            </p>
            <div className="flex items-center text-purple-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
              View Analytics
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Completed IELTS Speaking Practice</p>
                  <p className="text-xs text-gray-500">Score: 8.5/9.0 • 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center text-xs text-green-600 font-medium">
                <TrendingUp className="w-3 h-3 mr-1" />
                +0.5
              </div>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Mock Interview Session</p>
                  <p className="text-xs text-gray-500">Technical Interview • Yesterday</p>
                </div>
              </div>
              <div className="flex items-center text-xs text-blue-600 font-medium">
                <Activity className="w-3 h-3 mr-1" />
                85%
              </div>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Achievement Unlocked</p>
                  <p className="text-xs text-gray-500">First Perfect Score • 2 days ago</p>
                </div>
              </div>
              <div className="flex items-center text-xs text-amber-600 font-medium">
                <Sparkles className="w-3 h-3 mr-1" />
                New
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}