'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import HeroKinetic from '../components/organisms/HeroKinetic';
import ProjectsIsometric from '../components/organisms/ProjectsIsometric';
import BackToTop from '../components/atoms/BackToTop';
import ClientOnly from '../components/ui/ClientOnly';
import { HeroSkeleton } from '../components/ui/Skeleton';

const ContactKinetic = dynamic(
  () => import('../components/organisms/ContactKinetic'),
  { ssr: false, loading: () => <div className="min-h-96 bg-bg-primary" /> }
);

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ClientOnly fallback={<HeroSkeleton />}>
        <HeroKinetic />
      </ClientOnly>
      <ClientOnly fallback={<div className="min-h-screen bg-bg-primary" />}>
        <ProjectsIsometric />
      </ClientOnly>
      <ContactKinetic />
      <ClientOnly>
        <BackToTop />
      </ClientOnly>
    </main>
  );
}
