'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import EnhancedSolutionGrid from '../components/EnhancedSolutionGrid';
import SolutionBuilder from '../components/SolutionBuilder';
import IntegrationVisual from '../components/IntegrationVisual';
import AIGridSolutions from '../components/AIGridSolutions';
import { allAISolutions } from '../data/aiSolutions';

const solutions = [
  {
    id: 'ai-automation',
    name: 'AI Automation',
    title: 'AI Automation',
    description: 'Automate repetitive tasks and workflows with intelligent AI solutions that learn and improve over time.',
    icon: '/images/icons/automation.svg',
    features: [
      'Email response automation',
      'Document processing and data extraction',
      'Workflow automation',
      'Scheduling and appointment setting',
      'Automated reporting'
    ],
    scenario: 'A consulting firm was spending 15+ hours per week on routine client communications. Our AI automation reduced this to just 2 hours while improving response times by 78%.',
    integrations: ['Gmail', 'Outlook', 'Slack', 'Asana', 'Monday.com']
  },
  {
    id: 'customer-support',
    name: 'Customer Support',
    title: 'Customer Support',
    description: 'Enhance customer service with AI-powered solutions that provide instant, accurate responses around the clock.',
    icon: '/images/icons/customer-support.svg',
    features: [
      '24/7 chatbot assistance',
      'Automated ticket routing',
      'Intent recognition',
      'Sentiment analysis',
      'Multilingual support'
    ],
    scenario: 'An e-commerce business with 5,000+ monthly support tickets implemented our AI support system, resolving 62% of inquiries instantly and reducing response times from 8 hours to 12 minutes.',
    integrations: ['Zendesk', 'Intercom', 'Freshdesk', 'HubSpot', 'Shopify']
  },
  {
    id: 'sales-tools',
    name: 'Sales Tools',
    title: 'Sales Tools',
    description: 'Convert more leads with AI tools that qualify prospects, personalize outreach, and optimize your sales process.',
    icon: '/images/icons/sales.svg',
    features: [
      'Lead scoring and qualification',
      'Personalized outreach sequences',
      'Call and meeting analysis',
      'Deal forecasting',
      'Competitive intelligence'
    ],
    scenario: 'A B2B software company used our AI sales tools to analyze call recordings and provide coaching insights, resulting in a 27% increase in close rates and 40% faster onboarding for new sales reps.',
    integrations: ['Salesforce', 'HubSpot', 'Outreach', 'ZoomInfo', 'Gong']
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    title: 'Data Analysis',
    description: 'Turn data into actionable insights with AI analytics that identify patterns, trends, and opportunities.',
    icon: '/images/icons/data.svg',
    features: [
      'Predictive analytics',
      'Customer behavior analysis',
      'Market trend identification',
      'Anomaly detection',
      'Automated reporting'
    ],
    scenario: 'A retail business implemented our AI analytics to predict inventory needs, reducing stockouts by 32% and excess inventory by 18%, resulting in $135,000 annual savings for a small operation.',
    integrations: ['Google Analytics', 'Power BI', 'Tableau', 'Excel', 'QuickBooks']
  },
  {
    id: 'content-creation',
    name: 'Content Creation',
    title: 'Content Creation',
    description: 'Generate high-quality, relevant content with AI tools that adapt to your brand voice and audience needs.',
    icon: '/images/icons/content.svg',
    features: [
      'Blog and article generation',
      'Social media content creation',
      'Email newsletter writing',
      'Product descriptions',
      'Content optimization'
    ],
    scenario: 'A marketing agency for small businesses used our AI content tools to create consistent blog posts and social content for clients, increasing production by 4x while maintaining quality and reducing costs by 65%.',
    integrations: ['WordPress', 'Mailchimp', 'Buffer', 'Shopify', 'Webflow']
  },
  {
    id: 'custom-solutions',
    name: 'Custom Solutions',
    title: 'Custom Solutions',
    description: 'Get a tailored AI solution designed specifically for your unique business challenges and goals.',
    icon: '/images/icons/custom.svg',
    features: [
      'Custom AI development',
      'Integration with existing systems',
      'Proprietary data utilization',
      'Scalable implementation',
      'Ongoing optimization'
    ],
    scenario: 'A healthcare provider needed a HIPAA-compliant AI system to improve patient scheduling and reduce no-shows. Our custom solution reduced administrative time by 76% and decreased no-shows by 42%.',
    integrations: ['Any existing business systems', 'Custom APIs', 'Proprietary software', 'Legacy systems']
  }
];

export default function Solutions() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('meetings');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentSolution, setCurrentSolution] = useState(0);
  const [isCustomBuilderOpen, setIsCustomBuilderOpen] = useState(false);
  const [industry, setIndustry] = useState('');
  const [businessSize, setBusinessSize] = useState('');
  const [challenge, setChallenge] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const activeSolution = solutions.find(solution => solution.id === activeTab);

  const handleSubmitBuilder = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              AI Solutions That Grow Your Business
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find the perfect AI tools to save time, reduce costs, and boost efficiency—no technical expertise required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#solution-builder"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
                onClick={() => setIsCustomBuilderOpen(true)}
              >
                Find Your Perfect Solution
              </Link>
              <Link
                href="https://calendly.com/singletonsgroup/consultation"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-gray-200 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-all"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All AI Solutions Grid */}
      <AIGridSolutions solutions={allAISolutions} />

      {/* Interactive Solutions Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are some of our most requested AI tools. Each can be customized to your specific business needs.
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeTab === solution.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={solution.icon} />
                  </svg>
                  <span>{solution.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Solution Detail */}
          <div className={`transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Visual Side */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/20 p-12 flex items-center justify-center">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="dots-pattern" width="4" height="4" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="0.7" fill="currentColor" className="text-primary" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#dots-pattern)" />
                    </svg>
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="w-40 h-40 bg-white rounded-full shadow-xl flex items-center justify-center p-10">
                      <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={activeSolution?.icon || ''} />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-lg border border-primary/20 animate-float" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute bottom-1/3 right-1/4 w-8 h-8 rounded-full border border-primary/20 animate-float" style={{ animationDelay: '1.5s' }}></div>
                  <div className="absolute top-2/3 right-1/3 w-10 h-10 rounded-md border border-primary/20 animate-float" style={{ animationDelay: '1s' }}></div>
                </div>
                
                {/* Content Side */}
                <div className="p-12">
                  <h2 className="text-3xl font-bold text-black mb-4">{activeSolution?.title}</h2>
                  <p className="text-gray-600 mb-8">{activeSolution?.description}</p>
                  
                  <h3 className="text-xl font-semibold text-black mb-4">Key Features</h3>
                  <ul className="space-y-3 mb-10">
                    {activeSolution?.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="https://calendly.com/singletonsgroup/consultation"
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-all transform hover:scale-105"
                  >
                    Get This Solution
                    <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Visual */}
      <IntegrationVisual />
      
      {/* Solution Builder */}
      <div id="customSolution" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Build Your Custom AI Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us about your business, and we'll recommend the perfect AI solution for your specific needs.
            </p>
          </div>
          <SolutionBuilder />
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Take the first step toward a more efficient, productive future with AI that works for your business.
          </p>
          <Link 
            href="https://calendly.com/singletonsgroup/consultation" 
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-primary bg-white hover:bg-gray-100 shadow-lg transition-all"
          >
            Schedule Your Free Intro Call
          </Link>
        </div>
      </div>
    </main>
  );
} 