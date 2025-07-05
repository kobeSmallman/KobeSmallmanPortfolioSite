import React from 'react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  ariaLabel?: string;
  decorative?: boolean;
}

// Icon components for common portfolio icons using Lucide React patterns
const iconPaths: Record<string, string> = {
  // Contact icons
  email: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
  linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  github: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
  
  // Skill icons
  react: 'M17.5 12.5C17.5 14.7 15.7 16.5 13.5 16.5S9.5 14.7 9.5 12.5 11.3 8.5 13.5 8.5s4 1.8 4 4zM12 2L13.09 8.26L12 9L10.91 8.26L12 2zM12 22L13.09 15.74L12 15L10.91 15.74L12 22z',
  javascript: 'M2 2h20v20H2V2zm2 2v16h16V4H4zm8 6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1.1-.9-2-2-2z',
  typescript: 'M2 3h20v18H2V3zm2 2v14h16V5H4zm8 2h4v2h-2v8h-2V9h-2V7z',
  nextjs: 'M9 9v6l7-3-7-3zM3 3h18v18H3V3zm2 2v14h14V5H5z',
  
  // Navigation icons
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
  external: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3',
  menu: 'M3 12h18M3 6h18M3 18h18',
  close: 'M18 6L6 18M6 6l12 12',
  
  // Arrow icons
  'arrow-up': 'M12 19V5M5 12l7-7 7 7',
  'arrow-down': 'M12 5v14M19 12l-7 7-7-7',
  'arrow-right': 'M5 12h14M12 5l7 7-7 7',
  'arrow-left': 'M19 12H5M12 19l-7-7 7-7',
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = '',
  ariaLabel,
  decorative = false,
}) => {
  const path = iconPaths[name];
  
  if (!path) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label={decorative ? undefined : ariaLabel || name}
      aria-hidden={decorative}
      role={decorative ? "presentation" : "img"}
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;
