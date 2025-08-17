import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Skeleton({ className = '', width = '100%', height = '1rem' }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-divider rounded ${className}`}
      style={{ width, height }}
    />
  );
}

export function ProjectSkeleton() {
  return (
    <div className="bg-surface-panel rounded-xl p-6 space-y-4">
      <Skeleton height="2rem" width="60%" />
      <Skeleton height="1rem" width="100%" />
      <Skeleton height="1rem" width="80%" />
      <Skeleton height="12rem" width="100%" className="rounded-lg" />
      <div className="flex gap-2 pt-4">
        <Skeleton height="2rem" width="5rem" className="rounded-full" />
        <Skeleton height="2rem" width="4rem" className="rounded-full" />
        <Skeleton height="2rem" width="6rem" className="rounded-full" />
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="text-center space-y-8">
        <Skeleton height="4rem" width="20rem" className="mx-auto" />
        <Skeleton height="1.5rem" width="15rem" className="mx-auto" />
        <div className="flex gap-4 justify-center pt-6">
          <Skeleton height="3rem" width="8rem" className="rounded-full" />
          <Skeleton height="3rem" width="6rem" className="rounded-full" />
        </div>
      </div>
    </div>
  );
}