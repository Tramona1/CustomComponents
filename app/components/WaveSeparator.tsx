'use client';

interface WaveSeparatorProps {
  bgColor?: string;
  nextSectionColor?: string;
  className?: string;
}

const WaveSeparator = ({ 
  bgColor = "bg-white", 
  nextSectionColor = "bg-gray-50",
  className = ""
}: WaveSeparatorProps) => {
  return (
    <div className={`wave-container relative w-full h-24 md:h-32 lg:h-40 overflow-hidden ${bgColor} ${className}`}>
      <svg className="absolute bottom-0 w-full" 
           xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 1440 320" 
           preserveAspectRatio="none">
        <path 
          fill="#0057D9" 
          fillOpacity="0.05" 
          d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,224C672,245,768,235,864,202.7C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>
      <svg className="absolute bottom-0 w-full" 
           xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 1440 320" 
           preserveAspectRatio="none">
        <path 
          fill="#0057D9" 
          fillOpacity="0.1" 
          d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,85.3C672,75,768,117,864,144C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>
      <svg className="absolute bottom-0 w-full" 
           xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 1440 320" 
           preserveAspectRatio="none">
        <path 
          fill="#0057D9" 
          fillOpacity="0.2" 
          d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,170.7C960,171,1056,149,1152,144C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>
    </div>
  );
};

export default WaveSeparator; 