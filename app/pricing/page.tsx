import type { Metadata } from 'next';
import PricingContent from '@/app/components/PricingContent';

export const metadata: Metadata = {
  title: 'Pricing | SingletonsGroup',
  description: 'Simple, transparent pricing for AI implementation and consultation services. Choose the package that fits your business needs and budget.',
  openGraph: {
    title: 'Pricing | SingletonsGroup',
    description: 'Simple, transparent pricing for AI implementation and consultation services. Choose the package that fits your business needs and budget.',
    images: ['/images/og-pricing.jpg'],
  },
};

export default function PricingPage() {
  return <PricingContent />;
} 