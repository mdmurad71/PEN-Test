import React, { useState } from 'react';

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row">
        <div className="mb-10 ml-10 mt-5">
          <img
            src="/Digital Spaniel logo01-01.png"
            alt="Digital Spaniel Logo"
            className="h-10 w-auto"
          />
        </div>
      {/* Left Content */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 md:px-16 py-12">
        {/* Logo */}


        {/* Text Content */}
        <p className="text-sm text-pink-600 font-semibold uppercase tracking-wide ml-4">
          Brand, Dev, Ecom, Marketing
        </p>
        <h1 className="text-4xl font-bold text-gray-800 mt-4 ml-4">
          We unleash <br />
          <span className="text-gray-600 font-light">business potential</span>
        </h1>
        <p className="text-gray-600 mt-6 ml-4">
          We create brand experiences which are memorable and distinct. Our experienced
          team create and develop brands with personality and resonance.
        </p>
        <a href="#" className="mt-6 text-pink-600 underline font-semibold ml-4">
          Let’s talk
        </a>
      </div>

      {/* Right Image Section */}
      <div
        className="w-full md:w-1/2 relative bg-cover bg-center h-96 md:h-auto"
        style={{ backgroundImage: `url('/Spaniel01_gradient.png')` }}
      >
        {/* Nav Wrapper */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8">
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="text-white hover:text-blue-300">Services</a>
            <a href="#work" className="text-white hover:text-blue-300">Work</a>
            <a href="#about" className="text-white hover:text-blue-300">About</a>
            <a href="#blog" className="text-white hover:text-blue-300">Blog</a>
            <a href="#contact" className="text-white hover:text-blue-300">Contact</a>
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-14 right-4 bg-black/80 px-6 py-4 rounded-md md:hidden space-y-2 z-50">
            <a href="#services" className="block text-white hover:text-blue-300">Services</a>
            <a href="#work" className="block text-white hover:text-blue-300">Work</a>
            <a href="#about" className="block text-white hover:text-blue-300">About</a>
            <a href="#blog" className="block text-white hover:text-blue-300">Blog</a>
            <a href="#contact" className="block text-white hover:text-blue-300">Contact</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
