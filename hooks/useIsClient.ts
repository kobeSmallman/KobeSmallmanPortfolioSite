'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to determine if code is running on client side
 * Helps prevent SSR hydration mismatches with client-only features
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}