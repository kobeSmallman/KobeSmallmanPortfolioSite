'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { projects } from '../../data/projects';
import { useRouter } from 'next/navigation';

// Simple Mobile Projects Component - NO SCROLL EFFECTS
const MobileProjects: React.FC = () => {
  const router = useRouter();
  
  return (
    <section 
      className="lg:hidden py-16 px-4"
      style={{
        background: 'linear-gradient(180deg, #F4F1EA 0%, #F4F1EA 100%)',
      }}
    >
      <div className="max-w-sm mx-auto">
        {/* Mobile Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display italic text-text-body leading-tight">
            Featured{' '}
            <span className="relative">
              <span style={{ color: '#D75F4E' }}>Projects</span>
              <div className="absolute -bottom-2 left-0 h-1 w-full bg-accent" style={{ backgroundColor: '#D75F4E' }} />
            </span>
          </h2>
          <p className="text-text-body/70 mt-3 text-base leading-relaxed">
            Six projects spanning web, mobile, enterprise, and blockchain development
          </p>
        </div>
        
        {/* Mobile Cards - Simple Stacked Layout */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              {/* Project Image */}
              {project.images && project.images.length > 0 && (
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-4">
                {/* Header */}
                <div className="mb-3">
                  <div
                    className="px-2 py-1 text-xs font-medium uppercase tracking-wide rounded inline-block"
                    style={{
                      backgroundColor: '#D75F4E',
                      color: '#F4F1EA'
                    }}
                  >
                    {project.category}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-text-body mb-2 leading-tight">
                  {project.name}
                </h3>
                
                <p className="text-text-body/70 text-sm leading-relaxed mb-3">
                  {project.overview}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.stack.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-mono rounded"
                      style={{
                        backgroundColor: '#A9B8C4',
                        color: '#F4F1EA'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action buttons - Stack vertically */}
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      if (project.id === 'dungeon-escape') {
                        window.open('/projects/dungeon-escape/code', '_blank');
                      } else if (project.links.github) {
                        window.open(project.links.github, '_blank');
                      }
                    }}
                    className="w-full px-3 py-2 text-sm font-medium rounded-lg border border-text-body/20 hover:bg-text-body/5 transition-colors"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#15202B'
                    }}
                  >
                    {project.id === 'dungeon-escape' ? 'View Code' : 'GitHub'}
                  </button>
                  
                  {project.id === 'lacombe-gutters' && (
                    <button
                      onClick={() => window.open(project.links.live, '_blank')}
                      className="w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                      style={{
                        backgroundColor: '#D75F4E',
                        color: '#F4F1EA'
                      }}
                    >
                      Live Demo
                    </button>
                  )}
                  
                  <button
                    onClick={() => router.push(`/projects/${project.id}`)}
                    className="w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                    style={{
                      backgroundColor: '#A9B8C4',
                      color: '#F4F1EA'
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Desktop Projects Component - WITH SCROLL EFFECTS
const DesktopProjects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Advanced isometric transforms with face-forward position
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [45, 0, 0, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-15, 0, 0, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -200]);

  return (
    <section 
      ref={containerRef}
      id="projects"
      className="hidden lg:block min-h-screen py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F4F1EA 0%, #e8e3d6 50%, #F4F1EA 100%)',
        perspective: '2000px',
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-7xl lg:text-8xl font-display italic text-text-body mb-8">
            Featured <span style={{ color: '#D75F4E' }}>Projects</span>
          </h2>
          <p className="text-2xl text-text-body/70 max-w-3xl mx-auto">
            Six comprehensive projects showcasing full-stack expertise across web, mobile, and enterprise systems.
          </p>
        </motion.div>

        {/* Isometric Project Stack */}
        <motion.div
          className="relative"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'perspective(2000px)',
          }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              scale,
              y,
              transformStyle: 'preserve-3d',
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.slice(0, 6).map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                scrollProgress={scrollYProgress}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Main component that renders both mobile and desktop versions
const ProjectsIsometric: React.FC = () => {
  return (
    <>
      <MobileProjects />
      <DesktopProjects />
    </>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  scrollProgress: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, scrollProgress }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const isInView = useInView(cardRef, { once: true, margin: "0%" });
  
  // Individual card transforms with face-forward optimization
  const cardY = useTransform(scrollProgress, [0, 1], [index * 50, -(index * 30)]);
  const cardRotateZ = useTransform(scrollProgress, [0, 0.3, 0.7, 1], [-4, 0, 0, index % 2 === 0 ? 5 : -5]);
  const cardScale = useTransform(scrollProgress, [0, 0.5, 1], [0.9, 1.1, 0.95]);

  // Staggered entrance delay  
  const delay = index * 0.15;

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer"
      style={{
        y: cardY,
        rotateZ: cardRotateZ,
        scale: cardScale,
        transformStyle: 'preserve-3d',
      }}
      initial={{ 
        opacity: 0, 
        y: 50,
        scale: 0.9,
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        rotateZ: 0,
        rotateX: 0,
        scale: 1,
      } : {}}
      transition={{ 
        duration: 1.5, 
        delay: delay * 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.05,
        y: -4,
        boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
        transition: { duration: 0.3 }
      }}
    >
      {/* Card Shadow */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'rgba(21, 32, 43, 0.1)',
          transform: 'translateZ(-20px) rotateX(90deg)',
          transformOrigin: 'bottom',
        }}
        animate={{
          opacity: isInView ? [0, 0.3, 0.1] : 0,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Main Card */}
      <motion.div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #ffffff, #f8f8f8)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Project Image */}
        <div 
          className="h-48 relative overflow-hidden"
          style={{
            background: project.color || '#D75F4E',
          }}
        >
          <motion.div
            className="absolute inset-0"
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.images && project.images.length > 0 ? (
              <img 
                src={project.images[0]} 
                alt={project.name}
                className="w-full h-full object-cover"
                style={{
                  mixBlendMode: 'multiply',
                  opacity: 0.8,
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-6xl text-white">🚀</span>
              </div>
            )}
          </motion.div>
          
          {/* Animated overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          />
        </div>

        {/* Card Content */}
        <div className="p-6 md:p-8 h-[350px] md:h-[420px] flex flex-col justify-between">
          <motion.h3 
            className="text-2xl font-bold text-text-body mb-4"
            style={{
              transform: 'translateZ(20px)',
            }}
          >
            {project.name}
          </motion.h3>
          
          <div className="flex-1 flex flex-col">
            <motion.p 
              className="text-text-body/70 mb-6 flex-1"
              style={{
                transform: 'translateZ(10px)',
              }}
            >
              {project.overview}
            </motion.p>

            {/* Tech Stack */}
            <motion.div 
              className="flex flex-wrap gap-2"
              style={{
                transform: 'translateZ(15px)',
              }}
            >
              {project.stack.slice(0, 4).map((tech: string, techIndex: number) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full"
                  style={{
                    backgroundColor: `${project.color || '#D75F4E'}20`,
                    color: project.color || '#D75F4E',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    delay: delay + (techIndex * 0.05),
                    duration: 0.4,
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: project.color || '#D75F4E',
                    color: '#F4F1EA',
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 relative z-50 mt-6">
            <button
              className="flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 text-sm relative z-50 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: project.color || '#D75F4E',
                color: '#F4F1EA',
                cursor: 'pointer',
                border: 'none',
                outline: 'none',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.boxShadow = `0 10px 30px ${project.color || '#D75F4E'}40`;
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.boxShadow = 'none';
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Learn More clicked for:', project.name);
                router.push(`/projects/${project.id}`);
              }}
            >
              Learn More
            </button>
            
            {(project.links.live || project.links.github || project.links.demo) && (
              <button
                className="px-4 py-3 rounded-xl font-medium transition-all duration-300 border-2 text-sm relative z-50 hover:scale-105"
                style={{
                  borderColor: project.color || '#D75F4E',
                  color: project.color || '#D75F4E',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  outline: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = project.color || '#D75F4E';
                  (e.target as HTMLButtonElement).style.color = '#F4F1EA';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                  (e.target as HTMLButtonElement).style.color = project.color || '#D75F4E';
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Second button clicked for:', project.name);
                  if (project.links.live) {
                    console.log('Opening live link:', project.links.live);
                    window.open(project.links.live, '_blank');
                  } else if (project.links.demo) {
                    console.log('Opening demo link:', project.links.demo);
                    if (project.links.demo.startsWith('http')) {
                      window.open(project.links.demo, '_blank');
                    } else {
                      router.push(project.links.demo);
                    }
                  } else if (project.links.github) {
                    console.log('Opening GitHub link:', project.links.github);
                    window.open(project.links.github, '_blank');
                  }
                }}
              >
                {project.links.live ? 'Live Site' : project.links.demo ? 'View Code' : 'GitHub'}
              </button>
            )}
          </div>
        </div>

        {/* 3D Frame Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border"
          style={{
            borderColor: `${project.color || '#D75F4E'}30`,
            transform: 'translateZ(1px)',
          }}
          animate={{
            borderColor: isInView ? [
              `${project.color || '#D75F4E'}30`,
              `${project.color || '#D75F4E'}60`,
              `${project.color || '#D75F4E'}30`,
            ] : `${project.color || '#D75F4E'}30`,
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectsIsometric;
