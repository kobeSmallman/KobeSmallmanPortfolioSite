'use client';

import React from 'react';

// Force dynamic rendering to avoid SSR issues
export const dynamic = 'force-dynamic';
import HeroKinetic from '../components/organisms/HeroKinetic';
import ProjectsIsometric from '../components/organisms/ProjectsIsometric';
import ContactKinetic from '../components/organisms/ContactKinetic';
import BackToTop from '../components/atoms/BackToTop';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroKinetic />
      <ProjectsIsometric />
      <ContactKinetic />
      <BackToTop />
    </main>
  );
}
