'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { type Project } from '../../../data/projects';
import ClientOnly from '../../../components/ui/ClientOnly';
import CodeSnippet from '../../../components/ui/CodeSnippet';

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
        'Git-based version control with feature branches.'
      ],
      systemDesign: [
        'Laravel MVC architecture with service layer pattern.',
        'MySQL 8 database with normalized vendor/interaction tables.',
        'Bootstrap 5 responsive UI with custom CSS.',
        'Chart.js for analytics visualization.',
        'Role-based authentication with middleware guards.',
        'Vite-bundled frontend assets.'
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
        'Deployed MVP on schedule across 10 Agile sprints.'
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
      techStack: ['Next.js 13', 'Tailwind CSS 3.4', 'TypeScript', 'PostCSS', 'Lucide React', 'Vercel'],
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
        'Lighthouse 98 Perf / 100 Acc / 100 BP / 97 SEO.',
        'Top-3 Google map-pack ranking for "gutter installation Lacombe".',
        'Generates weekly phone call leads for the business owner.'
      ],
      learningPoints: [
        'Learned local SEO strategies including schema markup.',
        'Gained experience managing a small business client.',
        'Learned mobile-first design for local service businesses.',
        'Developed skills in Core Web Vitals optimization.',
        'Gained experience with Turnstile CAPTCHA integration.',
        'Improved understanding of accessible touch targets and WCAG compliance.'
      ]
    },
    'dungeon-escape': {
      name: 'Dungeon Escape',
      overview: 'Text-based dungeon crawler written in C++17. Players navigate rooms using console commands, interact with NPCs through talk/attack mechanics, solve puzzles that block exits, and manage items with special use effects. Includes a cursed status system with damage over time. Built with STL containers, RAII principles, and smart pointers for automatic memory management. Compiles warning-free on GCC, Clang, and MSVC.',
      purpose: [
        'Demonstrate C++ programming skills and OOP principles.',
        'Create engaging text-based gameplay with puzzles and combat.',
        'Practice low-level memory safety and cross-platform debugging.',
        'Provide an interview-friendly C++ OOP demo.'
      ],
      systemDesign: [
        'Object-oriented architecture with inheritance hierarchies.',
        'STL containers for rooms, items, and enemies.',
        'RAII and smart pointers for automatic resource cleanup.',
        'Preprocessor directives for cross-platform terminal commands.'
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
        'Learned React Native and Expo SDK49 for cross-platform mobile development.',
        'Built a complete EAS Build pipeline from development to store-ready APK.',
        'Solved Unsplash rate limits by pre-downloading images at build time.',
        'Fixed audio lag using expo-av createAsync for preloading.',
        'Managed game state with AsyncStorage for offline persistence.',
        'Optimized APK bundle size with image compression and tree-shaking.'
      ]
    },
    'blockchain-tickets': {
      name: 'BlockchainTickets Platform',
      overview: 'Early-stage decentralized event ticketing platform built on Ethereum blockchain that mints ERC-721 event tickets with resale price-cap smart contracts. Features comprehensive ticket minting UI, automated resale cap enforcement, and JWT-secured dashboards across multiple user roles. The platform demonstrates a complete mint-verify-resell workflow spanning blockchain smart contracts, RESTful APIs, and a React frontend. Built with React 18 and Vite for the frontend, ASP.NET Core 7 for the backend API, and Solidity 0.8 smart contracts deployed on Ethereum. Includes JWT authentication, ethers.js for blockchain integration, and Hardhat for smart contract development and testing. The alpha version successfully demonstrates blockchain provenance for event tickets while addressing high gas costs and providing user-friendly interfaces for non-crypto users.',
      purpose: [
        'Eliminate ticket fraud through blockchain verification and provenance.',
        'Create transparent and secure ticket trading platform with enforced resale caps.',
        'Demonstrate blockchain development capabilities across full stack.',
        'Explore Web3 technologies and decentralized application architecture.',
        'Showcase polyglot development skills across blockchain, API, and frontend layers.'
      ],
      techStack: ['Solidity 0.8', 'ethers.js', 'Hardhat', 'ERC-721', 'React 18', 'Vite', 'ASP.NET Core 7', 'JWT Auth', 'TypeScript', 'Ethereum', 'Web3', 'Smart Contracts', 'RESTful APIs'],
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
        'Showcases workflow across blockchain, API, and frontend layers.',
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
        'Learned React SPA patterns for Web3 applications.',
        'Developed understanding of decentralized application architecture.',
        'Gained experience with ASP.NET Core 7 API development.',
        'Learned React 18 and Vite build optimization.',
        'Developed skills in CI/CD pipeline security for blockchain projects.',
        'Gained experience with multi-layer application architecture.',
        'Learned blockchain security best practices and smart contract auditing.',
        'Developed understanding of token economics and resale mechanisms.'
      ]
    },
    'valley-city-sales': {
      name: 'Valley City Sales',
      overview: 'Full-stack used vehicle and equipment dealership platform built as a pnpm monorepo with a public storefront and admin dashboard. Features TOTP two-factor authentication, VIN decoding via NHTSA API, batch inventory operations, PDF exports, ISR caching, and a multi-layered security stack including honeypot spam detection, Turnstile CAPTCHA, and rate limiting.',
      purpose: [
        'Build a production-ready dealership platform for a real business in Clive, Alberta.',
        'Provide the dealer with an intuitive admin dashboard for managing 40+ field listings.',
        'Deliver a fast, SEO-optimized public site with structured data and city-level landing pages.',
        'Implement enterprise-grade security including TOTP 2FA and multi-layer form protection.',
        'Demonstrate full-stack ownership from database design through deployment and monitoring.'
      ],
      systemDesign: [
        'pnpm monorepo: apps/web (public storefront), apps/admin (dashboard), packages/shared.',
        'PocketBase v0.25 on DigitalOcean for data, auth, and file storage.',
        'iron-session for server-side session management with encrypted cookies.',
        'TOTP 2FA with 30-day device remember tokens using crypto-grade randomness.',
        'ISR with 60-second revalidation on all data pages for near-real-time content.',
        'SendGrid transactional email with verified sender domain.',
        'Cloudflare Turnstile + honeypot + rate limiting for contact form security.',
        'Role-based access: Owner (full control) and Admin (listing CRUD only).'
      ],
      challenges: [
        {
          challenge: 'VIN decoding: NHTSA API returns inconsistent field names and empty strings for missing data.',
          solution: 'Built a normalization layer that maps raw NHTSA responses to clean enums (body type, fuel, drivetrain) with graceful fallbacks.'
        },
        {
          challenge: '2FA implementation: Needed secure but user-friendly authentication without frustrating the non-technical dealer.',
          solution: 'Implemented TOTP with QR setup flow and 30-day device remember tokens so the dealer only enters codes on new devices.'
        },
        {
          challenge: 'Image-less listings appearing as blank cards on the public site.',
          solution: 'Added server-side filtering to exclude listings without images from all public queries, keeping the storefront clean.'
        },
        {
          challenge: 'Batch operations at scale: updating status or tier for up to 100 listings with per-item audit logging.',
          solution: 'Built transactional batch updates with smart sold_date handling and contextual audit entries.'
        }
      ],
      impact: [
        'Both apps feature-complete and deployed on Vercel with PocketBase on DigitalOcean.',
        '33 real listings seeded from the existing dealership website with verified prices.',
        'Admin dashboard handles 40+ fields per listing with VIN auto-fill, tier preview, and sale pricing.',
        'Public site scores 95+ Lighthouse across performance, accessibility, and SEO.',
        'Contact form delivers inquiries via SendGrid with 3-layer bot protection.',
        'PDF exports generate brand-matched vehicle flyers and inventory reports.'
      ],
      learningPoints: [
        'First production monorepo — learned pnpm workspace configuration and shared package patterns.',
        'Implemented TOTP 2FA from scratch using OTPAuth library with QR code generation.',
        'Built a complete VIN decoder integrating NHTSA vPIC API with field normalization.',
        'Designed ISR caching strategy balancing freshness (60s) with build performance.',
        'Implemented multi-layer form security: honeypot, Turnstile, rate limiting, and input sanitization.',
        'Learned PocketBase administration, collection design, and autodate field configuration.',
        'Built PDF generation with jsPDF including brand-matched layouts and image handling.',
        'Gained experience with iron-session for encrypted server-side sessions in Next.js.',
        'Developed batch operation patterns with transactional updates and audit logging.',
        'Managed real client requirements and iterative feedback cycles throughout development.'
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
    { id: 'learning', label: 'Learning Points' },
    { id: 'code', label: 'Code Highlights' }
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
        <ClientOnly fallback={
          <div className="mb-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F4F1EA' }}>
                {projectData.name || project.name}
              </h1>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: '#A9B8C4' }}>
                {projectData.overview || project.overview}
              </p>
            </div>
          </div>
        }>
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
        </ClientOnly>

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
              <ClientOnly fallback={
                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl border mb-4" style={{
                  backgroundColor: 'rgba(244, 241, 234, 0.1)',
                  borderColor: 'rgba(169, 184, 196, 0.2)'
                }}>
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveSection(tab.id);
                        setMobileNavOpen(false);
                      }}
                      className="px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg"
                      style={{
                        backgroundColor: activeSection === tab.id ? '#D75F4E' : 'transparent',
                        color: activeSection === tab.id ? '#F4F1EA' : '#A9B8C4',
                        boxShadow: activeSection === tab.id ? '0 2px 8px rgba(215, 95, 78, 0.3)' : 'none'
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              }>
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
              </ClientOnly>
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
        <ClientOnly fallback={
          <div className="min-h-[400px]">
            {/* Static content will be rendered here without animations */}
          </div>
        }>
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
                        <p className="text-slate-600 leading-relaxed">
                          Built with Next.js 13 and Tailwind CSS 3.4, the site prioritizes performance and accessibility.
                          I implemented local SEO strategies including schema markup and location-specific content.
                          A sticky mobile "Call Now" CTA and streamlined contact form keep the conversion path short.
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
                } else if (projectId === 'valley-city-sales') {
                  return (
                    <div className="space-y-6">
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Production Dealership Platform</h4>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          Valley City Sales is a complete used vehicle and equipment dealership platform built for a real
                          business in Clive, Alberta. The project is a pnpm monorepo with two Next.js 15 apps — a public
                          storefront with ISR caching and SEO optimization, and an admin dashboard with TOTP two-factor
                          authentication, VIN decoding, batch operations, and PDF exports.
                        </p>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          This is my most technically mature project to date, combining everything I have learned across
                          frontend, backend, security, and infrastructure into one production system.
                        </p>
                      </div>
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Architecture & Infrastructure</h4>
                        <p className="leading-relaxed mb-4" style={{ color: '#15202B' }}>
                          The backend runs on PocketBase v0.25 hosted on a DigitalOcean droplet, handling data storage,
                          file uploads, and authentication. Both frontend apps are deployed on Vercel with iron-session
                          for encrypted server-side sessions and SendGrid for transactional email.
                        </p>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          Security layers include TOTP 2FA with 30-day device remember tokens, Cloudflare Turnstile CAPTCHA,
                          honeypot spam detection, rate limiting, and comprehensive input sanitization across all user-facing forms.
                        </p>
                      </div>
                      <div className="p-6 rounded-lg border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#15202B' }}>Real-World Deployment</h4>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          Both apps are feature-complete with 33 real listings seeded from the existing dealership website.
                          The admin dashboard handles 40+ fields per listing with VIN auto-fill, tier-based visibility,
                          sale pricing with strikethrough display, and brand-matched PDF flyer generation. The public site
                          features structured data for search engines, 8 city-level SEO landing pages, and a masonry gallery.
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
                      'Leaf-fall CSS hero animation (pure keyframes, no JS)',
                      'Responsive service grid with pricing',
                      'Sticky mobile "Call Now" CTA',
                      'Contact form with Turnstile CAPTCHA verification',
                      'Local SEO with schema markup for "gutters near me" searches',
                      'Fast loading with Next.js image optimization',
                      'Dark-mode variant'
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
                  } else if (projectId === 'portfolio-site' || projectId === 'portfolio-v2') {
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
                      'Room navigation via console commands',
                      'Puzzles blocking exits',
                      'Items with use effects',
                      'NPC talk/attack interactions',
                      'Cursed status with damage over time',
                      'Cross-platform: compiles on GCC, Clang, and MSVC'
                    ];
                  } else if (projectId === '4pics1word') {
                    features = [
                      'Difficulty tiers: easy, medium, and hard',
                      'Coin economy with three hint types',
                      'Offline image caching (pre-downloaded at build time)',
                      'Background music with auto-pause',
                      'Local leaderboard with AsyncStorage',
                      'Cross-platform iOS/Android via Expo'
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
                  } else if (projectId === 'valley-city-sales') {
                    features = [
                      'TOTP 2FA with QR setup and 30-day device remember tokens',
                      'VIN decoder auto-fills 8+ fields via NHTSA API',
                      'Batch status and tier updates for up to 100 listings',
                      'PDF exports: vehicle flyers, multi-flyer sheets, inventory reports',
                      'ISR caching with 60-second revalidation across all data pages',
                      'Ctrl+K search modal and visible inventory search bar',
                      'Structured data (LocalBusiness, Product, BreadcrumbList) for SEO',
                      'Contact form with honeypot, Turnstile CAPTCHA, and rate limiting',
                      'Role-based admin access: Owner and Admin with different permissions',
                      'Masonry gallery, FAQ with truck animation, 8 city SEO pages'
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
                {project.stack.map((tech: string, index: number) => (
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

          {/* Code Highlights Section */}
          {activeSection === 'code' && (
            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#F4F1EA' }}>Code Highlights</h3>
              <p className="mb-8" style={{ color: '#A9B8C4' }}>
                Real code from this project with the story behind each decision.
              </p>
              <div className="space-y-10">
                {(() => {
                  const codeHighlights: Record<string, { title: string; language: string; narrative: string; code: string; description: string }[]> = {
                    'wida-crm': [
                      {
                        title: 'N+1 Query Fix — Eager Loading',
                        language: 'PHP',
                        narrative: 'The client detail page was taking almost a second to load. I opened Laravel Debugbar and saw 47 separate queries firing — one for the client, then one for each note, then one for each note\'s employee. Classic N+1 problem.',
                        code: `// Before: 47 queries, ~900ms
$client = Client::findOrFail($id);
// Each $client->notes triggered a query,
// then each $note->employee triggered another

// After: 3 queries, ~220ms
$client = Client::with(['notes', 'notes.employee'])
    ->findOrFail($id);`,
                        description: 'The with() call tells Eloquent to fetch the related notes and each note\'s employee in just 2 extra queries using WHERE IN clauses instead of firing a separate query every time you access a relationship. That took us from 47 queries down to 3, and load time went from 900ms to 220ms.'
                      },
                      {
                        title: 'Permission Middleware',
                        language: 'PHP',
                        narrative: 'WIDA needed three different roles — Admin, Sales, and Warehouse — each seeing different pages. Rather than scattering auth checks everywhere, I built a middleware that maps route names to page IDs in the permissions table.',
                        code: `class RedirectUnauthorized {
    public function handle(Request $request, Closure $next, $routeName) {
        $user = Auth::user();
        $pageIdMap = [
            'dashboard'    => 1,
            'clients'      => 2,
            'orders'       => 3,
            'vendors'      => 4,
            'reports'      => 5,
            'admin.users'  => 6,
        ];

        $requiredPageId = $pageIdMap[$routeName] ?? null;
        $userPermissions = Permission::where('Employee_ID', $user->Employee_ID)
            ->pluck('Page_ID');

        if ($requiredPageId && !$userPermissions->contains($requiredPageId)) {
            return redirect()->route('access.denied');
        }

        return $next($request);
    }
}`,
                        description: 'The middleware grabs the current user, looks up which page ID the route requires from $pageIdMap, then checks the permissions table to see if that user has access. If not, they get redirected to an access denied page. Every protected route just declares this middleware with its route name, so adding a new page is one line in the map.'
                      },
                      {
                        title: 'Transaction-Wrapped Order Creation',
                        language: 'PHP',
                        narrative: 'Orders can have multiple products, and each product updates inventory. If any product fails to save, we\'d end up with a partial order — the kind of bug that makes accounting people very unhappy. Database transactions were the obvious answer.',
                        code: `DB::beginTransaction();
try {
    $order = new Order([
        'Order_ID'    => $newOrderId,
        'Client_ID'   => $request->Client_ID,
        'Employee_ID' => Auth::user()->Employee_ID,
        'Order_DATE'  => now(),
    ]);
    $order->save();

    foreach ($request->products as $productData) {
        $product = new OrderDetail([
            'Order_ID'   => $order->Order_ID,
            'Product_ID' => $productData['id'],
            'Quantity'   => $productData['quantity'],
            'Unit_Price' => $productData['price'],
        ]);
        $product->save();
    }

    DB::commit();
    return redirect()->route('orders.show', $order->Order_ID);
} catch (\\Exception $e) {
    DB::rollback();
    Log::error('Order creation failed: ' . $e->getMessage());
    return back()->withErrors(['error' => 'Order could not be created.']);
}`,
                        description: 'DB::beginTransaction() starts the transaction. The order header gets saved first, then we loop through each product and save an OrderDetail row. If anything throws, the catch block calls DB::rollback() so nothing is half-saved, and Log::error records what went wrong. If everything succeeds, DB::commit() makes it permanent and we redirect to the order page.'
                      },
                      {
                        title: 'Custom Sequential ID Generation',
                        language: 'PHP',
                        narrative: 'WIDA wanted human-readable order IDs like O001, O002, O003 instead of auto-increment integers. Sounds simple, but you have to handle the case where no orders exist yet and avoid race conditions.',
                        code: `$latestOrder = Order::orderBy('Order_ID', 'desc')->first();
$latestNumber = $latestOrder
    ? intval(substr($latestOrder->Order_ID, 1)) + 1
    : 1;
$newOrderId = 'O' . str_pad($latestNumber, 3, '0', STR_PAD_LEFT);
// O001, O002, ... O999`,
                        description: 'It grabs the latest order, strips the "O" prefix with substr, parses what\'s left into an integer, adds 1, then pads it back to 3 digits with str_pad. If no orders exist yet, it starts at 1. Simple, but does the job for a small team without needing database sequences or UUIDs.'
                      }
                    ],
                    'lacombe-gutters': [
                      {
                        title: 'CSS-Only Leaf-Fall Animation',
                        language: 'CSS',
                        narrative: 'The gutter company wanted something that immediately communicated "gutters and falling leaves" when you land on the page. I could have reached for a canvas library, but pure CSS keyframes gave me the effect with zero JavaScript overhead.',
                        code: `@keyframes leafFall {
  0% {
    transform: translateY(-10vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

/* Each leaf gets a random delay and duration */
.leaf {
  animation: leafFall linear infinite;
  animation-duration: var(--duration, 4s);
  animation-delay: var(--delay, 0s);
}`,
                        description: 'The @keyframes block moves each leaf from above the viewport to below it while rotating 360 degrees. Opacity fades in at 10% and out at 90% so leaves don\'t pop in or out abruptly. Each leaf div gets different --duration and --delay custom properties so they fall at different speeds and stagger naturally. No JavaScript involved, so it runs on the GPU at 60fps.'
                      },
                      {
                        title: 'Turnstile CAPTCHA Integration',
                        language: 'TypeScript',
                        narrative: 'The contact form was getting hammered by bots within a week of launch. I went with Cloudflare Turnstile over reCAPTCHA because it\'s less intrusive for real users. The tricky part was server-side verification — you can\'t trust the client token alone.',
                        code: `// Server-side verification (API route)
const turnstileResponse = await fetch(
  'https://challenges.cloudflare.com/turnstile/v0/siteverify',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
      remoteip: getClientIP(request),
    }),
  }
);

const data = await turnstileResponse.json();
if (!data.success) {
  return NextResponse.json(
    { error: 'Verification failed.' },
    { status: 403 }
  );
}`,
                        description: 'The API route sends the client\'s Turnstile token along with the secret key and their IP to Cloudflare\'s siteverify endpoint. Cloudflare checks if the token is valid and returns a success boolean. If it fails, we return a 403 with a generic error so bots don\'t learn anything useful. The secret key stays server-side and never touches the browser.'
                      },
                      {
                        title: 'WCAG Touch Target Enforcement',
                        language: 'CSS',
                        narrative: 'Lighthouse flagged several buttons and links as too small for mobile touch. WCAG 2.1 requires 44x44px minimum touch targets. I added a global rule so every interactive element meets the standard automatically.',
                        code: `/* Before: buttons were 32px tall on mobile */
@media (max-width: 768px) {
  button,
  a.btn-construction,
  .nav-link {
    min-height: 44px;
  }
}

/* Ensure centering within the larger targets */
@media (max-width: 480px) {
  button,
  a.btn-construction,
  .nav-link {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
}`,
                        description: 'The first media query sets min-height: 44px on all buttons and links so they meet the WCAG 2.1 touch target minimum. The second one at 480px adds flexbox centering so the text stays vertically centered inside the taller hit area. Only applies on mobile so desktop layout stays the same.'
                      }
                    ],
                    'blockchain-tickets': [
                      {
                        title: 'Firebase Auth + User Creation',
                        language: 'C#',
                        narrative: 'The platform needs both blockchain wallets and traditional accounts. Firebase handles the auth layer, but I needed to gracefully handle duplicate emails since users might try signing up through different providers.',
                        code: `public async Task<FirebaseToken> VerifyTokenAsync(string idToken)
{
    try
    {
        FirebaseToken decodedToken = await FirebaseAuth
            .DefaultInstance
            .VerifyIdTokenAsync(idToken);
        return decodedToken;
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "Token verification failed");
        throw;
    }
}

public async Task<UserRecord> CreateUserAsync(string email, string password)
{
    try
    {
        return await FirebaseAuth.DefaultInstance.CreateUserAsync(
            new UserRecordArgs
            {
                Email = email,
                EmailVerified = false,
                Password = password,
                Disabled = false,
            });
    }
    catch (FirebaseAuthException ex)
        when (ex.AuthErrorCode == AuthErrorCode.EmailAlreadyExists)
    {
        throw new Exception("A user with this email already exists.");
    }
}`,
                        description: 'VerifyTokenAsync takes a Firebase ID token from the client, calls VerifyIdTokenAsync to decode and validate it, and returns the decoded token with the user\'s info. CreateUserAsync registers a new user, but uses a catch-when clause that only catches the specific EmailAlreadyExists error. Any other Firebase error gets thrown normally so it\'s not silently swallowed.'
                      },
                      {
                        title: 'Session Timeout with Activity Tracking',
                        language: 'JavaScript',
                        narrative: 'For a ticketing platform handling money, sessions can\'t stay alive forever. I implemented a 60-minute idle timeout that resets on any user interaction — mouse, keyboard, touch, or scroll.',
                        code: `const SESSION_TIMEOUT = 60 * 60 * 1000; // 60 minutes

const updateActivity = () => {
  setLastActivity(Date.now());
  sessionStorage.setItem('lastActivity', Date.now().toString());
};

useEffect(() => {
  const checkSessionTimeout = () => {
    const stored = sessionStorage.getItem('lastActivity');
    if (stored) {
      const elapsed = Date.now() - parseInt(stored, 10);
      if (elapsed > SESSION_TIMEOUT) {
        console.log("Session timeout - logging out");
        logout();
      }
    }
  };

  const intervalId = setInterval(checkSessionTimeout, 60 * 1000);

  const events = ['mousedown', 'keydown', 'touchstart', 'scroll'];
  events.forEach(e => window.addEventListener(e, updateActivity));

  return () => {
    clearInterval(intervalId);
    events.forEach(e => window.removeEventListener(e, updateActivity));
  };
}, []);`,
                        description: 'updateActivity writes the current timestamp to sessionStorage whenever the user moves the mouse, types, taps, or scrolls. A setInterval runs every 60 seconds comparing the stored timestamp to now. If more than 60 minutes have passed without activity, it calls logout(). The cleanup function in the useEffect return removes all the event listeners and clears the interval when the component unmounts.'
                      },
                      {
                        title: 'Interactive Seat Selection',
                        language: 'JavaScript',
                        narrative: 'The seat map needed to feel instant — no lag when clicking seats, immediate visual feedback, and a running total that updates as you select. I used local state with toggle logic to keep it snappy.',
                        code: `const PRICE_CATEGORIES = {
  VIP: 250, Premium: 180, Standard: 120, Budget: 80
};

const handleSeatClick = (seat) => {
  if (!seat.available) return;

  setSelectedSeats(prev => {
    const alreadySelected = prev.some(s => s.id === seat.id);

    if (alreadySelected) {
      const updated = prev.filter(s => s.id !== seat.id);
      onSeatSelect?.(updated);
      return updated;
    } else {
      const updated = [...prev, seat];
      onSeatSelect?.(updated);
      return updated;
    }
  });
};

// Total updates reactively
const total = selectedSeats.reduce(
  (sum, s) => sum + PRICE_CATEGORIES[s.category], 0
);`,
                        description: 'handleSeatClick first checks if the seat is available. Then it uses setSelectedSeats with a function to get the previous state (avoids stale closure issues). If the seat is already selected, it filters it out. If not, it spreads the old array and adds it. Either way, it calls the optional onSeatSelect callback so the parent component can react. The total recalculates automatically by reducing over the selected seats and looking up each seat\'s price category.'
                      }
                    ],
                    '4pics1word': [
                      {
                        title: 'Build-Time Image Pre-Download',
                        language: 'TypeScript',
                        narrative: 'The game pulls images from Unsplash, but their API has strict rate limits. During development, I kept hitting 429 errors mid-game. The fix was to download all images at build time so the app never makes runtime API calls.',
                        code: `// prebuild-images.ts — runs before EAS build
import axios from 'axios';
import * as FileSystem from 'expo-file-system';

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

async function downloadImage(query: string, index: number) {
  const response = await axios.get(
    \`https://api.unsplash.com/photos/random\`,
    {
      params: { query, orientation: 'squarish' },
      headers: { Authorization: \`Client-ID \${UNSPLASH_ACCESS_KEY}\` },
    }
  );

  const imageUrl = response.data.urls.small;
  const localPath = \`\${FileSystem.documentDirectory}images/\${query}_\${index}.jpg\`;

  await FileSystem.downloadAsync(imageUrl, localPath);
  return localPath;
}

// Pre-download all puzzle images during build
export async function prebuildAllImages(puzzles: Puzzle[]) {
  for (const puzzle of puzzles) {
    const paths = await Promise.all(
      puzzle.keywords.map((kw, i) => downloadImage(kw, i))
    );
    puzzle.localImages = paths;
  }
}`,
                        description: 'downloadImage hits the Unsplash API with a search keyword and downloads the image to a local path using Expo\'s FileSystem. prebuildAllImages loops through every puzzle, downloads all 4 images per puzzle in parallel with Promise.all, and stores the local paths back on the puzzle object. Since this runs during build, the APK ships with all images baked in and never needs to call Unsplash at runtime.'
                      },
                      {
                        title: 'Audio Preloading Fix',
                        language: 'TypeScript',
                        narrative: 'Players reported a noticeable delay on the first sound effect — tap a letter, wait 200ms, then hear the click. The issue was that expo-av loads audio lazily by default. I switched to createAsync to preload sounds during app startup.',
                        code: `import { Audio } from 'expo-av';

// Preload all game sounds at startup
let correctSound: Audio.Sound | null = null;
let wrongSound: Audio.Sound | null = null;
let tapSound: Audio.Sound | null = null;

export async function preloadGameAudio() {
  const [correct, wrong, tap] = await Promise.all([
    Audio.Sound.createAsync(
      require('../assets/sounds/correct.mp3'),
      { shouldPlay: false }
    ),
    Audio.Sound.createAsync(
      require('../assets/sounds/wrong.mp3'),
      { shouldPlay: false }
    ),
    Audio.Sound.createAsync(
      require('../assets/sounds/tap.mp3'),
      { shouldPlay: false }
    ),
  ]);

  correctSound = correct.sound;
  wrongSound = wrong.sound;
  tapSound = tap.sound;
}

export async function playSound(type: 'correct' | 'wrong' | 'tap') {
  const sound = { correct: correctSound, wrong: wrongSound, tap: tapSound }[type];
  if (sound) {
    await sound.replayAsync();
  }
}`,
                        description: 'preloadGameAudio runs at app startup and calls Audio.Sound.createAsync for each sound file in parallel. createAsync loads and decodes the audio buffer into memory with shouldPlay: false so nothing plays yet. When the game needs a sound, playSound looks up the right Sound object and calls replayAsync, which replays the already-loaded buffer instantly. That killed the 200ms first-play delay.'
                      }
                    ],
                    'dungeon-escape': [
                      {
                        title: 'Cross-Platform Terminal Handling',
                        language: 'C++',
                        narrative: 'The game needed to clear the terminal between screens, but the command differs between Windows (cls) and Unix (clear). Preprocessor directives handle this at compile time with zero runtime cost.',
                        code: `#ifdef _WIN32
    #include <cstdlib>
    #define CLEAR_SCREEN() system("cls")
#else
    #include <cstdlib>
    #define CLEAR_SCREEN() system("clear")
#endif

void GameEngine::render() {
    CLEAR_SCREEN();

    std::cout << "\\n=== DUNGEON ESCAPE ===" << std::endl;
    std::cout << "Room: " << currentRoom->getName() << std::endl;
    std::cout << currentRoom->getDescription() << std::endl;
    std::cout << "\\nHP: " << player.getHealth()
              << "/" << player.getMaxHealth() << std::endl;

    if (player.isCursed()) {
        std::cout << "[CURSED] Taking damage over time!" << std::endl;
    }

    std::cout << "\\nExits: ";
    for (const auto& [direction, room] : currentRoom->getExits()) {
        std::cout << direction << " ";
    }
    std::cout << std::endl;
}`,
                        description: '#ifdef _WIN32 checks at compile time whether we\'re on Windows, and defines CLEAR_SCREEN() to call either system("cls") or system("clear") accordingly. The render() function calls CLEAR_SCREEN() then prints the current room name, description, player HP, curse status, and available exits. The structured binding in the for loop (auto& [direction, room]) iterates over the room\'s exit map.'
                      },
                      {
                        title: 'RAII Resource Management',
                        language: 'C++',
                        narrative: 'With 10 rooms, dozens of items, and multiple enemies, manual memory management would be a nightmare. Smart pointers and RAII ensure everything gets cleaned up automatically when the game exits or a room is unloaded.',
                        code: `class GameEngine {
private:
    std::vector<std::unique_ptr<Room>> rooms;
    std::vector<std::unique_ptr<Enemy>> enemies;
    std::vector<std::unique_ptr<Item>> items;
    Player player;
    Room* currentRoom; // non-owning pointer

public:
    GameEngine() : player(100, 10, 5), currentRoom(nullptr) {
        initialize();
    }

    // Destructor is trivial — unique_ptr handles cleanup
    ~GameEngine() = default;

    // No copy (unique_ptr is move-only)
    GameEngine(const GameEngine&) = delete;
    GameEngine& operator=(const GameEngine&) = delete;

    void initialize() {
        // Factory creates rooms with ownership transfer
        rooms.push_back(std::make_unique<Room>(
            "Entrance Hall",
            "A dimly lit hall with torches on the walls."
        ));
        // ... more rooms

        currentRoom = rooms[0].get(); // borrow, don't own
    }
};`,
                        description: 'The vectors of unique_ptr own all rooms, enemies, and items. When GameEngine is destroyed, the vectors are destroyed, which destroys each unique_ptr, which frees the memory automatically. The destructor is = default because there\'s nothing manual to do. Copy is deleted since unique_ptr can\'t be copied (who would own the memory?). currentRoom is a raw pointer that just points at whichever room the player is in without owning it.'
                      }
                    ],
                    'portfolio-v2': [
                      {
                        title: 'React Server Component Boundaries',
                        language: 'TypeScript',
                        narrative: 'The trickiest part of migrating from CRA to Next.js 14 was figuring out where to put "use client" directives. Too high and you lose server-side rendering benefits. Too low and you get hydration mismatches with Framer Motion.',
                        code: `// app/page.tsx — Server Component (no "use client")
import HeroKinetic from '../components/organisms/HeroKinetic';
import ProjectsIsometric from '../components/organisms/ProjectsIsometric';
import ClientOnly from '../components/ui/ClientOnly';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ClientOnly wrapper prevents hydration mismatch */}
      <ClientOnly fallback={<HeroSkeleton />}>
        <HeroKinetic />    {/* "use client" inside */}
      </ClientOnly>
      <ClientOnly fallback={<div className="min-h-screen bg-bg-primary" />}>
        <ProjectsIsometric />  {/* "use client" inside */}
      </ClientOnly>
      <ContactKinetic />   {/* dynamically imported, ssr: false */}
    </main>
  );
}`,
                        description: 'The page file has no "use client" directive, so it runs as a Server Component and sends plain HTML on first load. HeroKinetic and ProjectsIsometric each have "use client" inside their own files. They\'re wrapped in ClientOnly which renders a fallback on the server and only mounts the real component on the client, avoiding hydration mismatches from Framer Motion. ContactKinetic is dynamically imported elsewhere with ssr: false so it\'s completely skipped during server rendering.'
                      },
                      {
                        title: 'Dynamic Import for Below-Fold Content',
                        language: 'TypeScript',
                        narrative: 'The contact section with its animated blobs and form validation was adding 40KB to the initial bundle. Since it\'s below the fold, users don\'t need it until they scroll down. Dynamic import defers the load.',
                        code: `import dynamic from 'next/dynamic';

// Lazy-load the contact section — not needed on initial render
const ContactKinetic = dynamic(
  () => import('../components/organisms/ContactKinetic'),
  {
    ssr: false,  // Skip server rendering entirely
    loading: () => (
      <div className="min-h-96 bg-bg-primary" />  // Placeholder
    ),
  }
);

// In the component tree, it renders like any other component
// but only loads when the browser is ready
<ContactKinetic />`,
                        description: 'next/dynamic wraps the import in a lazy loader. Setting ssr: false means the server doesn\'t render it at all, so it\'s not in the initial HTML or the first JS bundle. The loading function returns a placeholder div that holds the space so the page doesn\'t jump when the real component loads in. The browser downloads and mounts ContactKinetic after the rest of the page is ready.'
                      }
                    ],
                    'valley-city-sales': [
                      {
                        title: 'TOTP 2FA with Device Remember',
                        language: 'TypeScript',
                        narrative: 'The dealer isn\'t tech-savvy, so I needed 2FA that\'s secure but not annoying. TOTP codes with a 30-day device remember token means he only enters codes on new devices. The remember token uses crypto-grade randomness — no Math.random() shortcuts.',
                        code: `export async function generateTOTPSetup(email: string) {
  const totp = new OTPAuth.TOTP({
    issuer: 'Valley City Sales Admin',
    label: email,
    algorithm: 'SHA1',
    digits: 6,
    period: 30,
    secret: new OTPAuth.Secret({ size: 20 }),
  });

  const uri = totp.toString();
  const qrDataUrl = await QRCode.toDataURL(uri, {
    width: 256, margin: 2
  });

  return { secret: totp.secret.base32, qrDataUrl, uri };
}

export function verifyTOTP(secret: string, code: string): boolean {
  const totp = new OTPAuth.TOTP({
    issuer: 'Valley City Sales Admin',
    algorithm: 'SHA1',
    digits: 6,
    period: 30,
    secret: OTPAuth.Secret.fromBase32(secret),
  });
  // Allow 1 period of clock drift (±30s)
  return totp.validate({ token: code, window: 1 }) !== null;
}

export function generateRememberToken(): string {
  const arr = new Uint8Array(32);
  crypto.getRandomValues(arr);
  return Array.from(arr, b => b.toString(16).padStart(2, '0')).join('');
}`,
                        description: 'generateTOTPSetup creates a new TOTP instance with a random 20-byte secret, converts it to an otpauth:// URI, and renders that URI as a QR code the user scans with their authenticator app. verifyTOTP rebuilds the TOTP from the stored secret and calls validate with window: 1, which accepts codes from the current 30-second period plus one period before and after (handles clock drift). generateRememberToken fills a 32-byte array with crypto.getRandomValues and converts it to a hex string for the 30-day cookie.'
                      },
                      {
                        title: 'VIN Decode with NHTSA Normalization',
                        language: 'TypeScript',
                        narrative: 'Auto-filling 8+ fields from a VIN saves the dealer minutes per listing. But NHTSA\'s API is messy — "Sport Utility Vehicle (SUV)" needs to become "suv", empty strings need to become undefined, and "Not Applicable" is their version of null.',
                        code: `const VIN_REGEX = /^[A-HJ-NPR-Z0-9]{17}$/i;
const NHTSA_API = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues';

export async function decodeVIN(vin: string): Promise<VINResult> {
  const clean = vin.trim().toUpperCase();
  if (!VIN_REGEX.test(clean)) {
    return { error: 'Invalid VIN. Must be exactly 17 characters.' };
  }

  const res = await fetch(
    \`\${NHTSA_API}/\${encodeURIComponent(clean)}?format=json\`,
    { signal: AbortSignal.timeout(10_000) }
  );
  const data = await res.json();
  const r = data.Results?.[0];

  // NHTSA uses empty strings and "Not Applicable" for missing data
  const val = (field: string) => {
    const v = r[field];
    return v && v !== 'Not Applicable' && v !== '' ? v : undefined;
  };

  const bodyMap: Record<string, string> = {
    'Sedan': 'sedan', 'SUV': 'suv',
    'Sport Utility Vehicle (SUV)': 'suv',
    'Pickup': 'pickup', 'Truck': 'pickup',
    'Van': 'van', 'Wagon': 'wagon',
  };

  return {
    year: val('ModelYear') ? parseInt(val('ModelYear')!) : undefined,
    make: val('Make'),
    model: val('Model'),
    body_type: bodyMap[val('BodyClass') || ''],
    drivetrain: val('DriveType')?.includes('4') ? '4wd' : val('DriveType')?.toLowerCase(),
  };
}`,
                        description: 'The regex validates the VIN is exactly 17 characters and excludes I, O, Q (not used in real VINs). It queries NHTSA\'s DecodeVinValues endpoint with a 10-second timeout via AbortSignal. The val() helper filters out empty strings and "Not Applicable" that NHTSA returns for missing fields. bodyMap converts their verbose descriptions like "Sport Utility Vehicle (SUV)" into the short enum values ("suv") that the listing form dropdown expects.'
                      },
                      {
                        title: 'ISR Revalidation Pattern',
                        language: 'TypeScript',
                        narrative: 'The public site needs to show new listings within a minute of the dealer adding them, but we can\'t do full SSR on every request — the PocketBase server is a $6 droplet. ISR with 60-second revalidation hits the sweet spot.',
                        code: `// Every data page exports this — 60 second ISR
export const revalidate = 60;

async function getHomeData() {
  const pb = createPocketBase();

  const [allListings, allPromos] = await Promise.all([
    pb.collection('listings').getFullList({
      filter: "status = 'active'",
      sort: '-tier,-created',
    }),
    (() => {
      const now = new Date().toISOString();
      return pb.collection('promotions').getFullList({
        filter: \`active = true && start_date <= '\${now}' && end_date >= '\${now}'\`,
        sort: 'display_order',
      });
    })(),
  ]);

  // Filter out listings without images (draft/incomplete)
  const listings = allListings.filter(
    l => l.images && l.images.length > 0
  );

  return { listings, promos };
}`,
                        description: 'export const revalidate = 60 tells Next.js to cache the page and regenerate it at most once per minute. Promise.all runs the listings and promotions queries at the same time instead of waiting for one to finish before starting the other. The promotions query filters by active status and current date range. After both resolve, we filter out any listings that have no images so blank cards never show up on the homepage.'
                      }
                    ]
                  };

                  const highlights = codeHighlights[projectId];
                  if (!highlights || highlights.length === 0) {
                    return (
                      <div className="p-6 rounded-lg border text-center" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <p style={{ color: '#15202B' }}>Code highlights coming soon for this project.</p>
                      </div>
                    );
                  }

                  return highlights.map((snippet, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 }}
                    >
                      {/* Narrative */}
                      <div className="mb-4 p-5 rounded-xl border" style={{
                        backgroundColor: 'rgba(244, 241, 234, 0.9)',
                        borderColor: 'rgba(169, 184, 196, 0.3)'
                      }}>
                        <h4 className="text-lg font-bold mb-2" style={{ color: '#15202B' }}>
                          {snippet.title}
                        </h4>
                        <p className="leading-relaxed" style={{ color: '#15202B' }}>
                          {snippet.narrative}
                        </p>
                      </div>

                      {/* Code */}
                      <CodeSnippet
                        title={snippet.title}
                        language={snippet.language}
                        code={snippet.code}
                        description={snippet.description}
                      />
                    </motion.div>
                  ));
                })()}
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
        </ClientOnly>
      </main>
    </div>
  );
}
