import React, { useState } from 'react';
import { 
  Network, 
  Server, 
  Cloud, 
  Briefcase, 
  Zap, 
  Globe, 
  Cpu, 
  Search, 
  Layers, 
  CheckCircle2, 
  Filter 
} from 'lucide-react';
import { skillsData } from '../data/skills';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'networking': return Network;
      case 'sysadmin': return Server;
      case 'google-workspace': return Cloud;
      case 'microsoft-365': return Briefcase;
      case 'automation': return Zap;
      case 'web-tech': return Globe;
      case 'ai-emerging': return Cpu;
      default: return Layers;
    }
  };

  const filteredCategories = skillsData.map(cat => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return null;
    }

    const filteredSkills = cat.skills.filter(skill => {
      const matchesSearch = 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.highlight?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });

    if (filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(Boolean);

  const totalSkillCount = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-24 relative bg-[#080b11] tech-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300 mb-3">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>TECHNICAL COMPETENCY MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Skills Built Over <span className="gradient-text">14+ Years in Action</span>
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl text-base">
              A comprehensive toolkit covering physical infrastructure, cloud platforms, and custom automation algorithms.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g. GAM, VBA, VLAN)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs font-mono text-slate-200 placeholder:text-slate-500 outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white font-mono"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 pb-4 mb-10 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Domains ({totalSkillCount})</span>
          </button>

          {skillsData.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category Skill Grids */}
        <div className="space-y-12">
          {filteredCategories.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800">
              <p className="text-slate-400 font-mono text-sm">No skills found matching &ldquo;{searchQuery}&rdquo;.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-3 text-xs text-cyan-400 hover:underline font-mono"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredCategories.map((category) => {
              if (!category) return null;
              const Icon = getCategoryIcon(category.id);
              return (
                <div key={category.id} className="space-y-4">
                  {/* Category Title & Badge */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-white">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-mono">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 font-bold px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 hidden sm:inline-block">
                      {category.skills.length} Competencies
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all group flex flex-col justify-between shadow-sm"
                      >
                        <div>
                          {/* Skill Header */}
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h4 className="font-semibold text-slate-100 text-sm group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="shrink-0 px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-cyan-400 border border-slate-700">
                              {skill.experienceYears}y exp
                            </span>
                          </div>

                          {/* Highlight */}
                          {skill.highlight && (
                            <p className="text-xs text-slate-400 leading-relaxed mb-3">
                              {skill.highlight}
                            </p>
                          )}
                        </div>

                        <div>
                          {/* Tags */}
                          {skill.tags && (
                            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                              {skill.tags.map((tag, tIdx) => (
                                <span 
                                  key={tIdx}
                                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800/80"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};

