import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [showNavbar, setShowNavbar] = useState(false); // Hidden by default
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true); // Scrolling up
      } else {
        setShowNavbar(false); // Scrolling down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow-md px-6 py-4 z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/Digital Spaniel logo01-01.png"
            alt="Digital Spaniel Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {['services', 'work', 'about', 'blog', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setActiveLink(item)}
              className={`${
                activeLink === item ? 'text-blue-300 underline' : 'text-black'
              } hover:text-black transition-colors`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
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
        <div className="md:hidden mt-4 space-y-2 px-6">
          {['services', 'work', 'about', 'blog', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => {
                setActiveLink(item);
                setIsOpen(false); // close menu after click
              }}
              className="block text-gray-700 hover:text-blue-500"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
