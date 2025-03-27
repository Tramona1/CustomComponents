import type { Metadata } from 'next';
import PricingContent from '../components/PricingContent';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import WaveSeparator from '../components/WaveSeparator';

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
      {/* Directly start with the PricingContent component which contains the
          "Custom AI Pricing Tailored to Your Business" section with the form */}
      <PricingContent />

      {/* Add Wave Separator before CTA */}
      <WaveSeparator bgColor="bg-white" nextSectionColor="bg-primary" />

      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 