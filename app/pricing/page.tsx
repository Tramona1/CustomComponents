import type { Metadata } from 'next';
import PricingContent from '../components/PricingContent';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Pricing | SingletonsGroup',
  description: 'Simple, transparent pricing for AI implementation and consultation services. Choose the package that fits your business needs and budget.',
  openGraph: {
    title: 'Pricing | SingletonsGroup',
    description: 'Simple, transparent pricing for AI implementation and consultation services. Choose the package that fits your business needs and budget.',
    images: ['/images/og-pricing.jpg'],
  },
};

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for your business. All plans include expert setup and ongoing support.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingContent />

      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 