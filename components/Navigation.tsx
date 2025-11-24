import React from 'react';
import { ChevronLeft, ChevronRight, Grid } from 'lucide-react';

interface NavigationProps {
  onNext: () => void;
  onPrev: () => void;
  onToggleGrid: () => void;
  current: number;
  total: number;
}

export const Navigation: React.FC<NavigationProps> = ({ onNext, onPrev, onToggleGrid, current, total }) => {
  return (
    <div className="fixed bottom-8 left-0 w-full px-6 md:px-12 flex justify-between items-center z-40 pointer-events-none">
      
      <div className="text-brand-teal font-mono text-sm font-bold pointer-events-auto bg-brand-dark/50 px-3 py-1 rounded-full backdrop-blur-sm border border-brand-teal/20">
        {current} <span className="opacity-50 text-white">/</span> {total}
      </div>

      <div className="flex items-center gap-4 pointer-events-auto">
        <button 
          onClick={onToggleGrid}
          className="p-3 rounded-full bg-brand-dark/80 hover:bg-brand-purple text-white border border-white/10 transition-all hover:scale-110 backdrop-blur shadow-lg"
          aria-label="View all slides"
        >
          <Grid className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={onPrev}
            disabled={current === 1}
            className="p-3 rounded-full bg-brand-dark/80 hover:bg-brand-teal hover:text-brand-dark text-white border border-white/10 disabled:opacity-30 disabled:hover:bg-brand-dark disabled:hover:text-white transition-all hover:scale-110 backdrop-blur shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={onNext}
            disabled={current === total}
            className="p-3 rounded-full bg-brand-dark/80 hover:bg-brand-teal hover:text-brand-dark text-white border border-white/10 disabled:opacity-30 disabled:hover:bg-brand-dark disabled:hover:text-white transition-all hover:scale-110 backdrop-blur shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};