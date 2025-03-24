import './globals.css';
import type { Metadata } from 'next';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'AI Solutions for Small Businesses | SingletonsGroup',
  description: 'Supercharge your small business with AI tools that automate tasks, save time, and boost growth—all set up for you.',
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
        {children}
      </body>
    </html>
  );
} 