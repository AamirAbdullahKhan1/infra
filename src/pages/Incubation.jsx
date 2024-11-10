import React, { useState } from 'react';

const incubationCentersData = [
  { id: 1, name: "Research Park", category: "Technology", institution: "IIT Madras", status: "Active", description: "A hub for technology startups and industry collaborations." },
  { id: 2, name: "Atal Incubation Centre", category: "Innovation", institution: "BITS Pilani", status: "Active", description: "Supports startups in various domains with a focus on social impact." },
  { id: 3, name: "Society for Innovation and Entrepreneurship", category: "Startups", institution: "IIT Bombay", status: "Active", description: "Nurtures technology and knowledge-based enterprises." },
  { id: 4, name: "Centre for Innovation Incubation and Entrepreneurship", category: "Business", institution: "IIM Ahmedabad", status: "Active", description: "Incubates and accelerates early-stage startups." },
  { id: 5, name: "Foundation for Innovation and Technology Transfer", category: "Technology Transfer", institution: "IIT Delhi", status: "Active", description: "Facilitates technology transfer and industry-academia partnerships." },
  { id: 6, name: "Entrepreneurship Development Center", category: "Entrepreneurship", institution: "CSIR-NCL Pune", status: "Active", description: "Supports innovation in chemical and materials sciences." },
  { id: 7, name: "NSRCEL", category: "Social Entrepreneurship", institution: "IIM Bangalore", status: "Active", description: "Focuses on incubating social ventures and non-profits." },
  { id: 8, name: "TBI", category: "Biotechnology", institution: "KIIT Bhubaneswar", status: "Active", description: "Specializes in biotechnology and healthcare startups." },
];

const categories = ["All", ...new Set(incubationCentersData.map(item => item.category))];
const statusOptions = ["All", "Active", "Full", "Accepting Applications"];

const IncubationCenterCard = ({ name, category, institution, status, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={`/placeholder.svg?height=200&width=300&text=${encodeURIComponent(name)}`} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{institution}</p>
      <p className="text-sm text-gray-500 mb-2">{category}</p>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          status === 'Active' ? 'bg-green-100 text-green-800' :
          status === 'Full' ? 'bg-red-100 text-red-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {status}
        </span>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export default function IncubationCentersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredCenters = incubationCentersData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === 'All' || item.category === categoryFilter) &&
    (statusFilter === 'All' || item.status === statusFilter)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Incubation Centers</h1>
        
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search incubation centers..."
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
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {statusOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCenters.map(item => (
            <IncubationCenterCard key={item.id} {...item} />
          ))}
        </div>

        {filteredCenters.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No incubation centers found matching your criteria.</p>
        )}
      </main>
    </div>
  );
}