'use client';

import Link from 'next/link';

const SolutionsPreview = () => {
  return (
    <div className="mt-10">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-6 tracking-tight">AI That Fits Your Business—From Our Catalog or Custom-Built</h2>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
        Why hunt for the right AI tool when we've already done the work? We bring together hundreds of solutions—automation, support, sales, and more—and tailor them to your needs. If it doesn't exist, we'll build it.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Solution 1 */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transition-all hover:shadow-md hover:border-primary group">
          <div className="flex items-start mb-6">
            <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary group-hover:bg-opacity-20 transition-all">
              <svg className="w-7 h-7 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mb-2">Time Saver</span>
              <h3 className="text-xl font-bold text-primary mb-1">Workflow Automation</h3>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            Say goodbye to repetitive tasks. We'll find or create AI tools to handle scheduling, data entry, and more.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">Document processing & management</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">Calendar & scheduling optimization</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">Data entry & reporting automation</span>
            </li>
          </ul>
          <div className="pt-4 border-t border-gray-200">
            <Link href="/solutions" className="text-primary font-medium flex items-center group-hover:underline">
              Learn More
              <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Solution 2 */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transition-all hover:shadow-md hover:border-primary group">
          <div className="flex items-start mb-6">
            <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary group-hover:bg-opacity-20 transition-all">
              <svg className="w-7 h-7 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full mb-2">Best Seller</span>
              <h3 className="text-xl font-bold text-primary mb-1">Customer Support</h3>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            Deliver instant, 24/7 support with AI chatbots we select and set up to match your brand.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">Website & social media integration</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">Human handoff for complex issues</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">Brand-aligned voice & knowledge base</span>
            </li>
          </ul>
          <div className="pt-4 border-t border-gray-200">
            <Link href="/solutions" className="text-primary font-medium flex items-center group-hover:underline">
              Learn More
              <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Solution 3 */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transition-all hover:shadow-md hover:border-primary group">
          <div className="flex items-start mb-6">
            <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary group-hover:bg-opacity-20 transition-all">
              <svg className="w-7 h-7 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">Revenue Driver</span>
              <h3 className="text-xl font-bold text-primary mb-1">Sales Boosters</h3>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            Close more deals with AI that scores leads and personalizes outreach—picked just for your process.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">Lead scoring & prioritization</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">Personalized outreach automation</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">Sales pipeline analytics & insights</span>
            </li>
          </ul>
          <div className="pt-4 border-t border-gray-200">
            <Link href="/solutions" className="text-primary font-medium flex items-center group-hover:underline">
              Learn More
              <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          With access to a vast AI network and the ability to craft custom solutions, we solve any challenge—retail, hospitality, you name it.
        </p>
        <Link href="/solutions" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-sm transition-all">
          Explore All Solutions
        </Link>
      </div>
    </div>
  );
};

export default SolutionsPreview; 