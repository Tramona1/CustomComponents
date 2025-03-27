import { Metadata } from 'next';
import AboutContent from '../components/AboutContent';
import CTASection from '../components/CTASection';
import WaveSeparator from '../components/WaveSeparator';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'About Us | SingletonsGroup',
  description: 'Learn about SingletonsGroup and our mission to make AI simple and accessible for small and medium-sized businesses.',
  openGraph: {
    title: 'About Us | SingletonsGroup',
    description: 'Learn about SingletonsGroup and our mission to make AI simple and accessible for small and medium-sized businesses.',
    images: ['/images/og/about.jpg'],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutContent />
      
      {/* Add Wave Separator before CTA */}
      <WaveSeparator bgColor="bg-white" nextSectionColor="bg-primary" />

      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 