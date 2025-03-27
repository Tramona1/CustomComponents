'use client';

import { useState, useEffect } from 'react';

const DecorativeBubbles = () => {
  const [opacity, setOpacity] = useState(1);
  
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Fade out gradually as user scrolls down (fully transparent by 300px)
      const newOpacity = Math.max(0, 1 - (scrollY / 300));
      setOpacity(newOpacity);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state based on current scroll position
    handleScroll();
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Don't render component at all when fully transparent (improves performance)
  if (opacity <= 0) return null;

  return (
    <div 
      className="fixed top-0 left-0 w-full md:w-1/2 h-80 overflow-hidden pointer-events-none z-10"
      style={{ 
        opacity, 
        transition: 'opacity 0.3s ease-out',
        visibility: opacity === 0 ? 'hidden' : 'visible'
      }}
    >
      {/* Bubbles visible on all screens */}
      <div className="absolute top-12 left-12 w-16 h-16 rounded-full bg-primary opacity-5 animate-float"></div>
      <div className="absolute top-24 left-28 w-10 h-10 rounded-full bg-primary opacity-10 animate-float-delayed"></div>
      <div className="absolute top-40 left-16 w-8 h-8 rounded-full bg-primary opacity-8 animate-float-slow"></div>
      
      {/* Bubbles only visible on medium screens and up */}
      <div className="hidden md:block absolute top-24 left-36 w-10 h-10 rounded-full bg-primary opacity-10 animate-float-delayed"></div>
      <div className="hidden md:block absolute top-48 left-24 w-6 h-6 rounded-full bg-primary opacity-10 animate-float-slow"></div>
      <div className="hidden md:block absolute top-56 left-64 w-20 h-20 rounded-full bg-primary opacity-5 animate-float-delayed-slow"></div>
      <div className="hidden md:block absolute top-16 left-72 w-12 h-12 rounded-full bg-primary opacity-10 animate-pulse-slow"></div>
      <div className="hidden md:block absolute top-32 left-48 w-14 h-14 rounded-full bg-primary opacity-8 animate-float-slow"></div>
      <div className="hidden md:block absolute top-72 left-32 w-8 h-8 rounded-full bg-primary opacity-7 animate-float-delayed"></div>
      <div className="hidden md:block absolute top-8 left-96 w-10 h-10 rounded-full bg-primary opacity-6 animate-pulse-slow-2"></div>
    </div>
  );
};

export default DecorativeBubbles; 