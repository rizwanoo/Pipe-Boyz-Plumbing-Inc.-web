import React from 'react';

interface ServiceIconProps {
  name: 'flame' | 'sewer' | 'adu' | 'fixtures' | 'valves' | 'commercial';
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'flame':
      // Modern line-art Water Heater / Thermal Flame SVG
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2c0 3.5-2.5 5.5-2.5 8.5 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-3-2.5-5-2.5-8.5" />
          <path d="M12 22c-4.4 0-8-3.6-8-8 0-4.1 3.2-7.5 7.2-7.9.5 1.5 1.5 2.7 2.8 3.6 1.8 1.3 3 3.4 3 5.8 0 3.6-2.2 6.5-5 6.5" />
          <path d="M12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
      );

    case 'sewer':
      // Modern line-art Sewer Pipe & Camera Inspector Reel SVG
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="6" width="20" height="5" rx="1" />
          <path d="M4 11v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
          <path d="M12 11v9" />
          <circle cx="12" cy="15" r="2" />
          <path d="M9 3h6" />
          <path d="M12 3v3" />
        </svg>
      );

    case 'adu':
      // Modern line-art Architectural ADU & New Construction Blueprint SVG
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18" />
          <path d="M5 21V8l7-5 7 5v13" />
          <path d="M9 21v-8h6v8" />
          <path d="M9 9h.01" />
          <path d="M15 9h.01" />
          <path d="M12 13h.01" />
        </svg>
      );

    case 'fixtures':
      // Modern line-art Showerhead & Water Fixtures Droplets SVG
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h7a4 4 0 0 1 4 4v2" />
          <path d="M12 10h6a1 1 0 0 1 1 1v1H11v-1a1 1 0 0 1 1-1z" />
          <line x1="12" y1="16" x2="12" y2="16.01" />
          <line x1="15" y1="16" x2="15" y2="16.01" />
          <line x1="18" y1="16" x2="18" y2="16.01" />
          <line x1="13.5" y1="19" x2="13.5" y2="19.01" />
          <line x1="16.5" y1="19" x2="16.5" y2="19.01" />
        </svg>
      );

    case 'valves':
      // Modern line-art Pressure Gauge & Smart Water Shutoff Valve SVG
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 12l3-3" />
          <path d="M12 7v1" />
          <path d="M17 12h-1" />
          <path d="M7 12h1" />
          <path d="M12 17v-1" />
          <path d="M3 20l3-3" />
          <path d="M21 20l-3-3" />
        </svg>
      );

    case 'commercial':
      // Modern line-art Commercial Facility & Heavy Mechanical Infrastructure SVG
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 20h20" />
          <path d="M6 20V10l6-4v14" />
          <path d="M12 20V4l8 4v12" />
          <path d="M9 14h.01" />
          <path d="M9 17h.01" />
          <path d="M16 10h.01" />
          <path d="M16 13h.01" />
          <path d="M16 16h.01" />
        </svg>
      );

    default:
      return null;
  }
};
