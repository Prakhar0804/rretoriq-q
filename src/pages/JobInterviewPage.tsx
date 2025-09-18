import React from 'react'
import { Users, Building2, Code, Briefcase, CheckCircle, Play, ArrowRight, Target, Award } from 'lucide-react'

const JobInterviewPage: React.FC = () => {
  return (
        <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Mock Job Interview Practice
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            Master Job Interviews
            <span className="block text-gradient">for Indian Companies</span>
          </h1>
          
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Practice with real interview questions from top Indian companies including TCS, Infosys, Wipro, and startups. 
            Get AI-powered feedback on your answers, confidence level, and communication skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn btn-primary btn-3d px-8 py-4 text-lg font-semibold flex items-center justify-center group">
              Start Mock Interview
              <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
            </button>
            <button className="btn btn-secondary px-8 py-4 text-lg flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Company Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Practice with Real Company Questions
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Choose your industry and practice with authentic interview questions from leading Indian companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* IT Services */}
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">IT Services</h3>
              <p className="text-neutral-600 text-sm mb-4">
                TCS, Infosys, Wipro, HCL, Tech Mahindra
              </p>
              <ul className="space-y-1 text-xs text-neutral-500 text-left">
                <li>• Technical round questions</li>
                <li>• System design discussions</li>
                <li>• Client interaction scenarios</li>
                <li>• Project management queries</li>
              </ul>
            </div>

            {/* Startups & Product */}
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Startups & Product</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Flipkart, Paytm, Zomato, Byju's, Ola
              </p>
              <ul className="space-y-1 text-xs text-neutral-500 text-left">
                <li>• Product thinking questions</li>
                <li>• Problem-solving scenarios</li>
                <li>• Growth strategy discussions</li>
                <li>• Innovation challenges</li>
              </ul>
            </div>

            {/* Banking & Finance */}
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Banking & Finance</h3>
              <p className="text-neutral-600 text-sm mb-4">
                HDFC, ICICI, SBI, Axis Bank, Kotak
              </p>
              <ul className="space-y-1 text-xs text-neutral-500 text-left">
                <li>• Risk assessment scenarios</li>
                <li>• Customer service situations</li>
                <li>• Regulatory compliance</li>
                <li>• Financial analysis questions</li>
              </ul>
            </div>

            {/* Government & PSU */}
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="w-16 h-16 gradient-orange rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Government & PSU</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Railways, ISRO, DRDO, BHEL, NTPC
              </p>
              <ul className="space-y-1 text-xs text-neutral-500 text-left">
                <li>• Public policy discussions</li>
                <li>• Ethical dilemma scenarios</li>
                <li>• Leadership challenges</li>
                <li>• Social responsibility questions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Round Types */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Practice All Interview Rounds
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              From technical rounds to HR discussions, practice every type of interview you'll face.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Technical Round */}
            <div className="card p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Technical Round</h3>
                  <p className="text-sm text-neutral-500">30-60 minutes</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">Programming language questions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">System design discussions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">Problem-solving approach</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">Project deep-dive questions</span>
                </li>
              </ul>
              
              <button className="btn btn-primary w-full py-3">Practice Technical Round</button>
            </div>

            {/* HR Round */}
            <div className="card p-8 hover:shadow-xl transition-shadow duration-300 ring-2 ring-green-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">HR Round</h3>
                  <p className="text-sm text-neutral-500">20-30 minutes</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">Tell me about yourself</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">Strengths and weaknesses</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">Career goals and motivation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">Behavioral questions (STAR method)</span>
                </li>
              </ul>
              
              <button className="btn btn-secondary w-full py-3">Practice HR Round</button>
            </div>

            {/* Managerial Round */}
            <div className="card p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Managerial Round</h3>
                  <p className="text-sm text-neutral-500">45-90 minutes</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">Leadership scenarios</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">Team management questions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">Strategic thinking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">Conflict resolution</span>
                </li>
              </ul>
              
              <button className="btn bg-gradient-to-r from-purple-600 to-purple-700 text-white w-full py-3">Practice Managerial Round</button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Analysis Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                AI-Powered Interview Analysis
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Get detailed feedback on your interview performance with insights tailored for Indian job market expectations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Answer Quality Assessment</h4>
                    <p className="text-neutral-600">Analyze content relevance, structure, and depth of your responses.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Confidence Level Detection</h4>
                    <p className="text-neutral-600">Monitor vocal confidence, pace, and hesitation patterns in your speech.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Communication Skills Evaluation</h4>
                    <p className="text-neutral-600">Assess clarity, professional language use, and Indian business communication style.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Industry-Specific Feedback</h4>
                    <p className="text-neutral-600">Get insights based on specific industry expectations and company culture.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="card p-8 bg-gradient-to-br from-green-50 to-blue-50">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-green-600 mb-2">Interview Score: 87%</div>
                  <div className="text-neutral-600">Ready for final rounds</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Answer Quality</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-neutral-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <span className="text-sm font-medium text-green-600">Excellent</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Confidence Level</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-neutral-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-sm font-medium text-blue-600">High</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Communication</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-neutral-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                      <span className="text-sm font-medium text-purple-600">Very Good</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Technical Depth</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-neutral-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                      </div>
                      <span className="text-sm font-medium text-orange-600">Good</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <h5 className="font-semibold text-neutral-900 mb-2">Key Improvements</h5>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Add more specific examples from your experience</li>
                    <li>• Reduce filler words like "um" and "actually"</li>
                    <li>• Speak with more enthusiasm about the company</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">Success Stories</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Real success stories from professionals who landed their dream jobs after practicing with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  AK
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Amit Kumar</div>
                  <div className="text-sm text-neutral-500">Software Engineer at TCS</div>
                </div>
              </div>
              <p className="text-neutral-700 text-sm mb-4">
                "Practiced 50+ technical interviews and improved my confidence significantly. Got selected in TCS with 40% salary hike!"
              </p>
              <div className="text-xs text-green-600 font-medium">Interview Success Rate: 95%</div>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  PS
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Priya Sharma</div>
                  <div className="text-sm text-neutral-500">Product Manager at Flipkart</div>
                </div>
              </div>
              <p className="text-neutral-700 text-sm mb-4">
                "The behavioral question practice was amazing. Learned to structure answers using STAR method and cracked Flipkart PM role."
              </p>
              <div className="text-xs text-green-600 font-medium">Preparation Time: 3 weeks</div>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  RG
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Rahul Gupta</div>
                  <div className="text-sm text-neutral-500">Data Scientist at Paytm</div>
                </div>
              </div>
              <p className="text-neutral-700 text-sm mb-4">
                "AI feedback helped me identify my weak areas. Practiced system design questions and landed my dream Data Science role!"
              </p>
              <div className="text-xs text-green-600 font-medium">Salary Increase: 60%</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of professionals who have landed their dream jobs with our AI-powered interview practice platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-white text-green-600 hover:bg-neutral-100 px-8 py-4 text-lg font-semibold btn-3d flex items-center justify-center">
              Start Free Mock Interview
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="btn border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg">
              View Sample Questions
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobInterviewPage