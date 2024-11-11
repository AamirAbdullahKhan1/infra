import React, { useState } from 'react';
import { Star, Calendar, Clock, MapPin, Book } from 'lucide-react';
import hlpc from '../images/hlpc.jpg'

const EquipmentDetailPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const equipment = {
    id: 1,
    name: "High-Performance Liquid Chromatograph",
    institution: "IIT Bombay",
    department: "Chemistry Department",
    image: hlpc,
    description: "A High-Performance Liquid Chromatograph (HPLC) is an analytical chemistry instrument used to separate, identify, and quantify each component in a mixture. It relies on pumps to pass a pressurized liquid solvent containing the sample mixture through a column filled with a solid adsorbent material.",
    usage: "HPLC is widely used in biochemistry and analytical chemistry to separate, identify, and quantify active compounds. It's particularly useful in the pharmaceutical industry for drug development and quality control.",
    rating: 4.7,
    totalReviews: 156,
    availability: [
      { date: '2023-06-10', slots: ['09:00', '11:00', '14:00', '16:00'] },
      { date: '2023-06-11', slots: ['10:00', '13:00', '15:00'] },
      { date: '2023-06-12', slots: ['09:00', '11:00', '14:00'] },
    ]
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setSelectedTime('');
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      alert(`Booking requested for ${selectedDate} at ${selectedTime}`);
      // Here you would typically send the booking request to your backend
    } else {
      alert('Please select both a date and time before booking.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={equipment.image} alt={equipment.name} />
          </div>
          <div className="p-8 w-full">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="block mt-1 text-2xl leading-tight font-bold text-black">{equipment.name}</h2>
                <p className="mt-2 text-gray-500">{equipment.institution} - {equipment.department}</p>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-600">{equipment.rating} ({equipment.totalReviews} reviews)</span>
              </div>
            </div>
            
            <p className="mt-4 text-gray-700">{equipment.description}</p>
            
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Usage</h3>
            <p className="mt-2 text-gray-700">{equipment.usage}</p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Book Equipment</h3>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                    Select Date
                  </label>
                  <select 
                    id="date" 
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedDate}
                    onChange={handleDateChange}
                  >
                    <option value="">Choose a date</option>
                    {equipment.availability.map(day => (
                      <option key={day.date} value={day.date}>{day.date}</option>
                    ))}
                  </select>
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                    Select Time
                  </label>
                  <select 
                    id="time" 
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    disabled={!selectedDate}
                  >
                    <option value="">Choose a time</option>
                    {selectedDate && equipment.availability.find(day => day.date === selectedDate)?.slots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button 
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleBooking}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <span>Location: Room 301, Chemistry Building</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-400 mr-2" />
              <span>Duration: 2 hours per session</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <span>Available: Monday to Friday</span>
            </div>
            <div className="flex items-center">
              <Book className="h-5 w-5 text-gray-400 mr-2" />
              <span>Training Required: Yes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetailPage;