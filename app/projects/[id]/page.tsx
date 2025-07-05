import React from 'react';
import { notFound } from 'next/navigation';
import { projects, type Project } from '../../../data/projects';
import ProjectDetailClient from './ProjectDetailClient';

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
