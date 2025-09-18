import { Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Home from './pages/Home'
import IELTSPage from './pages/IELTSPage'
import JobInterviewPage from './pages/JobInterviewPage'
import GlimpsePage from './pages/GlimpsePage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import ComingSoonPage from './components/ComingSoonPage'
import { Briefcase, BarChart3, BookOpen, HelpCircle, MessageCircle, Info, Shield, FileText } from 'lucide-react'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ielts" element={<IELTSPage />} />
        <Route path="/interview" element={<JobInterviewPage />} />
        <Route path="/glimpse" element={<GlimpsePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/business" element={
          <ComingSoonPage
            title="Business English"
            description="Master professional communication for Indian corporate culture"
            icon={<Briefcase className="w-8 h-8 text-blue-600" />}
          />
        } />
        <Route path="/progress" element={
          <ComingSoonPage
            title="Progress Tracking"
            description="Monitor your communication skills improvement with detailed analytics"
            icon={<BarChart3 className="w-8 h-8 text-blue-600" />}
          />
        } />
        <Route path="/courses" element={
          <ComingSoonPage
            title="Online Courses"
            description="Structured learning paths for different communication goals"
            icon={<BookOpen className="w-8 h-8 text-blue-600" />}
          />
        } />
        <Route path="/help" element={
          <ComingSoonPage
            title="Help Center"
            description="Get support and find answers to your questions"
            icon={<HelpCircle className="w-8 h-8 text-blue-600" />}
          />
        } />
        <Route path="/contact" element={
          <ComingSoonPage
            title="Contact Us"
            description="Get in touch with our team for support and feedback"
            icon={<MessageCircle className="w-8 h-8 text-blue-600" />}
          />
        } />
        <Route path="/about" element={
          <ComingSoonPage
            title="About Us"
            description="Learn about our mission to improve communication skills in India"
            icon={<Info className="w-8 h-8 text-blue-600" />}
          />
        } />
        <Route path="/privacy" element={
          <ComingSoonPage
            title="Privacy Policy"
            description="Your privacy and data protection information"
            icon={<Shield className="w-8 h-8 text-blue-600" />}
          />
        } />
        <Route path="/terms" element={
          <ComingSoonPage
            title="Terms of Service"
            description="Terms and conditions for using our platform"
            icon={<FileText className="w-8 h-8 text-blue-600" />}
          />
        } />
      </Routes>
    </Layout>
  )
}

export default App
