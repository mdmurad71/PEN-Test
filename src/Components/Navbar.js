import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/Digital Spaniel logo01-01.png" alt="Digital Spaniel Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-700 hover:text-blue-500">Services</a>
          <a href="#work" className="text-gray-700 hover:text-blue-500">Work</a>
          <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#blog" className="text-gray-700 hover:text-blue-500">Blog</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 px-6">
          <a href="#services" className="block text-gray-700 hover:text-blue-500">Services</a>
          <a href="#work" className="block text-gray-700 hover:text-blue-500">Work</a>
          <a href="#about" className="block text-gray-700 hover:text-blue-500">About</a>
          <a href="#blog" className="block text-gray-700 hover:text-blue-500">Blog</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
}

