import React from 'react'
import { Target, Mic, Award, BookOpen, Users, CheckCircle, Play, ArrowRight } from 'lucide-react'

const IELTSPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-teal-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            IELTS Speaking Simulator
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            Master IELTS Speaking
            <span className="block text-gradient">with AI Examiner</span>
          </h1>
          
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Practice all three parts of IELTS Speaking test with our AI examiner. Get instant band score predictions, 
            detailed feedback, and personalized improvement suggestions designed for Indian test-takers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn btn-primary btn-3d px-8 py-4 text-lg font-semibold flex items-center justify-center group">
              Start Free IELTS Test
              <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
            </button>
            <button className="btn btn-secondary px-8 py-4 text-lg flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* IELTS Test Parts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Complete IELTS Speaking Practice
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Practice all three parts with authentic questions and get detailed feedback on every aspect of your performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Part 1 */}
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Part 1: Introduction</h3>
              <p className="text-neutral-600 mb-6">
                Answer questions about yourself, your family, work, studies, and interests. Practice fluency and natural responses.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Personal information questions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Familiar topics practice
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  4-5 minutes duration
                </li>
              </ul>
            </div>

            {/* Part 2 */}
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300 ring-2 ring-primary-200">
              <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Part 2: Cue Card</h3>
              <p className="text-neutral-600 mb-6">
                Speak for 1-2 minutes on a given topic. Practice organizing ideas and speaking continuously with confidence.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Topic card with prompts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  1 minute preparation time
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  2 minute speaking time
                </li>
              </ul>
            </div>

            {/* Part 3 */}
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Part 3: Discussion</h3>
              <p className="text-neutral-600 mb-6">
                Engage in detailed discussion about abstract ideas and issues. Practice advanced vocabulary and complex grammar.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Abstract topic discussion
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Opinion and analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  4-5 minutes duration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features for IELTS */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              AI-Powered IELTS Analysis
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Get detailed feedback on all four IELTS Speaking assessment criteria with personalized improvement tips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Mic className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Fluency & Coherence</h3>
              <p className="text-neutral-600 text-sm">
                Analyze speech rate, pauses, linking words, and overall flow of your responses.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Lexical Resource</h3>
              <p className="text-neutral-600 text-sm">
                Evaluate vocabulary range, accuracy, and appropriateness for IELTS bands.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Grammar Range</h3>
              <p className="text-neutral-600 text-sm">
                Assess grammatical structures, accuracy, and complexity in your speech.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Pronunciation</h3>
              <p className="text-neutral-600 text-sm">
                Analyze clarity, stress patterns, intonation, and Indian accent features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Indian-Specific IELTS Tips */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                Designed for Indian Test-Takers
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Our AI understands common challenges faced by Indian IELTS candidates and provides targeted feedback to help you improve faster.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Indian Accent Analysis</h4>
                    <p className="text-neutral-600">Specific feedback on pronunciation patterns common among Indian speakers.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Cultural Context Training</h4>
                    <p className="text-neutral-600">Practice with topics and examples relevant to Indian culture and experiences.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Mother Tongue Influence Detection</h4>
                    <p className="text-neutral-600">Identify and correct grammar patterns influenced by Hindi and regional languages.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="card p-8 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Band 8.0</div>
                  <div className="text-neutral-600">Average improvement with our platform</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Fluency & Coherence</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-neutral-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-sm font-medium">8.5</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Lexical Resource</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-neutral-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                      <span className="text-sm font-medium">8.0</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Grammar Range</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-neutral-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="text-sm font-medium">7.5</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Pronunciation</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-neutral-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                      </div>
                      <span className="text-sm font-medium">8.2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Achieve Your Target IELTS Band?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of Indian students who have achieved their IELTS goals with our AI-powered practice platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-white text-primary-600 hover:bg-neutral-100 px-8 py-4 text-lg font-semibold btn-3d flex items-center justify-center">
              Start Free IELTS Practice
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg">
              View Success Stories
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IELTSPage