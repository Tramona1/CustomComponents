// AI Solutions data organized by categories
export interface AISolution {
  id: string;
  title: string;
  industry: string;
  category: string;
  description: string;
  smbImpact: string;
  duration?: string;
  difficulty?: string;
  icon?: string;
}

// Customer Support & Engagement solutions
const customerSupportSolutions: AISolution[] = [
  {
    id: 'customer-support-chatbots',
    title: '24/7 Customer Support Chatbots',
    industry: 'E-commerce, Retail',
    category: 'customer-support',
    description: 'Yuma.ai automates customer support for merchants by generating responses from a knowledge base using large language models (LLMs). It learns from past helpdesk tickets to ensure consistent, brand-aligned replies.',
    smbImpact: 'Reduces response times by 50% and support costs by up to 30%, allowing SMBs to provide seamless customer service without hiring additional staff.'
  },
  {
    id: 'ai-call-centers',
    title: 'AI Call Centers for Missed Revenue',
    industry: 'General SMBs',
    category: 'customer-support',
    description: 'OpenCall.ai creates AI-powered call centers that answer questions, schedule appointments, and integrate with existing software, capturing missed calls and turning them into revenue opportunities.',
    smbImpact: 'Cuts operational costs by 50-80% while ensuring 24/7 customer availability.'
  },
  {
    id: 'ai-employee-engagement',
    title: 'AI-Driven Employee Engagement',
    industry: 'HR, Corporate',
    category: 'customer-support',
    description: 'Infeedo\'s AI bot, Amber, engages employees to predict attrition, answer FAQs, and identify cultural gaps in real-time, helping leaders improve workplace satisfaction.',
    smbImpact: 'Reduces turnover by 20% by addressing employee concerns proactively.'
  },
  {
    id: 'front-desk-automation',
    title: 'AI-Powered Front Desk Automation',
    industry: 'Healthcare (Dental)',
    category: 'customer-support',
    description: 'Arini automates front desk operations for dental clinics, answering 100% of calls and scheduling appointments efficiently.',
    smbImpact: 'Increases revenue by 15% through better appointment booking and reduces operational costs.'
  },
  {
    id: 'customer-interaction-automation',
    title: 'AI Customer Interaction Automation',
    industry: 'Real Estate',
    category: 'customer-support',
    description: 'Haven automates 50% of resident interactions for property managers, handling inquiries and requests using generative AI.',
    smbImpact: 'Saves property managers 10+ hours per week, improving tenant satisfaction.'
  },
  {
    id: 'customer-sentiment-analysis',
    title: 'AI-Driven Customer Feedback Analysis',
    industry: 'HR, Customer Service',
    category: 'customer-support',
    description: 'Infeedo\'s AI bot analyzes customer and employee feedback to identify sentiment trends, predict dissatisfaction, and suggest actionable improvements.',
    smbImpact: 'Improves customer satisfaction by 20% by addressing issues proactively.'
  },
  {
    id: 'voice-support-drive-thru',
    title: 'AI-Powered Voice Support for Drive-Thrus',
    industry: 'Food & Beverage',
    category: 'customer-support',
    description: 'Lilac Labs automates drive-thru order-taking with voice AI, reducing wait times and errors.',
    smbImpact: 'Increases order accuracy by 30%, boosting customer satisfaction and revenue.'
  }
];

