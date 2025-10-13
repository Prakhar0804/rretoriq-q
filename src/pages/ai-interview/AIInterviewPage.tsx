import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EnhancedInterviewSession from '../../components/EnhancedInterviewSession';
import { QuestionBankService } from '../../services/QuestionBankService';
import { useAuthStore } from '../../store/authStore';
import { AIInterviewErrorBoundary } from '../../components/ErrorBoundary';
import type { Question } from '../../types/questions';
import { Loader2, ArrowLeft, AlertCircle, Sparkles, Brain, Target, User, Settings } from 'lucide-react';
import { gsap } from 'gsap';

interface SessionResults {
  totalQuestions: number;
  completedQuestions: number;
  averageScore: number;
  totalDuration: number;
  analyses: any[];
  sessionType: string;
}

export default function AIInterviewPage() {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sessionActive, setSessionActive] = useState(false);
  
  const pageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  
  // Session configuration
  const [sessionConfig, setSessionConfig] = useState({
    questionCount: 5,
    difficulty: 'Mixed',
    includeAIEvaluation: true,
    enableRealTimeTranscription: true
  });

  // No API key check needed - all AI services now run through server-side proxies
  // (Gemini for analysis, Whisper for transcription)

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (!type || !['hr', 'technical', 'aptitude'].includes(type.toLowerCase())) {
      setError('Invalid interview type. Please select HR, Technical, or Aptitude.');
      return;
    }

    loadQuestions();
  }, [type, user, navigate]);

  // Animation effect for type selection page
  useEffect(() => {
    if (!type && pageRef.current && headerRef.current && cardsRef.current.length > 0) {
      const tl = gsap.timeline();
      
      tl.fromTo(pageRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(headerRef.current, 
        { opacity: 0, y: 50, scale: 0.95 }, 
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" }, 
        "-=0.4"
      )
      .fromTo(cardsRef.current, 
        { opacity: 0, y: 60, rotateX: 15 }, 
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0, 
          duration: 0.8, 
          stagger: 0.15,
          ease: "power2.out",
          transformPerspective: 1000
        }, 
        "-=0.5"
      );
    }
  }, [type]);

  const loadQuestions = async () => {
    if (!type) return;

    setLoading(true);
    setError(null);

    try {
      // Ensure question bank is initialized
      await QuestionBankService.initializeQuestionBank();
      
      const questionType = type.charAt(0).toUpperCase() + type.slice(1) as 'HR' | 'Technical' | 'Aptitude';
      const filters = { 
        type: questionType,
        shuffle: true 
      };

      let fetchedQuestions: Question[];
      
      if (sessionConfig.difficulty === 'Mixed') {
        fetchedQuestions = await QuestionBankService.getShuffledQuestions(
          sessionConfig.questionCount, 
          filters
        );
      } else {
        fetchedQuestions = await QuestionBankService.getShuffledQuestions(
          sessionConfig.questionCount, 
          { ...filters, difficulty: sessionConfig.difficulty as any }
        );
      }

      if (fetchedQuestions.length === 0) {
        throw new Error(`No ${questionType} questions found. Please initialize the question bank first.`);
      }

      setQuestions(fetchedQuestions);
    } catch (error) {
      console.error('Error loading questions:', error);
      setError(error instanceof Error ? error.message : 'Failed to load questions');
    } finally {
      setLoading(false);
    }
  };

  const handleSessionComplete = (sessionId: string, results: SessionResults) => {
    console.log('Session completed:', { sessionId, results });
    setSessionActive(false);
    
    // Navigate to results or back to dashboard
    navigate('/dashboard', { 
      state: { 
        message: `Interview completed! Average score: ${results.averageScore.toFixed(1)}/100`,
        type: 'success'
      }
    });
  };

  const handleSessionExit = () => {
    if (confirm('Are you sure you want to exit the interview session? Your progress will be lost.')) {
      setSessionActive(false);
    }
  };

  const startSession = () => {
    // All AI services now run through server-side proxies, no client-side key check needed
    setSessionActive(true);
  };

  const getTypeDisplayName = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'hr': return 'HR Interview';
      case 'technical': return 'Technical Interview';  
      case 'aptitude': return 'Aptitude Test';
      default: return 'Interview';
    }
  };

  const getTypeDescription = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'hr': 
        return 'Behavioral questions, company culture fit, and general HR topics. Focus on communication skills and personality assessment.';
      case 'technical': 
        return 'Technical knowledge, problem-solving abilities, and domain-specific questions. Evaluate technical competency and reasoning.';
      case 'aptitude': 
        return 'Logical reasoning, analytical thinking, and problem-solving questions. Test cognitive abilities and mental agility.';
      default: 
        return 'Interview practice session';
    }
  };

  // Show interview session if active
  if (sessionActive && questions.length > 0 && user) {
    return (
      <AIInterviewErrorBoundary>
        <EnhancedInterviewSession
          questions={questions}
          sessionType={type as 'hr' | 'technical' | 'aptitude' | 'mixed'}
          userId={user.id}
          onSessionComplete={handleSessionComplete}
          onSessionExit={handleSessionExit}
        />
      </AIInterviewErrorBoundary>
    );
  }

  // Show modern type selection screen when no type is provided
  if (!type) {
    return (
      <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-600 rounded-3xl mb-6 shadow-2xl">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent mb-4">
              AI Interview Practice
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 font-medium">
              Experience next-generation interview preparation with AI-powered feedback, 
              real-time analysis, and personalized coaching to excel in your career journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* HR Interview */}
            <div 
              ref={el => { if (el) cardsRef.current[0] = el }}
              className="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => navigate('/ai-interview/hr')}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 shadow-lg">
                  <User className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">HR Interview</h3>
                <p className="text-blue-100 mb-5 text-center leading-relaxed text-sm">
                  Master behavioral questions, cultural fit assessment, and professional communication with AI-powered insights.
                </p>
                
                <div className="space-y-2 mb-5">
                  <div className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                    <span>Behavioral question analysis</span>
                  </div>
                  <div className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                    <span>Communication skills evaluation</span>
                  </div>
                  <div className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                    <span>Professional presence coaching</span>
                  </div>
                </div>
                
                <button className="w-full bg-white text-blue-600 py-3.5 px-4 rounded-xl font-bold transition-all duration-200 hover:bg-blue-50 shadow-lg">
                  Start HR Practice
                </button>
              </div>
            </div>

            {/* Technical Interview */}
            <div 
              ref={el => { if (el) cardsRef.current[1] = el }}
              className="group relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => navigate('/ai-interview/technical')}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 shadow-lg">
                  <Settings className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Technical Interview</h3>
                <p className="text-emerald-100 mb-5 text-center leading-relaxed text-sm">
                  Sharpen your technical expertise with programming concepts, system design, and problem-solving challenges.
                </p>
                
                <div className="space-y-2 mb-5">
                  <div className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                    <span>Programming fundamentals</span>
                  </div>
                  <div className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                    <span>System architecture design</span>
                  </div>
                  <div className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                    <span>Technical problem solving</span>
                  </div>
                </div>
                
                <button className="w-full bg-white text-emerald-600 py-3.5 px-4 rounded-xl font-bold transition-all duration-200 hover:bg-emerald-50 shadow-lg">
                  Start Technical Practice
                </button>
              </div>
            </div>

            {/* Aptitude Interview */}
            <div 
              ref={el => { if (el) cardsRef.current[2] = el }}
              className="group relative bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => navigate('/ai-interview/aptitude')}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Aptitude Assessment</h3>
                <p className="text-orange-100 mb-5 text-center leading-relaxed text-sm">
                  Enhance logical reasoning, analytical thinking, and quantitative problem-solving abilities with structured practice.
                </p>
                
                <div className="space-y-2 mb-5">
                  <div className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                    <span>Logical reasoning patterns</span>
                  </div>
                  <div className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                    <span>Analytical thinking skills</span>
                  </div>
                  <div className="flex items-center text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                    <span>Quantitative problem solving</span>
                  </div>
                </div>
                
                <button className="w-full bg-white text-orange-600 py-3.5 px-4 rounded-xl font-bold transition-all duration-200 hover:bg-orange-50 shadow-lg">
                  Start Aptitude Test
                </button>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 shadow-lg mb-8">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-purple-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">AI-Powered Interview Experience</h3>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <p className="font-bold text-gray-900 mb-1">Smart Analysis</p>
                <p className="text-sm text-gray-600">Real-time AI evaluation</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <p className="font-bold text-gray-900 mb-1">Precision Scoring</p>
                <p className="text-sm text-gray-600">Multi-criteria assessment</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <p className="font-bold text-gray-900 mb-1">Personalized Feedback</p>
                <p className="text-sm text-gray-600">Tailored improvement insights</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Settings className="w-7 h-7 text-white" />
                </div>
                <p className="font-bold text-gray-900 mb-1">Advanced Tools</p>
                <p className="text-sm text-gray-600">Voice & speech analysis</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Interview Questions</h2>
          <p className="text-gray-600">Preparing your {getTypeDisplayName(type || '')} session...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-medium text-black mb-2">Unable to Load Questions</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            
            <div className="space-y-3">
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full bg-gray-100 hover:bg-gray-200 text-black px-4 py-2 rounded-xl transition-colors"
              >
                Back to Dashboard
              </button>
              
              <button
                onClick={loadQuestions}
                className="w-full bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-xl transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Session setup screen
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center space-x-2 text-gray-600 hover:text-black mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </button>
          
          <h1 className="text-3xl font-medium text-black mb-2">
            {getTypeDisplayName(type || '')}
          </h1>
          <p className="text-gray-600 max-w-2xl">
            {getTypeDescription(type || '')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">


            {/* Session Configuration */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-medium text-black mb-4">Session Configuration</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Questions
                  </label>
                  <select
                    value={sessionConfig.questionCount}
                    onChange={(e) => setSessionConfig(prev => ({ ...prev, questionCount: parseInt(e.target.value) }))}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                  >
                    <option value={3}>3 Questions (Quick)</option>
                    <option value={5}>5 Questions (Standard)</option>
                    <option value={7}>7 Questions (Extended)</option>
                    <option value={10}>10 Questions (Comprehensive)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={sessionConfig.difficulty}
                    onChange={(e) => setSessionConfig(prev => ({ ...prev, difficulty: e.target.value }))}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                  >
                    <option value="Mixed">Mixed Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={sessionConfig.includeAIEvaluation}
                      onChange={(e) => setSessionConfig(prev => ({ ...prev, includeAIEvaluation: e.target.checked }))}
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="text-sm text-gray-700">Enable AI Evaluation (Gemini)</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={sessionConfig.enableRealTimeTranscription}
                      onChange={(e) => setSessionConfig(prev => ({ ...prev, enableRealTimeTranscription: e.target.checked }))}
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="text-sm text-gray-700">Real-time Transcription</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Start Session */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-medium text-black mb-4">Ready to Begin?</h3>
              <p className="text-gray-600 mb-6">
                You're about to start a {sessionConfig.questionCount}-question {getTypeDisplayName(type || '').toLowerCase()} 
                session with {sessionConfig.difficulty.toLowerCase()} difficulty questions.
              </p>
              
              <button
                onClick={startSession}
                className="w-full bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <span>Start Interview Session</span>
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-medium text-black mb-4">Session Preview</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600">Interview Type</div>
                  <div className="font-medium text-black">{getTypeDisplayName(type || '')}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600">Questions Available</div>
                  <div className="font-medium text-black">{questions.length}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600">Estimated Duration</div>
                  <div className="font-medium text-black">{sessionConfig.questionCount * 3} - {sessionConfig.questionCount * 5} minutes</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600">Features</div>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div>✅ Voice Recording</div>
                    <div>✅ Speech-to-Text</div>
                    <div>{sessionConfig.includeAIEvaluation ? '✅' : '❌'} AI Evaluation</div>
                    <div>✅ Progress Tracking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}