import React, { useState } from 'react';
import { 
  Search, 
  Book, 
  Video, 
  MessageCircle, 
  Mail, 
  Phone, 
  FileText, 
  HelpCircle,
  ExternalLink,
  Download,
  Clock,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const Help: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const categories = [
    { id: 'getting-started', label: 'Getting Started', icon: <Book className="w-4 h-4" /> },
    { id: 'practice-guides', label: 'Practice Guides', icon: <Video className="w-4 h-4" /> },
    { id: 'technical-support', label: 'Technical Support', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'billing-account', label: 'Billing & Account', icon: <FileText className="w-4 h-4" /> }
  ];

  const helpContent = {
    'getting-started': [
      {
        title: 'Platform Overview',
        description: 'Learn the basics of navigating Rretoriq and setting up your account.',
        type: 'guide',
        duration: '5 min read',
        status: 'recommended'
      },
      {
        title: 'First Practice Session',
        description: 'Step-by-step guide to completing your first IELTS or Interview practice.',
        type: 'video',
        duration: '8 min watch',
        status: 'popular'
      },
      {
        title: 'Understanding AI Feedback',
        description: 'How to interpret and use AI-generated feedback to improve your performance.',
        type: 'guide',
        duration: '7 min read',
        status: 'new'
      },
      {
        title: 'Setting Learning Goals',
        description: 'Configure your practice goals and track progress effectively.',
        type: 'guide',
        duration: '4 min read',
        status: null
      }
    ],
    'practice-guides': [
      {
        title: 'IELTS Speaking Strategies',
        description: 'Advanced techniques for IELTS Speaking practice and score improvement.',
        type: 'guide',
        duration: '12 min read',
        status: 'popular'
      },
      {
        title: 'Interview Question Types',
        description: 'Complete guide to different interview question categories and how to approach them.',
        type: 'guide',
        duration: '15 min read',
        status: 'recommended'
      },
      {
        title: 'Voice Recording Best Practices',
        description: 'Tips for optimal audio quality and clear speech recording.',
        type: 'video',
        duration: '6 min watch',
        status: null
      },
      {
        title: 'Progress Tracking Guide',
        description: 'How to use analytics and reports to monitor your improvement.',
        type: 'guide',
        duration: '8 min read',
        status: 'new'
      }
    ],
    'technical-support': [
      {
        title: 'Microphone Troubleshooting',
        description: 'Resolve common microphone and audio recording issues.',
        type: 'guide',
        duration: '5 min read',
        status: 'popular'
      },
      {
        title: 'Browser Compatibility',
        description: 'Supported browsers and recommended settings for optimal performance.',
        type: 'guide',
        duration: '3 min read',
        status: null
      },
      {
        title: 'Connection Issues',
        description: 'Troubleshooting slow loading times and connectivity problems.',
        type: 'guide',
        duration: '4 min read',
        status: null
      },
      {
        title: 'Mobile App Setup',
        description: 'Installing and configuring the mobile app for practice on the go.',
        type: 'video',
        duration: '7 min watch',
        status: 'new'
      }
    ],
    'billing-account': [
      {
        title: 'Subscription Plans',
        description: 'Overview of available plans and features included in each tier.',
        type: 'guide',
        duration: '6 min read',
        status: 'recommended'
      },
      {
        title: 'Payment Methods',
        description: 'Supported payment options and billing cycle information.',
        type: 'guide',
        duration: '4 min read',
        status: null
      },
      {
        title: 'Account Settings',
        description: 'Managing your profile, preferences, and privacy settings.',
        type: 'guide',
        duration: '5 min read',
        status: null
      },
      {
        title: 'Cancellation Policy',
        description: 'How to cancel or modify your subscription and refund policies.',
        type: 'guide',
        duration: '3 min read',
        status: null
      }
    ]
  };

  const getStatusIcon = (status: string | null) => {
    switch (status) {
      case 'popular': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'recommended': return <AlertCircle className="w-4 h-4 text-orange-600" />;
      case 'new': return <Info className="w-4 h-4 text-blue-600" />;
      default: return null;
    }
  };

  const getStatusText = (status: string | null) => {
    switch (status) {
      case 'popular': return 'Most Popular';
      case 'recommended': return 'Recommended';
      case 'new': return 'New';
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-3 sm:mb-4 px-4">
            Help Center
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Find guides, tutorials, and answers to help you get the most out of Rretoriq.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6 sm:mb-8 max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search help articles..."
            className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-transparent text-gray-900 text-sm sm:text-base"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl p-4 lg:sticky lg:top-8">
              <h2 className="font-semibold text-gray-900 mb-4">Categories</h2>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeCategory === category.id
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className={activeCategory === category.id ? 'text-gray-900' : 'text-gray-400'}>
                      {category.icon}
                    </div>
                    <span>{category.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {helpContent[activeCategory as keyof typeof helpContent].map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        {item.status && (
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(item.status)}
                            <span className="text-xs font-medium text-gray-600">
                              {getStatusText(item.status)}
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          {item.type === 'video' ? (
                            <Video className="w-4 h-4 text-gray-400" />
                          ) : (
                            <Book className="w-4 h-4 text-gray-400" />
                          )}
                          <span className="text-sm text-gray-500 capitalize">{item.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-500">{item.duration}</span>
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Download className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Download Resources</h3>
            <p className="text-gray-600 text-sm mb-4">Access downloadable guides, templates, and practice materials.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Browse Downloads
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Live Chat Support</h3>
            <p className="text-gray-600 text-sm mb-4">Get instant help from our support team during business hours.</p>
            <button className="text-green-600 hover:text-green-700 font-medium text-sm">
              Start Chat
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Video className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Video Tutorials</h3>
            <p className="text-gray-600 text-sm mb-4">Watch step-by-step video guides for all platform features.</p>
            <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
              Watch Videos
            </button>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">Still Need Help?</h2>
            <p className="text-gray-600">Our support team is ready to assist you with any questions or issues.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email Support</h3>
                <p className="text-gray-600 text-sm">Response within 24 hours</p>
                <a href="mailto:support@rretoriq.com" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  support@rretoriq.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone Support</h3>
                <p className="text-gray-600 text-sm">Mon-Fri, 9 AM - 6 PM IST</p>
                <a href="tel:+919876543210" className="text-green-600 hover:text-green-700 text-sm font-medium">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;