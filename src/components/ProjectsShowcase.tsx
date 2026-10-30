import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  GraduationCap, 
  Zap, 
  BarChart3 
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Educational Platform', label: 'EdTech & Portals' },
    { id: 'Automation System', label: 'Automation Engines' },
    { id: 'Web & Media', label: 'Web & Media' },
    { id: 'Infrastructure', label: 'Infrastructure & CLI' }
  ];

  const filteredProjects = projectsData.filter(proj => {
    if (activeCategory === 'all') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#080b11] tech-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300 mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>PRODUCTION SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Featured Systems & <span className="gradient-text">Built Solutions</span>
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl text-base">
              From high-traffic portals like TechPickers and TNKalvi to bespoke institutional automation engines solving everyday operational friction.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/50 transition-all flex flex-col justify-between overflow-hidden shadow-xl group hover:-translate-y-1"
            >
              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Card Top Pill Bar */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800 text-cyan-400 border border-slate-700 font-semibold">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Highlight Metric Pill Box */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  {project.impactMetrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-sm sm:text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 truncate mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

              </div>

              {/* Bottom Card Actions */}
              <div className="p-4 sm:p-5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Case Study Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title={`Open ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

