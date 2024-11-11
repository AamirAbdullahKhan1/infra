import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const equipmentData = [
  { id: 1, name: "High-Performance Liquid Chromatograph", category: "Chemistry", institution: "IIT Bombay", availability: "Available", description: "Used for separating, identifying, and quantifying components in a mixture." },
  { id: 2, name: "3D Bioprinter", category: "Bioengineering", institution: "IISc Bangalore", availability: "In Use", description: "Used for creating cell patterns in a confined space using 3D printing technologies." },
  { id: 3, name: "Scanning Electron Microscope", category: "Materials Science", institution: "IIT Delhi", availability: "Available", description: "Produces images of a sample by scanning the surface with a focused beam of electrons." },
  { id: 4, name: "Nuclear Magnetic Resonance Spectrometer", category: "Chemistry", institution: "TIFR Mumbai", availability: "Maintenance", description: "Used for determining the structure of organic compounds." },
  { id: 5, name: "X-ray Diffractometer", category: "Physics", institution: "IISc Bangalore", availability: "Available", description: "Used for identifying the atomic and molecular structure of a crystal." },
  { id: 6, name: "Transmission Electron Microscope", category: "Biology", institution: "AIIMS New Delhi", availability: "In Use", description: "Used to observe fine detail in biological specimens." },
  { id: 7, name: "Mass Spectrometer", category: "Chemistry", institution: "IIT Madras", availability: "Available", description: "Used for measuring the mass-to-charge ratio of ions." },
  { id: 8, name: "Flow Cytometer", category: "Biology", institution: "NCBS Bangalore", availability: "Available", description: "Used for cell counting, cell sorting, and biomarker detection." },
];

const categories = ["All", ...new Set(equipmentData.map(item => item.category))];
const availabilityOptions = ["All", "Available", "In Use", "Maintenance"];

const EquipmentCard = ({ name, category, institution, availability, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={`/placeholder.svg?height=200&width=300&text=${encodeURIComponent(name)}`} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{institution}</p>
      <p className="text-sm text-gray-500 mb-2">{category}</p>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          availability === 'Available' ? 'bg-green-100 text-green-800' :
          availability === 'In Use' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {availability}
        </span>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          <Link to='/equipmentdetails'>Book Now</Link>
        </button>
      </div>
    </div>
  </div>
);

export default function EquipmentPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [availabilityFilter, setAvailabilityFilter] = useState('All');

  const filteredEquipment = equipmentData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === 'All' || item.category === categoryFilter) &&
    (availabilityFilter === 'All' || item.availability === availabilityFilter)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Equipment</h1>
        
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search equipment..."
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
          {filteredEquipment.map(item => (
            <EquipmentCard key={item.id} {...item} />
          ))}
        </div>

        {filteredEquipment.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No equipment found matching your criteria.</p>
        )}
      </main>
    </div>
  );
}