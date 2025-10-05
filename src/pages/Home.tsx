import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO, { seoData } from '../components/SEO'
import { 
  ArrowRight, 
  Target, 
  Users, 
  BarChart3, 
  Play,
  Sparkles,
  Star
} from 'lucide-react'

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "Tech Mahindra",
      content: "Rretoriq helped me ace my IELTS speaking test! The AI feedback was incredibly detailed and helped me improve my pronunciation and fluency. I scored 8.5 in speaking!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Rajesh Kumar",
      role: "Business Analyst",
      company: "Infosys",
      content: "The interview practice sessions were a game-changer for me. The company-specific scenarios really prepared me well. I got my dream job at a Fortune 500 company!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Sneha Patel",
      role: "Marketing Manager",
      company: "Wipro",
      content: "Amazing platform! The personalized feedback helped me overcome my speaking anxiety. The practice sessions feel so real and the AI coaching is spot on.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <SEO {...seoData.home} />
      <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-gray-50/30"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extralight mb-6 leading-tight tracking-wide font-serif" style={{ color: '#000000' }}>
                Rretoriq
              </h1>
              
              <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-indigo-100 animate-fade-in">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Communication Training</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
                Perfect your{' '}
                <span className="font-medium bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  communication
                </span>
                <br />
                <span className="font-light">with precision AI</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Master IELTS and interviews with personalized feedback. 
                Join thousands of professionals advancing their careers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/register"
                  className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium text-base transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/25 flex items-center space-x-2"
                >
                  <span>Start practicing</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/demo"
                  className="group flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-300"
                >
                  <div className="w-10 h-10 border border-gray-200 hover:border-gray-300 rounded-full flex items-center justify-center transition-all group-hover:scale-105">
                    <Play className="w-4 h-4 ml-0.5" />
                  </div>
                  <span className="font-medium">See it in action</span>
                </Link>
              </div>
            </div>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900">10,000+</div>
                <div className="text-gray-500 font-light">Active learners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900">95%</div>
                <div className="text-gray-500 font-light">Success rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900">500+</div>
                <div className="text-gray-500 font-light">Enterprise clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900">24/7</div>
                <div className="text-gray-500 font-light">AI availability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Everything you need to{' '}
                <span className="font-medium text-indigo-600">
                  excel
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Comprehensive AI-powered training designed for modern professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* IELTS Training */}
              <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/5 hover:-translate-y-1">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">IELTS Excellence</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Master all four IELTS modules with AI-powered feedback and personalized improvement strategies.
                </p>
              </div>

              {/* Interview Training */}
              <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/5 hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Interview Mastery</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Practice company-specific scenarios and receive detailed performance analytics for success.
                </p>
              </div>

              {/* AI Analysis */}
              <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/5 hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                  <BarChart3 className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Analysis</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Get instant, detailed feedback on pronunciation, fluency, and content quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Trusted by{' '}
                <span className="font-medium text-indigo-600">
                  professionals
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Real stories from learners who transformed their communication skills
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                <div className="text-center">
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl font-light text-gray-900 mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600 font-light">
                        {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial indicators */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Ready to{' '}
              <span className="font-medium text-indigo-600">
                transform
              </span>
              {' '}your communication?
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto font-light">
              Join thousands of professionals who have advanced their careers with AI-powered training.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium text-base transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/25"
              >
                Start free practice
              </Link>
              <Link
                to="/pricing"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-full font-medium text-base transition-all duration-300 hover:bg-gray-50"
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