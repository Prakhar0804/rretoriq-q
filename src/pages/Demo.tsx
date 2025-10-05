import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Play, 
  Mic, 
  Target, 
  Users, 
  ArrowRight, 
  Headphones, 
  MessageSquare, 
  BarChart3,
  CheckCircle,
  Lock,
  Sparkles
} from 'lucide-react'
import SEO, { seoData } from '../components/SEO'

const Demo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'ielts' | 'interview'>('ielts')

  const ieltsQuestions = [
    "Describe a place you visited that was particularly interesting.",
    "Some people prefer to work alone, while others prefer to work in teams. What do you think?",
    "What are the advantages and disadvantages of online learning compared to traditional classroom learning?"
  ]

  const interviewQuestions = [
    "Tell me about yourself and your background.",
    "Why are you interested in this position?",
    "Describe a challenging situation you faced and how you resolved it."
  ]

  return (
    <>
      <SEO {...seoData.demo} />
      <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-indigo-100">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Demo</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
            Experience{' '}
            <span className="font-medium text-indigo-600">
              Rretoriq
            </span>
            {' '}in action
          </h1>
          
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Try our AI-powered communication coach with real examples. 
            See how we help professionals excel in IELTS and interviews.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => setActiveDemo('ielts')}
              className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-medium text-base transition-all duration-300 ${
                activeDemo === 'ielts'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                  : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Target className="w-5 h-5" />
              <span>IELTS Practice</span>
            </button>
            
            <button
              onClick={() => setActiveDemo('interview')}
              className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-medium text-base transition-all duration-300 ${
                activeDemo === 'interview'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                  : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Interview Practice</span>
            </button>
          </div>
        </div>
      </section>

      {/* Demo Content */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {activeDemo === 'ielts' && (
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">IELTS Speaking Practice</h3>
                  <p className="text-gray-600 font-light">Part 2: Long Turn (Individual Speaking)</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Question Card */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Sample Question</h4>
                    <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                      <p className="text-gray-900 font-medium mb-3">{ieltsQuestions[0]}</p>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p className="font-medium">You should say:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-gray-500 font-light">
                          <li>Where this place was</li>
                          <li>When you visited it</li>
                          <li>What made it interesting</li>
                          <li>And explain why you would recommend it to others</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Headphones className="w-4 h-4" />
                        <span className="text-sm font-light">Listen to example</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Mic className="w-4 h-4" />
                        <span className="text-sm font-light">Record your answer</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 px-6 rounded-2xl flex items-center justify-center space-x-2 transition-all hover:shadow-lg hover:shadow-indigo-600/25">
                    <Play className="w-5 h-5" />
                    <span>Start Practice Session</span>
                  </button>
                </div>

                {/* AI Feedback Preview */}
                <div className="space-y-6">
                  <div className="bg-gray-700/50 rounded-2xl p-6 border border-gray-600">
                    <h4 className="text-lg font-semibold text-teal-400 mb-4 flex items-center space-x-2">
                      <BarChart3 className="w-5 h-5" />
                      <span>AI Feedback Preview</span>
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                        <h5 className="text-emerald-400 font-medium mb-2">Strengths</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            <span>Clear pronunciation and good pace</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            <span>Good use of descriptive vocabulary</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                        <h5 className="text-orange-400 font-medium mb-2">Areas for Improvement</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Add more specific examples</li>
                          <li>• Use more complex sentence structures</li>
                          <li>• Include personal opinions</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                        <h5 className="text-blue-400 font-medium mb-2">Score Estimate</h5>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-white">6.5</span>
                          <span className="text-gray-300">/9.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 border border-gray-600 rounded-xl p-4">
                    <div className="flex items-center space-x-2 text-yellow-400 mb-2">
                      <Lock className="w-4 h-4" />
                      <span className="text-sm font-medium">Unlock Full Features</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">Get detailed feedback, pronunciation analysis, and personalized improvement plans.</p>
                    <Link to="/register" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center space-x-1">
                      <span>Sign up free</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeDemo === 'interview' && (
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-orange-500/20 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Interview Practice Session</h3>
                  <p className="text-gray-400">Software Engineer Position - Behavioral Questions</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Question Interface */}
                <div className="space-y-6">
                  <div className="bg-gray-700/50 rounded-2xl p-6 border border-gray-600">
                    <h4 className="text-lg font-semibold text-orange-400 mb-4">Current Question</h4>
                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                      <p className="text-white font-medium mb-3">{interviewQuestions[0]}</p>
                      <div className="text-sm text-gray-400">
                        <p>💡 Tips: Structure your answer using the STAR method (Situation, Task, Action, Result)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-sm">30 second prep time</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Mic className="w-4 h-4" />
                        <span className="text-sm">2 minute response</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all hover:scale-105 hover:shadow-lg">
                    <Play className="w-5 h-5" />
                    <span>Start Interview Practice</span>
                  </button>
                </div>

                {/* Interview Analysis */}
                <div className="space-y-6">
                  <div className="bg-gray-700/50 rounded-2xl p-6 border border-gray-600">
                    <h4 className="text-lg font-semibold text-pink-400 mb-4 flex items-center space-x-2">
                      <BarChart3 className="w-5 h-5" />
                      <span>Interview Analysis</span>
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                        <h5 className="text-emerald-400 font-medium mb-2">Communication Skills</h5>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex-1 bg-gray-700 rounded-full h-2">
                            <div className="bg-emerald-400 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                          <span className="text-sm text-gray-300">85%</span>
                        </div>
                        <p className="text-sm text-gray-300">Clear articulation and good eye contact</p>
                      </div>
                      
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                        <h5 className="text-blue-400 font-medium mb-2">Content Quality</h5>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex-1 bg-gray-700 rounded-full h-2">
                            <div className="bg-blue-400 h-2 rounded-full" style={{width: '78%'}}></div>
                          </div>
                          <span className="text-sm text-gray-300">78%</span>
                        </div>
                        <p className="text-sm text-gray-300">Good examples, could be more specific</p>
                      </div>
                      
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                        <h5 className="text-purple-400 font-medium mb-2">Confidence Level</h5>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex-1 bg-gray-700 rounded-full h-2">
                            <div className="bg-purple-400 h-2 rounded-full" style={{width: '72%'}}></div>
                          </div>
                          <span className="text-sm text-gray-300">72%</span>
                        </div>
                        <p className="text-sm text-gray-300">Some hesitation, practice more</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 border border-gray-600 rounded-xl p-4">
                    <div className="flex items-center space-x-2 text-yellow-400 mb-2">
                      <Lock className="w-4 h-4" />
                      <span className="text-sm font-medium">Premium Features</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">Get company-specific questions, detailed body language analysis, and personalized interview strategies.</p>
                    <Link to="/register" className="text-orange-400 hover:text-orange-300 text-sm font-medium flex items-center space-x-1">
                      <span>Upgrade to Premium</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Ready to{' '}
            <span className="font-medium text-indigo-600">
              transform
            </span>
            {' '}your communication?
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 font-light">
            Join thousands of professionals who have advanced their careers with AI-powered training.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-medium text-base transition-all hover:shadow-lg hover:shadow-gray-900/25"
            >
              Start free practice
            </Link>
            <Link
              to="/pricing"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-2xl font-medium text-base transition-all hover:bg-gray-50"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Demo