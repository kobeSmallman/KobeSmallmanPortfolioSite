import React from 'react';
import dynamicImport from 'next/dynamic';

// Force dynamic rendering to avoid SSR issues
export const dynamic = 'force-dynamic';

// Dynamic imports to prevent SSR issues with useRouter
const HeroKinetic = dynamicImport(() => import('../components/organisms/HeroKinetic'), { ssr: false });
const ProjectsIsometric = dynamicImport(() => import('../components/organisms/ProjectsIsometric'), { ssr: false });
const ContactKinetic = dynamicImport(() => import('../components/organisms/ContactKinetic'), { ssr: false });
const BackToTop = dynamicImport(() => import('../components/atoms/BackToTop'), { ssr: false });

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
