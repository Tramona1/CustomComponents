'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-2xl text-black">
              Your Company
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/how-it-works" className="text-black hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/solutions" className="text-black hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="/why-us" className="text-black hover:text-primary transition-colors">
              Why Us
            </Link>
            <Link href="/about" className="text-black hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-black hover:text-primary transition-colors">
              Pricing
            </Link>
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link href="https://calendly.com/yourcompany/consultation" target="_blank" className="btn btn-primary">
              Book a Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="/how-it-works"
              className="block px-3 py-2 text-black hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/solutions"
              className="block px-3 py-2 text-black hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/why-us"
              className="block px-3 py-2 text-black hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-black hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 text-black hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="https://calendly.com/yourcompany/consultation"
              target="_blank"
              className="block px-3 py-2 mt-4 text-center text-white bg-primary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 