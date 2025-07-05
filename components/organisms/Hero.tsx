'use client';

import React from 'react';
import HeroKinetic from './HeroKinetic';

// Legacy Hero component - now redirects to HeroKinetic
const Hero: React.FC = () => {
  return <HeroKinetic />;
};

export default Hero;
