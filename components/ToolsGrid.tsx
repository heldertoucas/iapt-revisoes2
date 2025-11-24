
import React from 'react';
import { Tool } from '../types';
import { 
  Sparkles, 
  MessageSquare, 
  Book, 
  Music, 
  Code2, 
  Presentation, 
  Feather, 
  Palette, 
  Search, 
  Moon,
  Zap
} from 'lucide-react';

interface ToolsGridProps {
  tools: Tool[];
}

export const ToolsGrid: React.FC<ToolsGridProps> = ({ tools }) => {
  
  // Custom Logo Renderer to simulate brand logos with Lucide icons
  const renderLogo = (tool: Tool) => {
    switch (tool.logoId) {
      case 'banana': // Nano Banana
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
               {/* Using Moon to simulate a banana curve */}
               <Moon className={`w-20 h-20 ${tool.logoColor} fill-current rotate-[135deg]`} strokeWidth={1.5} />
               <Sparkles className={`w-8 h-8 ${tool.logoColor} absolute -top-2 -right-4 animate-pulse`} />
            </div>
            <h3 className={`text-2xl font-black tracking-tighter uppercase mt-2 ${tool.logoColor}`}>
              {tool.name}
            </h3>
          </div>
        );
      case 'openai': // ChatGPT
        return (
          <div className="flex flex-col items-center">
            <MessageSquare className={`w-20 h-20 ${tool.logoColor}`} strokeWidth={1.5} />
            <h3 className={`text-2xl font-bold mt-4 ${tool.logoColor}`}>{tool.name}</h3>
          </div>
        );
      case 'notebook': // NotebookLM
        return (
          <div className="flex flex-col items-center">
             <Book className={`w-20 h-20 text-blue-600`} strokeWidth={1.5} />
             <h3 className={`text-2xl font-bold mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text`}>
               {tool.name}
             </h3>
          </div>
        );
      case 'suno': // Suno
        return (
          <div className="flex flex-col items-center">
            <Music className={`w-20 h-20 ${tool.logoColor}`} strokeWidth={1.5} />
            <h3 className={`text-2xl font-bold mt-4 ${tool.logoColor} tracking-widest uppercase`}>{tool.name}</h3>
          </div>
        );
      case 'gemini': // Google AI Studio
        return (
          <div className="flex flex-col items-center">
            <Sparkles className={`w-20 h-20 ${tool.logoColor}`} strokeWidth={1.5} />
            <h3 className={`text-2xl font-bold mt-4 ${tool.logoColor}`}>AI Studio</h3>
          </div>
        );
      case 'gamma': // Gamma
        return (
          <div className="flex flex-col items-center">
            <Presentation className={`w-20 h-20 ${tool.logoColor}`} strokeWidth={1.5} />
            <h3 className={`text-2xl font-bold mt-4 ${tool.logoColor}`}>{tool.name}</h3>
          </div>
        );
      case 'claude': // Claude
        return (
          <div className="flex flex-col items-center">
            <Feather className={`w-20 h-20 ${tool.logoColor}`} strokeWidth={1.5} />
            <h3 className={`text-2xl font-serif font-bold mt-4 ${tool.logoColor}`}>{tool.name}</h3>
          </div>
        );
      case 'midjourney': // Midjourney
        return (
          <div className="flex flex-col items-center">
            <div className="relative">
              <Palette className={`w-20 h-20 ${tool.logoColor}`} strokeWidth={1.5} />
            </div>
            <h3 className={`text-2xl font-bold mt-4 ${tool.logoColor} tracking-widest`}>MJ</h3>
          </div>
        );
      case 'perplexity': // Perplexity
        return (
          <div className="flex flex-col items-center">
            <Search className={`w-20 h-20 ${tool.logoColor}`} strokeWidth={2} />
            <h3 className={`text-2xl font-bold mt-4 ${tool.logoColor}`}>{tool.name}</h3>
          </div>
        );
      default:
        return <Zap className="w-16 h-16 text-white" />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 overflow-y-auto h-full custom-scrollbar">
      <div className="text-center mb-16 animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Toolkit de IA</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          As ferramentas essenciais para criar, automatizar e aprender.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {tools.map((tool, index) => (
          <div 
            key={tool.id}
            className="group relative flex flex-col h-[450px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-slide-up opacity-0"
            style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
          >
            {/* Top Section: Brand Color & Big Logo */}
            <div className={`h-[55%] w-full ${tool.bgColor} flex items-center justify-center p-8 relative overflow-hidden`}>
              {/* Background Pattern (Subtle) */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
              
              {/* Logo Composition */}
              <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
                {renderLogo(tool)}
              </div>
            </div>

            {/* Bottom Section: White Info Area */}
            <div className="h-[45%] w-full bg-white p-8 flex flex-col justify-between text-left relative z-10">
              <div>
                <h4 className="text-gray-900 font-black text-xl uppercase tracking-wide border-b-2 border-gray-100 pb-2 mb-3 inline-block">
                  {tool.name === 'NANO BANANA' ? 'NANO BANANA' : tool.name}
                </h4>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">
                  {tool.tagline}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {tool.description}
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-xs font-semibold text-gray-400 mb-1">MELHOR PARA</div>
                <div className="text-sm font-bold text-gray-900">{tool.bestFor}</div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