// Sales & Marketing solutions
const salesMarketingSolutions: AISolution[] = [
  {
    id: 'seo-content-creation',
    title: 'SEO-Optimized Content Creation',
    industry: 'Digital Marketing, SMBs',
    category: 'sales-marketing',
    description: 'SpeedyBrand uses generative AI to create SEO-optimized content (websites, social media posts) tailored to SMBs, with customizable text and images.',
    smbImpact: 'Saves 15 hours per week on content creation while boosting organic traffic by 25%.'
  },
  {
    id: 'sales-lead-generation',
    title: 'AI Sales Lead Generation',
    industry: 'Sales, B2B',
    category: 'sales-marketing',
    description: 'Firebender uses natural language processing to target ideal company profiles and decision-makers, eliminating manual research for sales teams.',
    smbImpact: 'Increases lead generation efficiency by 30%, helping sales teams close more deals.'
  },
  {
    id: 'sales-opportunity-scoring',
    title: 'AI-Powered Sales Opportunity Scoring',
    industry: 'Sales, Tech',
    category: 'sales-marketing',
    description: 'Zenfetch uses historical sales data and predictive AI to score opportunities based on their likelihood of closing, helping non-technical salespeople sell technical products.',
    smbImpact: 'Improves close rates by 20% by focusing on high-potential leads.'
  },
  {
    id: 'performance-marketing-gaming',
    title: 'AI-Driven Performance Marketing for Gaming',
    industry: 'Gaming',
    category: 'sales-marketing',
    description: 'Reforged Labs\' AI copilot analyzes top-performing ads to help mobile game marketers create high-performing campaigns 5x faster and 10x cheaper.',
    smbImpact: 'Boosts marketing ROI by 40% for small gaming studios.'
  },
  {
    id: 'email-followup-automation',
    title: 'AI Email Follow-Up Automation',
    industry: 'Sales, B2B',
    category: 'sales-marketing',
    description: 'Truva automates tedious sales tasks like email follow-ups, CRM data entry, and process optimization, saving sales teams hours each week.',
    smbImpact: 'Increases sales by 25% by freeing up time for relationship-building.'
  },
  {
    id: 'whatsapp-customer-engagement',
    title: 'AI Customer Engagement on WhatsApp',
    industry: 'Marketing, SMBs',
    category: 'sales-marketing',
    description: 'Kiosk blends AI agents with marketing tools to help SMBs engage and retain customers on WhatsApp, leveraging its 2.5 billion monthly active users.',
    smbImpact: 'Improves customer retention by 15% through personalized engagement.'
  },
  {
    id: 'dynamic-pricing-calculator',
    title: 'AI Sales Calculator for Dynamic Pricing',
    industry: 'Sales, B2B',
    category: 'sales-marketing',
    description: 'Veles empowers sales reps to deliver pricing effectively by integrating with CPQs and CRMs, crafting dynamic options to maximize deal size.',
    smbImpact: 'Increases average deal size by 10% through smarter pricing strategies.'
  }
];

// Automation & Productivity solutions
const automationSolutions: AISolution[] = [
  {
    id: 'task-automation',
    title: 'Task Automation with Generative AI',
    industry: 'General SMBs',
    category: 'automation',
    description: 'Magic Loops combines generative AI with code to automate repeatable tasks and workflows, even for non-programmers.',
    smbImpact: 'Saves 20 hours per week on repetitive tasks like data entry and scheduling.'
  },
  {
    id: 'meeting-notes',
    title: 'AI-Powered Meeting Notes',
    industry: 'General SMBs, Education',
    category: 'automation',
    description: 'Otter.ai uses AI to transcribe, summarize, and take notes during meetings, integrating with tools like Zoom and Google Meet.',
    smbImpact: 'Reduces meeting follow-up time by 50%, allowing teams to focus on action items.'
  },
  {
    id: 'nurse-documentation',
    title: 'AI Documentation for Nurses',
    industry: 'Healthcare',
    category: 'automation',
    description: 'Voize allows nurses to speak their documentation into smartphones, with AI generating correct entries automatically.',
    smbImpact: 'Saves nurses 39 minutes per day, improving documentation quality.'
  },
  {
    id: 'workflow-automation',
    title: 'AI Workflow Automation',
    industry: 'General SMBs',
    category: 'automation',
    description: 'Zapier connects over 6,000 apps to automate workflows, such as syncing data between CRMs and email platforms.',
    smbImpact: 'Reduces manual data entry by 15 hours per week, boosting productivity.'
  },
  {
    id: 'retention-automation',
    title: 'AI-Driven Retention Automation',
    industry: 'Subscription Businesses',
    category: 'automation',
    description: 'Subsets predicts churn and automates retention strategies for subscription media companies, using AI to drive engagement.',
    smbImpact: 'Increases retention rates by 20%, ensuring sustainable growth.'
  },
  {
    id: 'email-drafting',
    title: 'AI Email Drafting and Proofreading',
    industry: 'General SMBs',
    category: 'automation',
    description: 'MailTime AI drafts and proofreads emails using generative AI, making email communication as quick as texting.',
    smbImpact: 'Saves 5 hours per week on email management.'
  },
  {
    id: 'code-generation',
    title: 'AI-Powered Code Generation from English',
    industry: 'Software Development',
    category: 'automation',
    description: 'Sudocode turns technical requirements written in plain English into functional code, making development accessible to non-coders.',
    smbImpact: 'Reduces development time by 50%, enabling SMBs to build apps faster.'
  }
];

