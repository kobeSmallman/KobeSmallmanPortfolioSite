'use client';

// Force dynamic rendering to avoid SSR issues
export const dynamic = 'force-dynamic';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-white mb-4">500</h1>
          <h2 className="text-2xl font-semibold text-slate-300 mb-4">Something went wrong</h2>
          <p className="text-slate-400 mb-8">
            An unexpected error occurred. Please try refreshing the page.
          </p>
          <button
            onClick={reset}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
