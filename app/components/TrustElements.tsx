'use client';

const TrustElements = () => {
  const partnerLogos = [
    { name: 'AI Automation', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { name: 'Data Analysis', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
    { name: 'Productivity', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { name: 'Customer Service', icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { name: 'Sales & Marketing', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Integration Tools', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' }
  ];

  return (
    <div className="mt-14">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Backed by a Network of 100+ AI Solutions
      </h3>
      <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto text-lg">
        We aggregate the best AI tools across every category so you don't have to navigate the complex landscape alone.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
        {partnerLogos.map((partner, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 transition-all hover:shadow-md"
          >
            <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-3">
              <svg 
                className="w-8 h-8 text-primary" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d={partner.icon} 
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-800">{partner.name}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <span className="inline-block text-sm font-medium py-2 px-4 bg-primary bg-opacity-10 text-primary rounded-full">
          One Platform, Endless AI Possibilities
        </span>
      </div>
    </div>
  );
};

export default TrustElements; 