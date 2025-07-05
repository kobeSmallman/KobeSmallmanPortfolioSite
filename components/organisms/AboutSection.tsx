'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      id="about"
      className="min-h-screen py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #A9B8C4 0%, #c5d2dd 50%, #A9B8C4 100%)',
      }}
    >
      <motion.div 
        className="max-w-6xl mx-auto px-8 relative z-10"
        style={{ y, opacity }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-7xl lg:text-8xl font-display italic text-white mb-8">
            About <span style={{ color: '#D75F4E' }}>Me</span>
          </h2>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">
            Full-stack developer passionate about crafting innovative solutions and building meaningful digital experiences.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-display italic text-white mb-6">
                My Journey
              </h3>
              
              <div className="space-y-4 text-lg text-white/90 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer based in Alberta, Canada, with 4+ years of experience and 10+ successful projects under my belt. My journey began with a fascination for how code can solve real-world problems and create meaningful user experiences.
                </p>
                
                <p>
                  Currently working as a Jr Full Stack Developer at WIDA Inc., I specialize in building scalable web applications using React, Next.js, TypeScript, and Laravel. I have experience across the full development lifecycle, from initial concept and design through deployment and maintenance.
                </p>
                
                <p>
                  When I'm not coding, you'll find me on the hockey rink, gaming with friends, skiing down Alberta's mountains in winter, or hiking through our beautiful trails. I enjoy everything from frontend to backend development, always striving to create solutions that are both technically sound and user-friendly.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-white">Key Highlights</h4>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Jr Full Stack Developer at WIDA Inc. - Leading development of supply chain CRM systems</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>4+ years experience with 10+ successful projects delivered</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Freelance Web Developer - Helping small businesses establish their online presence</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Passionate about mobile development and creating engaging user experiences</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Profile Image & Stats */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Profile Image */}
            <motion.div
              className="relative mx-auto w-80 h-80 rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(45deg, #D75F4E, #ff6b5a)',
                padding: '4px',
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img 
                  src="/images/kobeprofilepic.jpg" 
                  alt="Kobe Smallman - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm">
                <h4 className="text-3xl font-bold text-white mb-2">6+</h4>
                <p className="text-white/90">Projects Completed</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm">
                <h4 className="text-3xl font-bold text-white mb-2">15+</h4>
                <p className="text-white/90">Technologies</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm">
                <h4 className="text-3xl font-bold text-white mb-2">2+</h4>
                <p className="text-white/90">Years Experience</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm">
                <h4 className="text-3xl font-bold text-white mb-2">100%</h4>
                <p className="text-white/90">Passion</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
