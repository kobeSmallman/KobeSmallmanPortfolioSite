'use client';

// Force dynamic rendering to avoid SSR issues
export const dynamic = 'force-dynamic';

import React from 'react';
import { notFound } from 'next/navigation';
import { projects, type Project } from '../../../data/projects';
import ProjectDetailClient from './ProjectDetailClient';

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
