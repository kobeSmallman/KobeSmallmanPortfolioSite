'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const skillCategories = [
  {
    name: 'Frontend',
    skills: ['React 18', 'Next.js 14', 'TypeScript 5', 'Tailwind CSS 3'],
    color: '#D75F4E',
    position: { x: 0, y: -150, z: 0 }
  },
  {
    name: 'Backend',
    skills: ['Laravel 10', 'ASP.NET Core 7', 'Node.js', 'PostgreSQL'],
    color: '#A9B8C4',
    position: { x: 130, y: -75, z: -50 }
  },
  {
    name: 'Mobile',
    skills: ['React Native 0.73', 'Expo SDK49', 'iOS', 'Android'],
    color: '#F4F1EA',
    position: { x: 130, y: 75, z: 50 }
  },
  {
    name: 'DevOps',
    skills: ['Vercel', 'AWS', 'Docker', 'GitHub Actions'],
    color: '#ff6b5a',
    position: { x: 0, y: 150, z: 0 }
  },
  {
    name: 'Blockchain',
    skills: ['Solidity 0.8', 'ethers.js', 'Hardhat', 'Web3'],
    color: '#c5d2dd',
    position: { x: -130, y: 75, z: -50 }
  },
  {
    name: 'Systems',
    skills: ['C++17', 'STL', 'Cross-platform', 'Memory Management'],
    color: '#e8e3d6',
    position: { x: -130, y: -75, z: 50 }
  }
];

const SkillsKinetic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false });
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen py-32 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #15202B 0%, #1a2332 50%, #15202B 100%)',
        perspective: '2000px',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-7xl lg:text-8xl font-display italic mb-8" style={{ color: '#F4F1EA' }}>
            Technical <span style={{ color: '#D75F4E' }}>Mastery</span>
          </h2>
          <p className="text-2xl" style={{ color: '#A9B8C4' }}>
            Six years of expertise across full-stack development
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="p-8 rounded-2xl text-center"
              style={{
                background: 'rgba(244, 241, 234, 0.05)',
                border: `2px solid ${category.color}`,
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: category.color }}>
                {category.name}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: `${category.color}20`,
                      color: '#F4F1EA',
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Skills Visualization */}
        <motion.div 
          className="relative w-full h-96 mt-20 flex items-center justify-center"
          style={{
            transform: `rotateY(${rotateY}deg)`,
            transformStyle: 'preserve-3d',
            scale: scale,
          }}
        >
          {/* Central Core */}
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2"
              style={{
                borderColor: '#D75F4E',
                background: 'radial-gradient(circle, rgba(215, 95, 78, 0.1), transparent)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                borderColor: ['#D75F4E', '#ff6b5a', '#D75F4E'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-2xl font-bold" style={{ color: '#F4F1EA' }}>CORE</span>
              </div>
            </motion.div>

            {/* Skill Category Nodes */}
            {skillCategories.map((category, index) => (
              <SkillNode
                key={category.name}
                category={category}
                index={index}
                isSelected={selectedCategory === index}
                onSelect={() => setSelectedCategory(selectedCategory === index ? null : index)}
                isInView={isInView}
              />
            ))}

            {/* Connecting Lines */}
            {skillCategories.map((category, index) => (
              <motion.div
                key={`connection-${index}`}
                className="absolute left-1/2 top-1/2 origin-left"
                style={{
                  width: Math.sqrt(category.position.x ** 2 + category.position.y ** 2),
                  height: '2px',
                  background: `linear-gradient(90deg, rgba(215, 95, 78, 0.6), ${category.color}60)`,
                  transform: `translate(-50%, -50%) rotate(${Math.atan2(category.position.y, category.position.x) * 180 / Math.PI}deg)`,
                  transformStyle: 'preserve-3d',
                }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            ))}

          {/* Skill Details Panel */}
          {selectedCategory !== null && (
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              style={{
                background: 'rgba(244, 241, 234, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '24px',
              }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#15202B' }}>
                {skillCategories[selectedCategory].name}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skillCategories[selectedCategory].skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="px-3 py-2 rounded-lg text-sm font-medium"
                    style={{
                      backgroundColor: `${skillCategories[selectedCategory].color}20`,
                      color: skillCategories[selectedCategory].color,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {[
            { value: '280+', label: 'Learning Points', color: '#D75F4E' },
            { value: '10+', label: 'Major Projects', color: '#A9B8C4' },
            { value: '4', label: 'Years Experience', color: '#F4F1EA' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className="text-6xl font-bold mb-2"
                style={{ color: stat.color }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-lg" style={{ color: '#A9B8C4' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface SkillNodeProps {
  category: typeof skillCategories[0];
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  isInView: boolean;
}

const SkillNode: React.FC<SkillNodeProps> = ({ category, index, isSelected, onSelect, isInView }) => {
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%) translate3d(${category.position.x}px, ${category.position.y}px, ${category.position.z}px)`,
        transformStyle: 'preserve-3d',
      }}
      initial={{ 
        opacity: 0, 
        scale: 0,
        rotateY: -90,
      }}
      animate={isInView ? { 
        opacity: 1, 
        scale: isSelected ? 1.3 : 1,
        rotateY: 0,
      } : {}}
      transition={{ 
        duration: 1, 
        delay: index * 0.3,
        scale: { duration: 0.3 }
      }}
      whileHover={{ 
        scale: 1.2,
        rotateY: 15,
      }}
      onClick={onSelect}
    >
      {/* Node Circle */}
      <motion.div
        className="w-24 h-24 rounded-full border-4 flex items-center justify-center relative"
        style={{
          borderColor: category.color,
          background: `radial-gradient(circle, ${category.color}20, transparent)`,
        }}
        animate={{
          borderColor: isSelected ? [category.color, '#ffffff', category.color] : category.color,
          boxShadow: isSelected ? [
            `0 0 20px ${category.color}60`,
            `0 0 40px ${category.color}80`,
            `0 0 20px ${category.color}60`,
          ] : `0 0 10px ${category.color}40`,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <span className="text-lg font-bold" style={{ color: category.color }}>
          {category.name.slice(0, 3).toUpperCase()}
        </span>
        
        {/* Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: category.color,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />
      </motion.div>

      {/* Label */}
      <motion.div
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center"
        style={{
          transform: 'translateZ(50px)',
        }}
      >
        <div className="text-sm font-bold" style={{ color: '#F4F1EA' }}>
          {category.name}
        </div>
        <div className="text-xs font-medium" style={{ color: '#F4F1EA' }}>
          {category.skills.length} skills
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsKinetic;
