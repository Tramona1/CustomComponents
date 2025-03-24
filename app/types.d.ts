// Type declarations for modules without TypeScript definitions

// Declare component modules without TypeScript definitions
declare module './components/VideoSection' {
  import { FC } from 'react';
  const VideoSection: FC;
  export default VideoSection;
}

declare module './components/Testimonials' {
  import { FC } from 'react';
  const Testimonials: FC;
  export default Testimonials;
}

declare module './components/SolutionsPreview' {
  import { FC } from 'react';
  const SolutionsPreview: FC;
  export default SolutionsPreview;
}

declare module './components/TrustElements' {
  import { FC } from 'react';
  const TrustElements: FC;
  export default TrustElements;
}

declare module './components/BusinessChallenges' {
  import { FC } from 'react';
  const BusinessChallenges: FC;
  export default BusinessChallenges;
}

declare module './components/EmailForm' {
  import { FC } from 'react';
  const EmailForm: FC;
  export default EmailForm;
}

declare module './components/AIVisualization' {
  import { FC } from 'react';
  
  export interface AIVisualizationProps {
    width?: string;
    height?: string;
  }
  
  const AIVisualization: FC<AIVisualizationProps>;
  export default AIVisualization;
} 