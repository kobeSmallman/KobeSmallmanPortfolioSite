'use client';

import dynamic from 'next/dynamic';
import { ProjectSkeleton } from '../../../components/ui/Skeleton';

const ProjectDetailClient = dynamic(
  () => import('./ProjectDetailClient'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen" style={{ 
        background: 'linear-gradient(135deg, #15202B 0%, #1a2332 50%, #15202B 100%)' 
      }}>
        <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ 
          backgroundColor: 'rgba(21, 32, 43, 0.95)', 
          borderBottom: '1px solid rgba(169, 184, 196, 0.2)' 
        }}>
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center">
              <a 
                href="/" 
                className="transition-all duration-300 font-medium flex items-center gap-2 hover:opacity-80"
                style={{ color: '#D75F4E' }}
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-6 py-12 max-w-6xl">
          <div className="mb-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F4F1EA' }}>
                Loading...
              </h1>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: '#A9B8C4' }}>
                Loading project details
              </p>
            </div>
          </div>
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
              <p style={{ color: '#A9B8C4' }}>Loading project details...</p>
            </div>
          </div>
        </main>
      </div>
    )
  }
);

export default ProjectDetailClient;