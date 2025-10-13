/**
 * Enhanced InterviewSession Component
 * 
 * Integrates AudioRecorder, AnalysisResults, Firebase session storage,
 * Speech-to-Text, and OpenAI analysis services for complete interview practice
 */

import React, { useState, useEffect } from 'react'
import { Clock, SkipForward, CheckCircle, ArrowRight, Home, RotateCcw, Loader2 } from 'lucide-react'
import AudioRecorder from './AudioRecorder'
import AnalysisResults from './AnalysisResults'
import type { AnswerAnalysis, InterviewQuestion } from '../services/openAIAnalysisService'
import type { TranscriptionResult } from '../services/speechToTextService'
import type { Question } from '../types/questions'
import { firebaseSessionService } from '../services/firebaseSessionService'

interface EnhancedInterviewSessionProps {
  questions: Question[]
  sessionType: 'hr' | 'technical' | 'aptitude' | 'mixed'
  userId: string
  onSessionComplete: (sessionId: string, results: SessionResults) => void
  onSessionExit: () => void
}

interface SessionResults {
  totalQuestions: number
  completedQuestions: number
  averageScore: number
  totalDuration: number
  analyses: AnswerAnalysis[]
  sessionType: string
}

interface SessionState {
  currentQuestionIndex: number
  isComplete: boolean
  startTime: number
  analyses: AnswerAnalysis[]
  transcriptions: TranscriptionResult[]
  isSaving: boolean
  saveError: string | null
}

