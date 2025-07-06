'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-surface-bg/95 backdrop-blur-sm border-b border-divider">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-text-body hover:text-accent transition-colors">
            ← Back to Portfolio
          </Link>
          <h1 className="text-xl font-semibold text-text-body">About Kobe Smallman</h1>
        </div>
      </div>

      <section 
        ref={containerRef}
        className="min-h-screen py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F4F1EA 0%, #e8e3d6 50%, #F4F1EA 100%)',
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
            <h2 className="text-7xl lg:text-8xl font-display italic text-text-body mb-8">
              About <span style={{ color: '#D75F4E' }}>Me</span>
            </h2>
            <p className="text-2xl text-text-body/70 max-w-3xl mx-auto">
              Full-Stack Developer with 4+ years of experience building innovative web and mobile applications.
            </p>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/images/kobeprofilepic.jpg" 
                alt="Kobe Smallman Profile Picture" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="space-y-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-display italic text-text-body mb-6">
                My Journey
              </h3>
              
              <div className="space-y-4 text-lg text-text-body leading-relaxed">
                <p>
                  I'm a passionate full-stack developer based in Alberta, Canada, with 4+ years of experience and 10+ successful projects under my belt. My journey began with a fascination for how code can solve real-world problems and create meaningful user experiences.
                </p>
                
                <p>
                  I specialize in building scalable web applications using React, Next.js, TypeScript, and Laravel. I have experience across the full development lifecycle, from initial concept and design through deployment and maintenance.
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
              <h4 className="text-xl font-semibold text-text-body">Key Highlights</h4>
              <ul className="space-y-3 text-text-body/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>4+ years of full-stack development experience across web and mobile</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>10+ successful projects delivered from concept to deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Strong background in React, Next.js, TypeScript, and Laravel</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Experience with both client-side and server-side development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Passionate about creating exceptional user experiences</span>
                </li>
              </ul>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-text-body">Frontend</h4>
                <div className="space-y-2 text-text-body/80">
                  <div>React 18 & Next.js 14</div>
                  <div>TypeScript</div>
                  <div>Tailwind CSS</div>
                  <div>Framer Motion</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-text-body">Backend</h4>
                <div className="space-y-2 text-text-body/80">
                  <div>Laravel MVC</div>
                  <div>ASP.NET Core</div>
                  <div>MySQL & PostgreSQL</div>
                  <div>RESTful APIs</div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <div className="text-center pt-8">
              <Link
                href="/#contact"
                className="inline-flex items-center px-8 py-3 bg-accent text-surface-panel font-medium rounded-full hover:bg-accent/90 transition-colors"
              >
                Let's Connect
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
