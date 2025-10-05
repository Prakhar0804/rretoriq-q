import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Play, 
  Square, 
  Mic, 
  Clock,
  BookOpen,
  CheckCircle,
  XCircle,
  PenTool,
  MessageSquare,
  Headphones
} from 'lucide-react'

interface Question {
  id: number
  type: 'speaking' | 'listening' | 'reading' | 'writing'
  part: number
  question: string
  context?: string
  options?: string[]
  audioUrl?: string
  timeLimit: number
  instructions: string
}

const mockQuestions: Question[] = [
  {
    id: 1,
    type: 'speaking',
    part: 1,
    question: "What is your full name?",
    timeLimit: 30,
    instructions: "Introduce yourself clearly and speak for about 10-20 seconds."
  },
  {
    id: 2,
    type: 'speaking',
    part: 1,
    question: "Where are you from?",
    timeLimit: 45,
    instructions: "Describe your hometown or country briefly."
  },
  {
    id: 3,
    type: 'speaking',
    part: 2,
    question: "Describe a memorable trip you have taken.",
    context: "You should say:\n• Where you went\n• When you went there\n• Who you went with\n• And explain why it was memorable",
    timeLimit: 120,
    instructions: "You have 1 minute to prepare and then speak for 1-2 minutes."
  }
]