// Data Analysis & Insights solutions
const dataAnalysisSolutions: AISolution[] = [
  {
    id: 'data-analysis',
    title: 'AI-Powered Data Analysis',
    industry: 'Product Management',
    category: 'data-analysis',
    description: 'Baselit embeds ChatGPT into data analysis programs to generate reports, helping product managers gain insights quickly.',
    smbImpact: 'Reduces reporting time by 60%, enabling faster decision-making.'
  },
  {
    id: 'trend-spotting',
    title: 'Trend Spotting in Beauty and Food',
    industry: 'Consumer Goods',
    category: 'data-analysis',
    description: 'Spate uses machine intelligence to identify emerging trends (e.g., turmeric, face masks) in beauty and food industries.',
    smbImpact: 'Helps SMBs stay ahead of trends, increasing product relevance by 30%.'
  },
  {
    id: 'carbon-accounting',
    title: 'AI-Driven Carbon Accounting',
    industry: 'Sustainability',
    category: 'data-analysis',
    description: 'GreenTally automates emissions calculations and reporting using LLMs, making carbon accounting accessible for all businesses.',
    smbImpact: 'Reduces reporting time from months to hours, saving $10,000 annually on consultants.'
  },
  {
    id: 'medical-billing',
    title: 'AI-Powered Medical Billing Automation',
    industry: 'Healthcare',
    category: 'data-analysis',
    description: 'Taxo automates medical billing processes, reducing errors and speeding up reimbursements.',
    smbImpact: 'Cuts billing time by 40%, improving cash flow for small practices.'
  },
  {
    id: 'research-paper-code',
    title: 'AI Research Paper to Code Conversion',
    industry: 'Research, Tech',
    category: 'data-analysis',
    description: 'Cerelyze converts AI research papers into functional code, helping developers implement cutting-edge techniques.',
    smbImpact: 'Speeds up R&D by 50%, enabling SMBs to adopt advanced AI.'
  }
];

// Healthcare & Medical solutions
const healthcareSolutions: AISolution[] = [
  {
    id: 'vet-clinical-notes',
    title: 'AI Clinical Notes for Veterinarians',
    industry: 'Veterinary',
    category: 'healthcare',
    description: 'VetRec automates clinical note-taking for veterinarians, allowing them to focus on pets rather than paperwork.',
    smbImpact: 'Saves 30 minutes per visit, improving patient care quality.'
  },
  {
    id: 'urine-diagnostics',
    title: 'AI Urine Diagnostics',
    industry: 'Healthcare',
    category: 'healthcare',
    description: 'Starling Medical\'s at-home urine diagnostic platform monitors changes to prevent hospitalizations from chronic conditions like diabetes.',
    smbImpact: 'Reduces healthcare costs by 20% through early detection.'
  },
  {
    id: 'medical-education',
    title: 'AI for Medical Education',
    industry: 'Medical Education',
    category: 'healthcare',
    description: 'Ora AI provides AI infrastructure for medical education, improving physician training and healthcare efficiency.',
    smbImpact: 'Enhances training programs, reducing onboarding time by 25%.'
  },
  {
    id: 'hospital-quality-reporting',
    title: 'AI Hospital Quality Reporting',
    industry: 'Healthcare',
    category: 'healthcare',
    description: 'Pharos automates hospital quality reporting systems, ensuring compliance with regulations.',
    smbImpact: 'Saves 15 hours per week on reporting, reducing compliance costs.'
  },
  {
    id: 'breast-cancer-detection',
    title: 'AI Breast Cancer Detection',
    industry: 'Healthcare',
    category: 'healthcare',
    description: 'Eva develops a wearable device for non-invasive breast cancer risk detection, supported by AI diagnostics.',
    smbImpact: 'Reduces diagnostic time by 50%, improving patient outcomes for small clinics.'
  }
];

