import React from 'react';
import { Tip } from '../types';
import { X } from 'lucide-react';

interface GridViewProps {
  tips: Tip[];
  onSelect: (id: number) => void;
  onClose: () => void;
  currentId: number;
}

export const GridView: React.FC<GridViewProps> = ({ tips, onSelect, onClose, currentId }) => {
  return (
    <div className="fixed inset-0 z-50 bg-brand-dark/95 backdrop-blur-xl flex flex-col animate-fade-in">
      <div className="flex justify-between items-center p-6 border-b border-white/10 bg-brand-dark">
        <h2 className="text-xl font-bold text-white tracking-tight">Índice do Manual</h2>
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {tips.map((tip) => (
            <button
              key={tip.id}
              onClick={() => onSelect(tip.id)}
              className={`
                relative p-6 rounded-xl text-left transition-all duration-200 border group
                ${tip.id === currentId 
                  ? 'bg-brand-teal/10 border-brand-teal' 
                  : 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-brand-teal/50'}
              `}
            >
              <span className={`
                text-2xl font-bold block mb-3 
                ${tip.id === currentId ? 'text-brand-teal' : 'text-white/40 group-hover:text-brand-teal'}
              `}>
                {tip.id}
              </span>
              <p className="text-sm text-gray-300 leading-snug font-medium">
                {tip.content}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};