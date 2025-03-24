import { useState } from 'react';
import Link from 'next/link';
import React from 'react';

const industries = [
  { value: 'retail', label: 'Retail & E-commerce' },
  { value: 'professional', label: 'Professional Services' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'hospitality', label: 'Hospitality & Food Service' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'technology', label: 'Technology & SaaS' },
  { value: 'construction', label: 'Construction' },
  { value: 'finance', label: 'Finance & Insurance' },
  { value: 'other', label: 'Other Industry' }
];

const businessSizes = [
  { value: 'solo', label: 'Solo Entrepreneur (1 person)' },
  { value: 'micro', label: 'Micro Business (2-10 employees)' },
  { value: 'small', label: 'Small Business (11-50 employees)' },
  { value: 'medium', label: 'Medium Business (51-250 employees)' },
  { value: 'enterprise', label: 'Enterprise (250+ employees)' }
];

const challenges = [
  { value: 'customer_service', label: 'Customer Service & Support' },
  { value: 'productivity', label: 'Team Productivity & Collaboration' },
  { value: 'marketing', label: 'Marketing & Content Creation' },
  { value: 'sales', label: 'Sales & Lead Generation' },
  { value: 'data', label: 'Data Analysis & Reporting' },
  { value: 'operations', label: 'Operations & Workflow' },
  { value: 'cost', label: 'Cost Reduction' },
  { value: 'other', label: 'Other Challenge' }
];

const recommendations = {
  'retail-micro-customer_service': {
    title: '24/7 Customer Support AI',
    description: 'A retail business with your size would benefit from our AI chatbot solution that handles customer inquiries 24/7, reducing response time and freeing up your team.',
    benefits: [
      'Cut customer response time from hours to seconds',
      'Handle 80% of common questions automatically',
      'Integrates with your website, social media, and messaging platforms',
      'Easy to update with new products and policies'
    ],
    roi: 'Typically saves 15+ hours per week and reduces customer service costs by 30%'
  },
  'professional-small-productivity': {
    title: 'Professional Services Automation Suite',
    description: 'For a professional services firm of your size, our AI automation tools can streamline client management, document processing, and team collaboration.',
    benefits: [
      'Automate meeting notes, summaries, and action items',
      'Smart document management and contract analysis',
      'Client interaction tracking and follow-up automation',
      'Team productivity dashboards and insights'
    ],
    roi: 'Our professional services clients typically save 8+ hours per employee per week'
  },
  'default': {
    title: 'Custom AI Solution',
    description: 'Based on your unique business profile, we recommend a custom AI solution tailored to your specific industry, size, and challenges.',
    benefits: [
      'Personalized consultation with our AI experts',
      'Custom-selected tools from our network of 1000+ partners',
      'Integration with your existing systems and workflows',
      'Ongoing support and optimization'
    ],
    roi: 'Our custom solutions typically deliver 25-40% efficiency improvements'
  }
};

const SolutionBuilder = () => {
  const [industry, setIndustry] = useState('');
  const [businessSize, setBusinessSize] = useState('');
  const [challenge, setChallenge] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  // Get recommendation based on selection
  const getRecommendation = () => {
    const key = `${industry}-${businessSize}-${challenge}`;
    return recommendations[key as keyof typeof recommendations] || recommendations.default;
  };

  const recommendation = getRecommendation();

  return (
    <div className="py-16 bg-gray-50" id="custom-solution">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Build Your Custom AI Solution</h2>
          <p className="text-xl text-gray-600">
            Tell us about your business, and we'll recommend the perfect AI solution for your specific needs.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="p-6 md:p-8">
            {!showResults ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Industry Selection */}
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                    What industry are you in?
                  </label>
                  <select
                    id="industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    required
                  >
                    <option value="">Select your industry</option>
                    {industries.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Business Size */}
                <div>
                  <label htmlFor="business-size" className="block text-sm font-medium text-gray-700 mb-1">
                    How large is your business?
                  </label>
                  <select
                    id="business-size"
                    value={businessSize}
                    onChange={(e) => setBusinessSize(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    required
                  >
                    <option value="">Select your business size</option>
                    {businessSizes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Primary Challenge */}
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-1">
                    What's your primary business challenge?
                  </label>
                  <select
                    id="challenge"
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    required
                  >
                    <option value="">Select your primary challenge</option>
                    {challenges.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Get Your Recommendation
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Recommended Solution</h3>
                  <p className="text-gray-600">
                    Based on your selections, here's our recommended AI solution:
                  </p>
                </div>

                <div className="py-2">
                  <h4 className="text-xl font-bold text-primary mb-3">{recommendation.title}</h4>
                  <p className="text-gray-600 mb-6">{recommendation.description}</p>

                  <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h5>
                  <ul className="space-y-1 mb-6">
                    {recommendation.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-100">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Potential ROI: </span>
                      {recommendation.roi}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                      href="https://calendly.com/singletonsgroup/consultation"
                      target="_blank"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark shadow-sm transition-all"
                    >
                      Discuss This Solution
                    </Link>
                    <button
                      onClick={() => setShowResults(false)}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-gray-200 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all"
                    >
                      Start Over
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionBuilder; 