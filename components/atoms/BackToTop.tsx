'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      const scrolled = window.pageYOffset > 300;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 right-6 z-[9999] p-3 rounded-full shadow-lg border border-accent/20 backdrop-blur-sm md:hidden"
          style={{
            backgroundColor: 'rgba(215, 95, 78, 0.9)',
            color: '#F4F1EA'
          }}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: '#D75F4E',
            boxShadow: '0 8px 25px rgba(215, 95, 78, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          aria-label="Back to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
