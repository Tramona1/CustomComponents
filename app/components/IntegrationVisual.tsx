import React from 'react';
import Link from 'next/link';

const IntegrationVisual = () => {
  const integrations = [
    {
      name: 'Slack',
      category: 'Communication',
      description: 'AI-powered insights on team communications and automated notifications',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
      )
    },
    {
      name: 'Google Workspace',
      category: 'Productivity',
      description: 'Enhance documents, emails and calendar with AI assistance',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm6.27 16.076c-.235.527-.47.873-.705 1.13a2.979 2.979 0 0 1-1.293.904 4.887 4.887 0 0 1-1.705.31c-1.058 0-2.134-.213-3.008-.634l.614-1.463c.575.255 1.397.493 2.157.493.372 0 .697-.05.958-.142.254-.087.464-.227.606-.403.15-.189.232-.375.232-.663 0-.263-.087-.468-.213-.632-.126-.168-.354-.322-.713-.494-.35-.159-.832-.377-1.442-.631-1.336-.544-2.218-1.095-2.777-1.626-.574-.535-.838-1.202-.838-2.016 0-.574.177-1.092.532-1.563.35-.466.86-.836 1.493-1.079.542-.222 1.295-.333 2.091-.333 1.075 0 2.05.178 2.866.494l-.616 1.463c-.674-.212-1.358-.35-2.093-.35-.494 0-.873.078-1.193.213a1 1 0 0 0-.568.54 1.481 1.481 0 0 0-.123.611c0 .232.063.417.174.544.143.152.373.305.671.47.35.168.816.386 1.353.657.85.353 1.48.737 1.951 1.131.467.397.795.837.987 1.314.197.478.285.987.285 1.563 0 .619-.145 1.095-.46 1.6z" />
        </svg>
      )
    },
    {
      name: 'Shopify',
      category: 'E-commerce',
      description: 'Smart product recommendations and inventory management',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.027 7.671c-.018-.137-.128-.238-.256-.238h-.9c-.061-.669-.257-1.232-.556-1.667-.367-.532-.899-.784-1.531-.784-.006 0-.012 0-.018 0-.142.006-.287.018-.436.036-.134-1.635-.9-2.448-1.899-2.583a2.422 2.422 0 0 0-.177-.006h-.018c-.104 0-.208.006-.311.018-.018 0-.037.006-.049.012a.213.213 0 0 0-.128.055 31.79 31.79 0 0 0-1.316.96 6.144 6.144 0 0 0-.43.366C9.542 4.682 8.149 5.913 6.762 7.439l-.013.012-.55.058c-.635.668-1.371 1.444-2.062 2.256-.061.073-.091.164-.091.256v2.777c0 .19.037.378.113.556.43.994 1.371 3.206 2.607 5.542.8 1.516 1.6 2.912 2 3.583.128.214.356.348.607.348h5.248l.268.012c.189.006.355.018.5.024 1.033.073 1.877.162 2.625.275.159.024.318.048.473.073.122.018.244.03.366.042h.049a.245.245 0 0 0 .25-.25v-3.583c0-.03-.007-.06-.013-.091-.006-.03-.012-.061-.018-.091V7.726c-.002-.018-.002-.036-.002-.055zM13.046 3.791h.018c.067 0 .134.006.201.018.128.024.248.067.353.122-.067.37-.189.876-.353 1.528-.378-.03-.782-.055-1.209-.073.292-.425.609-.851.929-1.248.02-.13.041-.347.061-.347zm-1.492 1.949c.591.024 1.146.055 1.652.097-.177.747-.396 1.577-.632 2.448-.354-.079-.723-.152-1.115-.213-.305-.049-.61-.091-.927-.128.31-.736.646-1.48 1.022-2.204zm-1.481.013c-.262.534-.512 1.08-.745 1.644a23.341 23.341 0 0 0-1.829-.055c.681-.681 1.45-1.281 2.317-1.638.87.006.171.025.257.049zm-4.211 3.425l.204-.219c.689-.801 1.426-1.578 2.055-2.238l.03-.03h.006c.03-.033.061-.067.097-.097.079.006.153.006.226.006a24.787 24.787 0 0 1 2.044.098c.177.018.348.042.518.061.055.006.104.018.159.024.159.024.317.049.47.079.049.006.98.018.146.03.134.024.268.055.396.085.037.006.079.018.116.024.14.036.28.067.415.104l.128.036c.134.036.262.073.396.116.024.006.055.018.079.024.128.042.256.085.378.134.03.012.061.018.091.03.122.043.232.092.348.141a.299.299 0 0 1 .91.036c.116.049.226.098.335.153.24.012.055.024.079.036.104.055.207.109.305.164.24.012.049.03.073.043.098.054.189.114.28.17.024.012.043.03.067.042.092.062.177.122.256.19.018.013.037.031.055.037.079.061.146.128.214.189.018.018.043.037.061.055.061.06.122.122.177.183.018.018.043.042.061.061.055.061.104.122.152.189.18.024.043.049.055.073.042.061.085.122.122.19.18.03.036.061.049.091.037.061.068.128.098.19.12.03.03.067.043.098.024.073.054.14.073.214.12.042.024.085.03.128.019.073.037.152.049.226.6.042.12.079.12.122.12.079.018.159.024.244V23.39c-.305-.036-.61-.073-.921-.103-.732-.097-1.53-.183-2.521-.25l-.238-.012h-4.899l-.012-.024c-.018-.037-.043-.073-.061-.11-.085-.158-.171-.323-.256-.256-.256-.487-.487-.783-.615-1.192-1.224-2.32-2.155-4.51-2.576-5.48-.046-.112-.073-.236-.073-.36V9.775c.006-.06.03-.121.079-.182zM12.372 9.33c.208.018.414.036.615.061.159.018.311.042.464.067.274.042.531.091.776.146.067.018.141.03.208.049.024.006.043.012.067.018a.237.237 0 0 1 .171.225v1.858c0 .03-.006.055-.012.085a.237.237 0 0 1-.238.177h-2.911a.24.24 0 0 1-.214-.134.237.237 0 0 1 .024-.256.25.25 0 0 1 .061-.055l.366-.25-.384-.213a.25.25 0 0 1-.128-.22.23.23 0 0 1 .098-.182l.47-.343-.531-.237a.236.236 0 0 1-.097-.347.25.25 0 0 1 .067-.067l.555-.329-.609-.244a.236.236 0 0 1-.128-.116.252.252 0 0 1-.012-.177.25.25 0 0 1 .122-.145l.65-.323-.705-.244a.249.249 0 0 1-.153-.153.245.245 0 0 1 .03-.244.253.253 0 0 1 .177-.098h1.078c.006 0 .012 0 .018-.6.012 0 .018-.6.029-.006l.33.085zm7.075 9.854a.233.233 0 0 1-.139.091l-1.596.402.979 1.321c.067.091.076.214.018.317-.061.104-.171.159-.293.146l-1.633-.219.342 1.614a.25.25 0 0 1-.189.305.231.231 0 0 1-.311-.183l-.35-1.724-.951 1.345a.238.238 0 0 1-.329.055.246.246 0 0 1-.054-.329l1.083-1.54-1.596.408a.246.246 0 0 1-.305-.171c-.037-.128.03-.256.152-.298l1.718-.45-.878-1.198a.251.251 0 0 1 .03-.342.24.24 0 0 1 .341.03l.913 1.253.463-1.718a.246.246 0 0 1 .298-.183c.128.037.201.171.171.299l-.451 1.669 1.614-.414a.25.25 0 0 1 .303.183z" />
        </svg>
      )
    },
    {
      name: 'QuickBooks',
      category: 'Accounting',
      description: 'Intelligent expense categorization and financial insights',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.306 13.9h-1.68c-.02 1.336-.938 2.265-2.307 2.265-1.39 0-2.308-.93-2.308-2.265h-1.66c0 1.335-.93 2.265-2.326 2.265-1.39 0-2.327-.93-2.327-2.265H1.95c0 2.664 2.004 4.668 4.668 4.668 1.827 0 3.427-1.018 4.23-2.514.805 1.497 2.404 2.514 4.233 2.514 2.663 0 4.668-2.004 4.668-4.668h-3.442v-.002zm-3.73-2.367V8.904h1.996l-3.018-3.02v1.996h-1.996l3.018 3.02z" />
        </svg>
      )
    },
    {
      name: 'Salesforce',
      category: 'CRM',
      description: 'AI-powered customer insights and sales predictions',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.939 0c-2.033.166-3.963.881-5.59 2.144-1.627 1.262-2.818 2.963-3.476 4.838-.658 1.875-.827 3.896-.491 5.86.337 1.963 1.169 3.799 2.413 5.3 1.244 1.502 2.866 2.631 4.691 3.263 1.825.632 3.782.738 5.662.308 1.881-.43 3.634-1.352 5.075-2.677 1.44-1.325 2.505-2.999 3.09-4.82.585-1.821.666-3.774.233-5.635-.432-1.861-1.369-3.598-2.706-5.02-1.337-1.423-3.016-2.462-4.843-3.009C14.69.062 13.313-.081 11.94 0zm-.127 1.314c2.076-.154 4.152.412 5.902 1.617 1.6 1.107 2.847 2.673 3.593 4.48.745 1.806.953 3.811.591 5.74-.363 1.93-1.287 3.71-2.646 5.114-1.36 1.406-3.112 2.348-5.02 2.714-1.909.366-3.9.15-5.71-.617a10.74 10.74 0 0 1-4.44-3.642A10.755 10.755 0 0 1 1.535 11.2c-.007-.244-.015-.489 0-.732.011-.242.034-.483.069-.724.07-.481.18-.961.327-1.43.732-2.316 2.343-4.308 4.43-5.58 1.85-1.12 4.044-1.588 6.169-1.486a11.51 11.51 0 0 0-.718 2.226c-1.493-.135-3.014.107-4.347.761-1.374.68-2.512 1.77-3.251 3.107-.74 1.336-.981 2.902-.681 4.392.3 1.49 1.112 2.816 2.294 3.711 1.182.895 2.652 1.309 4.123 1.161 1.471-.148 2.835-.858 3.848-2.011 1.013-1.152 1.537-2.657 1.48-4.176h-5.322V8.393h7.672a11.428 11.428 0 0 1-.089 4.283 9.3 9.3 0 0 1-.861 2.459 8.075 8.075 0 0 1-1.599 2.136c-1.353 1.264-3.062 2.107-4.884 2.434-1.821.327-3.722.125-5.425-.634-1.702-.76-3.095-2.074-3.986-3.679-.891-1.605-1.208-3.472-.897-5.287.31-1.815 1.155-3.501 2.428-4.778 1.274-1.277 2.958-2.133 4.772-2.452.498-.088 1.003-.135 1.507-.145.184.48.36.974.545 1.433l.65.175c.219.59.381 1.044.588 1.489a.49.49 0 0 1-.206.058c-1.6.029-3.185.507-4.5 1.43-1.317.924-2.26 2.27-2.668 3.79-.407 1.52-.241 3.142.463 4.557.703 1.415 1.848 2.567 3.235 3.274 1.388.706 2.975.927 4.495.62a7.128 7.128 0 0 0 3.961-2.402c.958-1.212 1.437-2.702 1.409-4.225-.028-1.524-.504-3.007-1.297-4.298a9.007 9.007 0 0 0-1.683-1.9c.097-.48.2-.98.274-1.314z" />
        </svg>
      )
    },
    {
      name: 'Microsoft 365',
      category: 'Productivity',
      description: 'AI enhancements for Office apps and Teams',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-4">Seamless Integration With Your Business</h2>
          <p className="text-xl text-[#1F2937] max-w-3xl mx-auto">
            Our AI solutions connect directly with your existing tools and systems, providing immediate value without disrupting your workflow.
          </p>
        </div>

        {/* Integration Diagram */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Side - Before AI */}
            <div className="border-r border-gray-200 pr-6">
              <h3 className="text-xl font-bold text-[#1F2937] mb-4">Before AI Integration</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-[#1F2937] font-medium">Manual Data Entry</p>
                  <p className="text-gray-500 text-sm">Time-consuming and error-prone processes</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-[#1F2937] font-medium">Siloed Information</p>
                  <p className="text-gray-500 text-sm">Data trapped in different systems</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-[#1F2937] font-medium">Delayed Insights</p>
                  <p className="text-gray-500 text-sm">Slow decision-making due to data lag</p>
                </div>
              </div>
            </div>
            
            {/* Center - Business Hub with AI */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative mb-6">
                <div className="w-40 h-40 bg-primary bg-opacity-10 rounded-full flex items-center justify-center z-10 border-2 border-primary border-opacity-30">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="font-bold text-[#1F2937]">Your Business</p>
                  </div>
                </div>
                
                {/* AI Layer Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-4 border-dashed border-primary border-opacity-30 rounded-full animate-spin-slow"></div>
                </div>
              </div>
              
              <div className="bg-primary text-white text-center py-2 px-4 rounded-full font-medium text-sm mb-2">
                AI Integration Layer
              </div>
              <div className="text-center text-[#1F2937] text-sm max-w-xs">
                Our platform connects your existing tools with powerful AI capabilities
              </div>
            </div>
            
            {/* Right Side - After AI */}
            <div className="border-l border-gray-200 pl-6">
              <h3 className="text-xl font-bold text-[#1F2937] mb-4">After AI Integration</h3>
              <div className="space-y-4">
                <div className="bg-primary bg-opacity-10 rounded-lg p-4 border border-primary border-opacity-20">
                  <p className="text-[#1F2937] font-medium">Automated Workflows</p>
                  <p className="text-gray-500 text-sm">85% reduction in manual data entry</p>
                </div>
                <div className="bg-primary bg-opacity-10 rounded-lg p-4 border border-primary border-opacity-20">
                  <p className="text-[#1F2937] font-medium">Unified Data</p>
                  <p className="text-gray-500 text-sm">All your tools communicating seamlessly</p>
                </div>
                <div className="bg-primary bg-opacity-10 rounded-lg p-4 border border-primary border-opacity-20">
                  <p className="text-[#1F2937] font-medium">Real-time Insights</p>
                  <p className="text-gray-500 text-sm">Immediate data analysis and predictions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-[#1F2937] mb-4">Compatible With Your Favorite Tools</h3>
          <p className="text-lg text-[#1F2937] max-w-3xl mx-auto mb-8">
            Our AI solutions seamlessly integrate with over 100+ popular business tools and platforms
          </p>
        </div>

        {/* Integration Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mb-3 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-gray-600">{integration.icon}</div>
              </div>
              <p className="font-medium text-[#1F2937] text-center">{integration.name}</p>
              <p className="text-sm text-gray-500 text-center">{integration.category}</p>
              <p className="text-xs text-[#1F2937] text-center mt-2 max-w-[160px]">{integration.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[#1F2937]">Don't see your tool? We integrate with 100+ platforms across all major business categories</p>
          <Link
            href="https://calendly.com/blake-singletonsgroup/30min"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark shadow-sm transition-all"
          >
            Schedule an Integration Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntegrationVisual; 