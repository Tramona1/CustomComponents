'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define solution type
interface Solution {
  id: string;
  title: string;
  industry: string;
  category: string;
  description: string;
  smbImpact: string;
  duration?: string;
  difficulty?: string;
  icon?: string;
}

interface AIGridSolutionsProps {
  solutions: Solution[];
}

// Categories with icons for filtering
const categories = [
  { 
    id: 'all', 
    name: 'All Solutions',
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )
  },
  { 
    id: 'customer-support', 
    name: 'Customer Support',
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  },
  { 
    id: 'sales-marketing', 
    name: 'Sales & Marketing',
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    )
  },
  { 
    id: 'automation', 
    name: 'Automation',
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  { 
    id: 'data-analysis', 
    name: 'Data Analysis',
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  { 
    id: 'healthcare', 
    name: 'Healthcare',
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  { 
    id: 'retail', 
    name: 'Retail & E-commerce',
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  { 
    id: 'manufacturing', 
    name: 'Manufacturing',
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  { 
    id: 'finance', 
    name: 'Finance',
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    id: 'education', 
    name: 'Education',
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    )
  },
  { 
    id: 'specialized', 
    name: 'Specialized',
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  }
];

const AIGridSolutions = ({ solutions }: AIGridSolutionsProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredSolutions, setFilteredSolutions] = useState<Solution[]>(solutions);
  const [isScrollable, setIsScrollable] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter solutions based on selected category and search term
  useEffect(() => {
    let filtered = solutions;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(solution => solution.category === selectedCategory);
    }
    
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(solution => 
        solution.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        solution.industry.toLowerCase().includes(lowerCaseSearchTerm) ||
        solution.description.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
    
    setFilteredSolutions(filtered);
  }, [selectedCategory, searchTerm, solutions]);

  // Check if category scroller is scrollable
  useEffect(() => {
    const checkScrollable = () => {
      const container = document.getElementById('category-scroller');
      if (container) {
        setIsScrollable(container.scrollWidth > container.clientWidth);
      }
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    
    return () => {
      window.removeEventListener('resize', checkScrollable);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI Solutions For Every Business Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our extensive library of AI solutions, from customer support to specialized industry tools. We'll implement the perfect fit for your business.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search solutions by name, industry, or description..."
              className="w-full py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Category Scroller */}
        <div className="relative mb-10">
          {isScrollable && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 bg-gradient-to-r from-gray-50 to-transparent h-full z-10 pointer-events-none"></div>
          )}
          
          <div 
            id="category-scroller"
            className="flex overflow-x-auto hide-scrollbar gap-4 py-2"
            style={{ scrollbarWidth: 'none' }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center justify-center px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
          
          {isScrollable && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 bg-gradient-to-l from-gray-50 to-transparent h-full z-10 pointer-events-none"></div>
          )}
        </div>

        {/* Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSolutions.map((solution) => (
            <div 
              key={solution.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-md"
            >
              <div className="p-6">
                {/* Solution Logo/Icon */}
                <div className="mb-4">
                  {solution.icon ? (
                    <Image src={solution.icon} alt={solution.title} width={48} height={48} className="rounded-full" />
                  ) : (
                    <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center`}>
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Solution Title and Industry */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{solution.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {solution.industry}
                  </span>
                  
                  {solution.duration && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      <svg className="mr-1 h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {solution.duration}
                    </span>
                  )}
                  
                  {solution.difficulty && (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      solution.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      solution.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {solution.difficulty}
                    </span>
                  )}
                </div>
                
                {/* Solution Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">{solution.description}</p>
                
                {/* SMB Impact Section */}
                <div className="bg-gray-50 p-3 rounded-lg mb-4 border border-gray-100">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-primary">SMB Impact: </span>
                    {solution.smbImpact}
                  </p>
                </div>
                
                {/* CTA Button */}
                <Link
                  href={`/solutions#customSolution`}
                  className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark shadow-sm transition-all"
                >
                  Get This Solution
                </Link>
              </div>
            </div>
          ))}
          
          {/* Custom Solutions Card */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl overflow-hidden shadow-sm border border-primary/30 transition-all hover:shadow-md">
            <div className="p-6">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-primary">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom AI Solutions</h3>
              <p className="text-gray-700 mb-4">
                Need something unique? We'll build a tailored solution to address your specific business challenges, leveraging our expertise across the AI landscape.
              </p>
              
              <div className="bg-white bg-opacity-70 p-3 rounded-lg mb-4 border border-primary/20">
                <p className="text-sm text-gray-800">
                  <span className="font-medium text-primary">Perfect For: </span>
                  Businesses with unique challenges, specialized industries, or specific integration requirements.
                </p>
              </div>
              
              <Link
                href="/solutions#customSolution"
                className="block w-full text-center px-4 py-2 border-2 border-primary text-sm font-medium rounded-lg text-primary bg-white hover:bg-primary/5 shadow-sm transition-all"
              >
                Discuss Custom Solution
              </Link>
            </div>
          </div>
          
          {/* Many More Card */}
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-md">
            <div className="p-6">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">And Many More...</h3>
              <p className="text-gray-700 mb-4">
                Our network includes 1000+ AI solutions across every industry and business function. We're constantly adding new tools to stay at the cutting edge.
              </p>
              
              <div className="bg-white p-3 rounded-lg mb-4 border border-gray-200">
                <p className="text-sm text-gray-700">
                  <span className="font-medium text-gray-900">Can't find what you need? </span>
                  Schedule a call to discuss your specific requirements, and we'll find the perfect solution for you.
                </p>
              </div>
              
              <Link
                href="https://calendly.com/singletonsgroup/consultation"
                target="_blank"
                className="block w-full text-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all"
              >
                Explore More Solutions
              </Link>
            </div>
          </div>
        </div>
        
        {filteredSolutions.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No matching solutions found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search terms or browse by category</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
      
      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="https://calendly.com/singletonsgroup/consultation"
          target="_blank"
          className="flex items-center px-5 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">Schedule Free Consultation</span>
        </Link>
      </div>
      
      {/* Custom CSS for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default AIGridSolutions; 