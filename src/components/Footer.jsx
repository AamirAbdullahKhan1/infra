import React from 'react';
import { Share2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Share2 className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">InfraShare</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting institutions and researchers across India through shared infrastructure and resources.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@infrashare.in</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Home</a></li>
              <li><a href="#features" className="hover:text-indigo-400">Features</a></li>
              <li><a href="#about" className="hover:text-indigo-400">About</a></li>
              <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Equipment List</a></li>
              <li><a href="#" className="hover:text-indigo-400">Lab Directory</a></li>
              <li><a href="#" className="hover:text-indigo-400">Booking Guide</a></li>
              <li><a href="#" className="hover:text-indigo-400">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} InfraShare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}