export const EnhancedInterviewSession: React.FC<EnhancedInterviewSessionProps> = ({
  questions,
  sessionType,
  userId,
  onSessionComplete,
  onSessionExit
}) => {
  const [sessionState, setSessionState] = useState<SessionState>({
    currentQuestionIndex: 0,
    isComplete: false,
    startTime: Date.now(),
    analyses: [],
    transcriptions: [],
    isSaving: false,
    saveError: null
  })

  const [currentAnalysis, setCurrentAnalysis] = useState<AnswerAnalysis | null>(null)
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [sessionId] = useState(() => `session_${Date.now()}_${userId}`)
  const [firebaseSessionId, setFirebaseSessionId] = useState<string | null>(null)

  // Initialize Firebase session on mount
  useEffect(() => {
    const initializeSession = async () => {
      try {
        const fbSessionId = await firebaseSessionService.createSession(
          userId,
          'interview',
          sessionType
        )
        setFirebaseSessionId(fbSessionId)
        console.log('✅ Firebase session initialized:', fbSessionId)
      } catch (error) {
        console.error('❌ Failed to initialize Firebase session:', error)
        setSessionState(prev => ({
          ...prev,
          saveError: 'Failed to initialize session. Your progress may not be saved.'
        }))
      }
    }

    initializeSession()
  }, [userId, sessionType])

  // Convert Question to InterviewQuestion format
  const convertToInterviewQuestion = (question: Question): InterviewQuestion => ({
    id: question.id,
    question: question.text,
    type: question.type.toLowerCase() as any || 'behavioral',
    difficulty: (question.difficulty?.toLowerCase() as 'easy' | 'medium' | 'hard') || 'medium',
    skills: question.skillsEvaluated || [],
    expectedDuration: 120,
    category: question.category || 'General'
  })

  const currentQuestion = questions[sessionState.currentQuestionIndex]
  const isLastQuestion = sessionState.currentQuestionIndex === questions.length - 1

  /**
   * Handle analysis completion for current question
   * Saves answer and analysis to Firebase
   */
  const handleAnalysisComplete = async (analysis: AnswerAnalysis) => {
    setCurrentAnalysis(analysis)
    setShowAnalysis(true)
    
    // Update session state with new analysis
    setSessionState(prev => ({
      ...prev,
      analyses: [...prev.analyses, analysis]
    }))

    // Save to Firebase
    if (firebaseSessionId) {
      setSessionState(prev => ({ ...prev, isSaving: true, saveError: null }))
      
      try {
        const transcription = sessionState.transcriptions[sessionState.transcriptions.length - 1]
        
        await firebaseSessionService.saveAnswer(firebaseSessionId, {
          questionId: currentQuestion.id,
          questionText: currentQuestion.text,
          questionType: currentQuestion.type,
          difficulty: currentQuestion.difficulty || 'medium',
          transcription: transcription || {
            transcript: analysis.transcript,
            confidence: 0,
            success: true,
            processingTime: 0
          },
          analysis,
          audioDuration: analysis.timeManagement.duration
        })
        
        console.log('✅ Answer saved to Firebase')
        setSessionState(prev => ({ ...prev, isSaving: false }))
        
      } catch (error) {
        console.error('❌ Failed to save answer to Firebase:', error)
        setSessionState(prev => ({
          ...prev,
          isSaving: false,
          saveError: 'Failed to save your answer. Please check your connection.'
        }))
      }
    }
  }

  /**
   * Handle transcription completion
   */
  const handleTranscriptionComplete = (result: TranscriptionResult) => {
    setSessionState(prev => ({
      ...prev,
      transcriptions: [...prev.transcriptions, result]
    }))
  }

  /**
   * Move to next question or complete session
   */
  const handleNextQuestion = () => {
    if (isLastQuestion) {
      completeSession()
    } else {
      setSessionState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }))
      setCurrentAnalysis(null)
      setShowAnalysis(false)
    }
  }

  /**
   * Skip current question without recording
   */
  const handleSkipQuestion = () => {
    // Create a placeholder analysis for skipped question
    const skippedAnalysis: AnswerAnalysis = {
      overallScore: 0,
      transcript: '',
      feedback: {
        strengths: [],
        weaknesses: ['Question was skipped'],
        suggestions: ['Consider attempting all questions in a real interview'],
        detailedFeedback: 'This question was skipped during the practice session.'
      },
      scores: {
        clarity: 0,
        relevance: 0,
        structure: 0,
        completeness: 0,
        confidence: 0
      },
      keyPoints: {
        covered: [],
        missed: ['All key points - question not attempted']
      },
      timeManagement: {
        duration: 0,
        efficiency: 'poor',
        pacing: 'Question skipped'
      },
      processingTime: 0
    }

    setCurrentAnalysis(skippedAnalysis)
    setShowAnalysis(true)
    
    setSessionState(prev => ({
      ...prev,
      analyses: [...prev.analyses, skippedAnalysis]
    }))
  }

  /**
   * Complete the entire interview session
   * Saves final results to Firebase and updates user progress
   */
  const completeSession = async () => {
    const totalDuration = Math.floor((Date.now() - sessionState.startTime) / 1000)
    const completedQuestions = sessionState.analyses.length
    const averageScore = completedQuestions > 0 
      ? Math.round(sessionState.analyses.reduce((sum, analysis) => sum + analysis.overallScore, 0) / completedQuestions)
      : 0

    const results: SessionResults = {
      totalQuestions: questions.length,
      completedQuestions,
      averageScore,
      totalDuration,
      analyses: sessionState.analyses,
      sessionType
    }

    // Save to Firebase
    if (firebaseSessionId) {
      setSessionState(prev => ({ ...prev, isSaving: true }))
      
      try {
        await firebaseSessionService.completeSession(firebaseSessionId, results)
        console.log('✅ Session completed and saved to Firebase')
      } catch (error) {
        console.error('❌ Failed to complete session in Firebase:', error)
        setSessionState(prev => ({
          ...prev,
          saveError: 'Failed to save final results. Your progress may not be fully saved.'
        }))
      } finally {
        setSessionState(prev => ({ ...prev, isSaving: false }))
      }
    }

    setSessionState(prev => ({ ...prev, isComplete: true }))
    onSessionComplete(sessionId, results)
  }

  /**
   * Format session time
   */
  const formatSessionTime = (): string => {
    const elapsed = Math.floor((Date.now() - sessionState.startTime) / 1000)
    const minutes = Math.floor(elapsed / 60)
    const seconds = elapsed % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // Show completion screen
  if (sessionState.isComplete) {
    const averageScore = sessionState.analyses.length > 0
      ? Math.round(sessionState.analyses.reduce((sum, analysis) => sum + analysis.overallScore, 0) / sessionState.analyses.length)
      : 0

    return (
      <div className="min-h-screen bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Interview Session Complete!</h1>
            <p className="text-gray-600">
              You've completed {sessionState.analyses.length} out of {questions.length} questions
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Session Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">{averageScore}</div>
                <div className="text-sm text-gray-600">Average Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">{sessionState.analyses.length}</div>
                <div className="text-sm text-gray-600">Questions Answered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">{formatSessionTime()}</div>
                <div className="text-sm text-gray-600">Total Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 capitalize">{sessionType}</div>
                <div className="text-sm text-gray-600">Session Type</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => window.location.href = '/ai-interview'}
              className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Practice Again</span>
            </button>
            <button
              onClick={onSessionExit}
              className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Session Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={onSessionExit}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                ← Back
              </button>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-mono">{formatSessionTime()}</span>
              </div>
              
              {/* Save Status Indicator */}
              {sessionState.isSaving && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Saving...</span>
                </div>
              )}
              
              {sessionState.saveError && (
                <div className="text-sm text-red-600">
                  ⚠️ {sessionState.saveError}
                </div>
              )}
            </div>
            <div className="text-sm text-gray-600">
              Question {sessionState.currentQuestionIndex + 1} of {questions.length}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((sessionState.currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Question Panel */}
          <div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
              <div className="mb-4">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full mb-2">
                  {currentQuestion.category || sessionType.toUpperCase()}
                </span>
                {currentQuestion.difficulty && (
                  <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ml-2 ${
                    currentQuestion.difficulty?.toLowerCase() === 'easy' ? 'bg-green-100 text-green-800' :
                    currentQuestion.difficulty?.toLowerCase() === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {currentQuestion.difficulty}
                  </span>
                )}
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {currentQuestion.text}
              </h2>
              


              {currentQuestion.skillsEvaluated && currentQuestion.skillsEvaluated.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Skills evaluated:</p>
                  <div className="flex flex-wrap gap-2">
                    {currentQuestion.skillsEvaluated.map((skill, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-600">
                  Recommended time: {Math.floor((currentQuestion.metadata?.expectedAnswerLength || 120) / 60)} minutes
                </span>
                <button
                  onClick={handleSkipQuestion}
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center space-x-1"
                >
                  <SkipForward className="w-4 h-4" />
                  <span>Skip Question</span>
                </button>
              </div>
            </div>

            {/* Audio Recorder */}
            <AudioRecorder
              key={`question-${sessionState.currentQuestionIndex}`}
              question={convertToInterviewQuestion(currentQuestion)}
              onAnalysisComplete={handleAnalysisComplete}
              onTranscriptionComplete={handleTranscriptionComplete}
              maxDuration={currentQuestion.metadata?.expectedAnswerLength || 300}
              className="mb-6"
            />
          </div>

          {/* Results Panel */}
          <div>
            {showAnalysis && currentAnalysis ? (
              <div>
                <AnalysisResults analysis={currentAnalysis} className="mb-6" />
                
                {/* Navigation */}
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      setShowAnalysis(false)
                      setCurrentAnalysis(null)
                    }}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Record Again
                  </button>
                  
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <span>{isLastQuestion ? 'Complete Session' : 'Next Question'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Record</h3>
                  <p className="text-gray-600 text-sm">
                    Record your answer using the audio recorder on the left. 
                    Your response will be analyzed in real-time for detailed feedback.
                  </p>
                </div>
                
                <div className="text-xs text-gray-500">
                  <p>• Speak clearly and at a comfortable pace</p>
                  <p>• Structure your answer with clear points</p>
                  <p>• Use specific examples when possible</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnhancedInterviewSession