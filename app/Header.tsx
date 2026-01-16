'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white h-15 shadow-md relative z-50">
      <div className="container mx-auto flex items-center justify-between h-full px-4 md:px-0 max-w-5xl">
        <img src="https://assetwise.co.th/wp-content/themes/seed-spring/img/asw-logo_horizontal.svg" alt="AssetWise Logo" className="w-[120px] h-auto" />
        
        {/* Hamburger Button - Mobile Only */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center gap-4">
          <li><a href="/">Home</a></li>
          <li><a href="/#winners">Award Winners</a></li>
          <li><a href="/concept">Concept</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col px-4 py-4 gap-4">
          <li>
            <a href="/" onClick={closeMenu} className="block py-2 text-primary hover:text-primary-300">
              Home
            </a>
          </li>
          <li>
            <a href="/#winners" onClick={closeMenu} className="block py-2 text-primary hover:text-primary-300">
              Award Winners
            </a>
          </li>
          <li>
            <a href="/concept" onClick={closeMenu} className="block py-2 text-primary hover:text-primary-300">
              Concept
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={closeMenu} className="block py-2 text-primary hover:text-primary-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}