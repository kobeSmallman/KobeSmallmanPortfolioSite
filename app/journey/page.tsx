'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ClientOnly from '../../components/ui/ClientOnly';

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  color: string;
  icon: 'spark' | 'code' | 'team' | 'mobile' | 'chain' | 'rocket' | 'globe';
  lesson: string;
}

const milestones: Milestone[] = [
  {
    year: '2022',
    title: 'The Starting Line',
    subtitle: 'First lines of code',
    description:
      'I enrolled in computer science with zero programming experience. The first language was C++, and honestly, getting "Hello World" to compile felt like a win. I didn\'t know what a pointer was, but I knew I wanted to figure it out.',
    skills: ['C++', 'Problem Solving', 'Algorithms'],
    color: '#64748b',
    icon: 'spark',
    lesson: 'You don\'t need to understand everything to start. You just need to start.',
  },
  {
    year: '2023',
    title: 'Dungeon Escape',
    subtitle: 'C++17 text-based RPG',
    description:
      'My first real project beyond coursework. A text-based dungeon crawler with rooms, puzzles, items, NPCs, and a cursed status system. I learned about smart pointers, RAII, cross-platform preprocessor directives, and how to organize code that\'s bigger than a single file. It compiled warning-free on GCC, Clang, and MSVC.',
    skills: ['C++17', 'OOP', 'STL', 'RAII', 'Cross-Platform'],
    color: '#64748b',
    icon: 'code',
    lesson: 'Writing code that works is one thing. Writing code that\'s organized and maintainable is the real skill.',
  },
  {
    year: '2024',
    title: 'WIDA CRM',
    subtitle: 'Capstone team lead — Laravel + MySQL',
    description:
      'Led a six-person capstone team building a CRM for a Lethbridge distributor. This was the first time I was responsible for other people\'s code, not just my own. I ran stand-ups, managed scope creep, gave stakeholder demos, and still wrote most of the backend. The N+1 query fix that dropped page load from 900ms to 220ms was the moment I understood why profiling matters.',
    skills: ['Laravel 10', 'MySQL 8', 'PHPUnit', 'Chart.js', 'Team Leadership', 'Agile'],
    color: '#8b5cf6',
    icon: 'team',
    lesson: 'Leading a team isn\'t about writing all the code yourself. It\'s about unblocking everyone else.',
  },
  {
    year: '2024',
    title: 'Lacombe Gutters',
    subtitle: 'First paid client — Next.js production site',
    description:
      'My first real client project. A gutter installation company in Central Alberta needed a site that ranked locally and generated leads. I built it with Next.js 13, Tailwind, and TypeScript. Lighthouse scores hit 98/100/100/97. The owner started getting weekly calls from the site. Seeing code I wrote actually make someone\'s phone ring was a different feeling.',
    skills: ['Next.js 13', 'Tailwind CSS', 'TypeScript', 'SEO', 'Turnstile', 'Vercel'],
    color: '#10b981',
    icon: 'globe',
    lesson: 'Building for a real person with a real business changes how you think about every line of code.',
  },
  {
    year: '2024',
    title: '4 Pics 1 Word',
    subtitle: 'React Native mobile game',
    description:
      'I wanted to learn mobile development, so I built a word puzzle game with Expo SDK49. Ran into Unsplash rate limits, so I wrote a build-time script to pre-download all images. Fixed audio lag by preloading sounds with expo-av\'s createAsync. Got a store-ready APK out of EAS Build. It plays 100% offline.',
    skills: ['React Native', 'Expo', 'AsyncStorage', 'EAS Build', 'TypeScript'],
    color: '#f59e0b',
    icon: 'mobile',
    lesson: 'Mobile has its own set of problems. Battery, bundle size, offline state. You can\'t just think like a web developer.',
  },
  {
    year: '2024',
    title: 'BlockchainTickets',
    subtitle: 'Full-stack Web3 — Solidity + ASP.NET + React',
    description:
      'An event ticketing platform built across three layers: Solidity smart contracts for ERC-721 ticket minting with resale caps, ASP.NET Core 7 for the REST API with JWT auth, and React 18 + Vite for the frontend. Still in alpha, but the mint-verify-resell workflow works end to end. Writing code in TypeScript, C#, and Solidity in the same week was a trip.',
    skills: ['Solidity', 'ethers.js', 'Hardhat', 'ASP.NET Core 7', 'React 18', 'PostgreSQL'],
    color: '#ef4444',
    icon: 'chain',
    lesson: 'Working across multiple languages and paradigms at once forces you to think in patterns, not syntax.',
  },
  {
    year: '2024',
    title: 'Portfolio v2',
    subtitle: 'CRA to Next.js 14 migration',
    description:
      'Rebuilt my portfolio from a Create React App into Next.js 14 with React Server Components, Framer Motion, and Tailwind. The hardest part was figuring out where to draw the "use client" boundary — too high and you lose SSR benefits, too low and Framer Motion causes hydration mismatches. Ended up building a ClientOnly wrapper that solved it cleanly.',
    skills: ['Next.js 14', 'RSC', 'TypeScript 5', 'Framer Motion', 'Tailwind CSS 3'],
    color: '#3b82f6',
    icon: 'code',
    lesson: 'Migrating isn\'t just changing syntax. It\'s rethinking how the whole app renders.',
  },
  {
    year: '2026',
    title: 'Valley City Sales',
    subtitle: 'Full-stack dealership platform — monorepo',
    description:
      'The biggest thing I\'ve built. A pnpm monorepo with two Next.js 15 apps — a public storefront and an admin dashboard — backed by PocketBase on DigitalOcean. TOTP 2FA, VIN decoding via NHTSA, batch operations, PDF exports, ISR caching, structured data, Turnstile + honeypot + rate limiting. Built for a real dealer in Clive, Alberta. Feature-complete in 3 weeks as a solo developer.',
    skills: ['Next.js 15', 'React 19', 'PocketBase', 'TOTP 2FA', 'jsPDF', 'SendGrid', 'Tailwind CSS 4'],
    color: '#06b6d4',
    icon: 'rocket',
    lesson: 'Everything I learned across every previous project came together in this one. That\'s when I knew the grind was worth it.',
  },
];

