import './globals.css';
import type { Metadata, Viewport } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import DecorativeBubbles from './components/DecorativeBubbles';

// Define the viewport configuration separately
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'AI Solutions for Small and Medium sized Businesses | SingletonsGroup',
  description: 'Supercharge your small business with AI tools that automate tasks, save time, and boost growth—all set up for you.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://singletonsgroup.com'),
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="relative">
          {/* Add decorative bubbles to every page */}
          <DecorativeBubbles />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 