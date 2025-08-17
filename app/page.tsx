'use client';

import React from 'react';
import HeroKinetic from '../components/organisms/HeroKinetic';
import ProjectsIsometric from '../components/organisms/ProjectsIsometric';
import ContactKinetic from '../components/organisms/ContactKinetic';
import BackToTop from '../components/atoms/BackToTop';
import ClientOnly from '../components/ui/ClientOnly';
import { HeroSkeleton } from '../components/ui/Skeleton';


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ClientOnly fallback={<HeroSkeleton />}>
        <HeroKinetic />
      </ClientOnly>
      <ClientOnly fallback={<div className="min-h-screen bg-bg-primary" />}>
        <ProjectsIsometric />
      </ClientOnly>
      <ClientOnly fallback={<div className="min-h-96 bg-bg-primary" />}>
        <ContactKinetic />
      </ClientOnly>
      <ClientOnly>
        <BackToTop />
      </ClientOnly>
    </main>
  );
}
