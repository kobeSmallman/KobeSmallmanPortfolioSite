'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { type Project } from '../../../data/projects';

interface ProjectDetailClientProps {
  project: Project;
  projectId: string;
}

export default function ProjectDetailClient({ project, projectId }: ProjectDetailClientProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Rich project data with XML content
  const projectDetails: { [key: string]: any } = {
    'wida-crm': {
      name: 'WIDA CRM – Supply-Chain CRM',
      overview: 'Browser-based CRM for WIDA (Lethbridge distributor) built by a six-student capstone team. Runs on Laravel 10 + MySQL 8 with Bootstrap 5 Blade templates. Tracks vendor interactions, employee notes, and response-time analytics.',
      purpose: [
        'Let staff record phone, email, and meeting notes per vendor.',
        'Provide managers with charts of average reply time and yearly spend.',
        'Offer role-based dashboards (Admin / Sales / Warehouse).'
      ],
      teamRole: 'I led architecture and daily coding tasks.',
      collaboration: [
        'Daily stand-ups, Kanban board for tasks.',
        'Weekly slide-deck demos for WIDA stakeholders.',
        'Documented scope-creep items and negotiated timeline changes.',
        'Pair programming sessions for complex features.',
        'Code reviews via Git pull requests.',
        'Agile sprints with retrospectives every 2 weeks.',
        'Slack integration for real-time team communication.'
      ],
      systemDesign: [
        'Laravel MVC architecture with service layer pattern.',
        'MySQL 8 database with normalized vendor/interaction tables.',
        'Bootstrap 5 responsive UI with custom CSS.',
        'Chart.js for analytics visualization.',
        'Role-based authentication with middleware guards.',
        'RESTful API design for mobile-first architecture.',
        'Caching layer with Redis for performance optimization.'
      ],
      challenges: [
        {
          challenge: 'Scope creep: Client requested 15+ additional features mid-project.',
          solution: 'Created formal change-request process with timeline impact analysis.'
        },
        {
          challenge: 'Database performance: Complex queries were slow with large datasets.',
          solution: 'Added database indexes and implemented query optimization.'
        },
        {
          challenge: 'Team coordination: 6 developers working on same codebase.',
          solution: 'Implemented Git branching strategy and daily code reviews.'
        },
        {
          challenge: 'User interface complexity: Multiple role-based dashboards.',
          solution: 'Created component library with reusable UI elements.'
        }
      ],
      impact: [
        'Reduced vendor response tracking time by 60%.',
        'Improved manager visibility into team performance.',
        'Client adopted system for 50+ vendors and 12 staff members.',
        'Achieved 99.5% uptime in production environment.',
        'Positive client feedback led to ongoing maintenance contract.'
      ],
      learningPoints: [
        'Learned to manage stakeholder expectations and scope changes.',
        'Gained experience with Laravel framework and MVC architecture.',
        'Developed skills in database design and query optimization.',
        'Improved team leadership and project management abilities.',
        'Learned importance of user feedback and iterative development.',
        'Gained experience with client communication and requirement gathering.',
        'Developed skills in performance monitoring and optimization.',
        'Learned advanced Git workflows and code review processes.'
      ]
    },
    'portfolio-site': {
      name: 'Personal Portfolio v2',
      overview: 'Complete migration and modernization project rebuilding legacy Create React App portfolio to Next.js 14. Demonstrates ability to modernize existing applications while maintaining functionality, improving performance, and implementing contemporary development patterns.',
      purpose: [
        'Migrate legacy Create React App to modern Next.js 14 architecture.',
        'Demonstrate proficiency with cutting-edge React patterns and TypeScript.',
        'Create professional recruitment platform showcasing technical capabilities.',
        'Serve as testing ground for exploring new web technologies and optimization techniques.',
        'Establish modern development workflow and deployment pipeline.'
      ],
      techStack: ['Next.js 14', 'TypeScript 5', 'Tailwind CSS 3', 'React Server Components', 'Framer Motion', 'Vercel'],
      challenges: [
        {
          challenge: 'Hydration mismatches: Client/server rendering conflicts with React Server Components.',
          solution: 'Implemented proper "use client" boundaries and conditional rendering patterns.'
        },
        {
          challenge: 'Hero image CLS: Cumulative Layout Shift issues affecting Core Web Vitals.',
          solution: 'Fixed with aspect-ratio containers and next/image priority loading optimization.'
        },
        {
          challenge: 'Legacy migration complexity: Modernizing from CRA while maintaining functionality.',
          solution: 'Systematic refactoring with incremental testing and feature parity validation.'
        },
        {
          challenge: 'Performance optimization: Achieving production-grade performance metrics.',
          solution: 'Implemented code splitting, image optimization, and efficient bundle analysis strategies.'
        }
      ],
      impact: [
        'Successfully migrated from legacy Create React App to modern Next.js 14 architecture.',
        'Achieved consistent 95+ Lighthouse performance scores across all metrics.',
        'Enhanced professional presence with recruiters citing technical sophistication.',
        'Demonstrated expertise in React Server Components and modern development patterns.',
        'Established foundation for future portfolio enhancements and feature additions.'
      ],
      learningPoints: [
        'Mastered Next.js 14 App Router architecture and React Server Components.',
        'Developed expertise in TypeScript 5 advanced patterns and type safety.',
        'Gained proficiency with Tailwind CSS 3 design tokens and utility-first styling.',
        'Learned Framer Motion animation patterns for professional user experiences.',
        'Developed skills in Core Web Vitals optimization and performance monitoring.',
        'Gained experience with legacy application modernization and migration strategies.',
        'Improved understanding of client/server rendering patterns and hydration.',
        'Learned systematic approach to refactoring and maintaining feature parity.',
        'Developed expertise in production deployment and CI/CD optimization.',
        'Gained experience with accessibility standards and responsive design principles.'
      ]
    },
    'portfolio-v2': {
      name: 'Personal Portfolio v2',
      overview: 'Complete migration and modernization project rebuilding legacy Create React App portfolio to Next.js 14. Demonstrates ability to modernize existing applications while maintaining functionality, improving performance, and implementing contemporary development patterns.',
      purpose: [
        'Migrate legacy Create React App to modern Next.js 14 architecture.',
        'Demonstrate proficiency with cutting-edge React patterns and TypeScript.',
        'Create professional recruitment platform showcasing technical capabilities.',
        'Serve as testing ground for exploring new web technologies and optimization techniques.',
        'Establish modern development workflow and deployment pipeline.'
      ],
      techStack: ['Next.js 14', 'TypeScript 5', 'Tailwind CSS 3', 'React Server Components', 'Framer Motion', 'Vercel'],
      challenges: [
        {
          challenge: 'Hydration mismatches: Client/server rendering conflicts with React Server Components.',
          solution: 'Implemented proper "use client" boundaries and conditional rendering patterns.'
        },
        {
          challenge: 'Hero image CLS: Cumulative Layout Shift issues affecting Core Web Vitals.',
          solution: 'Fixed with aspect-ratio containers and next/image priority loading optimization.'
        },
        {
          challenge: 'Legacy migration complexity: Modernizing from CRA while maintaining functionality.',
          solution: 'Systematic refactoring with incremental testing and feature parity validation.'
        },
        {
          challenge: 'Performance optimization: Achieving production-grade performance metrics.',
          solution: 'Implemented code splitting, image optimization, and efficient bundle analysis strategies.'
        }
      ],
      impact: [
        'Successfully migrated from legacy Create React App to modern Next.js 14 architecture.',
        'Achieved consistent 95+ Lighthouse performance scores across all metrics.',
        'Enhanced professional presence with recruiters citing technical sophistication.',
        'Demonstrated expertise in React Server Components and modern development patterns.',
        'Established foundation for future portfolio enhancements and feature additions.'
      ],
      learningPoints: [
        'Mastered Next.js 14 App Router architecture and React Server Components.',
        'Developed expertise in TypeScript 5 advanced patterns and type safety.',
        'Gained proficiency with Tailwind CSS 3 design tokens and utility-first styling.',
        'Learned Framer Motion animation patterns for professional user experiences.',
        'Developed skills in Core Web Vitals optimization and performance monitoring.',
        'Gained experience with legacy application modernization and migration strategies.',
        'Improved understanding of client/server rendering patterns and hydration.',
        'Learned systematic approach to refactoring and maintaining feature parity.',
        'Developed expertise in production deployment and CI/CD optimization.',
        'Gained experience with accessibility standards and responsive design principles.'
      ]
    },
    'lacombe-gutters': {
      name: 'Lacombe Gutters',
      overview: 'Complete website redesign for Lacombe Gutters, a local gutter installation company. Built with modern web technologies and focused on local SEO optimization to drive business growth.',
      purpose: [
        'Establish professional online presence for local business.',
        'Improve local SEO ranking for gutter services.',
        'Generate qualified leads through contact forms.',
        'Showcase previous work and customer testimonials.'
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
      challenges: [
        {
          challenge: 'Local SEO: Competing with established gutter companies.',
          solution: 'Implemented local schema markup and Google My Business optimization.'
        },
        {
          challenge: 'Mobile optimization: Ensuring fast load times on mobile.',
          solution: 'Optimized images and implemented responsive design patterns.'
        },
        {
          challenge: 'Lead generation: Converting visitors to customers.',
          solution: 'Created clear call-to-action buttons and streamlined contact forms.'
        }
      ],
      impact: [
        'Increased local search visibility by 300%.',
        'Generated 50+ qualified leads in first 6 months.',
        'Improved customer trust with professional presentation.',
        'Reduced bounce rate by 45% with better user experience.'
      ],
      learningPoints: [
        'Learned local SEO optimization strategies.',
        'Gained experience with small business client management.',
        'Developed skills in conversion rate optimization.',
        'Improved understanding of local market dynamics.',
        'Learned importance of mobile-first design for local businesses.',
        'Gained experience with Google Analytics and Search Console.',
        'Developed skills in lead generation and form optimization.'
      ]
    },
    'dungeon-escape': {
      name: 'Dungeon Escape',
      overview: 'Text-based adventure game built in C++17 featuring dynamic combat, inventory management, and procedural dungeon generation. Implements object-oriented design patterns, modern C++ features, and cross-platform compatibility. Players navigate through rooms using console commands, interact with NPCs through talk/attack mechanics, solve puzzles that block exits, and manage items with special use effects. The game includes a cursed status system with damage over time, comprehensive room navigation, and intelligent enemy AI. Built with STL containers for efficient data management, RAII principles for automatic memory management, and modular architecture for maintainable code. Features cross-platform compatibility across Windows, Linux, and macOS with warning-free compilation on GCC, Clang, and MSVC compilers. The game demonstrates mastery of C++ fundamentals including smart pointers, exception handling, template programming, and modern C++17 features while providing an engaging gameplay experience with strategic combat mechanics and exploration elements.',
      purpose: [
        'Demonstrate C++ programming skills and OOP principles.',
        'Create engaging gameplay with strategic combat system.',
        'Implement save/load functionality for game persistence.',
        'Showcase clean code architecture and design patterns.'
      ],
      systemDesign: [
        'Object-oriented architecture with inheritance hierarchies.',
        'Factory pattern for item and monster creation.',
        'State machine for game flow management.',
        'File I/O system for save/load functionality.',
        'Random number generation for procedural content.'
      ],
      techStack: ['C++17', 'STL', 'File I/O', 'Object-Oriented Design'],
      challenges: [
        {
          challenge: 'Memory management: Preventing memory leaks with complex objects.',
          solution: 'Used smart pointers and RAII principles throughout codebase.'
        },
        {
          challenge: 'Game balance: Ensuring fair but challenging combat system.',
          solution: 'Implemented extensive playtesting and statistical analysis.'
        },
        {
          challenge: 'Code organization: Managing large C++ project structure.',
          solution: 'Created modular design with clear separation of concerns.'
        }
      ],
      impact: [
        'Demonstrated advanced C++ programming capabilities.',
        'Showcased understanding of game development principles.',
        'Provided engaging gameplay experience for users.',
        'Served as portfolio piece for technical interviews.'
      ],
      learningPoints: [
        'Mastered advanced C++17 features and best practices.',
        'Learned game development concepts and design patterns.',
        'Developed skills in memory management and performance optimization.',
        'Improved understanding of object-oriented design principles.',
        'Gained experience with file I/O and data persistence.',
        'Learned importance of code documentation and organization.',
        'Developed skills in debugging and testing C++ applications.',
        'Gained experience with random number generation and algorithms.'
      ]
    },
    '4pics1word': {
      name: '4 Pics 1 Word Game',
      overview: 'Cross-platform mobile puzzle game built with Expo SDK49 and React Native 0.73. Players guess the word common to four Unsplash images, earn coins through gameplay, and spend them on three different hint types. Features background music with auto-pause functionality, offline image caching, and a local leaderboard system. Includes difficulty tiers from easy to hard and complete offline gameplay capability.',
      purpose: [
        'Practice mobile APIs including audio, storage, and navigation.',
        'Produce a store-ready APK for personal testing and deployment.',
        'Provide offline, casual gameplay experience.',
        'Demonstrate end-to-end mobile development skills.'
      ],
      techStack: ['Expo SDK49', 'React Native 0.73', 'React Navigation 6', 'AsyncStorage', 'Axios', 'EAS Build', 'TypeScript'],
      challenges: [
        {
          challenge: 'Unsplash rate limits: API rate limits affecting gameplay experience and image loading.',
          solution: 'Pre-downloaded images in build-time script to avoid runtime API calls.'
        },
        {
          challenge: 'Audio lag on first play: Sound effects had noticeable delay on first interaction.',
          solution: 'Pre-loaded sound using expo-av createAsync for smooth audio experience.'
        },
        {
          challenge: 'Large bundle size: APK size became too large for smooth distribution.',
          solution: 'Compressed images and tree-shook unused Expo packages to optimize build size.'
        }
      ],
      impact: [
        'Store-ready APK successfully built and tested.',
        'Complete mobile development pipeline demonstrated from concept to deployment.',
        '100% offline gameplay capability achieved.',
        'Showcases end-to-end mobile development skills including EAS build pipeline and OTA updates.'
      ],
      learningPoints: [
        'Mastered React Native framework and mobile development.',
        'Learned mobile app store optimization and deployment.',
        'Developed skills in mobile UI/UX design principles.',
        'Gained experience with app monetization strategies.',
        'Improved understanding of cross-platform development.',
        'Learned mobile performance optimization techniques.',
        'Developed skills in user analytics and behavior tracking.',
        'Gained experience with mobile app testing and debugging.'
      ]
    },
    'blockchain-tickets': {
      name: 'BlockchainTickets Platform',
      overview: 'Early-stage decentralized event ticketing platform built on Ethereum blockchain that mints ERC-721 event tickets with resale price-cap smart contracts. Features comprehensive ticket minting UI, automated resale cap enforcement, and JWT-secured dashboards across multiple user roles. The platform demonstrates a complete mint-verify-resell workflow spanning blockchain smart contracts, RESTful APIs, and progressive web application layers. Built with React 18 and Vite for the frontend, ASP.NET Core 7 for the backend API, and Solidity 0.8 smart contracts deployed on Ethereum. Includes JWT authentication, ethers.js for blockchain integration, and Hardhat for smart contract development and testing. The alpha version successfully demonstrates blockchain provenance for event tickets while addressing high gas costs and providing user-friendly interfaces for non-crypto users.',
      purpose: [
        'Eliminate ticket fraud through blockchain verification and provenance.',
        'Create transparent and secure ticket trading platform with enforced resale caps.',
        'Demonstrate blockchain development capabilities across full stack.',
        'Explore Web3 technologies and decentralized application architecture.',
        'Showcase polyglot development skills across blockchain, API, and PWA layers.'
      ],
      techStack: ['Solidity 0.8', 'ethers.js', 'Hardhat', 'ERC-721', 'React 18', 'Vite', 'ASP.NET Core 7', 'JWT Auth', 'TypeScript', 'Ethereum', 'Web3', 'Smart Contracts', 'Progressive Web App', 'RESTful APIs'],
      challenges: [
        {
          challenge: 'High gas costs: Ethereum transaction fees making ticket purchases expensive.',
          solution: 'Implemented batch operations and gas optimization techniques in smart contracts.'
        },
        {
          challenge: 'Non-crypto users: Making blockchain interactions accessible to mainstream users.',
          solution: 'Created intuitive UI with clear transaction feedback and educational tooltips.'
        },
        {
          challenge: 'Secret management in CI: Securely handling private keys and API secrets in deployment.',
          solution: 'Implemented secure CI/CD pipeline with encrypted environment variables and key management.'
        }
      ],
      impact: [
        'Alpha version demonstrates complete mint-verify-resell workflow.',
        'Showcases workflow across blockchain, API, and PWA layers.',
        'Demonstrates blockchain provenance for event ticket authenticity.',
        'Provides foundation for production-ready ticketing platform.',
        'Illustrates polyglot development skills and full-stack blockchain architecture.'
      ],
      learningPoints: [
        'Developed Solidity smart contract development skills (ongoing).',
        'Learned ERC-721 token standard implementation and customization.',
        'Gained experience with ethers.js for blockchain integration.',
        'Implemented Hardhat development environment and testing framework.',
        'Learned Web3 integration patterns and blockchain interactions.',
        'Developed skills in gas optimization and cost management.',
        'Gained experience with JWT authentication in blockchain applications.',
        'Learned Progressive Web App development for Web3 applications.',
        'Developed understanding of decentralized application architecture.',
        'Gained experience with ASP.NET Core 7 API development.',
        'Learned React 18 and Vite build optimization.',
        'Developed skills in CI/CD pipeline security for blockchain projects.',
        'Gained experience with multi-layer application architecture.',
        'Learned blockchain security best practices and smart contract auditing.',
        'Developed understanding of token economics and resale mechanisms.'
      ]
    }
  };

  const detailedData = projectDetails[projectId];
  const projectData = detailedData || project;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'purpose', label: 'Purpose' },
    ...(detailedData?.collaboration ? [{ id: 'team', label: 'Team Process' }] : []),
    ...(detailedData?.systemDesign ? [{ id: 'system', label: 'System Design' }] : []),
    { id: 'tech', label: 'Tech Stack' },
    { id: 'features', label: 'Features' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'impact', label: 'Impact' },
    { id: 'learning', label: 'Learning Points' }
  ];

  return (
    <div className="min-h-screen" style={{ 
      background: 'linear-gradient(135deg, #15202B 0%, #1a2332 50%, #15202B 100%)' 
    }}>
      <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ 
        backgroundColor: 'rgba(21, 32, 43, 0.95)', 
        borderBottom: '1px solid rgba(169, 184, 196, 0.2)' 
      }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="transition-all duration-300 font-medium flex items-center gap-2 hover:opacity-80"
              style={{ color: '#D75F4E' }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Project Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F4F1EA' }}>
              {projectData.name || project.name}
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#A9B8C4' }}>
              {projectData.overview || project.overview}
            </p>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="mb-8">
          {/* Mobile Navigation */}
          <div className="block sm:hidden">
            {/* Mobile Header with Hamburger */}
            <div className="flex items-center justify-between p-4 rounded-xl border mb-4" style={{
              backgroundColor: 'rgba(244, 241, 234, 0.1)',
              borderColor: 'rgba(169, 184, 196, 0.2)'
            }}>
              <span className="font-medium" style={{ color: '#F4F1EA' }}>
                {tabs.find(tab => tab.id === activeSection)?.label}
              </span>
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="p-2 rounded-lg transition-colors"
                style={{
                  backgroundColor: mobileNavOpen ? '#D75F4E' : 'rgba(169, 184, 196, 0.2)',
                  color: mobileNavOpen ? '#F4F1EA' : '#A9B8C4'
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            {/* Mobile Dropdown Menu */}
            {mobileNavOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-2 gap-2 p-3 rounded-xl border mb-4"
                style={{
                  backgroundColor: 'rgba(244, 241, 234, 0.1)',
                  borderColor: 'rgba(169, 184, 196, 0.2)'
                }}
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveSection(tab.id);
                      setMobileNavOpen(false);
                    }}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg`}
                    style={{
                      backgroundColor: activeSection === tab.id ? '#D75F4E' : 'transparent',
                      color: activeSection === tab.id ? '#F4F1EA' : '#A9B8C4',
                      boxShadow: activeSection === tab.id ? '0 2px 8px rgba(215, 95, 78, 0.3)' : 'none'
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <div className="flex flex-wrap gap-2 p-3 rounded-xl border" style={{
              backgroundColor: 'rgba(244, 241, 234, 0.1)',
              borderColor: 'rgba(169, 184, 196, 0.2)'
            }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`px-6 py-3 font-medium transition-all duration-300 rounded-lg`}
                  style={{
                    backgroundColor: activeSection === tab.id ? '#D75F4E' : 'transparent',
                    color: activeSection === tab.id ? '#F4F1EA' : '#A9B8C4',
                    boxShadow: activeSection === tab.id ? '0 4px 20px rgba(215, 95, 78, 0.3)' : 'none'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-[400px]"
        >
          {/* Overview Section */}
          {activeSection === 'overview' && (
            <div className="prose prose-lg max-w-none">
              {(() => {
                if (projectId === 'lacombe-gutters') {
                  return (
                    <div className="space-y-6">
                      <div 
                        className="rounded-xl p-8 shadow-lg border"
                        style={{
                          backgroundColor: 'rgba(244, 241, 234, 0.95)',
                          borderColor: 'rgba(169, 184, 196, 0.3)'
                        }}
                      >
                        <h4 className="text-2xl font-bold mb-6" style={{ color: '#15202B' }}>Project Background</h4>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          Lacombe Gutters is a family-owned gutter installation and maintenance company serving Central Alberta. 
                          When I took on this project, they had an outdated website that wasn't generating leads and ranked poorly in local searches.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          The business owner needed a modern, mobile-optimized website that could compete with larger companies 
                          while showcasing their personalized service and local expertise.
                        </p>
                      </div>
                      <div 
                        className="rounded-xl p-8 shadow-lg border"
                        style={{
                          backgroundColor: 'rgba(244, 241, 234, 0.95)',
                          borderColor: 'rgba(169, 184, 196, 0.3)'
                        }}
                      >
                        <h4 className="text-2xl font-bold text-slate-800 mb-6">Technical Implementation</h4>
                        <p className="text-slate-600 leading-relaxed mb-4">
                          Built with Next.js 13 and Tailwind CSS 3.4, the site prioritizes performance and accessibility. 
                          I implemented advanced local SEO strategies including schema markup, local business listings, and 
                          location-specific content optimization.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          The service area checker uses geolocation APIs to instantly tell visitors if they're within the coverage area, 
                          reducing bounce rates and qualifying leads before they even submit a contact form.
                        </p>
                      </div>
                      <div 
                        className="rounded-xl p-8 shadow-lg border"
                        style={{
                          backgroundColor: 'rgba(244, 241, 234, 0.95)',
                          borderColor: 'rgba(169, 184, 196, 0.3)'
                        }}
                      >
                        <h4 className="text-2xl font-bold text-slate-800 mb-6">Business Impact</h4>
                        <p className="text-slate-600 leading-relaxed">
                          The website transformed the business's online presence, generating consistent leads and establishing 
                          credibility in a competitive market. The owner now receives weekly calls from the website, 
                          with customers specifically mentioning they found them through Google searches.
                        </p>
                      </div>
                    </div>
                  );
                } else if (projectId === 'wida-crm') {
                  return (
                    <div className="space-y-6">
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Capstone Project Overview</h4>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          WIDA CRM was our final capstone project - a comprehensive customer relationship management system 
                          built for WIDA, a major distributor in Lethbridge, Alberta. Our six-student team worked directly 
                          with real stakeholders to solve genuine business challenges.
                        </p>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          As team lead, I coordinated development efforts, managed client communications, and led the 
                          technical architecture decisions that shaped the entire project.
                        </p>
                      </div>
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Technical Architecture</h4>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          The system runs on Laravel 10 with MySQL 8, featuring a robust MVC architecture with service layers 
                          for complex business logic. I designed the database schema to handle vendor relationships, 
                          interaction tracking, and role-based access control.
                        </p>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          Bootstrap 5 provides the responsive frontend, while Chart.js delivers interactive analytics 
                          that help managers visualize team performance and vendor response times.
                        </p>
                      </div>
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Real-World Impact</h4>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          WIDA adopted the system for production use, managing over 50 vendors and 12 staff members. 
                          The client was so satisfied they signed an ongoing maintenance contract, validating our 
                          professional-grade development approach.
                        </p>
                      </div>
                    </div>
                  );
                } else if (projectId === 'portfolio-site' || projectId === 'portfolio-v2') {
                  return (
                    <div className="space-y-6">
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Migration & Modernization Project</h4>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          This portfolio represents a complete migration and rebuild from a legacy Create React App version 
                          to a modern Next.js 14 application. The previous version was functional but limited in demonstrating 
                          current web development capabilities and best practices.
                        </p>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          The migration project showcases my ability to modernize existing applications while maintaining 
                          functionality, improving performance, and implementing contemporary development patterns.
                        </p>
                      </div>
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Purpose & Objectives</h4>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          Primary goal was to create a modern, professional platform that demonstrates proficiency with 
                          cutting-edge web technologies including Next.js 14 App Router, React Server Components, and TypeScript 5.
                        </p>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          The portfolio serves as both a recruitment tool and a testing ground for exploring new React patterns, 
                          performance optimization techniques, and modern development workflows.
                        </p>
                      </div>
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Technical Challenges & Solutions</h4>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          <strong>Hydration Mismatches:</strong> Resolved client/server rendering conflicts with React Server Components 
                          by implementing proper "use client" boundaries and conditional rendering patterns.
                        </p>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          <strong>Hero Image CLS:</strong> Fixed Cumulative Layout Shift issues by implementing proper aspect-ratio 
                          containers and priority loading with next/image optimization.
                        </p>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          <strong>Performance Optimization:</strong> Achieved consistent 95+ Lighthouse scores through code splitting, 
                          image optimization, and efficient bundle analysis strategies.
                        </p>
                      </div>
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Impact & Learning Outcomes</h4>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          The modernized portfolio has significantly enhanced my professional presence, with recruiters 
                          specifically citing the site's technical sophistication and clean implementation. The project 
                          demonstrates expertise in modern React patterns and Next.js 14 App Router architecture.
                        </p>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          Key learning outcomes include mastery of React Server Components, advanced TypeScript patterns, 
                          Framer Motion animations, and comprehensive understanding of Core Web Vitals optimization strategies.
                        </p>
                      </div>
                    </div>
                  );
                } else if (projectId === 'dungeon-escape') {
                  return (
                    <div className="space-y-6">
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Game Development Focus</h4>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          Dungeon Escape was designed as a showcase of C++17 fundamentals and modern programming practices. 
                          The project demonstrates mastery of object-oriented design, memory management, and 
                          cross-platform development without relying on external game engines or frameworks.
                        </p>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          Every aspect of the game, from the combat system to the puzzle mechanics, was built from scratch 
                          using only standard C++ libraries, proving proficiency with core language features.
                        </p>
                      </div>
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Technical Excellence</h4>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          The game compiles warning-free across GCC, Clang, and MSVC compilers, demonstrating 
                          adherence to C++ standards and best practices. STL containers provide efficient data 
                          management, while RAII principles ensure automatic resource cleanup.
                        </p>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          Smart pointers eliminate memory leaks, and the modular architecture allows for easy 
                          extension and maintenance. The codebase serves as a solid foundation for future 
                          game development projects.
                        </p>
                      </div>
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Educational Value</h4>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          This project has proven invaluable for technical interviews, providing concrete examples 
                          of C++ expertise and problem-solving abilities. The game's architecture demonstrates 
                          understanding of software design patterns, debugging techniques, and performance optimization.
                        </p>
                      </div>
                    </div>
                  );
                } else if (projectId === '4pics1word') {
                  return (
                    <div className="space-y-6">
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Mobile Game Development Journey</h4>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          This project was my first deep dive into mobile game development, exploring React Native's 
                          capabilities for creating engaging, offline-capable games. The word puzzle format provided 
                          an excellent foundation for learning mobile UI patterns, state management, and performance optimization.
                        </p>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          The game showcases practical implementation of mobile APIs including audio management, 
                          persistent storage, and navigation patterns essential for modern mobile applications.
                        </p>
                      </div>
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Technical Achievements</h4>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          Successfully built a complete mobile pipeline from development through EAS build deployment, 
                          including store-ready APK generation. The project demonstrates proficiency with Expo SDK49 
                          ecosystem and modern React Native development practices.
                        </p>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          Implemented sophisticated features like image caching, audio preloading, and over-the-air updates 
                          while maintaining smooth 60fps gameplay and efficient memory usage on various device configurations.
                        </p>
                      </div>
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Learning Outcomes</h4>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          This project solidified my understanding of mobile development workflows, from API integration 
                          and asset management to deployment strategies. The experience provided valuable insights into 
                          mobile user experience design and the unique challenges of creating engaging offline-first applications.
                        </p>
                      </div>
                    </div>
                  );
                } else if (projectId === 'blockchain-tickets') {
                  return (
                    <div className="space-y-6">
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Project Status & Development</h4>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          BlockchainTickets is currently in alpha development, representing my exploration into Web3 
                          technologies and decentralized application architecture. The project showcases polyglot 
                          development skills across blockchain, API, and progressive web application layers.
                        </p>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          The platform successfully demonstrates a complete end-to-end workflow for blockchain-based 
                          event ticketing, from smart contract deployment to user-friendly web interfaces.
                        </p>
                      </div>
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Technical Architecture</h4>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          The platform employs a three-layer architecture: Solidity 0.8 smart contracts on Ethereum 
                          for ticket creation and resale cap enforcement, ASP.NET Core 7 RESTful APIs for business 
                          logic, and React 18 with Vite for the user interface.
                        </p>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          JWT authentication secures user sessions, while ethers.js handles blockchain interactions. 
                          The Hardhat development environment provides testing and deployment capabilities.
                        </p>
                      </div>
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Learning Objectives</h4>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          This project serves as a comprehensive learning platform for blockchain development, 
                          demonstrating practical application of ERC-721 token standards, smart contract security, 
                          and Web3 integration patterns while addressing real-world challenges like gas optimization 
                          and user experience for non-crypto users.
                        </p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="p-6 rounded-lg border" style={{
                      backgroundColor: 'rgba(244, 241, 234, 0.9)',
                      borderColor: 'rgba(169, 184, 196, 0.3)'
                    }}>
                      <p className="text-lg leading-relaxed" style={{ color: '#15202B' }}>
                        {projectData.overview || project.overview}
                      </p>
                    </div>
                  );
                }
              })()}
            </div>
          )}

          {/* Purpose Section */}
          {activeSection === 'purpose' && detailedData?.purpose && (
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#F4F1EA' }}>Project Purpose</h3>
              <ul className="space-y-3">
                {detailedData.purpose.map((item: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                    style={{ color: '#A9B8C4' }}
                  >
                    <span className="mr-3" style={{ color: '#D75F4E' }}>•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Team Process Section */}
          {activeSection === 'team' && detailedData?.collaboration && (
            <div>
              <h3 className="text-2xl font-bold text-zinc-200 mb-6">Team Process & Collaboration</h3>
              <div className="space-y-4">
                {detailedData.collaboration.map((item: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-zinc-700 rounded-xl p-6 border border-zinc-600"
                  >
                    <p className="text-zinc-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* System Design Section */}
          {activeSection === 'system' && detailedData?.systemDesign && (
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#F4F1EA' }}>System Design & Architecture</h3>
              
              {/* Business Rules */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4" style={{ color: '#A9B8C4' }}>Business Rules & Logic</h4>
                <div className="grid gap-4">
                  <div className="p-4 rounded-lg border" style={{
                    backgroundColor: 'rgba(244, 241, 234, 0.9)',
                    borderColor: 'rgba(215, 95, 78, 0.3)'
                  }}>
                    <h5 className="font-semibold mb-2" style={{ color: '#15202B' }}>Request to Order Workflow:</h5>
                    <ul className="space-y-1 text-sm" style={{ color: '#15202B' }}>
                      <li>• A request must have at least one product</li>
                      <li>• A request generates a quotation</li>
                      <li>• A paid request becomes an order</li>
                      <li>• An order must have a signed client service agreement</li>
                      <li>• An order can only have one payment type</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg border" style={{
                    backgroundColor: 'rgba(244, 241, 234, 0.9)',
                    borderColor: 'rgba(215, 95, 78, 0.3)'
                  }}>
                    <h5 className="font-semibold mb-2" style={{ color: '#15202B' }}>Client & Vendor Relationships:</h5>
                    <ul className="space-y-1 text-sm" style={{ color: '#15202B' }}>
                      <li>• A client can have zero or many requests</li>
                      <li>• Each product is provided by a single vendor</li>
                      <li>• There can be multiple notes for each client</li>
                      <li>• Each note is written by only one employee</li>
                      <li>• An employee can write notes for multiple clients</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg border" style={{
                    backgroundColor: 'rgba(244, 241, 234, 0.9)',
                    borderColor: 'rgba(215, 95, 78, 0.3)'
                  }}>
                    <h5 className="font-semibold mb-2" style={{ color: '#15202B' }}>Interaction & Note System:</h5>
                    <ul className="space-y-1 text-sm" style={{ color: '#15202B' }}>
                      <li>• Multiple interaction types for each client</li>
                      <li>• Each note is associated with only one interaction type</li>
                      <li>• Employees can write many notes across multiple clients</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Database Relationships */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4" style={{ color: '#A9B8C4' }}>Database Architecture</h4>
                <div className="grid gap-3">
                  {[
                    'Request Order and Scope of Service Agreement: One-to-Many',
                    'Order Header and Request Order: One-to-One', 
                    'Order Header and Order Details: One-to-Many',
                    'Employee and Interaction Note: One-to-Many',
                    'Client and Interaction Note: One-to-Many',
                    'Interaction Type and Interaction Note: One-to-Many',
                    'Product Category and Product Table: One-to-Many',
                    'Vendor and Order Details: One-to-Many',
                    'User Permissions and Page: One-to-Many'
                  ].map((relationship, index) => (
                    <div key={index} className="p-3 rounded-lg border text-sm" style={{
                      backgroundColor: 'rgba(244, 241, 234, 0.9)',
                      borderColor: 'rgba(169, 184, 196, 0.3)',
                      color: '#15202B'
                    }}>
                      {relationship}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Technical Architecture */}
              <div className="p-6 rounded-lg border" style={{
                backgroundColor: 'rgba(244, 241, 234, 0.9)',
                borderColor: 'rgba(169, 184, 196, 0.3)'
              }}>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Technical Implementation</h4>
                <p className="mb-4" style={{ color: '#15202B' }}>
                  Built with Laravel 10 MVC architecture featuring service layers for complex business logic. 
                  The MySQL 8 database handles vendor relationships, interaction tracking, and role-based access control.
                </p>
                <p style={{ color: '#15202B' }}>
                  Bootstrap 5 provides responsive frontend design, while Chart.js delivers interactive analytics 
                  for managers to visualize team performance and vendor response times.
                </p>
              </div>
            </div>
          )}

          {/* Features Section */}
          {activeSection === 'features' && (
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#F4F1EA' }}>Key Features</h3>
              <div className="space-y-4">
                {(() => {
                  let features = [];
                  
                  if (projectId === 'lacombe-gutters') {
                    features = [
                      'Interactive service area checker - input address to verify coverage',
                      'Professional service catalog with detailed pricing',
                      'Mobile-optimized contact forms for lead generation', 
                      'Local SEO optimization for "gutters near me" searches',
                      'Fast loading times with Next.js optimization',
                      'Responsive design for all device types',
                      'Call-to-action buttons for immediate customer contact'
                    ];
                  } else if (projectId === 'wida-crm') {
                    features = [
                      'Vendor interaction tracking and note management',
                      'Role-based dashboards (Admin, Sales, Warehouse)',
                      'Response time analytics and reporting',
                      'Secure user authentication and authorization',
                      'MySQL database with optimized queries',
                      'Bootstrap responsive interface'
                    ];
                  } else if (projectId === 'portfolio-site') {
                    features = [
                      'Server-side rendering with Next.js 14',
                      'Interactive animations with Framer Motion',
                      'Responsive design with Tailwind CSS',
                      'TypeScript for type safety',
                      'Optimized performance and SEO',
                      'Dynamic project detail pages'
                    ];
                  } else if (projectId === 'dungeon-escape') {
                    features = [
                      'Turn-based combat system with strategic elements',
                      'Inventory management with item collection',
                      'Save/load game functionality',
                      'Procedural dungeon generation',
                      'Character progression and stats',
                      'Interactive storyline with choices'
                    ];
                  } else if (projectId === '4pics1word') {
                    features = [
                      'Hundreds of puzzle levels with progressive difficulty',
                      'Hint system to help players when stuck',
                      'Local storage for game progress persistence',
                      'Social sharing capabilities',
                      'Cross-platform compatibility (iOS/Android)',
                      'In-app advertisement integration'
                    ];
                  } else if (projectId === 'blockchain-tickets') {
                    features = [
                      'Smart contracts for secure ticket creation',
                      'Blockchain-based fraud prevention',
                      'Cryptocurrency payment integration',
                      'Decentralized ticket transfer system',
                      'Web3 wallet connectivity',
                      'Event organizer dashboard and management'
                    ];
                  } else {
                    features = project.features || ['Feature details available soon.'];
                  }
                  
                  return features.map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="rounded-xl p-6 border"
                      style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}
                    >
                      <p className="font-medium" style={{ color: '#15202B' }}>{feature}</p>
                    </motion.div>
                  ));
                })()}
              </div>
            </div>
          )}

          {/* Impact Section */}
          {activeSection === 'impact' && detailedData?.impact && (
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#F4F1EA' }}>Project Impact</h3>
              <div className="grid gap-4">
                {detailedData.impact.map((item: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-lg p-4 border"
                    style={{
                      backgroundColor: 'rgba(244, 241, 234, 0.9)',
                      borderColor: 'rgba(215, 95, 78, 0.3)'
                    }}
                  >
                    <p className="font-medium" style={{ color: '#15202B' }}>{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges Section */}
          {activeSection === 'challenges' && (
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#F4F1EA' }}>Challenges & Solutions</h3>
              <div className="space-y-6">
                {(detailedData?.challenges || []).map((item: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-lg p-6 border"
                    style={{
                      backgroundColor: 'rgba(244, 241, 234, 0.9)',
                      borderColor: 'rgba(169, 184, 196, 0.3)'
                    }}
                  >
                    <h4 className="font-semibold mb-3" style={{ color: '#15202B' }}>
                      Challenge: {item.challenge}
                    </h4>
                    <p style={{ color: '#15202B' }}>
                      Solution: {item.solution}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Learning Points Section */}
          {activeSection === 'learning' && (
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#F4F1EA' }}>Key Learning Points</h3>
              <div className="grid gap-4">
                {(detailedData?.learningPoints || []).map((point: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-lg p-4 border transition-colors hover:opacity-80"
                    style={{
                      backgroundColor: 'rgba(244, 241, 234, 0.9)',
                      borderColor: 'rgba(169, 184, 196, 0.3)'
                    }}
                  >
                    <p style={{ color: '#15202B' }}>{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Section */}
          {activeSection === 'tech' && (
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#F4F1EA' }}>Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {(detailedData?.techStack || project.stack).map((tech: string, index: number) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-6 py-3 rounded-full font-medium border transition-all duration-300 cursor-pointer hover:opacity-80"
                    style={{
                      backgroundColor: 'rgba(244, 241, 234, 0.9)',
                      color: '#15202B',
                      borderColor: 'rgba(215, 95, 78, 0.3)'
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {/* Project Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-zinc-700"
          >
            <div className="flex gap-4">
              {project.links.live && (
                <Link
                  href={project.links.live}
                  target="_blank"
                  className="px-6 py-3 font-medium rounded-lg transition-colors"
                  style={{
                    backgroundColor: '#D75F4E',
                    color: '#F4F1EA'
                  }}
                >
                  View Live Site
                </Link>
              )}
              {project.links.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  className="px-6 py-3 border font-medium rounded-lg transition-all hover:opacity-80"
                  style={{
                    borderColor: '#A9B8C4',
                    color: '#F4F1EA'
                  }}
                >
                  View Code
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
