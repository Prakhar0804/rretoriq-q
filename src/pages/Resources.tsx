import { useState } from 'react'
import { BookOpen, FileText, X } from 'lucide-react'
import SEO from '../components/SEO'

interface Resource {
  id: number
  title: string
  filename: string
  description: string
  category: string
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Interview Overview",
    filename: "erview_20251011_111910_0000.pdf",
    description: "Comprehensive guide to interview preparation and strategies",
    category: "Interview Skills"
  },
  {
    id: 2,
    title: "Handling Impromptu Speaking",
    filename: "Handling Impromptu Speaking in Interviews_20251011_113003_0000.pdf",
    description: "Master the art of thinking on your feet during interviews",
    category: "Speaking Skills"
  },
  {
    id: 3,
    title: "House Of Orators - Part 1",
    filename: "House Of Orators_20251011_112235_0000.pdf",
    description: "Develop powerful oratory and public speaking skills",
    category: "Public Speaking"
  },
  {
    id: 4,
    title: "House Of Orators - Part 2",
    filename: "House Of Orators_20251011_112408_0000.pdf",
    description: "Advanced techniques for effective public speaking",
    category: "Public Speaking"
  },
  {
    id: 5,
    title: "House Of Orators - Part 3",
    filename: "House Of Orators_20251011_112657_0000.pdf",
    description: "Mastering audience engagement and delivery",
    category: "Public Speaking"
  },
  {
    id: 6,
    title: "Mock Parliament - Debate & Communication",
    filename: "Mock Parliament  Sharpening Debate & Communication_20251011_113346_0000.pdf",
    description: "Sharpen your debate and communication skills",
    category: "Debate Skills"
  },
  {
    id: 7,
    title: "Entrepreneur Tips",
    filename: "Purple and Yellow Illustrated Entrepreneur Tips LinkedIn Carousel_20251011_112108_0000.pdf",
    description: "Essential communication tips for entrepreneurs",
    category: "Professional Skills"
  },
  {
    id: 8,
    title: "Communication Excellence - Part 1",
    filename: "Take a look at my Canva design!.pdf",
    description: "Foundation of effective communication",
    category: "Communication Skills"
  },
  {
    id: 9,
    title: "Communication Excellence - Part 2",
    filename: "Take a look at my Canva design!(1).pdf",
    description: "Advanced communication strategies",
    category: "Communication Skills"
  },
  {
    id: 10,
    title: "Communication Excellence - Part 3",
    filename: "Take a look at my Canva design!(2).pdf",
    description: "Practical communication techniques",
    category: "Communication Skills"
  },
  {
    id: 11,
    title: "Communication Excellence - Part 4",
    filename: "Take a look at my Canva design!(3).pdf",
    description: "Professional communication mastery",
    category: "Communication Skills"
  },
  {
    id: 12,
    title: "Communication Excellence - Part 5",
    filename: "Take a look at my Canva design!(4).pdf",
    description: "Complete communication toolkit",
    category: "Communication Skills"
  },
  {
    id: 13,
    title: "The Power of Pausing",
    filename: "The Power of Pausing — Speaking with Control_20251012_010327_0000.pdf",
    description: "Learn to speak with control using strategic pauses",
    category: "Speaking Skills"
  },
  {
    id: 14,
    title: "Think on Your Feet",
    filename: "Think on Your Feet — Answering Unexpected Questions_20251011_220430_0000.pdf",
    description: "Master the art of answering unexpected questions",
    category: "Interview Skills"
  },
  {
    id: 15,
    title: "Social Media Marketing",
    filename: "Yellow Illustrative Social Media Marketing Carousel Instagram Post (LinkedI_20251011_171320_0000.pdf",
    description: "Effective communication for social media marketing",
    category: "Professional Skills"
  }
]

const categories = Array.from(new Set(resources.map(r => r.category)))

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Interview Skills': 'from-blue-500 to-indigo-600',
      'Speaking Skills': 'from-purple-500 to-violet-600',
      'Public Speaking': 'from-orange-500 to-amber-600',
      'Debate Skills': 'from-emerald-500 to-teal-600',
      'Professional Skills': 'from-pink-500 to-rose-600',
      'Communication Skills': 'from-cyan-500 to-blue-600'
    }
    return colors[category] || 'from-gray-500 to-gray-600'
  }

  return (
    <>
      <SEO 
        title="The Rretoriq Guide - Learning Materials | Rretoriq"
        description="Access our comprehensive collection of communication, interview, and public speaking resources. Download guides, tips, and strategies to enhance your skills."
        keywords="communication resources, interview guides, public speaking materials, learning resources, professional development"
      />

      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              The Rretoriq Guide
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
              Explore our curated collection of guides, tips, and strategies to enhance your communication, interview, and public speaking skills.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
                selectedCategory === 'All'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
              }`}
            >
              All Resources
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map(resource => (
              <div
                key={resource.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                {/* PDF Preview */}
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(resource.category)} opacity-20`}></div>
                  <iframe
                    src={`/resources/${encodeURIComponent(resource.filename)}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full pointer-events-none"
                    title={resource.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button
                      onClick={() => setSelectedResource(resource)}
                      className="bg-white text-gray-900 px-6 py-2.5 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      View Full PDF
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 rounded-lg text-xs font-bold text-white bg-gradient-to-r ${getCategoryColor(resource.category)} mb-3`}>
                    {resource.category}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {resource.description}
                  </p>
                  
                  <button
                    onClick={() => setSelectedResource(resource)}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2.5 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </div>

      {/* Full PDF Viewer Modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full h-full max-w-6xl max-h-[95vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
              <div className="flex-1 min-w-0 pr-4">
                <h2 className="text-xl font-bold text-gray-900 truncate">{selectedResource.title}</h2>
                <p className="text-sm text-gray-600 mt-1 truncate">{selectedResource.description}</p>
              </div>
              <button
                onClick={() => setSelectedResource(null)}
                className="p-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden min-h-0">
              <iframe
                src={`/resources/${encodeURIComponent(selectedResource.filename)}#toolbar=0&navpanes=0&view=FitH`}
                className="w-full h-full"
                title={selectedResource.title}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
