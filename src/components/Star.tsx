'use client';

import { useState, useEffect } from 'react';

interface StarProps {
  top: number;
  left: number;
  size: number;
  blur?: number;
}

const Star = ({ top, left, size, blur }: StarProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute"
      style={
        isClient
          ? {
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              filter: `blur(${blur}px)`,
            }
          : { display: 'none' }
      }
    >
      <defs>
        <linearGradient
          id="grad1"
          x1="100"
          y1="50"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgba(255, 255, 255, 0.1)" />
          <stop offset="1" stopColor="rgba(211, 211, 211, 1)" />
        </linearGradient>

        <linearGradient
          id="grad2"
          x1="100"
          y1="100"
          x2="100"
          y2="150"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgba(211, 211, 211, 1)" />
          <stop offset="1" stopColor="rgba(255, 255, 255, 0.1)" />
        </linearGradient>

        <linearGradient
          id="grad3"
          x1="100"
          y1="100"
          x2="50"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgba(211, 211, 211, 1)" />
          <stop offset="1" stopColor="rgba(255, 255, 255, 0.1)" />
        </linearGradient>

        <linearGradient
          id="grad4"
          x1="100"
          y1="100"
          x2="150"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgba(211, 211, 211, 1)" />
          <stop offset="1" stopColor="rgba(255, 255, 255, 0.1)" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="1.5" fill="#d3d3d3" />

      <line x1="100" y1="100" x2="100" y2="50" stroke="url(#grad1)" />

      <line x1="100" y1="100" x2="100" y2="150" stroke="url(#grad2)" />

      <line x1="100" y1="100" x2="50" y2="100" stroke="url(#grad3)" />

      <line x1="100" y1="100" x2="150" y2="100" stroke="url(#grad4)" />
    </svg>
  );
};

export default Star;
