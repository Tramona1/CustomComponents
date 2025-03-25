'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  contactPerson: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  quote: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  logoColor: string;
}

// Detailed case studies
const caseStudies: CaseStudy[] = [
  {
    id: 'retail-analytics',
    company: 'Urban Outfitters Co.',
    industry: 'Retail',
    contactPerson: 'Jennifer Martinez',
    title: 'Head of Operations',
    challenge: 'Urban Outfitters was drowning in customer data but couldn\'t make sense of it. Their team spent hours manually analyzing sales patterns, yet still missed crucial customer behavior insights. "I knew AI could help us, but the options were overwhelming. Every vendor promised the world, but the technical jargon made it impossible to know what would actually work for our business," says Jennifer.',
    solution: 'After an initial consultation, we identified their specific needs and recommended a tailored AI analytics solution. We handled the entire implementation process, from data integration to staff training. "They translated complex AI concepts into plain English and focused on what mattered to us—increasing sales and customer loyalty, not technical specs," Jennifer explains.',
    results: [
      'Automated data analysis now provides actionable insights in real-time, rather than weeks later',
      'Store managers use an intuitive dashboard to make inventory decisions based on AI predictions',
      'Marketing team can personalize promotions based on customer behavior patterns identified by AI',
      'IT team spends 70% less time on reporting and can focus on strategic initiatives'
    ],
    quote: "I was terrified of AI implementation—I thought it would be months of disruption and technical headaches. Instead, they made it painless. The solution they recommended works seamlessly with our existing systems, and the ROI was clear within weeks, not months or years.",
    metrics: [
      {
        label: 'Data Analysis Time',
        before: '40 hours/week',
        after: '4 hours/week',
        improvement: '90% reduction'
      },
      {
        label: 'Inventory Accuracy',
        before: '82%',
        after: '97%',
        improvement: '18% improvement'
      },
      {
        label: 'Sales from Personalized Recommendations',
        before: '$12,000/month',
        after: '$67,000/month',
        improvement: '458% increase'
      }
    ],
    logoColor: 'hsl(342, 70%, 60%)'
  },
  {
    id: 'healthcare-automation',
    company: 'MediCare Partners',
    industry: 'Healthcare',
    contactPerson: 'Dr. Robert Chen',
    title: 'Practice Director',
    challenge: 'Our small medical practice was struggling with administrative overload. Patient scheduling, insurance verification, and follow-up coordination were consuming 60% of our staff\'s time. We kept hearing about AI solutions but had no idea where to start. With patient care as our priority, we didn\'t have the bandwidth to research and evaluate the hundreds of healthcare AI tools on the market.',
    solution: 'SingletonsGroup conducted a thorough assessment of our workflow and pain points. They identified specific AI tools for each bottleneck and handled the seamless integration with our existing electronic health records system. What impressed us most was how they prioritized patient privacy and HIPAA compliance throughout the entire process, while making the technology accessible to our non-technical staff.',
    results: [
      'Automated appointment scheduling reduced no-shows by 67%',
      'AI-powered insurance verification cut claim rejections by 83%',
      'Automated follow-up communication improved patient satisfaction scores',
      'Staff now spends 75% of their time on patient care instead of paperwork'
    ],
    quote: "I was concerned that implementing AI would be disruptive and confusing for our staff. SingletonsGroup proved me wrong. They translated complex AI capabilities into simple tools that our team mastered quickly. The most remarkable part is that our patients now receive more personal attention because we've eliminated hours of administrative busywork.",
    metrics: [
      {
        label: 'Administrative Work Hours',
        before: '120 hours/week',
        after: '30 hours/week',
        improvement: '75% reduction'
      },
      {
        label: 'Patient Wait Time',
        before: '24 minutes',
        after: '7 minutes',
        improvement: '71% reduction'
      },
      {
        label: 'Monthly Revenue',
        before: '$215,000',
        after: '$312,000',
        improvement: '45% increase'
      }
    ],
    logoColor: 'hsl(195, 70%, 60%)'
  },
  {
    id: 'manufacturing-efficiency',
    company: 'Precision Fabricators',
    industry: 'Manufacturing',
    contactPerson: 'Michael Rodriguez',
    title: 'Operations Manager',
    challenge: 'Our manufacturing facility had invested in modern equipment, but our production planning was still largely manual. We were experiencing frequent bottlenecks, material waste, and missed deadlines. I researched AI solutions and found countless options, but they all seemed designed for enterprise-level companies with dedicated data science teams. As a mid-sized manufacturer, we needed AI benefits without the enterprise complexity and cost.',
    solution: 'SingletonsGroup didn\'t try to sell us a one-size-fits-all package. They spent time understanding our production flow and specific pain points. They recommended a modular AI system for production planning and predictive maintenance that integrated with our existing ERP. Their team handled the implementation and created custom dashboards that our floor managers could actually use without special training.',
    results: [
      'AI-optimized production scheduling increased throughput by 34%',
      'Predictive maintenance reduced unplanned downtime by 78%',
      'Material waste decreased by 41% through more accurate demand forecasting',
      'On-time delivery performance improved from 76% to 96%'
    ],
    quote: "The AI jargon from other vendors made my head spin. SingletonsGroup spoke our language and focused on manufacturing outcomes, not technical specifications. They delivered a solution that our team could use from day one, and the ROI has been remarkable. What impressed me most was how they made such sophisticated technology feel so straightforward.",
    metrics: [
      {
        label: 'Production Throughput',
        before: '64 units/day',
        after: '86 units/day',
        improvement: '34% increase'
      },
      {
        label: 'Unplanned Downtime',
        before: '27 hours/month',
        after: '6 hours/month',
        improvement: '78% reduction'
      },
      {
        label: 'Material Waste',
        before: '12.4%',
        after: '7.3%',
        improvement: '41% reduction'
      }
    ],
    logoColor: 'hsl(27, 70%, 60%)'
  },
  {
    id: 'financial-advisory',
    company: 'Meridian Wealth Advisors',
    industry: 'Financial Services',
    contactPerson: 'Sarah Williams',
    title: 'Founder & Principal Advisor',
    challenge: 'As a boutique financial advisory firm, we were losing clients to larger competitors who offered more personalized investment strategies powered by AI. We knew we needed to implement similar capabilities, but the financial AI landscape was overwhelming. Every vendor claimed their algorithm was the best, but we couldn\'t decipher which solutions would actually work for our client base or integrate with our existing tools.',
    solution: 'SingletonsGroup first helped us clarify our specific needs—personalized portfolio optimization and more proactive client communication. They then identified and implemented an AI solution that enhanced our investment strategies while keeping us in control of client relationships. They also created a simple system for our advisors to leverage AI for creating personalized financial content for each client.',
    results: [
      'Client portfolios now benefit from AI-optimized allocation strategies',
      'Advisors can instantly generate personalized investment recommendations based on individual client goals',
      'Automated monitoring system alerts advisors to portfolio adjustment opportunities',
      '63% increase in positive client feedback about personalized service'
    ],
    quote: "I was worried that AI would depersonalize our client relationships or require us to become technical experts. SingletonsGroup showed us that the opposite is true. The AI tools they implemented allow us to be even more personal and attentive with our clients. They demystified what seemed like an impossible technical challenge and delivered a solution that gave us enterprise-level capabilities without requiring an enterprise-level budget or IT team.",
    metrics: [
      {
        label: 'Client Retention Rate',
        before: '84%',
        after: '96%',
        improvement: '14% increase'
      },
      {
        label: 'Assets Under Management',
        before: '$142M',
        after: '$216M',
        improvement: '52% increase'
      },
      {
        label: 'Average Time Spent on Portfolio Analysis',
        before: '4.5 hours/client',
        after: '1.2 hours/client',
        improvement: '73% reduction'
      }
    ],
    logoColor: 'hsl(220, 70%, 60%)'
  },
  {
    id: 'ecommerce-personalization',
    company: 'Outdoor Enthusiast',
    industry: 'E-commerce',
    contactPerson: 'Thomas Greene',
    title: 'Digital Marketing Director',
    challenge: 'Our outdoor equipment e-commerce site was struggling with high cart abandonment rates and low repeat purchases. We knew personalization was the answer, but the AI personalization landscape was overwhelming. We tried implementing a solution on our own, but it required so much technical expertise that the project stalled for months, costing us valuable revenue.',
    solution: 'SingletonsGroup assessed our specific needs and recommended a tailored AI personalization engine that worked with our existing e-commerce platform. They handled the entire implementation, from data integration to fine-tuning recommendation algorithms. Most importantly, they created simple interfaces for our marketing team to manage the system without technical support.',
    results: [
      'Product recommendations now generate 41% of total revenue, up from 12%',
      'Cart abandonment rate decreased from 72% to 43%',
      'Average order value increased by 37% through intelligent cross-selling',
      'Customer lifetime value improved by 58% due to more relevant engagement'
    ],
    quote: "We knew AI could transform our business, but the technical complexity seemed insurmountable. SingletonsGroup cut through the confusion and delivered a solution our team could actually use. They didn't just implement technology—they transferred knowledge to our team so we could leverage AI confidently. The results speak for themselves: higher conversions, bigger orders, and more loyal customers.",
    metrics: [
      {
        label: 'Cart Abandonment Rate',
        before: '72%',
        after: '43%',
        improvement: '40% reduction'
      },
      {
        label: 'Average Order Value',
        before: '$87',
        after: '$119',
        improvement: '37% increase'
      },
      {
        label: 'Repeat Purchase Rate',
        before: '23%',
        after: '56%',
        improvement: '143% increase'
      }
    ],
    logoColor: 'hsl(145, 70%, 60%)'
  }
];

