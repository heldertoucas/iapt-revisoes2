import React from 'react';
import { Tip, AppMode } from '../types';
import { BookOpen, ChevronUp, Star, X, GraduationCap, Trophy } from 'lucide-react';

interface SlideProps {
  tip: Tip;
  isActive: boolean;
  showDetails: boolean;
  onToggleDetails: () => void;
  mode?: AppMode;
}

export const Slide: React.FC<SlideProps> = ({ 
  tip, 
  isActive, 
  showDetails,
  onToggleDetails,
  mode = 'tips'
}) => {
  if (!isActive) return null;

  const isReview = mode === 'review';
  
  // Logic for Golden Rule tips (IDs 6, 13, 20 in Tips mode)
  const isGoldenRule = !isReview && [6, 13, 20].includes(tip.id);

  return (
    <div key={`${mode}-${tip.id}`} className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10">
      
      <div className={`transition-all duration-700 ease-out-expo ${showDetails ? '-translate-y-8 md:-translate-y-20 scale-95 opacity-40 blur-sm' : 'translate-y-0 scale-100 opacity-100 blur-0'}`}>
        
        {/* Tip Number - Massive Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.03] pointer-events-none">
           <span className="text-[15rem] md:text-[35rem] font-black leading-none tracking-tighter text-white animate-scale-in font-sans">
             {tip.id}
           </span>
        </div>

        {/* Badge Area */}
        <div className="mb-8 animate-slide-up opacity-0 flex flex-col items-center gap-3" style={{ animationDelay: '0.1s' }}>
          
          {/* Standard Badge */}
          <div className={`
            inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm shadow-[0_0_15px_rgba(45,212,191,0.2)]
            ${isReview ? 'border-brand-cyan/50 bg-brand-cyan/10' : 'border-brand-teal/50 bg-brand-teal/10'}
          `}>
            {isReview && <GraduationCap className="w-4 h-4 text-brand-cyan" />}
            <span className={`font-bold text-sm tracking-widest uppercase ${isReview ? 'text-brand-cyan' : 'text-brand-teal'}`}>
              {isReview ? `Revisão #${tip.id}` : `Dica #${tip.id}`}
            </span>
          </div>

          {/* Golden Rule Badge */}
          {isGoldenRule && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/50 bg-amber-500/20 backdrop-blur-sm shadow-[0_0_20px_rgba(245,158,11,0.3)] animate-pulse-slow">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-sm tracking-widest uppercase text-amber-400">
                Regra de Ouro
              </span>
            </div>
          )}
        </div>

        {/* Tip Content */}
        <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-12 animate-slide-up opacity-0 max-w-5xl mx-auto drop-shadow-xl ${isGoldenRule ? 'text-transparent bg-clip-text bg-gradient-to-b from-white to-amber-100' : ''}`} style={{ animationDelay: '0.2s' }}>
          {tip.content}
        </h1>

        {/* Action Area */}
        <div className="flex flex-col items-center w-full space-y-6 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={onToggleDetails}
            className={`
              group flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 
              text-lg font-bold tracking-wide shadow-xl hover:scale-105
              ${showDetails 
                ? 'bg-white text-brand-dark' 
                : isReview 
                  ? 'bg-gradient-to-r from-brand-cyan to-blue-500 text-white'
                  : isGoldenRule
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-amber-500/25 hover:shadow-amber-500/40'
                    : 'bg-gradient-to-r from-brand-teal to-brand-cyan text-brand-dark hover:shadow-brand-teal/25'}
            `}
          >
            {showDetails ? (
               <ChevronUp className="w-5 h-5" />
            ) : (
               <BookOpen className="w-5 h-5" />
            )}
            <span>{showDetails ? "Fechar" : "Saber mais"}</span>
          </button>
        </div>
      </div>

      {/* Details Card (Glassmorphism) */}
      <div 
        className={`
          absolute bottom-0 md:bottom-16 left-0 right-0 mx-auto w-full md:w-[800px] max-h-[65vh]
          transition-all duration-700 ease-out-expo origin-bottom z-50 flex flex-col
          ${showDetails 
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
            : 'opacity-0 translate-y-20 scale-95 pointer-events-none'}
        `}
      >
        <div className={`glass-panel rounded-t-3xl md:rounded-3xl p-8 md:p-12 shadow-2xl text-left flex flex-col h-full relative ${isGoldenRule ? 'border-amber-400/20' : ''}`}>
          
          {/* Header Row with Close Button */}
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4 shrink-0">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${isReview ? 'bg-brand-cyan/20 text-brand-cyan' : isGoldenRule ? 'bg-amber-500/20 text-amber-400' : 'bg-brand-teal/20 text-brand-teal'}`}>
                {isGoldenRule ? (
                   <Trophy className="w-6 h-6 fill-amber-400" />
                ) : (
                   <Star className={`w-6 h-6 ${isReview ? 'fill-brand-cyan' : 'fill-brand-teal'}`} />
                )}
              </div>
              <h3 className={`text-2xl font-bold tracking-tight ${isGoldenRule ? 'text-amber-100' : 'text-white'}`}>
                {isReview ? "Conceito Fundamental" : "Na Prática"}
              </h3>
            </div>
            
            <button 
              onClick={onToggleDetails}
              className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              aria-label="Fechar detalhes"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none font-body leading-relaxed overflow-y-auto custom-scrollbar pr-2">
            {tip.details.split('\n').map((paragraph, idx) => {
              // Highlight specific keywords or sections based on manual content
              const isHeader = paragraph.startsWith('**') || paragraph.startsWith('Prompt:') || paragraph.startsWith('Exemplo:') || paragraph.startsWith('Ação:') || paragraph.startsWith('Regra:') || paragraph.startsWith('Estratégia:') || paragraph.startsWith('Para o Quiz:');
              
              return (
                <p key={idx} className={`
                  ${isHeader ? (isGoldenRule ? 'text-amber-400' : 'text-brand-teal') + ' font-bold text-lg mt-6 mb-2' : 'text-gray-100'}
                `}>
                  {paragraph.replace(/\*\*/g, '')}
                </p>
              )
            })}
          </div>
        </div>
      </div>

    </div>
  );
};