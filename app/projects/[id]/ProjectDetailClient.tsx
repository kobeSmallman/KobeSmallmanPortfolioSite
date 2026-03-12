'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { type Project } from '../../../data/projects';
import { projectDetails } from '../../../data/projectDetails';
import { codeHighlights } from '../../../data/codeHighlights';
import ClientOnly from '../../../components/ui/ClientOnly';
import CodeSnippet from '../../../components/ui/CodeSnippet';

interface ProjectDetailClientProps {
  project: Project;
  projectId: string;
}

export default function ProjectDetailClient({ project, projectId }: ProjectDetailClientProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
    <div className="min-h-screen dark-page-bg">
      <header className="sticky top-0 z-50 backdrop-blur-sm dark-page-header">
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
                        className="rounded-xl p-8 shadow-lg border dark-card"
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
                        className="rounded-xl p-8 shadow-lg border dark-card"
                      >
                        <h4 className="text-2xl font-bold text-slate-800 mb-6">Technical Implementation</h4>
                        <p className="text-slate-600 leading-relaxed">
                          Built with Next.js 13 and Tailwind CSS 3.4, the site prioritizes performance and accessibility.
                          I implemented local SEO strategies including schema markup and location-specific content.
                          A sticky mobile "Call Now" CTA and streamlined contact form keep the conversion path short.
                        </p>
                      </div>
                      <div 
                        className="rounded-xl p-8 shadow-lg border dark-card"
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                      <div className="p-6 rounded-lg border dark-card">
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
                    <div className="p-6 rounded-lg border dark-card">
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
              <div className="p-6 rounded-lg border dark-card">
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
                      className="rounded-xl p-6 border dark-card"
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
                    className="rounded-lg p-6 border dark-card"
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
                    className="rounded-lg p-4 border transition-colors hover:opacity-80 dark-card"
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
                  const highlights = codeHighlights[projectId];
                  if (!highlights || highlights.length === 0) {
                    return (
                      <div className="p-6 rounded-lg border text-center dark-card">
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
                      <div className="mb-4 p-5 rounded-xl border dark-card">
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
