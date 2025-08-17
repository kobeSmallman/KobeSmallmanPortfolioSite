'use client';

import React from 'react';
import { useIsClient } from '../../hooks/useIsClient';

interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Renders children only on the client side, preventing SSR hydration issues
 * with components that use browser-only APIs or libraries like Framer Motion
 */
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const isClient = useIsClient();

  if (!isClient) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}