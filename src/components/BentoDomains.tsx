import React, { useState } from 'react';
import { 
  Globe, 
  Zap, 
  Cpu, 
  Tv, 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  Terminal, 
  Sparkles,
  Layers,
  Check,
  Copy
} from 'lucide-react';
import { bentoPillars, BentoPillar } from '../data/pillars';

export const BentoDomains: React.FC = () => {
  const [activeSnippetPillar, setActiveSnippetPillar] = useState<string>('web-edge');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'web-edge': return Globe;
      case 'autonomous-automation': return Zap;
      case 'embedded-hardware': return Cpu;
      case 'digital-media-animation': return Tv;
      default: return Layers;
    }
  };

  const handleCopySnippet = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="domains" className="py-24 relative bg-[#070a12] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300 mb-3">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>CORE ARCHITECTURAL PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Operational Domains <span className="gradient-text">&amp; Capabilities</span>
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl text-base">
              A high-velocity matrix spanning edge web infrastructure, autonomous orchestration, physical micro-controllers, and high-energy creative media.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Interactive Bento Grid</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {bentoPillars.map((pillar, idx) => {
            const Icon = getPillarIcon(pillar.id);
            const isWide = pillar.id === 'web-edge' || pillar.id === 'autonomous-automation';
            const colSpan = isWide ? 'lg:col-span-6' : 'lg:col-span-6';

            return (
              <div
                key={pillar.id}
                className={`${colSpan} rounded-3xl bg-slate-900/60 border border-slate-800/90 ${pillar.borderGlow} transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between shadow-xl group hover:-translate-y-1 relative overflow-hidden`}
              >
                {/* Background Ambient Glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${pillar.accent} opacity-5 group-hover:opacity-10 rounded-full blur-3xl pointer-events-none transition-opacity`} />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-cyan-400 shadow-inner group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                          {pillar.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-950 text-cyan-400 border border-slate-800">
                      {pillar.statsBadge}
                    </span>
                  </div>

                  {/* Tagline & Description */}
                  <p className="text-xs font-mono text-cyan-400 mb-2 font-medium">
                    {pillar.tagline}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {pillar.keyHighlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-4">
                    {pillar.technologies.map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800 group-hover:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Code Preview Drawer */}
                  {pillar.interactiveSnippet && (
                    <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden text-xs font-mono">
                      <div className="px-3 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-slate-400">
                        <span className="text-cyan-400 text-[11px] font-semibold">{pillar.interactiveSnippet.label}</span>
                        <button
                          onClick={() => handleCopySnippet(pillar.interactiveSnippet!.code)}
                          className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white"
                        >
                          {copiedSnippet ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedSnippet ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                      <div className="p-3 text-[11px] text-slate-300 overflow-x-auto bg-[#06080e] max-h-36 leading-relaxed">
                        <pre>{pillar.interactiveSnippet.code}</pre>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
