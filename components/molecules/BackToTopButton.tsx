'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsClient } from '../../hooks/useIsClient';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize
    window.addEventListener('resize', checkMobile);

    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Only show on mobile devices
  if (!isMobile) return null;

  const ButtonTag = isClient ? motion.button : 'button';

  return isClient ? (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg"
          style={{
            background: 'linear-gradient(45deg, #D75F4E, #ff6b5a)',
            color: '#F4F1EA',
            border: 'none',
            boxShadow: '0 4px 12px rgba(215, 95, 78, 0.3)',
          }}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 6px 16px rgba(215, 95, 78, 0.4)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
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
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  ) : (
    /* Static back to top button for SSR */
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg"
        style={{
          background: 'linear-gradient(45deg, #D75F4E, #ff6b5a)',
          color: '#F4F1EA',
          border: 'none',
          boxShadow: '0 4px 12px rgba(215, 95, 78, 0.3)',
        }}
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
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    )
  );
};

export default BackToTopButton;
