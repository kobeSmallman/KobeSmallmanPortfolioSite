'use client';

import React from 'react';

const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="no-print bg-surface-panel py-8 border-t border-divider">
      <div className="max-w-content mx-auto px-4 text-center">
        <p className="text-text-body/70 text-sm">
          {new Date().getFullYear()} Kobe Smallman. Built with Next.js and crafted with care.
        </p>
        <button
          onClick={handleBackToTop}
          className="mt-4 text-accent hover:text-accent-hover transition-colors duration-300 text-sm font-medium"
          aria-label="Back to top"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
