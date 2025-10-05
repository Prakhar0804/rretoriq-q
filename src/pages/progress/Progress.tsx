import { useState, useEffect } from 'react'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'
import { 
  TrendingUp, 
  Calendar, 
  Clock, 
  Award, 
  Target, 
  Filter,
  Download,
  Eye,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Loader2
} from 'lucide-react'
import { useAuthStore } from '../../store/authStore'
import { progressService } from '../../services/progressService'

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

export default function Progress() {
  const { user } = useAuthStore()
  const [timeRange, setTimeRange] = useState('week')
  const [viewType, setViewType] = useState('overview')
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<ProgressStats>({
    overallIeltsScore: 0,
    interviewAverage: 0,
    totalPracticeHours: 0,
    streakDays: 0,
    weeklyImprovement: 0,
    interviewImprovement: 0,
    thisWeekHours: 0
  })
  const [recentSessions, setRecentSessions] = useState<SessionData[]>([])
  const [weeklyProgress, setWeeklyProgress] = useState<WeeklyProgressData[]>([])
  const [skillBreakdown, setSkillBreakdown] = useState<SkillData[]>([])
  const [monthlyStats, setMonthlyStats] = useState<MonthlyData[]>([])
  const [performanceRadar, setPerformanceRadar] = useState<RadarData[]>([])

  useEffect(() => {
    const loadProgressData = async () => {
      if (!user) return
      
      setLoading(true)
      try {
        const [statsData, sessionsData, weeklyData, skillsData, monthlyData, radarData] = await Promise.all([
          progressService.getProgressStats(user.id),
          progressService.getRecentSessions(user.id, 10),
          progressService.getWeeklyProgress(user.id),
          progressService.getSkillsBreakdown(user.id),
          progressService.getMonthlyStats(user.id),
          progressService.getRadarData(user.id)
        ])
        
        setStats(statsData)
        setRecentSessions(sessionsData)
        setWeeklyProgress(weeklyData)
        setSkillBreakdown(skillsData)
        setMonthlyStats(monthlyData)
        setPerformanceRadar(radarData)
      } catch (error) {
        console.error('Error loading progress data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProgressData()
  }, [user])

  const formatScore = (score: number, isIELTS: boolean = false) => {
    return isIELTS ? score.toFixed(1) : Math.round(score)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
        <span className="ml-3 text-gray-500 font-medium">Loading progress data...</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-12">
          <div>
            <h1 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2 sm:mb-3">Progress Analytics</h1>
            <p className="text-gray-600 text-sm sm:text-base">Track your communication skills improvement over time</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 sm:px-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-300 focus:border-gray-300 text-xs sm:text-sm font-medium"
            >
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
              <option value="quarter">Last 3 Months</option>
              <option value="year">Last Year</option>
            </select>
            
            <div className="flex gap-1">
              <button
                onClick={() => setViewType('overview')}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  viewType === 'overview' 
                    ? 'bg-black text-white' 
                    : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Overview</span>
              </button>
              <button
                onClick={() => setViewType('detailed')}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  viewType === 'detailed' 
                    ? 'bg-black text-white' 
                    : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <PieChartIcon className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Detailed</span>
              </button>
            </div>
            
            <button className="border border-gray-200 text-gray-700 px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-medium">
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">Overall IELTS Score</p>
                <p className="text-3xl font-light text-gray-900">{stats.overallIeltsScore > 0 ? stats.overallIeltsScore.toFixed(1) : '0.0'}</p>
              </div>
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <div className="flex items-center">
              <TrendingUp className={`w-4 h-4 mr-2 ${stats.weeklyImprovement >= 0 ? 'text-green-600' : 'text-red-500'}`} />
              <span className={`text-sm font-medium ${stats.weeklyImprovement >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                {stats.weeklyImprovement >= 0 ? '+' : ''}{stats.weeklyImprovement.toFixed(1)}% from last week
              </span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">Interview Average</p>
                <p className="text-3xl font-light text-gray-900">{stats.interviewAverage}%</p>
              </div>
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <div className="flex items-center">
              <TrendingUp className={`w-4 h-4 mr-2 ${stats.interviewImprovement >= 0 ? 'text-green-600' : 'text-red-500'}`} />
              <span className={`text-sm font-medium ${stats.interviewImprovement >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                {stats.interviewImprovement >= 0 ? '+' : ''}{stats.interviewImprovement}% improvement
              </span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">Practice Hours</p>
                <p className="text-3xl font-light text-gray-900">{stats.totalPracticeHours}</p>
              </div>
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-gray-600 mr-2" />
              <span className="text-sm font-medium text-gray-600">{stats.thisWeekHours}h this week</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">Streak Days</p>
                <p className="text-3xl font-light text-gray-900">{stats.streakDays}</p>
              </div>
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 text-gray-600 mr-2" />
              <span className="text-sm font-medium text-gray-600">{stats.streakDays > 0 ? 'Keep it up!' : 'Start your streak!'}</span>
            </div>
          </div>
        </div>

        {viewType === 'overview' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Weekly Progress Chart */}
            <div className="border border-gray-200 rounded-xl p-8">
              <h2 className="text-lg font-medium text-gray-900 mb-8">Weekly Performance</h2>
              <div className="h-80">
                {weeklyProgress.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyProgress}>
                      <CartesianGrid strokeDasharray="1 1" stroke="#f3f4f6" />
                      <XAxis 
                        dataKey="date" 
                        tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#6b7280' }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#6b7280' }}
                      />
                      <Tooltip 
                        labelFormatter={(value) => new Date(value).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                        formatter={(value, name) => [
                          name === 'ielts' ? `${value}/9.0` : `${value}%`,
                          name === 'ielts' ? 'IELTS Score' : 'Interview Score'
                        ]}
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          boxShadow: 'none'
                        }}
                      />
                      <Line type="monotone" dataKey="ielts" stroke="#374151" strokeWidth={2} dot={{ fill: '#374151', strokeWidth: 0, r: 4 }} name="ielts" />
                      <Line type="monotone" dataKey="interview" stroke="#6b7280" strokeWidth={2} dot={{ fill: '#6b7280', strokeWidth: 0, r: 4 }} name="interview" />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <p className="text-gray-500 mb-2 font-medium">No practice data available</p>
                      <p className="text-sm text-gray-400">Complete some practice sessions to see your progress</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Skills Radar */}
            <div className="border border-gray-200 rounded-xl p-8">
              <h2 className="text-lg font-medium text-gray-900 mb-8">Performance Radar</h2>
              <div className="h-80">
                {performanceRadar.some(item => item.score > 0) ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={performanceRadar}>
                      <PolarGrid stroke="#f3f4f6" />
                      <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12, fill: '#6b7280' }} />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
                      <Radar
                        name="Current Performance"
                        dataKey="score"
                        stroke="#374151"
                        fill="#f9fafb"
                        fillOpacity={0.6}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <p className="text-gray-500 mb-2 font-medium">No skill analysis available</p>
                      <p className="text-sm text-gray-400">Complete more sessions for detailed skill breakdown</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Monthly Progress */}
            <div className="lg:col-span-2 border border-gray-200 rounded-xl p-8">
              <h2 className="text-lg font-medium text-gray-900 mb-8">Monthly Trends</h2>
              <div className="h-80">
                {monthlyStats.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyStats}>
                      <CartesianGrid strokeDasharray="1 1" stroke="#f3f4f6" />
                      <XAxis 
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#6b7280' }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#6b7280' }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          boxShadow: 'none'
                        }}
                      />
                      <Bar dataKey="sessions" fill="#374151" name="Sessions" />
                      <Bar dataKey="timeSpent" fill="#6b7280" name="Hours Practiced" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <p className="text-gray-500 mb-2 font-medium">No monthly data available</p>
                      <p className="text-sm text-gray-400">Practice regularly to see monthly trends</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Skill Breakdown */}
            <div className="border border-gray-200 rounded-xl p-8">
              <h2 className="text-lg font-medium text-gray-900 mb-8">Skills Progress</h2>
              <div className="space-y-6">
                {skillBreakdown.length > 0 ? (
                  skillBreakdown.map((skill) => (
                    <div key={skill.skill} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                        <span className="text-sm font-medium text-gray-500">{skill.current.toFixed(1)}/9.0</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className="bg-gray-700 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(5, (skill.current / 9.0) * 100)}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Target: {skill.target}</span>
                        <span className={`font-medium ${skill.improvement >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                          {skill.improvement >= 0 ? '+' : ''}{skill.improvement.toFixed(1)} this month
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>No skill data available</p>
                    <p className="text-sm text-gray-400 mt-1">Complete practice sessions to see skill breakdown</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Recent Sessions */}
        <div className="border border-gray-200 rounded-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-medium text-gray-900">Recent Practice Sessions</h2>
            <div className="flex items-center space-x-3">
              <Filter className="w-4 h-4 text-gray-400" />
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:border-gray-400 focus:ring-0">
                <option>All Types</option>
                <option>IELTS Only</option>
                <option>Interviews Only</option>
              </select>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 px-0 font-medium text-gray-600 text-sm">Session Type</th>
                  <th className="text-left py-4 px-0 font-medium text-gray-600 text-sm">Date</th>
                  <th className="text-left py-4 px-0 font-medium text-gray-600 text-sm">Score</th>
                  <th className="text-left py-4 px-0 font-medium text-gray-600 text-sm">Duration</th>
                  <th className="text-left py-4 px-0 font-medium text-gray-600 text-sm">Improvement</th>
                  <th className="text-left py-4 px-0 font-medium text-gray-600 text-sm">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentSessions.length > 0 ? (
                  recentSessions.map((session) => (
                    <tr key={session.id} className="hover:bg-gray-25">
                      <td className="py-4 px-0">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                            <Activity className="w-4 h-4 text-gray-600" />
                          </div>
                          <span className="font-medium text-gray-900">{session.type}</span>
                        </div>
                      </td>
                      <td className="py-4 px-0 text-sm text-gray-600">
                        {new Date(session.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric'
                        })}
                      </td>
                      <td className="py-4 px-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200">
                          {formatScore(session.score, session.type.includes('IELTS'))}
                          {session.type.includes('IELTS') ? '/9.0' : '%'}
                        </span>
                      </td>
                      <td className="py-4 px-0 text-sm text-gray-600">{session.duration}</td>
                      <td className="py-4 px-0">
                        <span className="text-gray-700 font-medium text-sm">{session.improvement}</span>
                      </td>
                      <td className="py-4 px-0">
                        <button className="text-gray-700 hover:text-black text-sm font-medium flex items-center space-x-2 transition-colors">
                          <Eye className="w-4 h-4" />
                          <span>Review</span>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-gray-500">
                      <div className="flex flex-col items-center">
                        <Activity className="w-8 h-8 text-gray-300 mb-3" />
                        <p className="font-medium">No practice sessions found</p>
                        <p className="text-sm text-gray-400 mt-1">Start practicing to see your progress here</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}