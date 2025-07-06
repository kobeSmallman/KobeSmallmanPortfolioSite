'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { projects } from '../../data/projects';

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const router = useRouter();

  return (
    <>
      {/* Mobile Version - Completely Independent */}
      <section className="lg:hidden bg-surface-panel py-16 px-4" style={{
        background: 'linear-gradient(180deg, #F4F1EA 0%, #F4F1EA 100%)'
      }}>
        <div className="max-w-sm mx-auto">
          {/* Mobile Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display italic text-text-body leading-tight">
              Featured{' '}
              <span className="relative">
                <span style={{ color: '#D75F4E' }}>Work</span>
                <div className="absolute -bottom-2 left-0 h-1 w-full bg-accent" style={{ backgroundColor: '#D75F4E' }} />
              </span>
            </h2>
            <p className="text-text-body/70 mt-3 text-base leading-relaxed">
              Six projects spanning web, mobile, enterprise, and blockchain development
            </p>
          </div>
          
          {/* Mobile Cards */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="px-2 py-1 text-xs font-medium uppercase tracking-wide rounded"
                      style={{
                        backgroundColor: '#D75F4E',
                        color: '#F4F1EA'
                      }}
                    >
                      {project.category}
                    </div>
                    <span className="text-text-body/60 text-sm font-mono">
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-text-body mb-3 leading-tight">
                    {project.name}
                  </h3>
                  
                  <p className="text-text-body/70 text-sm leading-relaxed mb-4">
                    {project.overview}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
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
                  
                  {/* Action buttons - Stack vertically on mobile */}
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        if (project.id === 'dungeon-escape') {
                          window.open('/projects/dungeon-escape/code', '_blank');
                        } else if (project.links.github) {
                          window.open(project.links.github, '_blank');
                        }
                      }}
                      className="w-full px-4 py-2.5 text-sm font-medium rounded-lg border border-text-body/20 hover:bg-text-body/5 transition-colors"
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
                        className="w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-colors"
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
                      className="w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-colors"
                      style={{
                        backgroundColor: '#A9B8C4',
                        color: '#F4F1EA'
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop Version - 3D Scroll Animation */}
      <section 
        ref={containerRef} 
        className="hidden lg:block relative min-h-[300vh] bg-surface-panel"
        style={{
          background: 'linear-gradient(180deg, #F4F1EA 0%, #F4F1EA 100%)'
        }}
      >
        {/* Subtle blue-grey texture overlay at 20% opacity */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{ backgroundColor: '#A9B8C4' }} />
          <div className="absolute inset-0 bg-noise opacity-30" />
        </div>

        {/* Desktop: Sticky viewport for 3D isometric stack */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Desktop Header */}
            <motion.div 
              className="text-center mb-12 sm:mb-16 lg:mb-20"
              style={{ 
                y: useTransform(scrollYProgress, [0, 0.3], [100, 0]),
                opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1])
              }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display italic text-text-body leading-tight">
                Featured{' '}
                <span className="relative">
                  <span style={{ color: '#D75F4E' }}>Work</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-accent"
                    style={{
                      width: useTransform(scrollYProgress, [0.1, 0.3], ['0%', '100%']),
                      backgroundColor: '#D75F4E'
                    }}
                  />
                </span>
              </h2>
              <p className="text-base sm:text-lg text-text-body/70 max-w-xl mx-auto mt-4 sm:mt-6 leading-relaxed">
                Six projects spanning web, mobile, enterprise, and blockchain development
              </p>
            </motion.div>
            
            {/* Desktop: 3D Isometric stack */}
            <div className="relative perspective-1500 h-64 sm:h-80 lg:h-96">
            {projects.map((project, index) => {
              const stackOffset = index * 15;
              const depth = index * -20;
              
              return (
                <motion.div
                  key={project.id}
                  className="absolute inset-0 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                  style={{
                    y: useTransform(
                      scrollYProgress,
                      [0, 0.2 + index * 0.08, 0.4 + index * 0.08, 0.6 + index * 0.08, 0.95],
                      [0, 0, 0, stackOffset, -400]
                    ),
                    rotateX: useTransform(
                      scrollYProgress,
                      [0.7 + index * 0.05, 0.85 + index * 0.02, 0.95],
                      [8, 8, 25]
                    ),
                    rotateY: useTransform(
                      scrollYProgress,
                      [0.7 + index * 0.05, 0.85 + index * 0.02, 0.95],
                      [0, 0, 15]
                    ),
                    scale: useTransform(
                      scrollYProgress,
                      [0.2 + index * 0.05, 0.5, 0.8 - index * 0.05],
                      [0.7, 1, 0.7]
                    ),
                    zIndex: projects.length - index,
                    transformStyle: 'preserve-3d'
                  }}
                  whileHover={{
                    opacity: 0.9,
                    transition: { duration: 0.1 }
                  }}
                >
                  {/* Desktop card design */}
                  <div 
                    className="relative w-full h-[400px] transition-all duration-300"
                    style={{
                      backgroundColor: '#F4F1EA',
                      border: '1px solid #E5E5E5',
                      transform: `translateZ(${depth}px)`
                    }}
                  >
                    {/* Content */}
                    <div className="p-6 h-full flex flex-col justify-between">
                      {/* Header */}
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className="px-3 py-1 text-xs font-medium uppercase tracking-wide rounded"
                            style={{
                              backgroundColor: '#D75F4E',
                              color: '#F4F1EA'
                            }}
                          >
                            {project.category}
                          </div>
                          <span className="text-text-body/60 text-sm font-mono">
                            {project.year}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-text-body mb-3 leading-tight">
                          {project.name}
                        </h3>
                        
                        <p className="text-text-body/70 text-sm leading-relaxed line-clamp-2">
                          {project.overview}
                        </p>
                      </div>

                      {/* Tech stack */}
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1">
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
                        
                        {/* Action buttons */}
                        <div className="flex gap-3">
                          <button
                            onClick={() => {
                              if (project.id === 'dungeon-escape') {
                                window.open('/projects/dungeon-escape/code', '_blank');
                              } else if (project.links.github) {
                                window.open(project.links.github, '_blank');
                              }
                            }}
                            className="flex-1 px-1.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium rounded border border-text-body/20 hover:bg-text-body/5 transition-colors"
                            style={{
                              backgroundColor: 'transparent',
                              color: '#15202B'
                            }}
                          >
                            {project.id === 'dungeon-escape' ? 'Code' : 'GitHub'}
                          </button>
                          
                          {/* Live demo button - only for Lacombe Gutters */}
                          {project.id === 'lacombe-gutters' && (
                            <button
                              onClick={() => window.open(project.links.live, '_blank')}
                              className="flex-1 px-1.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium rounded transition-colors"
                              style={{
                                backgroundColor: '#D75F4E',
                                color: '#F4F1EA'
                              }}
                            >
                              Live
                            </button>
                          )}
                          
                          {/* Learn More button */}
                          <button
                            onClick={() => router.push(`/projects/${project.id}`)}
                            className="flex-1 px-1.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium rounded transition-colors"
                            style={{
                              backgroundColor: '#A9B8C4',
                              color: '#F4F1EA'
                            }}
                          >
                            Details
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Hover state overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(215, 95, 78, 0.95)' }}
                    >
                      <div className="text-center">
                        <div className="text-surface-panel font-medium mb-2">
                          View Case Study
                        </div>
                        <div className="text-surface-panel/80 text-sm">
                          {project.learningPoints.length} learning points
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </div>

          {/* Scroll progress indicator */}
          <motion.div 
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0])
            }}
          >
            <div className="w-px h-20 bg-text-body/20">
              <motion.div
                className="w-full bg-accent"
                style={{
                  height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
                  backgroundColor: '#D75F4E'
                }}
              />
            </div>
          </motion.div>
        </div>
    </section>
    </>
  );
}