export default function IELTSPractice() {
  const navigate = useNavigate()
  const [selectedType, setSelectedType] = useState<'speaking' | 'listening' | 'reading' | 'writing'>('speaking')
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [isPreparing, setIsPreparing] = useState(false)
  const [preparationTime, setPreparationTime] = useState(0)
  const [responses, setResponses] = useState<{ [key: number]: string }>({})
  const [sessionStarted, setSessionStarted] = useState(false)
  const [sessionComplete, setSessionComplete] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])

  const skillTypes = [
    {
      type: 'speaking' as const,
      title: 'Speaking',
      icon: <Mic className="w-6 h-6" />,
      description: 'Practice speaking skills with real-time recording',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      type: 'listening' as const,
      title: 'Listening',
      icon: <Headphones className="w-6 h-6" />,
      description: 'Improve listening comprehension with audio exercises',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      type: 'reading' as const,
      title: 'Reading',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Enhance reading skills with comprehension tasks',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    },
    {
      type: 'writing' as const,
      title: 'Writing',
      icon: <PenTool className="w-6 h-6" />,
      description: 'Develop writing abilities with structured tasks',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    }
  ]

  // Timer effects
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRecording && recordingTime < (currentQuestion?.timeLimit || 0)) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1)
      }, 1000)
    } else if (isRecording && recordingTime >= (currentQuestion?.timeLimit || 0)) {
      stopRecording()
    }
    return () => clearInterval(interval)
  }, [isRecording, recordingTime, currentQuestion])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPreparing && preparationTime > 0) {
      interval = setInterval(() => {
        setPreparationTime(prev => {
          if (prev <= 1) {
            setIsPreparing(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPreparing, preparationTime])

  const startSession = (type: 'speaking' | 'listening' | 'reading' | 'writing') => {
    setSelectedType(type)
    setSessionStarted(true)
    const questions = mockQuestions.filter(q => q.type === type)
    if (questions.length > 0) {
      setCurrentQuestion(questions[0])
      if (type === 'speaking' && questions[0].part === 2) {
        setIsPreparing(true)
        setPreparationTime(60)
      }
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorder.start()
      setIsRecording(true)
      setRecordingTime(0)
    } catch (error) {
      console.error('Error accessing microphone:', error)
      alert('Unable to access microphone. Please check permissions.')
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
      setIsRecording(false)
      
      // Save response (in real app, would upload audio)
      if (currentQuestion) {
        setResponses(prev => ({
          ...prev,
          [currentQuestion.id]: `Audio response recorded (${recordingTime}s)`
        }))
      }
    }
  }

  const nextQuestion = () => {
    const questions = mockQuestions.filter(q => q.type === selectedType)
    const currentIndex = questions.findIndex(q => q.id === currentQuestion?.id)
    
    if (currentIndex < questions.length - 1) {
      const nextQ = questions[currentIndex + 1]
      setCurrentQuestion(nextQ)
      setRecordingTime(0)
      setIsPreparing(false)
      setPreparationTime(0)
      
      if (selectedType === 'speaking' && nextQ.part === 2) {
        setIsPreparing(true)
        setPreparationTime(60)
      }
    } else {
      setSessionComplete(true)
    }
  }

  const resetSession = () => {
    setSessionStarted(false)
    setSessionComplete(false)
    setCurrentQuestion(null)
    setIsRecording(false)
    setRecordingTime(0)
    setIsPreparing(false)
    setPreparationTime(0)
    setResponses({})
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (sessionComplete) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CheckCircle className="w-12 h-12 text-gray-600 mx-auto mb-6" />
            <h1 className="text-2xl font-light text-gray-900 mb-3">Session Complete!</h1>
            <p className="text-gray-600">Great job completing your IELTS {selectedType} practice session.</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-10 mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-8">Session Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <p className="text-2xl font-light text-gray-900">{Object.keys(responses).length}</p>
                <p className="text-sm text-gray-600 mt-2">Questions Answered</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <p className="text-2xl font-light text-gray-900">8.5</p>
                <p className="text-sm text-gray-600 mt-2">Estimated Score</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <p className="text-2xl font-light text-gray-900">{formatTime(Object.keys(responses).length * 45)}</p>
                <p className="text-sm text-gray-600 mt-2">Total Time</p>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <h3 className="font-medium text-gray-900">Feedback & Recommendations</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-800 text-sm leading-relaxed"><span className="font-medium">Strengths:</span> Clear pronunciation, good vocabulary range, well-structured responses.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-800 text-sm leading-relaxed"><span className="font-medium">Areas for Improvement:</span> Work on fluency in longer responses, use more varied sentence structures.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={resetSession}
                className="flex-1 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Practice Again
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="flex-1 border border-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-300 transition-colors font-medium"
              >
                Back to Dashboard
              </button>
              <button
                onClick={() => navigate('/progress')}
                className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                View Progress
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (sessionStarted && currentQuestion) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="border border-gray-200 rounded-xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-medium text-gray-900">
                IELTS {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} - Part {currentQuestion.part}
              </h1>
              <button
                onClick={resetSession}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Time Limit: {formatTime(currentQuestion.timeLimit)}</span>
              </div>
              {isRecording && (
                <div className="flex items-center space-x-2 text-gray-900">
                  <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse" />
                  <span className="font-medium">Recording: {formatTime(recordingTime)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Preparation Phase */}
          {isPreparing && (
            <div className="border border-gray-200 rounded-xl p-10 mb-8 text-center">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Preparation Time</h2>
              <div className="text-4xl font-light text-gray-900 mb-6">{formatTime(preparationTime)}</div>
              <p className="text-sm text-gray-600">Use this time to prepare your response. You can take notes if needed.</p>
            </div>
          )}

          {/* Question */}
          <div className="border border-gray-200 rounded-xl p-8 mb-8">
            <div className="mb-8">
              <h2 className="text-sm font-medium text-gray-600 mb-3">Instructions</h2>
              <p className="text-gray-700 leading-relaxed">{currentQuestion.instructions}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Question</h2>
              <p className="text-base text-gray-800 mb-4 leading-relaxed">{currentQuestion.question}</p>
              
              {currentQuestion.context && (
                <div className="bg-gray-50 border-l-2 border-gray-200 p-4 rounded">
                  <pre className="text-gray-700 whitespace-pre-wrap text-sm">{currentQuestion.context}</pre>
                </div>
              )}
            </div>

            {/* Recording Controls */}
            {selectedType === 'speaking' && !isPreparing && (
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center space-x-4">
                  {!isRecording ? (
                    <button
                      onClick={startRecording}
                      className="bg-black text-white p-4 rounded-full hover:bg-gray-800 transition-colors"
                    >
                      <Mic className="w-6 h-6" />
                    </button>
                  ) : (
                    <button
                      onClick={stopRecording}
                      className="bg-black text-white p-4 rounded-full hover:bg-gray-800 transition-colors"
                    >
                      <Square className="w-6 h-6" />
                    </button>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 text-center max-w-md">
                  {!isRecording 
                    ? 'Click the microphone to start recording your response'
                    : 'Click the stop button to finish recording'
                  }
                </p>

                {responses[currentQuestion.id] && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 w-full">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-800 font-medium">Response recorded successfully</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Writing Interface */}
            {selectedType === 'writing' && (
              <div className="space-y-4">
                <textarea
                  value={responses[currentQuestion.id] || ''}
                  onChange={(e) => setResponses(prev => ({
                    ...prev,
                    [currentQuestion.id]: e.target.value
                  }))}
                  placeholder="Type your response here..."
                  className="w-full h-64 p-4 border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-0 resize-none"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="font-medium">Word count: {(responses[currentQuestion.id] || '').split(/\s+/).filter(word => word.length > 0).length}</span>
                  <span>Minimum: 150 words</span>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={resetSession}
              className="border border-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-300 transition-colors font-medium"
            >
              Exit Session
            </button>
            
            <button
              onClick={nextQuestion}
              disabled={!responses[currentQuestion.id] && selectedType !== 'listening'}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
            >
              Next Question
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Skill Selection Screen
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-medium text-gray-900 mb-3">IELTS Practice</h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Choose a skill to practice. Our AI-powered system will provide personalized feedback and scoring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {skillTypes.map((skill) => (
            <div
              key={skill.type}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors cursor-pointer group"
              onClick={() => startSession(skill.type)}
            >
              <div className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-gray-600">
                      {skill.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1">{skill.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{skill.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs text-gray-500 mb-4">
                  <div className="text-center">
                    <div className="font-medium text-gray-900 text-xs sm:text-sm">3-4</div>
                    <div className="text-xs">Questions</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-gray-900 text-xs sm:text-sm">15-20 min</div>
                    <div className="text-xs">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-gray-900 text-xs sm:text-sm">Intermediate</div>
                    <div className="text-xs">Difficulty</div>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-xs sm:text-sm">
                  Start Practice
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Play className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2 text-sm">1. Select & Start</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Choose your skill and begin the practice session with real IELTS-style questions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2 text-sm">2. Practice & Record</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Answer questions with our recording system and receive real-time guidance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2 text-sm">3. Get Feedback</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Receive detailed feedback and scoring to improve your performance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}