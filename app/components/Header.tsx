'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className={`sticky top-0 bg-white z-50 transition-all duration-250 border-b border-gray-100 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation grouped together on left */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 mr-8">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-2">
                  <span className="text-white font-bold">AI</span>
                </div>
                <span className="font-bold text-xl text-text-main">SingletonsGroup</span>
              </Link>
            </div>

            {/* Desktop Navigation - Now directly next to logo */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/how-it-works" 
                className={`text-[15px] font-semibold transition-colors ${isActive('/how-it-works') ? 'text-[#1F2937]' : 'text-[#1F2937] hover:text-text-accent'}`}
              >
                How It Works
              </Link>
              <div className="relative group">
                <button 
                  className={`text-[15px] font-semibold transition-colors inline-flex items-center ${
                    isActive('/solutions') || isActive('/all-solutions') 
                      ? 'text-[#1F2937]' 
                      : 'text-[#1F2937] hover:text-text-accent'
                  }`}
                  onClick={toggleSolutions}
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  Solutions
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Solutions Dropdown */}
                <div 
                  className={`absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 transition-all duration-200 origin-top-left ${
                    isSolutionsOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 invisible'
                  }`}
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  <Link
                    href="/solutions"
                    className="block px-4 py-2 text-[15px] text-[#1F2937] hover:bg-gray-100 hover:text-text-accent"
                  >
                    Popular Solutions
                  </Link>
                  <Link
                    href="/all-solutions"
                    className="block px-4 py-2 text-[15px] text-[#1F2937] hover:bg-gray-100 hover:text-text-accent"
                  >
                    All Solutions Catalog
                  </Link>
                </div>
              </div>
              <Link 
                href="/why-choose-us" 
                className={`text-[15px] font-semibold transition-colors ${isActive('/why-choose-us') ? 'text-[#1F2937]' : 'text-[#1F2937] hover:text-text-accent'}`}
              >
                Why Choose Us
              </Link>
              <Link 
                href="/about" 
                className={`text-[15px] font-semibold transition-colors ${isActive('/about') ? 'text-[#1F2937]' : 'text-[#1F2937] hover:text-text-accent'}`}
              >
                About
              </Link>
              <Link 
                href="/pricing" 
                className={`text-[15px] font-semibold transition-colors ${isActive('/pricing') ? 'text-[#1F2937]' : 'text-[#1F2937] hover:text-text-accent'}`}
              >
                Pricing
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {/* Partners link moved next to CTA */}
            <div className="hidden md:block">
              <Link 
                href="/partners" 
                className={`text-[15px] font-semibold transition-colors px-4 py-2 ${isActive('/partners') ? 'text-[#1F2937]' : 'text-[#1F2937] hover:text-text-accent'}`}
              >
                Partners
              </Link>
            </div>
            
            {/* CTA Button (Desktop) - Now on far right */}
            <div className="hidden md:block">
              <Link 
                href="https://calendly.com/singletonsgroup/consultation" 
                target="_blank" 
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-sm transition-all"
              >
                Schedule a Free Intro Call
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-text-sub hover:text-text-accent focus:outline-none"
                aria-expanded={isMenuOpen}
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="/how-it-works"
              className={`block px-3 py-2 rounded-md text-[15px] font-semibold ${isActive('/how-it-works') ? 'text-[#1F2937]' : 'text-[#1F2937] hover:text-text-accent'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            
            {/* Solutions with nested links for mobile */}
            <div>
              <button
                className={`flex justify-between items-center w-full px-3 py-2 rounded-md text-[15px] font-semibold ${
                  isActive('/solutions') || isActive('/all-solutions') 
                    ? 'text-[#1F2937]' 
                    : 'text-[#1F2937] hover:text-text-accent'
                }`}
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                <span>Solutions</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Nested solution links */}
              {isSolutionsOpen && (
                <div className="pl-4 mt-1">
                  <Link
                    href="/solutions"
                    className={`block px-3 py-2 rounded-md text-[15px] ${isActive('/solutions') ? 'text-[#1F2937] font-semibold' : 'text-[#1F2937] hover:text-text-accent'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Popular Solutions
                  </Link>
                  <Link
                    href="/all-solutions"
                    className={`block px-3 py-2 rounded-md text-[15px] ${isActive('/all-solutions') ? 'text-[#1F2937] font-semibold' : 'text-[#1F2937] hover:text-text-accent'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Solutions Catalog
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              href="/why-choose-us"
              className={`block px-3 py-2 rounded-md text-[15px] font-semibold ${isActive('/why-choose-us') ? 'text-[#1F2937]' : 'text-[#1F2937] hover:text-text-accent'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md text-[15px] font-semibold ${isActive('/about') ? 'text-[#1F2937]' : 'text-[#1F2937] hover:text-text-accent'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className={`block px-3 py-2 rounded-md text-[15px] font-semibold ${isActive('/pricing') ? 'text-[#1F2937]' : 'text-[#1F2937] hover:text-text-accent'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/partners"
              className={`block px-3 py-2 rounded-md text-[15px] font-semibold ${isActive('/partners') ? 'text-[#1F2937]' : 'text-[#1F2937] hover:text-text-accent'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </Link>
            <Link
              href="https://calendly.com/singletonsgroup/consultation"
              target="_blank"
              className="block px-3 py-2.5 mt-4 text-center text-white bg-primary hover:bg-primary-dark rounded-full shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule a Free Intro Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 