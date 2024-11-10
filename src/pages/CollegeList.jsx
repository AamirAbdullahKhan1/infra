import React, { useState } from 'react';

const collegesData = [
  { name: "Indian Institute of Technology Delhi", type: "Engineering & Technology", location: "New Delhi", ranking: 1 },
  { name: "SRM Institute of Science and Technology", type: "Engineering & Technology", location: "Chennai", ranking: 24 },
  { name: "Indian Institute of Science", type: "Science & Research", location: "Bangalore", ranking: 2 },
  { name: "Indian Institute of Technology Bombay", type: "Engineering & Technology", location: "Mumbai", ranking: 3 },
  { name: "All India Institute of Medical Sciences", type: "Medical Sciences", location: "New Delhi", ranking: 4 },
  { name: "Indian Institute of Technology Madras", type: "Engineering & Technology", location: "Chennai", ranking: 5 },
  { name: "Indian Institute of Management Ahmedabad", type: "Management", location: "Ahmedabad", ranking: 6 },
  { name: "Jawaharlal Nehru University", type: "Multidisciplinary", location: "New Delhi", ranking: 7 },
  { name: "Banaras Hindu University", type: "Multidisciplinary", location: "Varanasi", ranking: 8 },
  { name: "Jadavpur University", type: "Multidisciplinary", location: "Kolkata", ranking: 9 },
  { name: "Anna University", type: "Engineering & Technology", location: "Chennai", ranking: 10 },
  { name: "University of Delhi", type: "Multidisciplinary", location: "Delhi", ranking: 11 },
  { name: "Indian Institute of Technology Kanpur", type: "Engineering & Technology", location: "Kanpur", ranking: 12 },
  { name: "Indian Institute of Technology Kharagpur", type: "Engineering & Technology", location: "Kharagpur", ranking: 13 },
  { name: "Indian Institute of Technology Roorkee", type: "Engineering & Technology", location: "Roorkee", ranking: 14 },
  { name: "Savitribai Phule Pune University", type: "Multidisciplinary", location: "Pune", ranking: 15 },
  { name: "Vellore Institute of Technology", type: "Engineering & Technology", location: "Chennai", ranking: 8 },
  { name: "Rajalaskhmi Engineering College", type: "Engineering & Technology", location: "Chennai", ranking: 28 },
];

const CollegeCard = ({ name, type, location, ranking }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600 mb-2">{type}</p>
    <p className="text-gray-600 mb-2">{location}</p>
    <div className="flex justify-between items-center mt-4">
      <span className="text-sm text-gray-500">Ranking: {ranking}</span>
      <a href="#" className="text-blue-600 hover:underline text-sm font-medium uppercase">View Details</a>
    </div>
  </div>
);

const FilterButton = ({ label, isActive, onClick }) => (
  <button
    className={`px-4 py-2 rounded-full text-sm font-medium ${
      isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Engineering & Technology', 'Science & Research', 'Medical Sciences', 'Management', 'Multidisciplinary'];

  const filteredColleges = collegesData.filter(college => 
    (activeFilter === 'All' || college.type === activeFilter) &&
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Colleges and Institutions in India</h1>
        
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search colleges..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map(filter => (
            <FilterButton
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.map((college, index) => (
            <CollegeCard key={index} {...college} />
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No colleges found matching your criteria.</p>
        )}
      </main>
    </div>
  );
}