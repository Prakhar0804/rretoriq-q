/**
 * AnalysisResults Component
 * 
 * Displays comprehensive interview answer analysis results
 * Shows scores, feedback, and actionable improvements
 */

import React from 'react'
import { 
  Star, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Target, 
  Award,
  Lightbulb,
  MessageSquare,
  BarChart3
} from 'lucide-react'
import type { AnswerAnalysis } from '../services/openAIAnalysisService'

interface AnalysisResultsProps {
  analysis: AnswerAnalysis
  className?: string
}

export const AnalysisResults: React.FC<AnalysisResultsProps> = ({
  analysis,
  className = ''
}) => {
  /**
   * Get color class based on score
   */
  const getScoreColor = (score: number): string => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  /**
   * Get progress bar color based on score
   */
  const getProgressColor = (score: number): string => {
    if (score >= 80) return 'bg-green-500'
    if (score >= 60) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  /**
   * Render score bar component
   */
  const ScoreBar: React.FC<{ label: string; score: number; icon: React.ReactNode }> = ({
    label,
    score,
    icon
  }) => (
    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
      <div className="text-gray-600">{icon}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className={`text-sm font-semibold ${getScoreColor(score)}`}>{score}/100</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(score)}`}
            style={{ width: `${Math.max(score, 5)}%` }}
          />
        </div>
      </div>
    </div>
  )

  /**
   * Format duration for display
   */
  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-xl p-6 ${className}`}>
      {/* Header with Overall Score */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-2xl font-bold mb-4">
          {analysis.overallScore}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Interview Analysis Complete</h2>
        <p className="text-gray-600">
          Your response has been analyzed across multiple criteria
        </p>
      </div>

      {/* Detailed Scores */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2" />
          Detailed Scores
        </h3>
        <div className="space-y-3">
          <ScoreBar 
            label="Clarity & Articulation"
            score={analysis.scores.clarity}
            icon={<MessageSquare className="w-4 h-4" />}
          />
          <ScoreBar 
            label="Relevance to Question"
            score={analysis.scores.relevance}
            icon={<Target className="w-4 h-4" />}
          />
          <ScoreBar 
            label="Structure & Organization"
            score={analysis.scores.structure}
            icon={<TrendingUp className="w-4 h-4" />}
          />
          <ScoreBar 
            label="Completeness"
            score={analysis.scores.completeness}
            icon={<CheckCircle className="w-4 h-4" />}
          />
          <ScoreBar 
            label="Confidence & Delivery"
            score={analysis.scores.confidence}
            icon={<Award className="w-4 h-4" />}
          />
        </div>
      </div>

      {/* Time Management */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Time Management
        </h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Duration</p>
              <p className="text-lg font-semibold text-gray-900">
                {formatDuration(analysis.timeManagement.duration)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Efficiency</p>
              <p className={`text-lg font-semibold capitalize ${
                analysis.timeManagement.efficiency === 'excellent' ? 'text-green-600' :
                analysis.timeManagement.efficiency === 'good' ? 'text-blue-600' :
                analysis.timeManagement.efficiency === 'average' ? 'text-yellow-600' :
                'text-red-600'
              }`}>
                {analysis.timeManagement.efficiency}
              </p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-sm text-gray-700">
              <strong>Pacing:</strong> {analysis.timeManagement.pacing}
            </p>
          </div>
        </div>
      </div>

      {/* Key Points Analysis */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2" />
          Key Points Analysis
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Covered Points */}
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-medium text-green-800 mb-3 flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Points Covered ({analysis.keyPoints.covered.length})
            </h4>
            {analysis.keyPoints.covered.length > 0 ? (
              <ul className="space-y-2">
                {analysis.keyPoints.covered.map((point, index) => (
                  <li key={index} className="text-sm text-green-700 flex items-start">
                    <Star className="w-3 h-3 mt-0.5 mr-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-green-600 italic">No key points identified as covered</p>
            )}
          </div>

          {/* Missed Points */}
          <div className="bg-red-50 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-3 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" />
              Points Missed ({analysis.keyPoints.missed.length})
            </h4>
            {analysis.keyPoints.missed.length > 0 ? (
              <ul className="space-y-2">
                {analysis.keyPoints.missed.map((point, index) => (
                  <li key={index} className="text-sm text-red-700 flex items-start">
                    <AlertCircle className="w-3 h-3 mt-0.5 mr-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-red-600 italic">All key points were addressed!</p>
            )}
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Detailed Feedback</h3>
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <p className="text-gray-700 leading-relaxed">{analysis.feedback.detailedFeedback}</p>
        </div>
      </div>

      {/* Strengths and Weaknesses */}
      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Strengths */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              Strengths
            </h4>
            {analysis.feedback.strengths.length > 0 ? (
              <ul className="space-y-2">
                {analysis.feedback.strengths.map((strength, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {strength}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 italic">No specific strengths identified</p>
            )}
          </div>

          {/* Areas for Improvement */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
              Areas for Improvement
            </h4>
            {analysis.feedback.weaknesses.length > 0 ? (
              <ul className="space-y-2">
                {analysis.feedback.weaknesses.map((weakness, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {weakness}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 italic">No areas for improvement identified</p>
            )}
          </div>
        </div>
      </div>

      {/* Actionable Suggestions */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
          <Lightbulb className="w-5 h-5 mr-2 text-yellow-600" />
          Actionable Suggestions
        </h4>
        {analysis.feedback.suggestions.length > 0 ? (
          <div className="space-y-3">
            {analysis.feedback.suggestions.map((suggestion, index) => (
              <div key={index} className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
                <p className="text-sm text-gray-700">{suggestion}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic">No specific suggestions provided</p>
        )}
      </div>

      {/* Processing Information */}
      <div className="pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Analysis completed in {analysis.processingTime}ms • 
          Transcript: {analysis.transcript.length} characters
        </p>
      </div>
    </div>
  )
}

export default AnalysisResults