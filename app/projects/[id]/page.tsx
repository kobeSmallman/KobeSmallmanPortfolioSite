import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { projects, type Project } from '../../../data/projects';
import ProjectDetailClientDynamic from './ProjectDetailClientDynamic';
import { ProjectSkeleton } from '../../../components/ui/Skeleton';


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

  return <ProjectDetailClientDynamic project={project} projectId={params.id} />;
}
