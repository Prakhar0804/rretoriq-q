import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Brain, Menu, X, Users, Target, Briefcase, BarChart3, BookOpen, Eye, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook, Star } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/', icon: Brain },
    { name: 'IELTS Practice', href: '/ielts', icon: Target },
    { name: 'Job Interview', href: '/interview', icon: Users },
    { name: 'Glimpse', href: '/glimpse', icon: Eye },
    { name: 'Business English', href: '/business', icon: Briefcase },
    { name: 'Progress', href: '/progress', icon: BarChart3 },
    { name: 'Courses', href: '/courses', icon: BookOpen },
  ]

  const isActive = (href: string) => {
    return location.pathname === href
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-neutral-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Simplified Logo and Brand */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center space-x-2">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
                    Rretoriq
                  </h1>
                  <span className="px-1.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-md">AI</span>
                </div>
              </div>
              <div className="md:hidden">
                <h1 className="text-lg font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
                  Rretoriq
                </h1>
              </div>
            </Link>

            {/* Simplified Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.slice(0, 5).map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-blue-700 bg-blue-50'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
              
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-neutral-200">
                <Link
                  to="/signin"
                  className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-lg transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </nav>

            {/* Tablet Navigation */}
            <nav className="hidden md:flex lg:hidden items-center space-x-4">
              {navigation.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-all ${
                    isActive(item.href)
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium rounded-lg transition-colors"
              >
                Sign Up
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative p-2 text-neutral-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation Menu */}
          <div className={`md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-neutral-200/80 shadow-2xl transform transition-all duration-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-blue-700 bg-blue-50 shadow-sm'
                        : 'text-neutral-700 hover:text-blue-700 hover:bg-blue-50/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                    {isActive(item.href) && (
                      <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </Link>
                )
              })}
              
              <div className="pt-4 border-t border-neutral-200 mt-4 space-y-3">
                <Link
                  to="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full border-2 border-neutral-300 hover:border-blue-300 hover:bg-blue-50 text-neutral-900 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-3 text-sm font-semibold rounded-xl shadow-lg transition-all duration-200"
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Enhanced Professional Footer */}
      <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Rretoriq
                  </h3>
                  <p className="text-neutral-400 text-sm font-medium">AI Communication Excellence</p>
                </div>
              </div>
              
              <p className="text-neutral-300 text-sm leading-relaxed max-w-md">
                Empowering Indian professionals with AI-powered communication training. Master IELTS, ace interviews, and excel in business English with personalized coaching.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">50K+</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wide">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400">95%</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wide">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">4.9★</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wide">Rating</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Features</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/ielts" className="flex items-center space-x-2 text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                    <Target className="w-4 h-4" />
                    <span>IELTS Practice</span>
                  </Link>
                </li>
                <li>
                  <Link to="/interview" className="flex items-center space-x-2 text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                    <Users className="w-4 h-4" />
                    <span>Interview Prep</span>
                  </Link>
                </li>
                <li>
                  <Link to="/business" className="flex items-center space-x-2 text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                    <Briefcase className="w-4 h-4" />
                    <span>Business English</span>
                  </Link>
                </li>
                <li>
                  <Link to="/progress" className="flex items-center space-x-2 text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                    <BarChart3 className="w-4 h-4" />
                    <span>Progress Tracking</span>
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="flex items-center space-x-2 text-neutral-300 hover:text-blue-400 transition-colors text-sm">
                    <BookOpen className="w-4 h-4" />
                    <span>Online Courses</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/help" className="text-neutral-300 hover:text-blue-400 transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="text-neutral-300 hover:text-blue-400 transition-colors">Contact Support</Link></li>
                <li><Link to="/about" className="text-neutral-300 hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link to="/privacy" className="text-neutral-300 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-neutral-300 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-white">Email</div>
                    <div className="text-sm text-neutral-300">support@rretoriq.com</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-white">Phone</div>
                    <div className="text-sm text-neutral-300">+91 98765 43210</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-white">Location</div>
                    <div className="text-sm text-neutral-300">Mumbai, India</div>
                  </div>
                </li>
              </ul>
              
              {/* Newsletter */}
              <div className="mt-6 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700">
                <h5 className="text-sm font-semibold text-white mb-2">Stay Updated</h5>
                <p className="text-xs text-neutral-400 mb-4">Get the latest tips and updates</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-3 py-2.5 bg-neutral-700 text-white placeholder-neutral-400 rounded-lg text-sm border border-neutral-600 focus:border-blue-500 focus:outline-none transition-colors min-w-0"
                  />
                  <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 bg-neutral-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="text-neutral-400 text-sm">
                  © 2025 Rretoriq. All rights reserved.
                </div>
                <div className="hidden sm:flex items-center space-x-2 text-xs text-neutral-500">
                  <span className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span>🇮🇳 Made in India</span>
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-neutral-400">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>Trusted by 50,000+ professionals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout