'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Button from '../atoms/Button';

const HeroKinetic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  // Rotating professional messages
  const professionalMessages = [
    'Professional Jr Software Developer',
    'Passionate about innovative projects',
    'SEO optimization specialist',
    'Front-end development expert',
    'Back-end architecture designer',
    'Full-stack development enthusiast',
    'Cross-platform mobile developer',
    'Mobile app creator',
    'Performance optimization expert',
    'User experience focused'
  ];
  
  // Advanced kinetic transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) / 20);
        mouseY.set((e.clientY - centerY) / 20);
      }
    };
    
    const handleWheel = (e: WheelEvent) => {
      if (!hasScrolled && Math.abs(e.deltaY) > 40) {
        setHasScrolled(true);
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    if (containerRef.current) {
      containerRef.current.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current) {
        containerRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, [mouseX, mouseY, hasScrolled]);

  // Typing animation effect
  useEffect(() => {
    const currentMessage = professionalMessages[currentMessageIndex];
    let timeoutId: NodeJS.Timeout;
    
    if (isTyping) {
      // Typing forward
      if (displayedText.length < currentMessage.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentMessage.slice(0, displayedText.length + 1));
        }, 100); // Typing speed
      } else {
        // Pause at full message
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause duration
      }
    } else {
      // Typing backward (erasing)
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Erasing speed
      } else {
        // Move to next message
        setCurrentMessageIndex((prev) => (prev + 1) % professionalMessages.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentMessageIndex, professionalMessages]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-screen flex items-start justify-center overflow-hidden pt-32"
      style={{ 
        background: 'linear-gradient(135deg, #15202B 0%, #1a2332 50%, #15202B 100%)',
        perspective: '1000px'
      }}
    >
      {/* Advanced Particle System */}
      <div className="absolute inset-0">
        {Array.from({length: 50}).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              backgroundColor: i % 3 === 0 ? '#D75F4E' : i % 2 === 0 ? '#A9B8C4' : '#F4F1EA',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 1, 0.1],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>



      {/* User Profile Image */}
      <motion.div 
        className="absolute right-4 top-24 w-28 h-28 sm:right-8 sm:top-28 sm:w-36 sm:h-36 lg:right-20 lg:top-1/3 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 z-10"
        style={{
          borderColor: '#D75F4E',
          transform: 'rotateX(-15deg) rotateY(10deg)',
          x: mouseYSpring,
          y: mouseXSpring,
          boxShadow: '0 20px 40px rgba(215, 95, 78, 0.3)',
        }}
        animate={{
          rotateZ: [0, -5, 5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        <img 
          src="/images/kobeprofilepic.jpg" 
          alt="Kobe Smallman - Full Stack Developer"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </motion.div>

      <motion.div 
        className="absolute left-1/3 bottom-1/4 w-20 h-60 opacity-10"
        style={{
          background: 'linear-gradient(90deg, #F4F1EA, #e8e3d6)',
          transform: 'rotateX(60deg) rotateY(-45deg)',
          x: mouseXSpring,
          y: mouseYSpring,
          borderRadius: '6px',
        }}
        animate={{
          rotateZ: [0, 10, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      {/* Main Content with Advanced Typography */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 text-center z-10 relative mt-8 sm:mt-12 lg:mt-16">
        <motion.div 
          style={{ opacity }}
          className="space-y-16"
        >
          {/* Hero Typography */}
          <motion.div
            style={{ y: y1, scale, rotateX: rotate }}
          >
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[12rem] xl:text-[14rem] font-display font-light leading-none tracking-tighter"
              style={{ color: '#F4F1EA' }}
              initial={{ letterSpacing: '0.1em' }}
              animate={{ letterSpacing: '0em' }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              Kobe{' '}
              <motion.span 
                className="relative inline-block"
                style={{ color: '#D75F4E' }}
              >
                Smallman
                <motion.div
                  className="absolute -bottom-4 left-0 right-0 h-1 rounded-full"
                  style={{ backgroundColor: '#D75F4E' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Tagline with Kinetic Effects */}
          <motion.div 
            style={{ y: y2 }}
            className="space-y-10"
          >
            <motion.div 
              className="text-lg lg:text-xl xl:text-2xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed min-h-[3rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.span 
                style={{ color: '#D75F4E' }}
                className="font-medium"
              >
                {displayedText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-0.5 h-6 bg-current ml-1"
                />
              </motion.span>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.button
                className="px-16 py-6 text-xl font-medium rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #D75F4E, #ff6b5a)',
                  color: '#F4F1EA',
                  border: 'none',
                  boxShadow: '0 10px 30px rgba(215, 95, 78, 0.2)',
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -4,
                  boxShadow: '0 20px 40px rgba(215, 95, 78, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const projectsElement = document.getElementById('projects');
                  projectsElement?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Portfolio
              </motion.button>
              
              <motion.button
                className="px-16 py-6 text-xl font-medium border-2 rounded-full transition-all duration-300"
                style={{
                  borderColor: '#A9B8C4',
                  color: '#A9B8C4',
                  background: 'transparent',
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -4,
                  borderColor: '#D75F4E',
                  boxShadow: '0 20px 40px rgba(169, 184, 196, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactElement = document.getElementById('contact');
                  contactElement?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Connect
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};

export default HeroKinetic;
