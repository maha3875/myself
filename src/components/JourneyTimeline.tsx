import React, { useState } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  Cpu, 
  Server, 
  Cloud, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Building2,
  ChevronRight
} from 'lucide-react';
import { journeyMilestones } from '../data/journey';

export const JourneyTimeline: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'foundation':
        return { label: 'Foundations', icon: Cpu, color: 'text-amber-400 bg-amber-950/60 border-amber-800/60' };
      case 'infrastructure':
        return { label: 'Campus IT', icon: Server, color: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/60' };
      case 'cloud':
        return { label: 'Cloud Migration', icon: Cloud, color: 'text-blue-400 bg-blue-950/60 border-blue-800/60' };
      case 'automation':
        return { label: 'Automation Architect', icon: Zap, color: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60' };
      case 'innovation':
        return { label: 'AI & Platforms', icon: Sparkles, color: 'text-purple-400 bg-purple-950/60 border-purple-800/60' };
      default:
        return { label: 'Milestone', icon: Clock, color: 'text-slate-400 bg-slate-900 border-slate-800' };
    }
  };

  const filteredMilestones = journeyMilestones.filter(m => {
    if (filterCategory === 'all') return true;
    return m.category === filterCategory;
  });

  return (
    <section id="experience" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300 mb-3">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>MY TECHNOLOGY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            14+ Years of Evolution: <span className="gradient-text">Hardware to AI</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Follow the continuous arc of problem-solving—starting with physical computer repair and local networks to institutional cloud systems, custom automation suites, and modern platforms.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 pb-4 mb-12 overflow-x-auto no-scrollbar font-mono text-xs">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap font-semibold ${
              filterCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Eras (14+ Years)
          </button>
          <button
            onClick={() => setFilterCategory('foundation')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap font-semibold ${
              filterCategory === 'foundation'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            2010–2013 Hardware Genesis
          </button>
          <button
            onClick={() => setFilterCategory('infrastructure')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap font-semibold ${
              filterCategory === 'infrastructure'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            2013–2016 Campus IT
          </button>
          <button
            onClick={() => setFilterCategory('cloud')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap font-semibold ${
              filterCategory === 'cloud'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            2016–2019 Cloud Migration
          </button>
          <button
            onClick={() => setFilterCategory('automation')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap font-semibold ${
              filterCategory === 'automation'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            2019–2022 Automation Era
          </button>
          <button
            onClick={() => setFilterCategory('innovation')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap font-semibold ${
              filterCategory === 'innovation'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            2022–Present AI & Web
          </button>
        </div>

        {/* Timeline Line & Milestones Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 pl-6 md:pl-12 space-y-12">
          {filteredMilestones.map((milestone, idx) => {
            const badge = getCategoryBadge(milestone.category);
            const BadgeIcon = badge.icon;
            
            return (
              <div 
                key={idx}
                className="relative group"
              >
                {/* Glowing Node on Timeline */}
                <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-7 h-7 rounded-full bg-[#090d16] border-2 border-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-125 transition-transform">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                </div>

                {/* Milestone Content Card */}
                <div className="p-6 md:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl space-y-5">
                  
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500 text-slate-950">
                        {milestone.year}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-mono border flex items-center gap-1.5 ${badge.color}`}>
                        <BadgeIcon className="w-3.5 h-3.5" />
                        {badge.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{milestone.organization}</span>
                    </div>
                  </div>

                  {/* Title and Role */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-sm font-mono text-cyan-400 mt-1">
                      {milestone.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Concrete Key Wins */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Key Milestones & Outcomes:
                    </span>
                    <ul className="space-y-2">
                      {milestone.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-2">Core Tech:</span>
                    {milestone.techStack.map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800 group-hover:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

