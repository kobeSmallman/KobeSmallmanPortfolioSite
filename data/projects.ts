export type ProjectStatus = 'completed' | 'in-development' | 'live' | 'archived';
export type ProjectCategory = 'web' | 'mobile' | 'enterprise' | 'game' | 'systems';

export interface Challenge {
  title: string;
  description: string;
  solution: string;
}

export interface ProjectImpact {
  metrics: string[];
  notes: string[];
}

export interface ProjectLinks {
  live?: string;
  github?: string;
  demo?: string;
}

export interface Project {
  id: string;
  name: string;
  overview: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  year: string;
  duration: string;
  role: string;
  team?: string;
  stack: string[];
  useCases: string[];
  features: string[];
  challenges: Challenge[];
  impact: ProjectImpact;
  learningPoints: string[];
  outcome: string;
  images: string[];
  links: ProjectLinks;
  tags: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: 'lacombe-gutters',
    name: 'Lacombe Gutters',
    overview: 'Production marketing site for a Central-Alberta gutter service. Built with Next.js 13, Tailwind 3.4 and TypeScript. Prioritises mobile speed, accessibility and local-SEO.',
    category: 'web',
    status: 'completed',
    featured: true,
    year: '2024',
    duration: '3 months',
    role: 'Full-Stack Developer',
    stack: ['Next.js 13', 'Tailwind CSS 3.4', 'TypeScript', 'PostCSS', 'Lucide React', 'Vercel'],
    useCases: ['Capture leads from "gutters near me" searches', 'Display service catalogue (5"/6" gutters, soffit, leaf guards)', 'Allow staff to edit Markdown-based content without CMS overhead'],
    features: ['Leaf-fall CSS hero animation', 'Responsive service grid', 'Sticky mobile "Call Now" CTA', 'Dark-mode variant'],
    challenges: [{
      title: 'Animation vs. performance',
      description: 'Balancing visual appeal with Core Web Vitals scores',
      solution: 'Restricted to lightweight CSS keyframes; deferred heavier JS effects'
    }, {
      title: 'Hero CLS',
      description: 'Cumulative Layout Shift issues with hero image loading',
      solution: 'Implemented fixed aspect-ratio wrapper and used next/image priority loading'
    }],
    impact: {
      metrics: ['Lighthouse 98 Perf / 100 Acc / 100 BP / 97 SEO', 'Top-3 Google map-pack ranking for "gutter installation Lacombe"'],
      notes: ['Generates weekly phone call leads for the business owner']
    },
    learningPoints: [
      'Next.js 13 App Router', 'Tailwind CSS architecture', 'TypeScript integration',
      'Local SEO with schema markup', 'Mobile-first responsive design', 'Image optimization with next/image',
      'Contact form with Turnstile CAPTCHA', 'Core Web Vitals optimization', 'Vercel deployment',
      'Client communication and requirements gathering', 'CSS keyframe animations',
      'WCAG accessibility compliance', 'Small business project management'
    ],
    outcome: 'Live proof of client delivery, Core Web Vitals optimisation and SEO effectiveness',
    images: ['/images/LacombeGuttersSite.png'],
    links: { live: 'https://www.lacombeguttersltd.com/', github: 'https://github.com/kobeSmallman/LacombeGutters' },
    tags: ['Next.js', 'Business Site', 'SMS', 'Email'],
    color: '#10b981'
  },
  {
    id: 'valley-city-sales',
    name: 'Valley City Sales',
    overview: 'Full-stack dealership platform for a Central Alberta used vehicle and equipment dealer. pnpm monorepo with a public browsing site and a secured admin dashboard, backed by PocketBase on DigitalOcean.',
    category: 'web',
    status: 'completed',
    featured: true,
    year: '2026',
    duration: '3 weeks',
    role: 'Full-Stack Developer',
    stack: ['Next.js 15', 'React 19', 'Tailwind CSS 4', 'TypeScript', 'PocketBase', 'iron-session', 'TOTP 2FA', 'SendGrid', 'Turnstile CAPTCHA', 'Vercel', 'DigitalOcean'],
    useCases: [
      'Let a rural dealer manage inventory, accessories, and promotions from a single admin dashboard',
      'Provide a public browsing site with filtering, search, and contact forms for buyers',
      'Secure the admin with TOTP two-factor authentication and role-based access'
    ],
    features: [
      'Dual-app monorepo with shared type package',
      'Full CRUD for 40+ field listings, accessories, promotions',
      'VIN decode via NHTSA API with smart field normalization',
      'PDF exports: inventory reports, branded vehicle flyers, multi-flyers',
      'Batch status and tier updates with audit logging',
      'ISR with 60-second revalidation across all data pages',
      'Structured data (LocalBusiness, Product, BreadcrumbList) and sitemap',
      'Contact form with Turnstile CAPTCHA, honeypot, and rate limiting'
    ],
    challenges: [
      {
        title: 'Monorepo with shared types',
        description: 'Two Next.js 15 apps needed to share TypeScript types, constants, and utilities without duplication',
        solution: 'pnpm workspace with a @valleycity/shared package exporting types, constants, and the PocketBase client factory'
      },
      {
        title: 'Admin security for a non-technical user',
        description: 'The dealer owner is not tech-savvy but the dashboard needed production-grade auth',
        solution: 'TOTP 2FA with a simple QR scan flow, 30-day device remember cookies, and iron-session for stateless auth'
      },
      {
        title: 'Image-heavy inventory performance',
        description: 'Up to 10 images per listing across 33+ vehicles with full-page loads',
        solution: 'ISR with 60s revalidation, Next.js Image optimization with PocketBase thumbnail parameters, and lazy loading'
      },
      {
        title: 'PDF generation in the browser',
        description: 'Generating brand-matched vehicle flyers with images, specs, and pricing entirely client-side',
        solution: 'jsPDF with parallel image loading via Promise.all, auto aspect-ratio detection, and CORS image proxying'
      }
    ],
    impact: {
      metrics: [
        '33 real listings seeded with verified pricing',
        '40+ field listing form with VIN auto-populate',
        'Both apps feature-complete and production-ready in 3 weeks'
      ],
      notes: ['Built from zero to feature-complete as a solo developer, ready for domain purchase and launch']
    },
    learningPoints: [
      'Next.js 15 App Router', 'React 19', 'Tailwind CSS 4', 'TypeScript strict mode',
      'PocketBase backend and collection design', 'pnpm monorepo with shared package',
      'TOTP 2FA with OTPAuth library', 'iron-session encrypted cookies',
      'Role-based access control', 'PDF generation with jsPDF',
      'VIN decoding via NHTSA API', 'ISR with 60s revalidation',
      'Turnstile CAPTCHA and honeypot spam prevention', 'SendGrid transactional email',
      'Structured data and SEO', 'Batch operations with audit logging',
      'Server Actions', 'DigitalOcean droplet and systemd setup',
      'Real client requirements and iterative feedback'
    ],
    outcome: 'Feature-complete dealership platform with a public browsing site and admin dashboard, ready for domain purchase and production launch. Demonstrates rapid full-stack delivery with modern tooling.',
    images: ['/images/ValleyCitySalesPublicSite.png', '/images/ValleyCitySalesAdminSite.png'],
    links: { github: 'https://github.com/kobeSmallman/ValleyCitySales' },
    tags: ['Next.js', 'Full-Stack', 'Monorepo', '2FA', 'PocketBase'],
    color: '#06b6d4'
  },
  {
    id: 'wida-crm',
    name: 'WIDA CRM System',
    overview: 'Browser-based CRM for WIDA (Lethbridge distributor) built by a six-student capstone team. Runs on Laravel 10 + MySQL 8 with Bootstrap 5 Blade templates.',
    category: 'enterprise',
    status: 'completed',
    featured: true,
    year: '2024',
    duration: '4 months',
    role: 'Team Lead & Lead Developer',
    team: 'Six-student capstone team',
    stack: ['Laravel 10 MVC', 'Bootstrap 5 + Blade', 'MySQL 8', 'PHPUnit', 'Vite', 'Chart.js'],
    useCases: ['Let staff record phone, email, and meeting notes per vendor', 'Provide managers with charts of average reply time and yearly spend', 'Offer role-based dashboards (Admin / Sales / Warehouse)'],
    features: ['Vendor & Item CRUD with pagination', 'Markdown note editor with history', 'Full-text vendor search', 'Role-based policies & guarded routes', 'Analytics dashboard (Chart.js) for SLA metrics', 'Audit log and /status health endpoint'],
    challenges: [{
      title: 'N+1 queries in analytics',
      description: 'Dashboard analytics queries causing 900ms+ load times',
      solution: 'Added Eloquent eager-loading and cached heavy queries, reducing to 220ms'
    }, {
      title: 'Large CSV vendor imports',
      description: 'Processing large vendor import files efficiently',
      solution: 'Chunk-processed 1000-row batches via Sync queue driver'
    }, {
      title: 'Scope creep (real-time chat)',
      description: 'Client requested real-time chat feature mid-development',
      solution: 'Logged as Phase 2, protected MVP timeline'
    }, {
      title: 'Non-technical stakeholder demos',
      description: 'Communicating technical progress to business stakeholders',
      solution: 'Used ROI-focused slides and live screenshots, avoiding jargon'
    }],
    impact: {
      metrics: ['85% PHPUnit test coverage', 'Query time: 900ms → 220ms', '30% faster vendor-issue resolution'],
      notes: ['WIDA Inc. uses system daily for all vendor interactions', 'Deployed MVP in 10 sprints on schedule']
    },
    learningPoints: [
      'Laravel 10 MVC architecture', 'Eloquent ORM and eager loading', 'MySQL 8 query optimization',
      'PHPUnit test coverage', 'Bootstrap 5 Blade templates', 'Chart.js analytics dashboards',
      'Role-based middleware and policies', 'Agile sprints and scope management',
      'Team leadership across 6 developers', 'Client communication and stakeholder demos',
      'Git branching and code reviews', 'Database schema design', 'Audit logging',
      'Full-text search implementation', 'Vite build tooling'
    ],
    outcome: 'Deployed MVP in 10 sprints; WIDA now uses the system daily. Demonstrates backend architecture skills, scope management, and client-facing communication.',
    images: ['/images/WIDA.png'],
    links: { github: 'https://github.com/kobeSmallman/WIDACRM' },
    tags: ['Laravel', 'Team Lead', 'Enterprise', 'CRM', 'MySQL'],
    color: '#8b5cf6'
  },
  {
    id: '4pics1word',
    name: '4 Pics 1 Word Game',
    overview: 'Cross-platform mobile puzzle game built with Expo SDK49 and React Native. Users guess the word common to four Unsplash images, earn coins, and spend them on hints.',
    category: 'mobile',
    status: 'completed',
    featured: true,
    year: '2024',
    duration: '3 months',
    role: 'Mobile Developer',
    stack: ['Expo SDK49', 'React Native 0.73', 'React Navigation 6', 'AsyncStorage', 'Axios', 'EAS Build', 'TypeScript'],
    useCases: ['Practise mobile APIs (audio, storage, navigation)', 'Produce a store-ready APK for personal testing', 'Provide offline, casual gameplay'],
    features: ['Difficulty tiers (easy / medium / hard)', 'Coin economy & three hint types', 'Offline image caching', 'Background music with auto-pause', 'Local leaderboard'],
    challenges: [{
      title: 'Unsplash rate limits',
      description: 'API rate limits affecting gameplay experience and image loading',
      solution: 'Pre-downloaded images in build-time script to avoid runtime API calls'
    }, {
      title: 'Audio lag on first play',
      description: 'Sound effects had noticeable delay on first interaction',
      solution: 'Pre-loaded sound using expo-av createAsync'
    }, {
      title: 'Large bundle size',
      description: 'APK size became too large for smooth distribution',
      solution: 'Compressed images & tree-shook unused Expo packages'
    }],
    impact: {
      metrics: ['Store-ready APK successfully built', 'Complete mobile development pipeline demonstrated', '100% offline gameplay capability'],
      notes: ['Showcases end-to-end mobile development skills from concept to store deployment']
    },
    learningPoints: [
      'React Native and Expo SDK49', 'EAS Build pipeline and APK generation',
      'AsyncStorage for local persistence', 'React Navigation patterns',
      'expo-av audio preloading', 'Unsplash API and rate limit workarounds',
      'Offline-first image caching', 'Mobile UX and touch interactions',
      'Cross-platform iOS/Android development', 'Build size optimization',
      'Mobile game state management', 'OTA update workflow'
    ],
    outcome: 'Demonstrates complete mobile pipeline from asset fetch through EAS release build and OTA updates',
    images: ['/images/fourpicsoneword.png'],
    links: { github: 'https://github.com/kobeSmallman/fourPicsOneWord' },
    tags: ['React Native', 'Mobile', 'Game', 'Expo', 'Offline'],
    color: '#f59e0b'
  },
  {
    id: 'dungeon-escape',
    name: 'Dungeon Escape RPG',
    overview: 'Text-based dungeon crawler written in C++17. Focus on STL containers, RAII memory management, and console command parsing.',
    category: 'systems',
    status: 'completed',
    featured: true,
    year: '2023',
    duration: '2 months',
    role: 'Systems Developer',
    stack: ['C++17', 'STL Containers', 'Cross-platform', 'GCC', 'Clang', 'MSVC', 'Object-Oriented Design'],
    useCases: ['Practise low-level memory safety and debugging', 'Provide an interview-friendly C++ OOP demo'],
    features: ['Room navigation commands', 'Puzzles blocking exits', 'Items with use effects', 'NPC talk/attack interactions', 'Cursed status damage over time'],
    challenges: [{
      title: 'Cross-Platform Compatibility',
      description: 'Console clear commands and file paths differ across Windows, Linux, macOS',
      solution: 'Implemented preprocessor directives for platform-specific implementations'
    }, {
      title: 'Memory Management',
      description: 'Preventing memory leaks in complex object relationships',
      solution: 'Used RAII principles and smart pointers for automatic resource management'
    }, {
      title: 'Complex Game State',
      description: 'Managing interconnected game systems and state transitions',
      solution: 'Designed modular architecture with clear separation of concerns'
    }],
    impact: {
      metrics: ['Warning-free compilation on GCC/Clang/MSVC', 'Cross-platform compatibility achieved', 'Zero memory leaks detected'],
      notes: ['Demonstrates mastery of C++ fundamentals and modern best practices']
    },
    learningPoints: [
      'C++17 modern features', 'STL containers (vector, map, string)',
      'RAII and smart pointer ownership', 'Preprocessor directives for cross-platform',
      'Object-oriented design with inheritance', 'Exception handling',
      'Cross-platform compilation (GCC/Clang/MSVC)', 'Console I/O and command parsing',
      'Modular code organization', 'Memory leak prevention'
    ],
    outcome: 'Compiles warning-free on GCC/Clang/MSVC; proves mastery of STL and OOP',
    images: ['/images/AdventureTerminalGame.png'],
    links: { demo: '/projects/dungeon-escape/code' },
    tags: ['C++', 'Systems', 'OOP', 'STL', 'Game'],
    color: '#64748b'
  },
  {
    id: 'blockchain-tickets',
    name: 'BlockchainTickets Platform',
    overview: 'Early-stage event ticketing platform concept built with React 18, ASP.NET Core 7, and PostgreSQL. Currently in development - exploring web technologies for event management systems.',
    category: 'web',
    status: 'in-development',
    featured: true,
    year: '2024',
    duration: '6 months',
    role: 'Full-Stack Web3 Developer',
    stack: ['React 18 + Vite', 'ASP.NET Core 7', 'PostgreSQL', 'JWT Auth', 'REST APIs', 'Entity Framework'],
    useCases: ['Stop ticket fraud and scalping via blockchain provenance', 'Showcase polyglot skills (TypeScript, C#, Solidity, SQL)'],
    features: ['Wallet connect & ticket minting UI', 'Smart-contract resale cap enforcement', 'Admin portal for event creation', 'JWT-secured role dashboards', 'Swagger API documentation'],
    challenges: [{
      title: 'High gas costs',
      description: 'Ethereum mainnet deployment too expensive for practical use',
      solution: 'Testing batched minting and Polygon deployment to cut fees'
    }, {
      title: 'Non-crypto users',
      description: 'Making blockchain interactions accessible to traditional users',
      solution: 'Planning custodial wallet fallback signed by backend'
    }, {
      title: 'Secret management in CI',
      description: 'Secure handling of RPC keys and private keys in deployment pipeline',
      solution: 'Stored RPC keys in GitHub Actions secrets'
    }],
    impact: {
      metrics: ['Alpha version demonstrates mint-verify-resell workflow', 'Cross-chain API and React frontend integration functional', 'Polyglot architecture completed'],
      notes: ['Proves full-stack Web3 development capabilities across multiple technologies']
    },
    learningPoints: [
      'Solidity smart contracts (ERC-721)', 'ethers.js blockchain integration',
      'Hardhat development and testing', 'Gas optimization techniques',
      'React 18 with Vite', 'ASP.NET Core 7 REST APIs',
      'JWT authentication', 'PostgreSQL with Entity Framework',
      'MetaMask wallet integration', 'Smart contract security patterns',
      'CI/CD secret management', 'Polyglot architecture (TypeScript, C#, Solidity)'
    ],
    outcome: 'Alpha version already demonstrates mint-verify-resell workflow across chain, API, and React frontend layers',
    images: ['/images/blockchaintickets.png'],
    links: { github: 'https://github.com/kobeSmallman/BlockchainTickets' },
    tags: ['Web3', 'Solidity', 'React', 'ASP.NET', 'Blockchain'],
    color: '#ef4444'
  },
  {
    id: 'portfolio-v2',
    name: 'Personal Portfolio v2',
    overview: 'A living developer portfolio rebuilt from Create React App to Next.js 14. Highlights dark/light theming, React Server Components, Tailwind design tokens, and Framer-Motion animations.',
    category: 'web',
    status: 'completed',
    featured: true,
    year: '2024',
    duration: '3 months',
    role: 'Full-Stack Developer',
    stack: ['Next.js 14', 'TypeScript 5', 'Tailwind CSS 3', 'React Server Components', 'Framer Motion', 'Vercel'],
    useCases: ['Provide recruiters with modern, performant first impression', 'Demonstrate proficiency with cutting-edge React patterns', 'Serve as testing ground for new web technologies and optimization techniques'],
    features: ['React Server Components for optimal performance', 'TypeScript 5 for comprehensive type safety', 'Tailwind CSS 3 with design tokens', 'Framer Motion smooth animations', 'Responsive mobile-first design', 'Lighthouse performance optimization'],
    challenges: [{
      title: 'Hydration mismatch with RSC',
      description: 'Client/server rendering conflicts with React Server Components',
      solution: 'Implemented proper "use client" boundaries and conditional rendering patterns'
    }, {
      title: 'Hero image CLS',
      description: 'Cumulative Layout Shift issues with hero image loading',
      solution: 'Fixed with aspect-ratio containers and next/image priority loading'
    }, {
      title: 'Legacy migration complexity',
      description: 'Migrating from Create React App while maintaining functionality',
      solution: 'Systematic refactoring with incremental testing and feature parity validation'
    }],
    impact: {
      metrics: ['95+ Lighthouse performance scores', 'Successful migration from legacy CRA', 'Enhanced professional presence'],
      notes: ['Recruiters specifically cite technical sophistication and clean implementation']
    },
    learningPoints: [
      'Next.js 14 App Router', 'React Server Components', 'TypeScript 5 strict mode',
      'Tailwind CSS 3 design tokens', 'Framer Motion animations',
      'CRA to Next.js migration', 'Hydration mismatch debugging',
      'Code splitting and dynamic imports', 'Core Web Vitals optimization',
      'Vercel deployment and CI/CD', 'Responsive mobile-first design',
      'Image optimization with next/image', 'OpenGraph and SEO metadata'
    ],
    outcome: 'Proof of continuous learning and production-grade DevOps skills',
    images: ['/images/PortfolioSite.png'],
    links: { github: 'https://github.com/kobeSmallman/KobeSmallmanPortfolioSite' },
    tags: ['Next.js', 'Portfolio', 'Performance', 'React Server Components'],
    color: '#3b82f6'
  }
];

export const projectCategories = {
  web: { label: 'Web Development', color: '#3b82f6' },
  mobile: { label: 'Mobile Apps', color: '#10b981' },
  enterprise: { label: 'Enterprise', color: '#8b5cf6' },
  game: { label: 'Games', color: '#f59e0b' },
  blockchain: { label: 'Web3/Blockchain', color: '#ef4444' },
  systems: { label: 'Systems', color: '#64748b' }
};

// Featured projects for hero section
export const featuredProjects = projects.filter(p => p.featured);

// Get project by ID
export const getProject = (id: string) => projects.find(p => p.id === id);

// Get projects by category
export const getProjectsByCategory = (category: string) => 
  projects.filter(p => p.category === category);

// All unique technologies used across projects
export const allTechnologies = Array.from(
  new Set(projects.flatMap(p => p.stack))
).sort();
