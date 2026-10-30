import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Terminal, 
  Server, 
  Database, 
  Globe, 
  Zap, 
  Cloud, 
  Boxes, 
  GitFork, 
  Shield, 
  Play, 
  FileSpreadsheet, 
  Cpu, 
  Tv, 
  Activity, 
  Search,
  Palette,
  FileCode,
  Sparkles
} from 'lucide-react';
import { techStackData, TechItem } from '../data/techStack';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return Layers;
      case 'Code2': return Code2;
      case 'Palette': return Palette;
      case 'FileCode': return FileCode;
      case 'Terminal': return Terminal;
      case 'Server': return Server;
      case 'Database': return Database;
      case 'Globe': return Globe;
      case 'Zap': return Zap;
      case 'Cloud': return Cloud;
      case 'Boxes': return Boxes;
      case 'GitFork': return GitFork;
      case 'Shield': return Shield;
      case 'Play': return Play;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'Cpu': return Cpu;
      case 'Tv': return Tv;
      case 'Activity': return Activity;
      default: return Code2;
    }
  };

  const categories = [
    'all',
    'Frontend',
    'Backend & Cloud',
    'DevOps & Automation',
    'Hardware & Embedded'
  ];

  const filteredItems = techStackData.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="tech-stack" className="py-24 relative bg-[#080b11] tech-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300 mb-3">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>STACK & INFRASTRUCTURE MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Technologies at <span className="gradient-text">Terminal Velocity</span>
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl text-base">
              The battle-tested technologies, edge frameworks, and physical silicon I rely on to ship reliable software and hardware.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack (e.g. Next.js, n8n, RPi)..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs font-mono text-slate-200 placeholder:text-slate-500 outline-none transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Animated Infinite Ticker Banner */}
        <div className="relative overflow-hidden mb-12 py-3.5 border-y border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
          <div className="flex gap-4 items-center whitespace-nowrap animate-marquee">
            {techStackData.concat(techStackData).map((item, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span className="font-semibold text-white">{item.name}</span>
                <span className="text-[10px] text-slate-500">({item.category})</span>
              </span>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 pb-4 mb-8 overflow-x-auto no-scrollbar font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap font-semibold ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat === 'all' ? `All Technologies (${techStackData.length})` : cat}
            </button>
          ))}
        </div>

        {/* Grid of Tech Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((tech, idx) => {
            const Icon = getTechIcon(tech.icon);
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-sm hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-cyan-400 border border-slate-800">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-500 mb-2">
                    {tech.category}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500">Proficiency:</span>
                  <span className="text-emerald-400 font-semibold">{tech.level}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
