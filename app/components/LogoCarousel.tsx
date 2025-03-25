'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Define fake business logos
const businessLogos = [
  { id: 1, name: 'Nexus Systems', industry: 'Technology' },
  { id: 2, name: 'Quantum Innovations', industry: 'R&D' },
  { id: 3, name: 'Vertex Solutions', industry: 'Consulting' },
  { id: 4, name: 'Altitude Tech', industry: 'Software' },
  { id: 5, name: 'Horizon Industries', industry: 'Manufacturing' },
  { id: 6, name: 'Pulse Analytics', industry: 'Data Science' },
  { id: 7, name: 'Elite Dynamics', industry: 'Business Solutions' },
  { id: 8, name: 'Synergy Global', industry: 'Finance' },
  { id: 9, name: 'Pioneer Ventures', industry: 'Venture Capital' },
  { id: 10, name: 'Fusion Media', industry: 'Marketing' },
  { id: 11, name: 'Sterling Partners', industry: 'Investment' },
  { id: 12, name: 'Apex Resources', industry: 'Human Resources' },
  { id: 13, name: 'Catalyst Group', industry: 'Consulting' },
  { id: 14, name: 'Meridian Enterprises', industry: 'Real Estate' },
  { id: 15, name: 'Phoenix Technologies', industry: 'IT Solutions' },
  { id: 16, name: 'Orbit Digital', industry: 'Digital Marketing' },
  { id: 17, name: 'Vantage Solutions', industry: 'Business Intelligence' },
  { id: 18, name: 'Spectrum Innovations', industry: 'Healthcare' },
  { id: 19, name: 'Zenith Partners', industry: 'Consulting' },
  { id: 20, name: 'Ascend Technologies', industry: 'Cloud Computing' },
  { id: 21, name: 'Imperial Ventures', industry: 'Private Equity' },
  { id: 22, name: 'Summit Group', industry: 'Financial Services' },
  { id: 23, name: 'Velocity Systems', industry: 'Telecommunications' },
  { id: 24, name: 'Delta Innovations', industry: 'Product Development' },
  { id: 25, name: 'Optima Solutions', industry: 'Business Optimization' },
];

// Generate consistent colors based on company name
const generateLogoColor = (name: string) => {
  // Simple hash function to generate consistent colors
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Generate hue (0-360)
  const hue = hash % 360;
  return `hsl(${hue}, 70%, 60%)`;
};

// Generate initials for logo
const getInitials = (name: string) => {
  return name.split(' ').map(word => word[0]).join('');
};

const LogoCarousel = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const logosPerView = 5; // Show 5 logos at a time
  const totalGroups = Math.ceil(businessLogos.length / logosPerView);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate logos
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % totalGroups);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [totalGroups]);

  // Create logo display groups
  const logoGroups = Array.from({ length: totalGroups }, (_, i) => {
    const startIdx = i * logosPerView;
    return businessLogos.slice(startIdx, startIdx + logosPerView);
  });

  return (
    <div className="relative overflow-hidden py-6">
      {/* Container with horizontal overflow hidden */}
      <div className="overflow-hidden">
        {/* Flex container that moves with transform */}
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentGroup * 100}%)` }}
        >
          {logoGroups.map((group, groupIndex) => (
            <div 
              key={groupIndex} 
              className="min-w-full flex justify-center items-center gap-8 md:gap-12"
            >
              {group.map((logo) => (
                <div 
                  key={logo.id} 
                  className="flex flex-col items-center justify-center"
                  aria-label={logo.name}
                >
                  <div className="h-12 w-20 md:h-14 md:w-28 relative mb-2 flex items-center justify-center">
                    <div 
                      className="absolute inset-0 rounded-md flex items-center justify-center"
                      style={{ backgroundColor: `${generateLogoColor(logo.name)}15` }}
                    >
                      <div 
                        className="text-xl md:text-2xl font-bold"
                        style={{ color: generateLogoColor(logo.name) }}
                      >
                        {getInitials(logo.name)}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 font-medium hidden md:block">
                    {logo.industry}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalGroups }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentGroup ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentGroup(index)}
            aria-label={`Go to logo group ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel; 