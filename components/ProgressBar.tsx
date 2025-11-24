import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="absolute top-0 left-0 w-full h-1.5 bg-black/20 z-50">
      <div 
        className="h-full bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-500 ease-out shadow-[0_0_10px_rgba(45,212,191,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};