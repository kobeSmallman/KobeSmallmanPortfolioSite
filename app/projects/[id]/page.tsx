import React from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { projects, type Project } from '../../../data/projects';

// Dynamic import to prevent SSR issues with Framer Motion
const ProjectDetailClient = dynamic(() => import('./ProjectDetailClient'), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
});

export function generateStaticParams() {
  return projects.map((project: Project) => ({
    id: project.id,
  }));
}

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} projectId={params.id} />;
}
