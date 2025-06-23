'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full">
      {/* Language Switcher */}
      <div className="flex justify-end text-sm p-3 pr-4 sm:pr-6 bg-[#f7faf9]">
        <span className="text-gray-600">English | </span>
        <a href="#" className="text-blue-600 ml-1">Français</a>
      </div>

      {/* Centre Title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-left py-4 px-4 sm:px-6 bg-[#f7faf9]">
        <div className="flex items-start sm:items-center gap-3">
          <img src="/images/pk-logo.png" alt="PK Logo" className="h-10 sm:h-12 mb-2 sm:mb-0" />
          <h2 className="text-gray-700 font-semibold text-lg">
            Pithonkids
          </h2>
        </div>

        {/* Hamburger Menu */}
        <div className="sm:hidden flex-row justify-end flex">
          <button onClick={toggleMenu} className="text-black">
            <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`bg-[#004fcc] text-white font-medium py-3 px-4 sm:px-6 transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} block`}>
        <ul className="flex flex-col gap-3 sm:flex-row sm:justify-around sm:gap-8 text-sm sm:text-base">
          <li><Link href="/" className="block">Home</Link></li>
          <li>
            <Link href="/about" className="block">
              About Us
            </Link>
          </li>
          <li><Link href="/news" className="block">Gallery</Link></li>
          <li><Link href="/contact" className="block">Contact Us</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;