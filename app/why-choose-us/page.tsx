import { Metadata } from 'next';
import WhyChooseUs from '../components/WhyChooseUs';
import Image from 'next/image';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Why Choose Us | SingletonsGroup',
  description: 'Learn why your business needs AI and why SingletonsGroup is the right partner to help you navigate the complex AI landscape.',
  openGraph: {
    title: 'Why Choose Us | SingletonsGroup',
    description: 'Learn why your business needs AI and why SingletonsGroup is the right partner to help you navigate the complex AI landscape.',
    images: ['/images/og/why-choose-us.jpg'],
  },
};

export default function WhyChooseUsPage() {
  return (
    <div className="bg-white">
      <WhyChooseUs />

      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 