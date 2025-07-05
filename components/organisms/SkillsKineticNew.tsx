'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'Next.js 13/14', icon: '⚡' },
      { name: 'React 18', icon: '⚛️' },
      { name: 'TypeScript 5', icon: '🔷' },
      { name: 'Tailwind CSS 3', icon: '🎨' }
    ],
    color: '#D75F4E',
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Laravel 10 MVC', icon: '🛡️' },
      { name: 'ASP.NET Core 7', icon: '🏗️' },
      { name: 'MySQL 8', icon: '🗄️' },
      { name: 'PostgreSQL', icon: '🐘' }
    ],
    color: '#A9B8C4',
  },
  {
    name: 'Mobile',
    skills: [
      { name: 'React Native 0.73', icon: '📱' },
      { name: 'Expo SDK49', icon: '🚀' },
      { name: 'EAS Build', icon: '🔧' },
      { name: 'AsyncStorage', icon: '💾' }
    ],
    color: '#10b981',
  },
  {
    name: 'Systems',
    skills: [
      { name: 'C++17', icon: '⚙️' },
      { name: 'STL Containers', icon: '📦' },
      { name: 'GCC/Clang/MSVC', icon: '🔨' },
      { name: 'Memory Management', icon: '🧠' }
    ],
    color: '#64748b',
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git/GitHub', icon: '🔧' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Postman', icon: '📮' },
      { name: 'Docker', icon: '🐳' }
    ],
    color: '#ef4444',
  },
];

const SkillsKinetic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const isInView = useInView(containerRef, { once: true });
  
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section 
      ref={containerRef}
      id="skills"
      className="min-h-screen py-32 overflow-hidden relative"
      style={{
        background: 'linear-gradient(180deg, #15202B 0%, #1a252f 50%, #15202B 100%)',
        perspective: '1500px',
      }}
    >
      <div className="max-w-full mx-auto px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-7xl lg:text-8xl font-display italic text-white mb-8">
            Technical <span style={{ color: '#D75F4E' }}>Mastery</span>
          </h2>
          <p className="text-2xl text-white/70 max-w-3xl mx-auto">
            4 years of expertise across full-stack development, crafting innovative solutions with modern technologies.
          </p>
        </motion.div>

        {/* SIMPLE STAGGERED LAYOUT */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {skillCategories.map((_, index) => {
              if (index === skillCategories.length - 1) return null;
              
              // Calculate connection points based on staggered layout
              const isCurrentEven = index % 2 === 0;
              const isNextEven = (index + 1) % 2 === 0;
              
              const currentY = 120 + (index * 80); // Match card positions
              const nextY = 120 + ((index + 1) * 80);
              
              const currentX = isCurrentEven ? '25%' : '75%';
              const nextX = isNextEven ? '25%' : '75%';
              
              return (
                <motion.line
                  key={index}
                  x1={currentX}
                  y1={currentY}
                  x2={nextX}
                  y2={nextY}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: index * 0.3 }}
                />
              );
            })}
          </svg>
          
          {skillCategories.map((category, categoryIndex) => {
            // Staggered positioning - alternating left and right
            const isEven = categoryIndex % 2 === 0;
            const offsetY = categoryIndex * 80; // Reduced vertical spacing
            
            return (
              <motion.div
                key={category.name}
                className={`relative mb-4 ${isEven ? 'ml-0' : 'ml-auto'}`}
                style={{
                  width: '400px',
                  marginTop: `${offsetY}px`,
                  zIndex: 10,
                }}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: categoryIndex * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {/* Clean Skill Card */}
                <div 
                  className="backdrop-blur-sm border-2 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}15, ${category.color}05)`,
                    borderColor: category.color,
                    boxShadow: `0 10px 30px ${category.color}30, inset 0 0 20px ${category.color}10`,
                  }}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: category.color }}
                    />
                    <h3 
                      className="text-xl font-bold"
                      style={{ color: category.color }}
                    >
                      {category.name}
                    </h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="flex items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.05,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <span className="text-white text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div 
                    className="absolute -inset-1 rounded-2xl opacity-30 blur-xl"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}20, transparent)`,
                      zIndex: -1,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* 3D Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 10 - 5, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsKinetic;
