import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Users, Briefcase, CheckCircle } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-8 leading-tight">
            Master Communication
            <span className="block text-blue-600 mt-2">Skills for India</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI-powered coaching for IELTS, job interviews, and business English. 
            Designed specifically for Indian professionals and students.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              to="/ielts"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Start IELTS Practice
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/interview"
              className="bg-white border-2 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-neutral-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Practice Interviews
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-neutral-500">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="font-medium">Free to start</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="font-medium">Hindi & English support</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="font-medium">50,000+ users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Practice with AI-powered feedback designed for Indian English speakers and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* IELTS Practice */}
            <Link to="/ielts" className="bg-white rounded-lg p-8 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">IELTS Preparation</h3>
              <p className="text-neutral-600 mb-4">
                Practice all four skills with AI feedback. Designed for Indian test-takers with local context and examples.
              </p>
              <div className="text-blue-600 font-medium text-sm flex items-center">
                Start practicing <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            {/* Interview Practice */}
            <Link to="/interview" className="bg-white rounded-lg p-8 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Job Interview Prep</h3>
              <p className="text-neutral-600 mb-4">
                Practice with questions from top Indian companies. Get feedback on your confidence and communication style.
              </p>
              <div className="text-green-600 font-medium text-sm flex items-center">
                Start practicing <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            {/* Business English */}
            <Link to="/business" className="bg-white rounded-lg p-8 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Business English</h3>
              <p className="text-neutral-600 mb-4">
                Master professional communication for Indian corporate culture and international business.
              </p>
              <div className="text-purple-600 font-medium text-sm flex items-center">
                Coming soon <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12">
            Trusted across India
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-sm text-neutral-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-sm text-neutral-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">500K+</div>
              <div className="text-sm text-neutral-600">Practice Sessions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-neutral-600">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to improve your communication?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of Indians who have already improved their English skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ielts"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              Start Free Practice
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/about"
              className="border border-blue-400 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home