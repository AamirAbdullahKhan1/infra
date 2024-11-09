import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Share Research Infrastructure Across India
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Connect with top institutions to access their research equipment, labs, and incubation centers. 
              Transform your research possibilities with InfraShare.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
                Browse Equipment
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80"
              alt="Laboratory Equipment"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg z-40">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Building2 className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">100+</p>
                  <p className="text-sm text-gray-600">Partner Institutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}