// Retail & E-commerce solutions
const retailSolutions: AISolution[] = [
  {
    id: 'self-checkout-kiosks',
    title: 'AI Self-Checkout Kiosks',
    industry: 'Retail',
    category: 'retail',
    description: 'Mashgin\'s self-checkout kiosks use computer vision to scan items without barcodes, reducing checkout time by 10x.',
    smbImpact: 'Increases revenue by up to 400% by reducing lines and improving customer experience.'
  },
  {
    id: 'product-image-generation',
    title: 'AI Product Image Generation',
    industry: 'E-commerce',
    category: 'retail',
    description: 'Booth AI uses generative AI to create professional product images, helping brands scale lifestyle imagery cost-effectively.',
    smbImpact: 'Cuts photography costs by 50%, speeding up product launches.'
  },
  {
    id: 'search-discovery',
    title: 'AI Search & Discovery',
    industry: 'E-commerce, SaaS',
    category: 'retail',
    description: 'Algolia provides a search and discovery API for websites and apps, helping companies create relevant user experiences.',
    smbImpact: 'Improves conversion rates by 20% through better search functionality.'
  },
  {
    id: 'restaurant-automation',
    title: 'AI-Powered Restaurant Automation',
    industry: 'Food & Beverage',
    category: 'retail',
    description: 'Presto automates restaurants with computer vision, voice AI, and payments.',
    smbImpact: 'Increases order throughput by 20%, boosting revenue for small franchises.'
  }
];

// Manufacturing & Logistics solutions
const manufacturingSolutions: AISolution[] = [
  {
    id: 'robotic-arms',
    title: 'AI-Powered Industrial Robotic Arms',
    industry: 'Manufacturing',
    category: 'manufacturing',
    description: 'Orangewood Labs offers affordable AI-powered robotic arms for SMBs, programmable via natural language prompts.',
    smbImpact: 'Reduces labor costs by 60%, making automation accessible.'
  },
  {
    id: 'freight-coordination',
    title: 'AI Freight Coordination',
    industry: 'Logistics',
    category: 'manufacturing',
    description: 'Oway uses machine learning to coordinate and sell unused truck space, offering SMBs 50% discounts on shipping.',
    smbImpact: 'Cuts shipping costs by 50%, improving profit margins.'
  },
  {
    id: 'warehouse-robotics',
    title: 'AI Warehouse Robotics',
    industry: 'Logistics',
    category: 'manufacturing',
    description: 'Swarms of small mobile robots automate case picking and palletization in warehouses.',
    smbImpact: 'Reduces labor costs by 30%, making automation affordable for small warehouses.'
  },
  {
    id: 'logistics-optimization',
    title: 'AI-Powered Logistics Optimization',
    industry: 'Logistics',
    category: 'manufacturing',
    description: 'This solution uses AI to optimize logistics routes and schedules, reducing fuel costs and delivery times.',
    smbImpact: 'Cuts logistics costs by 25%, improving profitability for small firms.'
  }
];

