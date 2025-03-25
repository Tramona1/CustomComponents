import type { Metadata } from 'next';
import AboutContent from '@/app/components/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | SingletonsGroup',
  description: 'Meet the team behind SingletonsGroup and learn about our mission to make AI accessible for all businesses.',
  openGraph: {
    title: 'About Us | SingletonsGroup',
    description: 'Meet the team behind SingletonsGroup and learn about our mission to make AI accessible for all businesses.',
    images: ['/images/og-about.jpg'],
  },
};

export default function AboutPage() {
  return <AboutContent />;
} 