import type { Metadata } from 'next';
import AboutContent from '../components/AboutContent';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

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
  return (
    <div className="bg-white">
      <AboutContent />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 