import React, { useState } from 'react';

const researchLabsData = [
  { id: 1, name: "Artificial Intelligence Research Lab", category: "Computer Science", institution: "IIT Madras", availability: "Open", description: "Focuses on machine learning, natural language processing, and computer vision research." },
  { id: 2, name: "Nanomaterials Synthesis Lab", category: "Nanotechnology", institution: "IIT Kanpur", availability: "By Appointment", description: "Specializes in the synthesis and characterization of novel nanomaterials." },
  { id: 3, name: "Renewable Energy Systems Lab", category: "Energy", institution: "IIT Kharagpur", availability: "Open", description: "Conducts research on solar, wind, and other renewable energy technologies." },
  { id: 4, name: "Biomedical Engineering Lab", category: "Bioengineering", institution: "IISc Bangalore", availability: "Restricted", description: "Focuses on developing new medical devices and tissue engineering solutions." },
  { id: 5, name: "Quantum Computing Lab", category: "Physics", institution: "TIFR Mumbai", availability: "By Appointment", description: "Researches quantum algorithms and quantum information theory." },
  { id: 6, name: "Environmental Science Lab", category: "Environmental Studies", institution: "JNU Delhi", availability: "Open", description: "Conducts research on climate change, pollution, and ecosystem dynamics." },
  { id: 7, name: "Robotics and Automation Lab", category: "Mechanical Engineering", institution: "IIT Bombay", availability: "Open", description: "Focuses on developing advanced robotics systems and automation technologies." },
  { id: 8, name: "Structural Biology Lab", category: "Biology", institution: "NCBS Bangalore", availability: "Restricted", description: "Studies the structure and function of biological macromolecules." },
];

const categories = ["All", ...new Set(researchLabsData.map(item => item.category))];
const availabilityOptions = ["All", "Open", "By Appointment", "Restricted"];

const ResearchLabCard = ({ name, category, institution, availability, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={`/placeholder.svg?height=200&width=300&text=${encodeURIComponent(name)}`} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{institution}</p>
      <p className="text-sm text-gray-500 mb-2">{category}</p>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          availability === 'Open' ? 'bg-green-100 text-green-800' :
          availability === 'By Appointment' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {availability}
        </span>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Request Access
        </button>
      </div>
    </div>
  </div>
);

export default function ResearchLabsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [availabilityFilter, setAvailabilityFilter] = useState('All');

  const filteredLabs = researchLabsData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === 'All' || item.category === categoryFilter) &&
    (availabilityFilter === 'All' || item.availability === availabilityFilter)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Research Labs</h1>
        
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search research labs..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="flex flex-wrap gap-4">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value)}
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {availabilityOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLabs.map(item => (
            <ResearchLabCard key={item.id} {...item} />
          ))}
        </div>

        {filteredLabs.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No research labs found matching your criteria.</p>
        )}
      </main>
    </div>
  );
}