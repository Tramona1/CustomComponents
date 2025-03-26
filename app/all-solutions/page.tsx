import AIGridSolutions from '../components/AIGridSolutions';
import { allAISolutions } from '../data/aiSolutions';
import Link from 'next/link';
import { Metadata } from 'next';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'All AI Solutions - Browse Our Complete Catalog',
  description: 'Explore our complete catalog of AI solutions for businesses across all industries. Find the perfect AI tool to solve your business challenges.'
};

export default function AllSolutionsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-main tracking-tight mb-6">
              AI Solutions Catalog
            </h1>
            <p className="text-xl text-[#1F2937] mb-8">
              Browse our catalog of AI solutions designed for businesses of all sizes. Filter by category to find the perfect tool for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://calendly.com/blake-singletonsgroup/30min"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white text-base font-medium rounded-full text-primary bg-white hover:bg-white/90 shadow-md transition-all"
              >
                Book a call to learn what AI can do for you
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All AI Solutions Grid */}
      <AIGridSolutions solutions={allAISolutions} />

      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 