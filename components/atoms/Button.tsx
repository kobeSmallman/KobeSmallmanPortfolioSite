'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  ariaLabel,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const motionProps = {
    whileHover: { scale: 0.98 },
    whileTap: { scale: 0.96 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };
  
  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};

export default Button;