// Finance & Compliance solutions
const financeSolutions: AISolution[] = [
  {
    id: 'compliance-automation',
    title: 'AI Compliance Automation',
    industry: 'Cybersecurity, Compliance',
    category: 'finance',
    description: 'Oneleet provides an all-in-one solution for security compliance, including code scanners and access reviews.',
    smbImpact: 'Reduces compliance costs by 40%, ensuring SMBs meet regulations.'
  },
  {
    id: 'wealth-management',
    title: 'AI-Driven Wealth Management',
    industry: 'Finance',
    category: 'finance',
    description: 'Saturn uses AI to help investment advisors manage assets, navigating regulatory challenges and personalizing services.',
    smbImpact: 'Improves client satisfaction by 15% through tailored financial advice.'
  },
  {
    id: 'insurance-pricing',
    title: 'AI Insurance Pricing',
    industry: 'Insurance',
    category: 'finance',
    description: 'Soteris builds an AI-driven pricing system for personal auto insurance, optimizing rates with machine learning.',
    smbImpact: 'Reduces pricing errors by 20%, improving competitiveness.'
  },
  {
    id: 'business-insurance',
    title: 'AI-Powered Business Insurance',
    industry: 'Insurance',
    category: 'finance',
    description: 'Vouch provides technology-first business insurance for startups, using AI to streamline underwriting and claims.',
    smbImpact: 'Cuts insurance processing time by 50%, saving SMBs on premiums.'
  }
];

// Education & Creative Industries solutions
const educationSolutions: AISolution[] = [
  {
    id: 'learning-assistant',
    title: 'AI Learning Assistant for Schools',
    industry: 'Education',
    category: 'education',
    description: 'Shepherd provides an AI learning assistant for schools, helping students with personalized support.',
    smbImpact: 'Improves student outcomes by 15%, reducing teacher workload.'
  },
  {
    id: 'video-generation',
    title: 'AI Video Generation',
    industry: 'Creative, Marketing',
    category: 'education',
    description: 'VideoGen enables users to create professional, copyright-free videos in seconds, serving clients from SMBs to enterprise.',
    smbImpact: 'Cuts video production costs by 70%, enabling affordable marketing.'
  },
  {
    id: 'anime-game-development',
    title: 'AI for Anime Game Development',
    industry: 'Gaming',
    category: 'education',
    description: 'Spellbrush uses AI to assist human artists in developing anime games, enhancing visual arts and gameplay.',
    smbImpact: 'Speeds up game development by 30%, making it accessible for small studios.'
  },
  {
    id: 'reading-assistant',
    title: 'AI Reading Assistant for Kids',
    industry: 'Education',
    category: 'education',
    description: 'Ello combines AI with real books to help children learn to read, providing personalized feedback and motivation.',
    smbImpact: 'Improves reading skills by 15%, reducing teacher workload in small schools.'
  }
];

// Specialized Applications solutions
const specializedSolutions: AISolution[] = [
  {
    id: 'government-contracting',
    title: 'AI Government Contracting Automation',
    industry: 'Public Sector',
    category: 'specialized',
    description: 'Hazel uses generative AI to match SMBs to government contracts, automate compliance forms, and draft responses, making bidding accessible.',
    smbImpact: 'Increases bidding success rates by 50%, opening new revenue streams.'
  },
  {
    id: 'satellite-operations',
    title: 'AI Satellite Operations',
    industry: 'Aerospace',
    category: 'specialized',
    description: 'Quindar automates satellite design, testing, and operations, enabling one engineer to manage hundreds of satellites.',
    smbImpact: 'Reduces operational costs by 60% for small aerospace firms.'
  },
  {
    id: 'human-ai-collaboration',
    title: 'AI-Powered Human-AI Collaboration',
    industry: 'General SMBs',
    category: 'specialized',
    description: 'HumanLayer provides an API that enables AI agents to contact humans for help and approval, ensuring accuracy.',
    smbImpact: 'Reduces AI errors by 40%, improving trust in automation.'
  },
  {
    id: 'climate-tech-optimization',
    title: 'AI for Climate Tech Optimization',
    industry: 'Sustainability',
    category: 'specialized',
    description: 'Uses AI to optimize energy and sustainability workflows, reducing carbon footprints.',
    smbImpact: 'Cuts energy costs by 25%, supporting small businesses in going green.'
  }
];

// Export all solutions combined
export const allAISolutions: AISolution[] = [
  ...customerSupportSolutions,
  ...salesMarketingSolutions,
  ...automationSolutions,
  ...dataAnalysisSolutions,
  ...healthcareSolutions,
  ...retailSolutions,
  ...manufacturingSolutions,
  ...financeSolutions,
  ...educationSolutions,
  ...specializedSolutions
]; 