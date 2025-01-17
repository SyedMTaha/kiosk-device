import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo on the left */}
        <img src={logo} alt="Logo" className="h-8" />

        {/* Centered Navigation Links (Desktop and Tablet) */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
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
          <button className="bg-[#143761] text-white py-2 px-4 rounded-md hover:bg-[#0c2a3b] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#DB1738]">
            Login
          </button>
          <button className="bg-[#DB1738] text-white py-2 px-4 rounded-md hover:bg-[#a2132c] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#143761]">
            Signup
          </button>
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
