import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden py-9">
      {/* Background shapes */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute top-0 left-0 w-64 h-64 text-blue-100 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" />
        </svg>
        <svg className="absolute top-1/4 right-0 w-48 h-48 text-green-100 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100">
          <rect width="80" height="80" x="10" y="10" />
        </svg>
        <svg className="absolute bottom-0 left-1/4 w-56 h-56 text-purple-100 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 100 100">
          <polygon points="50 15, 100 100, 0 100" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About InfraShare
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empowering research and innovation across India
          </p>
        </header>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  InfraShare is dedicated to democratizing access to cutting-edge research infrastructure across India. We believe that by sharing resources, we can accelerate innovation and scientific progress for the benefit of all.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access to state-of-the-art equipment</li>
                  <li>Collaboration opportunities with top research labs</li>
                  <li>Support from leading incubation centers</li>
                  <li>A platform for knowledge exchange and networking</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "500+", label: "Institutions" },
                    { number: "10,000+", label: "Researchers" },
                    { number: "5,000+", label: "Equipment" },
                    { number: "1,000+", label: "Research Labs" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Join InfraShare</h2>
                  <p className="text-gray-600 mb-4">
                    Whether you're a researcher, institution, or industry partner, there's a place for you in the InfraShare community.
                  </p>
                  <Link to="/register" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Browse Resources",
                  description: "Explore our extensive catalog of equipment, labs, and incubation centers from top institutions across India.",
                  icon: (
                    <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Book and Collaborate",
                  description: "Reserve equipment, schedule lab time, or apply for incubation support with our streamlined booking system.",
                  icon: (
                    <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  title: "Innovate and Grow",
                  description: "Leverage shared resources to accelerate your research, develop new technologies, and bring your ideas to life.",
                  icon: (
                    <svg className="w-12 h-12 text-purple-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-6">Join the InfraShare community and take your research to the next level.</p>
          <Link to="/resources" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300">
            Explore Resources
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;