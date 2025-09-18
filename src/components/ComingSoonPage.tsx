import React from 'react'

interface ComingSoonPageProps {
  title: string
  description: string
  icon: React.ReactNode
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ title, description, icon }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
            {icon}
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-neutral-900 mb-3">{title}</h1>
        <p className="text-neutral-600 mb-8">{description}</p>
        <div className="bg-white rounded-lg p-4 border border-neutral-200">
          <p className="text-sm font-medium text-blue-600 mb-2">Coming Soon</p>
          <p className="text-xs text-neutral-500">
            We're working hard to bring you this feature. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ComingSoonPage