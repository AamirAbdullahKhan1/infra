import React from 'react'
import { Link } from 'react-router-dom'

const ResourceCard = ({ title, description, link, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link to={link} className="text-blue-600 hover:underline">
      Explore {title}
    </Link>
  </div>
)

const FeaturedItem = ({ title, institution, category }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-sm text-gray-600">{institution}</p>
    <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
      {category}
    </span>
  </div>
)

const RecommendedCollege = ({ name, specialization }) => (
  <div className="flex items-center space-x-3 mb-4">
    <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
      <span className="text-xl font-bold text-gray-500">{name.charAt(0)}</span>
    </div>
    <div>
      <h4 className="text-sm font-semibold">{name}</h4>
      <p className="text-xs text-gray-600">{specialization}</p>
    </div>
  </div>
)

export default function Resource() {
  const featuredEquipment = [
    { title: "High-Performance Liquid Chromatograph", institution: "IIT Bombay", category: "Chemistry" },
    { title: "3D Bioprinter", institution: "IISc Bangalore", category: "Bioengineering" },
    { title: "Scanning Electron Microscope", institution: "IIT Delhi", category: "Materials Science" },
  ]

  const featuredLabs = [
    { title: "Artificial Intelligence Research Lab", institution: "IIT Madras", category: "Computer Science" },
    { title: "Nanomaterials Synthesis Lab", institution: "IIT Kanpur", category: "Nanotechnology" },
    { title: "Renewable Energy Systems Lab", institution: "IIT Kharagpur", category: "Energy" },
  ]

  const featuredIncubators = [
    { title: "Research Park", institution: "IIT Madras", category: "Technology" },
    { title: "Atal Incubation Centre", institution: "BITS Pilani", category: "Innovation" },
    { title: "Society for Innovation and Entrepreneurship", institution: "IIT Bombay", category: "Startups" },
  ]

  const recommendedColleges = [
    { name: "IIT Delhi", specialization: "Engineering & Technology" },
    { name: "IISc Bangalore", specialization: "Science & Research" },
    { name: "AIIMS New Delhi", specialization: "Medical Sciences" },
    { name: "IIM Ahmedabad", specialization: "Management" },
    { name: "TIFR Mumbai", specialization: "Fundamental Research" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[80px]">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">InfraShare Resource Hub</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Available Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <ResourceCard
                title="Equipment"
                description="Book state-of-the-art equipment for your research and projects."
                link="/equipments"
                icon={<svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>}
              />
              <ResourceCard
                title="Research Labs"
                description="Access cutting-edge research facilities and collaborate with experts."
                link="/researchlabs"
                icon={<svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
              />
              <ResourceCard
                title="Incubation Centers"
                description="Turn your ideas into reality with support from top incubation centers."
                link="/incubation"
                icon={<svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 2 0 011 1v5m-4 0h4" /></svg>}
              />
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Resources</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Equipment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {featuredEquipment.map((item, index) => (
                    <FeaturedItem key={index} {...item} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Research Labs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {featuredLabs.map((item, index) => (
                    <FeaturedItem key={index} {...item} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Leading Incubation Centers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {featuredIncubators.map((item, index) => (
                    <FeaturedItem key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended Colleges</h2>
              <div>
                {recommendedColleges.map((college, index) => (
                  <RecommendedCollege key={index} {...college} />
                ))}
              </div>
              <Link to="/recommendedclg" className="mt-4 inline-block text-blue-600 hover:underline">
                View all colleges
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}