'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/organisms/Hero';

// Placeholder components - will be created next
const About = () => (
  <section id="about" className="section">
    <div className="section-container">
      <div className="panel max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <motion.div
              className="w-48 h-48 rounded-full bg-accent/10 border-4 border-accent/20 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl">👨‍💻</span>
            </motion.div>
          </div>
          
          {/* About Content */}
          <div className="md:col-span-2 space-y-4">
            <motion.h2
              className="text-display-md font-display italic text-text-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            
            <motion.div
              className="space-y-4 text-body text-text-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p>
                I'm a passionate full-stack developer with a love for creating elegant solutions 
                to complex problems. My journey in technology started with curiosity and has evolved 
                into a career focused on building exceptional user experiences.
              </p>
              
              <p>
                With expertise in modern web technologies like React, Next.js, and TypeScript, 
                I bring both technical depth and creative thinking to every project. I believe 
                in writing clean, maintainable code and staying current with industry best practices.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-bg-primary px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">3+ Years Experience</span>
                </div>
                <div className="bg-bg-primary px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">Full-Stack Focus</span>
                </div>
                <div className="bg-bg-primary px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">Modern Technologies</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Laravel', 'PHP', 'Python', 'REST APIs']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions']
    }
  ];

  return (
    <section id="skills" className="section bg-surface-panel/30">
      <div className="section-container">
        <motion.h2
          className="text-display-lg font-display italic text-center text-text-body mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-lg font-medium text-text-body mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-sm text-text-body bg-bg-primary px-3 py-1 rounded-full"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => (
  <section id="projects" className="section">
    <div className="section-container">
      <motion.h2
        className="text-display-lg font-display italic text-center text-text-body mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project cards will be implemented based on your project data */}
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <motion.div
            key={index}
            className="panel group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="aspect-video bg-bg-primary rounded-lg mb-4 flex items-center justify-center">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="font-display text-lg font-medium text-text-body mb-2">
              Project {index}
            </h3>
            <p className="text-sm text-text-body/80 mb-4">
              Brief description of this amazing project and what it accomplishes.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">React</span>
              <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">Next.js</span>
              <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">TypeScript</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section bg-surface-panel">
    <div className="section-container">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-display-lg font-display italic text-text-body mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        
        <motion.p
          className="text-body-lg text-text-body mb-8 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          I'm always excited to discuss new opportunities, interesting projects, 
          or just chat about technology and development.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:kobe4smallman@gmail.com"
            className="btn-primary"
          >
            Get In Touch
          </a>
          
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/kobesmallman"
              className="p-3 text-text-body hover:text-accent transition-colors rounded-lg"
              aria-label="LinkedIn profile"
            >
              <span className="text-2xl">💼</span>
            </a>
            <a
              href="https://github.com/kobesmallman"
              className="p-3 text-text-body hover:text-accent transition-colors rounded-lg"
              aria-label="GitHub profile"
            >
              <span className="text-2xl">🐙</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
