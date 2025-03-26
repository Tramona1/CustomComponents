'use client';

import { useState, useEffect, useRef } from 'react';
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

interface InquiryFormData {
  email: string;
  businessName: string;
  industry: string;
  needs: string;
  solutionId: string;
  solutionTitle: string;
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
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )
  },
  { 
    id: 'customer-support', 
    name: 'Customer Support',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  },
  { 
    id: 'sales-marketing', 
    name: 'Sales & Marketing',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    )
  },
  { 
    id: 'automation', 
    name: 'Automation',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  { 
    id: 'data-analysis', 
    name: 'Data Analysis',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  { 
    id: 'healthcare', 
    name: 'Healthcare',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  { 
    id: 'retail', 
    name: 'Retail & E-commerce',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  { 
    id: 'finance', 
    name: 'Finance',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    id: 'education', 
    name: 'Education',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    )
  }
];

// Create a sanitized description without vendor names
const sanitizeDescription = (description: string): string => {
  // Replace product names with generic terms
  return description
    .replace(/\b[A-Z][a-z]*\.(ai|io|com)\b/g, "This solution")
    .replace(/\b[A-Z][a-z]*AI\b/g, "This AI tool")
    .replace(/\bGPT-[0-9]+\b/g, "advanced AI model");
};

const AIGridSolutions = ({ solutions }: AIGridSolutionsProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredSolutions, setFilteredSolutions] = useState<Solution[]>(solutions);
  const [isScrollable, setIsScrollable] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [formData, setFormData] = useState<InquiryFormData>({
    email: '',
    businessName: '',
    industry: '',
    needs: '',
    solutionId: '',
    solutionTitle: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  
  const categoryScrollerRef = useRef<HTMLDivElement>(null);

  // Filter solutions when category changes
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
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    
    return () => {
      window.removeEventListener('resize', checkScrollable);
    };
  }, []);

  const checkScrollable = () => {
    if (categoryScrollerRef.current) {
      setIsScrollable(
        categoryScrollerRef.current.scrollWidth > categoryScrollerRef.current.clientWidth
      );
    }
  };

  const handleInquireClick = (solution: Solution) => {
    setSelectedSolution(solution);
    setFormData({
      ...formData,
      solutionId: solution.id,
      solutionTitle: solution.title
    });
    setShowInquiryForm(true);
  };

  const handleCloseForm = () => {
    setShowInquiryForm(false);
    setFormSubmitted(false);
    setFormError('');
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form
    if (!formData.email || !formData.businessName || !formData.needs) {
      setFormError('Please fill in all required fields');
      return;
    }
    
    setFormError('');
    
    try {
      // Send the form data to our API endpoint
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.businessName,
          subject: `Inquiry about ${formData.solutionTitle}`,
          message: `
Business Name: ${formData.businessName}
Industry: ${formData.industry || 'Not specified'}
Solution ID: ${formData.solutionId}
Solution Title: ${formData.solutionTitle}

Business Needs:
${formData.needs}
          `,
          formType: 'AI Solution Inquiry',
          page: 'AI Solutions Catalog'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      
      // Show success message
      setFormSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowInquiryForm(false);
        setFormSubmitted(false);
        setFormData({
          email: '',
          businessName: '',
          industry: '',
          needs: '',
          solutionId: '',
          solutionTitle: ''
        });
      }, 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setFormError('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-main mb-4">
            AI Solutions Catalog
          </h2>
        </div>
        
        {/* Search bar and Custom Inquiry button */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Search for solutions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button
            onClick={() => {
              setSelectedSolution(null);
              setFormData({
                ...formData,
                solutionId: 'custom',
                solutionTitle: 'Custom Solution'
              });
              setShowInquiryForm(true);
            }}
            className="whitespace-nowrap flex items-center justify-center px-4 py-3 border border-primary bg-white text-primary font-medium rounded-full hover:bg-primary/5 transition-all"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Inquire About Custom Solution
          </button>
        </div>
        
        {/* Category scroller */}
        <div className="relative mb-8">
          <div
            ref={categoryScrollerRef}
            className="flex overflow-x-auto pb-2 gap-2 hide-scrollbar"
            style={{ scrollbarWidth: 'none' }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-full whitespace-nowrap transition ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="flex-shrink-0">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
          
          {isScrollable && (
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 pointer-events-none" />
          )}
        </div>
        
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((solution) => (
            <div 
              key={solution.id}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-all hover:shadow-lg flex flex-col h-full"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    {solution.icon ? (
                      <Image src={solution.icon} alt={solution.title} width={28} height={28} />
                    ) : (
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-main">{solution.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {solution.industry}
                      </span>
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
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{sanitizeDescription(solution.description)}</p>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">Business Impact:</h4>
                  <p className="text-sm text-gray-600">{solution.smbImpact}</p>
                </div>
                
                {solution.duration && (
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Implementation: {solution.duration}</span>
                  </div>
                )}
              </div>
              
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleInquireClick(solution)}
                    className="flex justify-center items-center px-4 py-2 border border-primary text-primary font-medium text-sm rounded-lg hover:bg-primary/5 transition-all"
                  >
                    Inquire
                  </button>
                  <Link
                    href={`https://calendly.com/singletonsgroup/consultation?solution=${encodeURIComponent(solution.title)}`}
                    target="_blank"
                    className="flex justify-center items-center px-4 py-2 bg-primary text-white font-medium text-sm rounded-lg hover:bg-primary-dark transition-all"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          {/* Custom Solution Card */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/20 rounded-xl overflow-hidden shadow-md border border-primary/30 transition-all hover:shadow-lg flex flex-col h-full">
            <div className="p-6 flex-grow">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-main">Custom AI Solution</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
                      All Industries
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                Don't see what you're looking for? We can build a custom AI solution tailored to your specific business needs and challenges.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 mb-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-1">Business Impact:</h4>
                <p className="text-sm text-gray-600">Get exactly what your business needs with a solution designed specifically for your processes, challenges, and goals.</p>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-white border-t border-gray-200">
              <button
                onClick={() => {
                  setSelectedSolution(null);
                  setFormData({
                    ...formData,
                    solutionId: 'custom',
                    solutionTitle: 'Custom Solution'
                  });
                  setShowInquiryForm(true);
                }}
                className="flex justify-center items-center px-4 py-2 bg-primary text-white font-medium text-sm rounded-lg hover:bg-primary-dark transition-all w-full"
              >
                Request Custom Solution
              </button>
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
      
      {/* Inquiry Form Modal */}
      {showInquiryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {!formSubmitted ? (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-text-main">
                      {formData.solutionId === 'custom' 
                        ? 'Request a Custom AI Solution' 
                        : `Inquire About: ${selectedSolution?.title}`}
                    </h2>
                    <button 
                      onClick={handleCloseForm}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  {formData.solutionId === 'custom' && (
                    <p className="text-gray-600 text-sm mb-4">
                      Tell us about your business challenges and requirements, and our AI experts will design a custom solution tailored to your specific needs.
                    </p>
                  )}
                  
                  {formError && (
                    <div className="mb-4 p-3 bg-red-50 text-red-800 rounded-lg text-sm">
                      {formError}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmitInquiry}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                          Business Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleFormChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                          Industry
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleFormChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                        >
                          <option value="">Select Industry</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="Retail">Retail</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Finance">Finance</option>
                          <option value="Education">Education</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Technology">Technology</option>
                          <option value="Real Estate">Real Estate</option>
                          <option value="Professional Services">Professional Services</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="needs" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Needs <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="needs"
                          name="needs"
                          value={formData.needs}
                          onChange={handleFormChange}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                          placeholder={formData.solutionId === 'custom' 
                            ? "Please describe your business challenges and what type of AI solution you're looking for."
                            : "Please describe your business challenges and what you're looking to achieve with this solution."
                          }
                          required
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        Submit Inquiry
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-text-main mb-2">Inquiry Submitted!</h3>
                  <p className="text-gray-500 mb-6">
                    Thank you for your interest. Our team will contact you shortly to discuss your needs and how we can help.
                  </p>
                  <button
                    onClick={handleCloseForm}
                    className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Custom CSS for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default AIGridSolutions; 