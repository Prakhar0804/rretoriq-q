import React from 'react'
import { Eye, Sparkles, Video, Camera, Monitor } from 'lucide-react'

const GlimpsePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="flex items-center justify-center min-h-screen py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon and Animation */}
          <div className="mb-8">
            <div className="relative inline-flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <Eye className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -left-2">
                <Video className="w-6 h-6 text-purple-500 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            Glimpse
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
              Coming Soon
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-lg mx-auto">
            Get a sneak peek into your communication skills with AI-powered video analysis and real-time feedback.
          </p>

          {/* Features Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-200/50 shadow-sm">
              <Camera className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-neutral-900 mb-2">Video Analysis</h3>
              <p className="text-sm text-neutral-600">AI-powered body language and expression analysis</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-200/50 shadow-sm">
              <Monitor className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold text-neutral-900 mb-2">Real-time Feedback</h3>
              <p className="text-sm text-neutral-600">Instant insights on your communication style</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-200/50 shadow-sm">
              <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-neutral-900 mb-2">Smart Insights</h3>
              <p className="text-sm text-neutral-600">Personalized recommendations for improvement</p>
            </div>
          </div>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-6 py-3 rounded-full border border-blue-200">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Launching Q2 2025</span>
          </div>

          {/* Notification Signup */}
          <div className="mt-10 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-neutral-200/50">
            <h4 className="font-semibold text-neutral-900 mb-3">Get notified when we launch</h4>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-neutral-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Notify Me
              </button>
            </div>
            <p className="text-xs text-neutral-500 mt-3">
              Be among the first to experience AI-powered communication insights
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlimpsePage