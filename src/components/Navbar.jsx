import React from 'react';
import { Menu, X, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Share2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900"><Link to='/'>InfraShare</Link></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium uppercase"><Link to={'/'}>Home</Link></a>
              <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium uppercase"><Link to='/resources'>Resources</Link></a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium uppercase"><Link to={'/about'}>About</Link></a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium uppercase"><Link to='/contact'>Contact</Link></a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600"><Link to='/'>Home</Link></a>
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-indigo-600"><Link to='/resources'>Resources</Link></a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600"><Link to='/about'>About</Link></a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600"><Link to='/contact'>Contact</Link></a>
            <button className="w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}