import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [touchStart, setTouchStart] = useState(0); // Track touch start position

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50 && currentScrollY > lastScrollY) {
      // Scrolling down, hide navbar
      setIsNavbarVisible(false);
    } else if (currentScrollY < lastScrollY || currentScrollY < 50) {
      // Scrolling up or near the top, show navbar
      setIsNavbarVisible(true);
    }

    setLastScrollY(currentScrollY); // Update last scroll position
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY); // Get the starting touch position
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientY;

    // If swiped up (touchStart > touchEnd), show navbar
    if (touchStart - touchEnd > 50) {
      setIsNavbarVisible(true);
    }
  };

  // Add event listeners for scroll and touch events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [lastScrollY, touchStart]);

  return (
    <header className={`transition-transform fixed top-0 w-full z-50 bg-[#FFEEEE] duration-300 ${isNavbarVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo on the left */}
        <img src={logo} alt="Logo" className="h-8" />

        {/* Centered Navigation Links (Desktop and Tablet) */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`/#${item.toLowerCase()}`}
                  className="text-[#143761] text-lg font-semibold hover:text-[#DB1738] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#DB1738]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login and Signup buttons on the right */}
        <div className="flex space-x-4">
          <Link to='/login' className="bg-[#143761] text-white py-2 px-4 rounded-md hover:bg-[#0c2a3b] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#DB1738]">
            Login
          </Link>
          <Link to="/signup" className="bg-[#DB1738] text-white py-2 px-4 rounded-md hover:bg-[#a2132c] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#143761]">
            Signup
          </Link>
        </div>
      </div>

      {/* Drop Icon for Mobile (Outside the Navbar) */}
      <div className="lg:hidden flex justify-center mt-4 relative">
        <button
          onClick={toggleMenu}
          className="text-[#143761] focus:outline-none absolute -top-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white py-4 px-6 shadow-md`}
      >
        <ul className="space-y-4">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-[#143761] text-lg font-semibold hover:text-[#DB1738] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#DB1738]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
