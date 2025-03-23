# AI Platform Website

A modern, professional website for an AI platform targeted at small and medium-sized businesses (SMBs). The website is designed to educate visitors about AI benefits, capture leads, and drive consultation bookings.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)

## Features

- **Responsive Design**: Works seamlessly on all device sizes
- **Custom UI Components**: All UI components built from scratch
- **Modern Design System**: Professional design with attention to detail
- **Lead Generation**: Email capture modals and consultation booking links
- **Interactive Components**: Video player with email gating and testimonial carousel

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React useState/useEffect hooks
- **Deployment**: Ready for deployment on Vercel, Netlify, or similar platforms

## Project Structure

```
/
├── app/                      # Main application code
│   ├── components/           # Reusable UI components
│   │   ├── EmailForm.tsx     # Email capture form component
│   │   ├── Footer.tsx        # Footer component
│   │   ├── Header.tsx        # Header/navigation component
│   │   ├── Testimonials.tsx  # Testimonial carousel component
│   │   ├── VideoEmailModal.tsx # Email modal for video access
│   │   └── VideoSection.tsx  # Video player section
│   ├── globals.css           # Global CSS styles
│   ├── layout.tsx            # Root layout with header/footer
│   └── page.tsx              # Home page
├── public/                   # Static assets
│   ├── hero-illustration.svg # Hero section illustration
│   ├── explainer-video.mp4   # Demo video (placeholder)
│   └── video-thumbnail.jpg   # Video thumbnail (placeholder)
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-platform-website.git
   cd ai-platform-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Development

### Custom Components

All UI components are custom-built without using external component libraries. This gives complete control over the design and ensures a unique look and feel.

### Styling

The project uses Tailwind CSS for styling with a custom design system defined in `tailwind.config.js`. The primary colors are:

- Black (#000000): Headlines, body text, and navigation
- White (#FFFFFF): Backgrounds
- Royal Blue (#0057D9): Accent color for buttons, icons, and interactive elements

### Adding Pages

To add new pages, create a new directory in the `app` folder with a `page.tsx` file. For example, to create an "About" page:

```
/app/about/page.tsx
```

## Deployment

This project is ready to deploy on Vercel, Netlify, or any other platform that supports Next.js.

### Vercel Deployment (Recommended)

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Follow the deployment instructions

### Environment Variables

For production environments, you might need to set up environment variables for:

- API endpoints
- External service credentials (e.g., email service providers)
- Analytics tracking IDs 