// Generate initials for logo
const getInitials = (name: string) => {
  return name.split(' ').map(word => word[0]).join('');
};

export default function SuccessStories() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedStudyId, setExpandedStudyId] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleCaseStudy = (id: string) => {
    setExpandedStudyId(expandedStudyId === id ? null : id);
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold text-text-main mb-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Real Business Transformations Through AI Simplification
          </h1>
          <p className={`text-xl text-text-sub max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            See how businesses like yours overcame AI confusion and achieved remarkable results with our help—without needing technical expertise or massive budgets.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-main mb-6">Customer Success Stories</h2>
            <p className="text-lg text-text-sub max-w-3xl mx-auto">
              Each of these businesses faced unique challenges with AI adoption. We helped them cut through the confusion and implement solutions that delivered real, measurable results.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study) => (
              <div 
                key={study.id}
                className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-500 ${expandedStudyId === study.id ? 'shadow-lg border-primary' : 'hover:shadow-md hover:border-gray-300'}`}
              >
                <div className="p-8 cursor-pointer" onClick={() => toggleCaseStudy(study.id)}>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div 
                        className="w-14 h-14 rounded-lg flex items-center justify-center mr-4 text-white font-bold text-xl"
                        style={{ backgroundColor: study.logoColor }}
                      >
                        {getInitials(study.company)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-main">{study.company}</h3>
                        <p className="text-text-sub">{study.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block px-3 py-1 bg-primary bg-opacity-10 text-primary text-sm font-medium rounded-full">
                        {expandedStudyId === study.id ? 'Show Less' : 'Read Full Story'}
                      </span>
                      <svg 
                        className={`w-5 h-5 ml-2 text-primary transition-transform duration-300 ${expandedStudyId === study.id ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-text-main mb-2">The Challenge:</h4>
                    <p className="text-text-sub">{study.challenge}</p>
                  </div>

                  {expandedStudyId === study.id && (
                    <div className="mt-8 space-y-8 animate-fadeIn">
                      <div>
                        <h4 className="text-lg font-semibold text-text-main mb-2">Our Solution:</h4>
                        <p className="text-text-sub">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-text-main mb-2">The Results:</h4>
                        <ul className="space-y-2 ml-6">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-text-sub">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="px-6 py-8 bg-gray-50 rounded-xl">
                        <div className="flex items-start mb-6">
                          <svg className="w-10 h-10 text-primary opacity-80 mr-4 mt-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
                          </svg>
                          <div>
                            <p className="text-lg text-text-main italic mb-4">{study.quote}</p>
                            <p className="text-sm font-medium text-text-sub">— {study.contactPerson}, {study.title}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-text-main mb-4">Impact By The Numbers:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {study.metrics.map((metric, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                              <h5 className="text-sm font-medium text-text-sub mb-2">{metric.label}</h5>
                              <div className="flex items-center justify-center space-x-4">
                                <div>
                                  <p className="text-sm text-gray-500 mb-1">Before</p>
                                  <p className="text-lg font-bold text-text-main">{metric.before}</p>
                                </div>
                                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                <div>
                                  <p className="text-sm text-gray-500 mb-1">After</p>
                                  <p className="text-lg font-bold text-primary">{metric.after}</p>
                                </div>
                              </div>
                              <div className="mt-4">
                                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                  {metric.improvement}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-main mb-6">Ready to Write Your Own AI Success Story?</h2>
          <p className="text-xl text-text-sub mb-10 max-w-3xl mx-auto">
            Join these businesses who simplified their AI journey and achieved remarkable results. Let's discuss how we can create a tailored AI solution for your specific needs.
          </p>
          <Link 
            href="https://calendly.com/singletonsgroup/consultation" 
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-lg font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
} 