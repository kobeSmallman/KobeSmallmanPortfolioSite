'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useIsClient } from '../../hooks/useIsClient';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const isClient = useIsClient();
  const router = useRouter();

  // Handle scroll for header styling and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsScrolled(scrollY > 32);
      
      // Update active section based on scroll position
      const sections = ['hero', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', isPage: true },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'about') {
      router.push('/about');
      setIsMobileMenuOpen(false);
    } else {
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Close menu first, then scroll after a short delay
        setIsMobileMenuOpen(false);
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setIsMobileMenuOpen(false);
      }
    }
  };

  const HeaderTag = isClient ? motion.header : 'header';
  const ButtonTag = isClient ? motion.button : 'button';

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      
      <HeaderTag
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        style={{
          background: isScrolled 
            ? 'rgba(21, 32, 43, 0.85)'
            : 'transparent'
        }}
        {...(isClient && {
          initial: { y: -100 },
          animate: { y: 0 },
          transition: { type: 'spring', stiffness: 300, damping: 30 }
        })}
      >
        <div className="max-w-content mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo/Name */}
          <ButtonTag
            onClick={() => scrollToSection('hero')}
            className="font-display font-medium text-lg transition-colors duration-300"
            style={{ color: '#D75F4E' }}
            {...(isClient && {
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 }
            })}
          >
            Kobe Smallman
          </ButtonTag>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const NavButtonTag = isClient ? motion.button : 'button';
              return (
                <NavButtonTag
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="transition-colors duration-300 font-medium"
                  style={{ 
                    color: activeSection === item.id ? '#D75F4E' : '#A9B8C4',
                    opacity: activeSection === item.id ? 1 : 0.8
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D75F4E'}
                  onMouseLeave={(e) => e.currentTarget.style.color = activeSection === item.id ? '#D75F4E' : '#A9B8C4'}
                  {...(isClient && {
                    whileHover: { y: -2 },
                    transition: { type: 'spring', stiffness: 300, damping: 20 }
                  })}
                >
                  {item.label}
                </NavButtonTag>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              href="/resume.pdf"
              ariaLabel="Download resume as PDF"
            >
              <Icon name="download" size={16} className="mr-2" decorative />
              Download Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <ButtonTag
            className="md:hidden p-2 transition-colors"
            style={{ color: '#D75F4E' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            {...(isClient && {
              whileTap: { scale: 0.95 },
              whileHover: { color: '#ff6b5a' }
            })}
          >
            <Icon
              name={isMobileMenuOpen ? 'close' : 'menu'}
              size={20}
              decorative
            />
          </ButtonTag>
        </div>

        {/* Mobile Menu */}
        {isClient ? (
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden bg-surface-panel border-t border-divider"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <nav className="px-4 py-4 space-y-3">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left p-3 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? 'bg-accent text-text-inverse'
                          : 'text-text-body hover:bg-bg-primary'
                      }`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  
                  <div className="pt-3 border-t border-divider">
                    <Button
                      variant="primary"
                      size="sm"
                      href="/resume.pdf"
                      className="w-full justify-center"
                      ariaLabel="Download resume as PDF"
                    >
                      <Icon name="download" size={16} className="mr-2" decorative />
                      Download Resume
                    </Button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          /* Static mobile menu for SSR */
          isMobileMenuOpen && (
            <div className="md:hidden bg-surface-panel border-t border-divider">
              <nav className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left p-3 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-accent text-text-inverse'
                        : 'text-text-body hover:bg-bg-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="pt-3 border-t border-divider">
                  <Button
                    variant="primary"
                    size="sm"
                    href="/resume.pdf"
                    className="w-full justify-center"
                    ariaLabel="Download resume as PDF"
                  >
                    <Icon name="download" size={16} className="mr-2" decorative />
                    Download Resume
                  </Button>
                </div>
              </nav>
            </div>
          )
        )}
      </HeaderTag>
    </>
  );
};

export default Header;
