'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close solutions dropdown when mobile menu is toggled
    if (isSolutionsOpen) setIsSolutionsOpen(false);
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

  // Check viewport width to determine if we should show mobile menu
  useEffect(() => {
    const checkWidth = () => {
      setShowMobileMenu(window.innerWidth < 900);
    };
    
    window.addEventListener('resize', checkWidth);
    checkWidth(); // Check on initial load
    
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Update viewport height for mobile browsers
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    window.addEventListener('resize', updateHeight);
    updateHeight();
    
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className={`sticky top-0 bg-white z-50 transition-all duration-250 border-b border-gray-100 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center mr-1 sm:mr-2">
                <span className="text-white font-bold text-xs sm:text-base">AI</span>
              </div>
              <span className="font-bold text-base sm:text-xl text-text-main">SingletonsGroup</span>
            </Link>
          </div>

          {/* Desktop Navigation - Use state-based conditional instead of CSS classes */}
          {!showMobileMenu && (
            <nav className="flex items-center space-x-2 lg:space-x-8">
              <Link 
                href="/how-it-works" 
                className={`text-sm lg:text-[15px] font-semibold transition-colors ${isActive('/how-it-works') ? 'text-[#1F2937]' : 'text-[#1F2937] hover:text-text-accent'}`}
              >
                How It Works
              </Link>
              <div className="relative group">
                <button 
                  className={`text-sm lg:text-[15px] font-semibold transition-colors inline-flex items-center ${
                    isActive('/solutions') || isActive('/all-solutions') 
                      ? 'text-[#1F2937]' 
                      : 'text-[#1F2937] hover:text-text-accent'
                  }`}
                  onClick={toggleSolutions}
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  Solutions
                  <svg className="ml-1 w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                    className="block px-4 py-2 text-sm lg:text-[15px] text-[#1F2937] hover:bg-gray-100 hover:text-text-accent"
                  >
                    Popular Solutions
                  </Link>
                  <Link
                    href="/all-solutions"
                    className="block px-4 py-2 text-sm lg:text-[15px] text-[#1F2937] hover:bg-gray-100 hover:text-text-accent"
                  >
                    All Solutions Catalog
                  </Link>
                </div>
              </div>
              <Link 
                href="/why-choose-us" 
                className={`text-sm lg:text-[15px] font-semibold transition-colors ${isActive('/why-choose-us') ? 'text-[#1F2937]' : 'text-[#1F2937] hover:text-text-accent'}`}
              >
                Why Choose Us
              </Link>
              <Link 
                href="/about" 
                className={`text-sm lg:text-[15px] font-semibold transition-colors ${isActive('/about') ? 'text-[#1F2937]' : 'text-[#1F2937] hover:text-text-accent'}`}
              >
                About
              </Link>
              <Link 
                href="/pricing" 
                className={`text-sm lg:text-[15px] font-semibold transition-colors ${isActive('/pricing') ? 'text-[#1F2937]' : 'text-[#1F2937] hover:text-text-accent'}`}
              >
                Pricing
              </Link>
              <Link 
                href="/partners" 
                className={`text-sm lg:text-[15px] font-semibold transition-colors ${isActive('/partners') ? 'text-[#1F2937]' : 'text-[#1F2937] hover:text-text-accent'}`}
              >
                Partners
              </Link>
            </nav>
          )}

          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            {/* CTA Button (Desktop) */}
            {!showMobileMenu && (
              <Link 
                href="https://calendly.com/blake-singletonsgroup/30min" 
                target="_blank" 
                className="inline-flex items-center justify-center px-3 lg:px-6 py-1.5 lg:py-2.5 border border-transparent text-xs lg:text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-sm transition-all"
              >
                Schedule a Free Intro Call
              </Link>
            )}

            {/* Mobile Menu Button */}
            {showMobileMenu && (
              <button 
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-1.5 rounded-md text-text-sub hover:text-text-accent focus:outline-none"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      {showMobileMenu && (
        <div 
          className={`fixed inset-0 bg-white z-40 transition-transform transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
        >
          <div className="flex flex-col h-full">
            {/* Mobile menu header with close button */}
            <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
              <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-1.5">
                  <span className="text-white font-bold text-xs">AI</span>
                </div>
                <span className="font-bold text-base text-text-main">SingletonsGroup</span>
              </Link>
              <button 
                onClick={toggleMenu}
                className="p-1.5 rounded-md text-text-sub hover:text-text-accent focus:outline-none"
              >
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Mobile menu links */}
            <div className="px-4 py-4 overflow-y-auto flex-grow">
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/how-it-works"
                  className={`px-1 py-1.5 text-base sm:text-lg font-semibold ${isActive('/how-it-works') ? 'text-primary' : 'text-[#1F2937]'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                
                {/* Solutions with nested links for mobile */}
                <div className="py-1.5">
                  <button
                    className={`flex justify-between items-center w-full text-base sm:text-lg font-semibold ${
                      isActive('/solutions') || isActive('/all-solutions') 
                        ? 'text-primary' 
                        : 'text-[#1F2937]'
                    }`}
                    onClick={toggleSolutions}
                  >
                    <span>Solutions</span>
                    <svg 
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${isSolutionsOpen ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Nested solution links */}
                  <div className={`pl-4 mt-1.5 space-y-1.5 overflow-hidden transition-all ease-in-out duration-300 ${isSolutionsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <Link
                      href="/solutions"
                      className={`block py-1.5 text-base sm:text-lg ${isActive('/solutions') ? 'text-primary font-semibold' : 'text-[#1F2937]'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Popular Solutions
                    </Link>
                    <Link
                      href="/all-solutions"
                      className={`block py-1.5 text-base sm:text-lg ${isActive('/all-solutions') ? 'text-primary font-semibold' : 'text-[#1F2937]'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Solutions Catalog
                    </Link>
                  </div>
                </div>
                
                <Link
                  href="/why-choose-us"
                  className={`px-1 py-1.5 text-base sm:text-lg font-semibold ${isActive('/why-choose-us') ? 'text-primary' : 'text-[#1F2937]'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why Choose Us
                </Link>
                <Link
                  href="/about"
                  className={`px-1 py-1.5 text-base sm:text-lg font-semibold ${isActive('/about') ? 'text-primary' : 'text-[#1F2937]'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  className={`px-1 py-1.5 text-base sm:text-lg font-semibold ${isActive('/pricing') ? 'text-primary' : 'text-[#1F2937]'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/partners"
                  className={`px-1 py-1.5 text-base sm:text-lg font-semibold ${isActive('/partners') ? 'text-primary' : 'text-[#1F2937]'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Partners
                </Link>
              </nav>
            </div>
            
            {/* Mobile CTA at bottom */}
            <div className="px-4 py-4 border-t border-gray-100">
              <Link
                href="https://calendly.com/blake-singletonsgroup/30min"
                target="_blank"
                className="block w-full px-4 py-2.5 text-center text-white bg-primary hover:bg-primary-dark rounded-full shadow-sm font-medium text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule a Free Intro Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 