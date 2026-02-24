import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;