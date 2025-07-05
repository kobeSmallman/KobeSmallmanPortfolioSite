'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const HeroKinetic = dynamic(() => import('../components/organisms/HeroKinetic'), { ssr: false });
const ProjectsIsometric = dynamic(() => import('../components/organisms/ProjectsIsometric'), { ssr: false });
const ContactKinetic = dynamic(() => import('../components/organisms/ContactKinetic'), { ssr: false });
const BackToTop = dynamic(() => import('../components/atoms/BackToTop'), { ssr: false });

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
