import AIGridSolutions from '../components/AIGridSolutions';
import { allAISolutions } from '../data/aiSolutions';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All AI Solutions - Browse Our Complete Catalog',
  description: 'Explore our complete catalog of AI solutions for businesses across all industries. Find the perfect AI tool to solve your business challenges.'
};

export default function AllSolutionsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Complete AI Solutions Catalog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Browse our full catalog of AI solutions designed for businesses of all sizes. Filter by category to find the perfect tool for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://calendly.com/singletonsgroup/consultation"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-md transition-all"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All AI Solutions Grid */}
      <AIGridSolutions solutions={allAISolutions} />

      {/* Final CTA */}
      <div className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Not Sure Which Solution Is Right For You?</h2>
          <p className="text-xl mb-8">
            Our experts can help you identify the perfect AI tools for your specific business needs and challenges.
          </p>
          <Link 
            href="https://calendly.com/singletonsgroup/consultation" 
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-primary bg-white hover:bg-gray-100 shadow-lg transition-all"
          >
            Get Personalized Recommendations
          </Link>
        </div>
      </div>
    </main>
  );
} 