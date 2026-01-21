
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true, light = false }) => {
  const primaryColor = light ? "white" : "#0f172a"; // blue-950
  const secondaryColor = light ? "#1e40af" : "white"; // blue-800 or white

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M25 15C25 15 75 15 85 45C95 75 75 85 25 85V15Z" 
          fill={primaryColor} 
        />
        <path 
          d="M40 70C40 70 50 60 55 40M45 65C43 61 41 57 43 53M51 61C53 57 55 53 53 49M56 52C58 48 60 44 58 40" 
          stroke={secondaryColor} 
          strokeWidth="2.5" 
          strokeLinecap="round"
        />
      </svg>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold leading-none tracking-tight text-xl ${light ? 'text-white' : 'text-blue-950'}`}>
            DROSELLE
          </span>
          <span className={`text-[9px] tracking-[0.4em] font-medium leading-none mt-1 ${light ? 'text-blue-200' : 'text-blue-800'}`}>
            BAKES
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
