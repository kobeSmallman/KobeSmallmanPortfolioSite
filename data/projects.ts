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
      'Next.js 13 features', 'Email/SMS integration', 'Performance optimization', 'Small business requirements', 
      'Local SEO strategies', 'Contact form UX design', 'Image optimization techniques', 'Mobile-first development', 
      'Client communication', 'Project timeline management', 'Tailwind CSS architecture', 'TypeScript integration',
      'Vercel deployment', 'Form validation patterns', 'Responsive design principles', 'Web accessibility',
      'Business requirement analysis', 'User experience design', 'Performance monitoring', 'SEO best practices',
      'Cross-browser compatibility', 'Mobile optimization', 'Load time optimization', 'Code splitting strategies',
      'CDN implementation', 'Analytics integration', 'Error handling', 'Testing strategies', 'Client feedback integration',
      'Project scope management', 'Deadline management', 'Quality assurance', 'Production deployment', 
      'Post-launch support', 'Performance monitoring', 'User feedback analysis', 'Continuous improvement',
      'Business impact measurement', 'ROI tracking', 'Lead generation optimization', 'Conversion rate optimization'
    ],
    outcome: 'Live proof of client delivery, Core Web Vitals optimisation and SEO effectiveness',
    images: ['/images/LacombeGuttersSite.png'],
    links: { live: 'https://www.lacombeguttersltd.com/', github: 'https://github.com/kobeSmallman/LacombeGutters' },
    tags: ['Next.js', 'Business Site', 'SMS', 'Email'],
    color: '#10b981'
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
      'Laravel 10 MVC architecture', 'Team leadership skills', 'Eloquent ORM optimization', 'Database query performance', 
      'PHPUnit testing', 'Agile project management', 'Scope management', 'Client communication', 'Code review processes', 
      'MySQL optimization', 'Bootstrap 5 components', 'Chart.js data visualization', 'Role-based authentication', 
      'Audit trail implementation', 'Full-text search', 'Markdown integration', 'Vite build optimization', 'Team mentoring', 
      'Sprint planning', 'Stakeholder management', 'Performance profiling', 'Database design', 'Security best practices',
      'User access control', 'Data validation', 'Error handling', 'Logging systems', 'Backup strategies',
      'Documentation practices', 'Code standards', 'Version control', 'Deployment strategies', 'Testing methodologies',
      'Quality assurance', 'Bug tracking', 'Feature prioritization', 'Resource allocation', 'Timeline estimation',
      'Risk management', 'Communication protocols', 'Meeting facilitation', 'Progress reporting', 'Client presentations'
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
      'React Native development', 'Expo SDK49 features', 'Mobile API integration', 'EAS build pipeline', 
      'Cross-platform deployment', 'AsyncStorage data persistence', 'Mobile UX design', 'Offline-first architecture', 
      'Image caching strategies', 'Mobile performance optimization', 'React Navigation patterns', 'Sound integration', 
      'Mobile game mechanics', 'App store requirements', 'Build optimization', 'Mobile debugging', 'Device testing', 
      'API rate limiting solutions', 'Asset management', 'Mobile security considerations', 'Touch interactions',
      'Screen size adaptation', 'Platform-specific code', 'Memory management', 'Battery optimization',
      'Network handling', 'State persistence', 'User experience design', 'Game balancing', 'Monetization strategies',
      'Analytics integration', 'Error tracking', 'Performance monitoring', 'User feedback systems',
      'A/B testing', 'Localization support', 'Accessibility features', 'Push notifications', 'Deep linking',
      'Social features', 'Leaderboard systems', 'Achievement systems', 'Progress tracking', 'Data synchronization',
      'Cloud storage', 'User authentication', 'In-app purchases', 'Ad integration', 'Store optimization'
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
      'C++17 modern features', 'STL containers mastery', 'Memory management techniques', 'Cross-platform development', 
      'Object-oriented design patterns', 'RAII principles', 'Smart pointer usage', 'Template programming', 
      'File I/O operations', 'Exception handling', 'Preprocessor directives', 'Compiler compatibility', 
      'Debugging techniques', 'Code organization', 'Algorithm implementation', 'Data structure selection', 
      'Performance optimization', 'Resource management', 'System-level programming', 'Build system configuration',
      'Makefile creation', 'CMake usage', 'Version control', 'Documentation practices', 'Testing strategies',
      'Code review', 'Refactoring techniques', 'Design patterns', 'SOLID principles', 'Clean code practices',
      'Profiling tools', 'Static analysis', 'Dynamic analysis', 'Unit testing', 'Integration testing',
      'Continuous integration', 'Code coverage', 'Performance benchmarking', 'Memory profiling',
      'Thread safety', 'Concurrency', 'Parallel processing', 'Optimization techniques', 'Assembly understanding',
      'Hardware interaction', 'System calls', 'Operating system concepts', 'Computer architecture',
      'Low-level programming', 'Embedded systems', 'Real-time systems', 'Network programming'
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
      metrics: ['Alpha version demonstrates mint-verify-resell workflow', 'Cross-chain API and PWA integration functional', 'Polyglot architecture completed'],
      notes: ['Proves full-stack Web3 development capabilities across multiple technologies']
    },
    learningPoints: [
      'Web3 development fundamentals', 'Solidity smart contracts', 'Multi-chain deployment strategies', 'DeFi integration patterns', 
      'MetaMask wallet integration', 'ethers.js library usage', 'Hardhat development environment', 'Smart contract testing', 
      'Gas optimization techniques', 'Layer 2 scaling solutions', 'NFT standards (ERC-721)', 'Web3 UX design', 
      'Blockchain security practices', 'Cryptocurrency economics', 'Decentralized storage', 'React Web3 integration', 
      'ASP.NET Core Web3 APIs', 'PostgreSQL blockchain data', 'Event-driven architecture', 'Web3 authentication',
      'IPFS integration', 'Decentralized identity', 'Token economics', 'DAO governance', 'Cross-chain bridges',
      'Oracle integration', 'Flash loan protection', 'Reentrancy guards', 'Access control patterns',
      'Upgradeable contracts', 'Proxy patterns', 'Diamond standard', 'EIP standards', 'Consensus mechanisms',
      'Mining/validation', 'Network effects', 'Tokenomics design', 'Liquidity provision', 'Yield farming',
      'Staking mechanisms', 'Governance tokens', 'Voting systems', 'Proposal mechanisms', 'Treasury management',
      'Risk assessment', 'Audit processes', 'Formal verification', 'Economic modeling', 'Game theory'
    ],
    outcome: 'Alpha version already demonstrates mint-verify-resell workflow across chain, API, and PWA layers',
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
      'Next.js 14 App Router', 'React Server Components', 'Advanced TypeScript patterns', 'Performance optimization techniques', 
      'Modern CSS architecture', 'Framer Motion advanced animations', 'SEO best practices', 'Web Vitals optimization', 
      'Bundle analysis', 'Code splitting strategies', 'Image optimization', 'Font optimization', 'Accessibility implementation', 
      'Mobile-first design', 'Progressive enhancement', 'Static site generation', 'Dynamic routing', 'Metadata API', 
      'OpenGraph optimization', 'Analytics integration', 'Core Web Vitals', 'Lighthouse optimization', 'Performance budgets',
      'Critical rendering path', 'Resource hints', 'Preloading strategies', 'Service workers', 'Caching strategies',
      'CDN optimization', 'Edge computing', 'Serverless functions', 'API optimization', 'Database optimization',
      'Real user monitoring', 'Synthetic monitoring', 'Performance testing', 'Load testing', 'Stress testing',
      'A/B testing', 'Feature flags', 'Continuous deployment', 'Monitoring systems', 'Error tracking',
      'User experience analytics', 'Conversion optimization', 'Heat mapping', 'User session recording',
      'Feedback systems', 'Internationalization', 'Localization', 'Multi-language support', 'Cultural adaptation',
      'Brand consistency', 'Design systems', 'Component libraries', 'Style guides', 'Documentation practices'
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
