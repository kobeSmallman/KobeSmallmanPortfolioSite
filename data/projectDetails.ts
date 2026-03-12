export const projectDetails: { [key: string]: any } = {
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