const iconPaths: Record<string, JSX.Element> = {
  spark: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
  ),
  code: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  ),
  team: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  ),
  mobile: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  ),
  chain: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  ),
  rocket: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  ),
  globe: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  ),
};

function MilestoneIcon({ icon, color }: { icon: string; color: string }) {
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
      style={{ backgroundColor: color }}
    >
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {iconPaths[icon]}
      </svg>
    </div>
  );
}

function JourneyContent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #15202B 0%, #1a2332 50%, #15202B 100%)',
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 backdrop-blur-sm"
        style={{
          backgroundColor: 'rgba(21, 32, 43, 0.95)',
          borderBottom: '1px solid rgba(169, 184, 196, 0.2)',
        }}
      >
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

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-4xl">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-display italic"
            style={{ color: '#F4F1EA' }}
          >
            My <span style={{ color: '#D75F4E' }}>Journey</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#A9B8C4' }}>
            Every project taught me something I couldn&apos;t have learned from a textbook.
            Here&apos;s the path from first line of code to shipping production software.
          </p>
        </motion.div>

        {/* Philosophy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-16 rounded-2xl p-6 sm:p-8 border"
          style={{
            backgroundColor: 'rgba(215, 95, 78, 0.08)',
            borderColor: 'rgba(215, 95, 78, 0.25)',
          }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#F4F1EA' }}>
            How I Think About Growth
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: '#A9B8C4' }}>
            I don&apos;t measure progress by how many languages I know or how many frameworks
            I&apos;ve touched. I measure it by whether the thing I built last month is better than the thing I built
            the month before. Every project has a moment where something breaks and I have to
            figure out why. That moment is the entire point.
          </p>
          <p className="leading-relaxed" style={{ color: '#A9B8C4' }}>
            I chase the problems I don&apos;t know how to solve yet. When the WIDA CRM had 47 queries
            firing on one page, I didn&apos;t know what eager loading was. When Valley City Sales needed 2FA,
            I&apos;d never implemented TOTP. The pattern is always the same: hit a wall, read everything I can,
            build a solution, and come out the other side knowing something I didn&apos;t before.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ backgroundColor: 'rgba(169, 184, 196, 0.15)' }}
          />

          <div className="space-y-6">
            {milestones.map((milestone, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="relative"
                >
                  {/* Timeline dot connector (desktop) */}
                  <div className="absolute left-6 top-6 -translate-x-1/2 hidden sm:block z-10">
                    <div
                      className="w-3 h-3 rounded-full ring-4"
                      style={{
                        backgroundColor: milestone.color,
                        ringColor: 'rgba(21, 32, 43, 1)',
                      }}
                    />
                  </div>

                  {/* Card */}
                  <div className="sm:ml-16">
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="w-full text-left rounded-xl border transition-all duration-300 overflow-hidden group"
                      style={{
                        backgroundColor: isExpanded
                          ? 'rgba(244, 241, 234, 0.08)'
                          : 'rgba(244, 241, 234, 0.04)',
                        borderColor: isExpanded
                          ? `${milestone.color}40`
                          : 'rgba(169, 184, 196, 0.12)',
                      }}
                    >
                      {/* Card Header — always visible */}
                      <div className="p-5 sm:p-6 flex items-start gap-4">
                        <MilestoneIcon icon={milestone.icon} color={milestone.color} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1 flex-wrap">
                            <span
                              className="text-xs font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full"
                              style={{
                                backgroundColor: `${milestone.color}20`,
                                color: milestone.color,
                              }}
                            >
                              {milestone.year}
                            </span>
                            <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#F4F1EA' }}>
                              {milestone.title}
                            </h3>
                          </div>
                          <p className="text-sm" style={{ color: '#A9B8C4' }}>
                            {milestone.subtitle}
                          </p>
                        </div>
                        {/* Expand/Collapse chevron */}
                        <svg
                          className="w-5 h-5 flex-shrink-0 transition-transform duration-300 mt-1"
                          style={{
                            color: '#A9B8C4',
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="px-5 sm:px-6 pb-6"
                        >
                          <div
                            className="h-px mb-5"
                            style={{ backgroundColor: 'rgba(169, 184, 196, 0.12)' }}
                          />

                          {/* Description */}
                          <p className="leading-relaxed mb-5" style={{ color: '#A9B8C4' }}>
                            {milestone.description}
                          </p>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2 mb-5">
                            {milestone.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 rounded-full text-xs font-medium border"
                                style={{
                                  borderColor: `${milestone.color}30`,
                                  color: milestone.color,
                                  backgroundColor: `${milestone.color}10`,
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          {/* Lesson */}
                          <div
                            className="rounded-lg p-4 border-l-4"
                            style={{
                              backgroundColor: 'rgba(215, 95, 78, 0.06)',
                              borderLeftColor: '#D75F4E',
                            }}
                          >
                            <p className="text-sm font-medium mb-1" style={{ color: '#D75F4E' }}>
                              What I took away
                            </p>
                            <p className="text-sm leading-relaxed italic" style={{ color: '#F4F1EA' }}>
                              &ldquo;{milestone.lesson}&rdquo;
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Where I'm Headed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-16 rounded-2xl p-6 sm:p-8 border text-center"
          style={{
            backgroundColor: 'rgba(244, 241, 234, 0.06)',
            borderColor: 'rgba(169, 184, 196, 0.15)',
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-display italic" style={{ color: '#F4F1EA' }}>
            Where I&apos;m Going Next
          </h2>
          <p className="leading-relaxed mb-4 max-w-2xl mx-auto" style={{ color: '#A9B8C4' }}>
            I&apos;m looking for a role where I can keep building, keep learning, and contribute to a team
            that cares about shipping quality software. Whether it&apos;s frontend, backend, or the messy
            stuff in between, I want to work on problems that matter with people who push each other
            to get better.
          </p>
          <p className="leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: '#A9B8C4' }}>
            Every project on this site was something I didn&apos;t fully know how to build when I started it.
            That&apos;s the whole point. I&apos;m not looking for comfortable. I&apos;m looking for the next wall to climb.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 font-medium rounded-lg transition-colors"
              style={{ backgroundColor: '#D75F4E', color: '#F4F1EA' }}
            >
              View My Projects
            </Link>
            <Link
              href="/resume.pdf"
              className="inline-flex items-center px-6 py-3 font-medium rounded-lg border transition-all hover:opacity-80"
              style={{ borderColor: '#A9B8C4', color: '#F4F1EA' }}
            >
              Download Resume
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default function JourneyPage() {
  return (
    <ClientOnly
      fallback={
        <div className="min-h-screen" style={{ background: '#15202B' }}>
          <div className="container mx-auto px-6 py-16 max-w-4xl">
            <div className="animate-pulse space-y-6">
              <div className="h-12 bg-white/10 rounded w-1/2 mx-auto" />
              <div className="h-4 bg-white/10 rounded w-2/3 mx-auto" />
              <div className="h-40 bg-white/5 rounded-xl mt-12" />
              <div className="h-24 bg-white/5 rounded-xl" />
              <div className="h-24 bg-white/5 rounded-xl" />
            </div>
          </div>
        </div>
      }
    >
      <JourneyContent />
    </ClientOnly>
  );
}
