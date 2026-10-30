import React from 'react';
import { X, ExternalLink, CheckCircle2, Zap, ArrowRight, Layers } from 'lucide-react';
import { Github } from './Icons';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0c101b] border border-slate-700/80 shadow-2xl shadow-cyan-950/40 p-6 sm:p-8 space-y-6 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800">
              {project.badge}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-cyan-400 font-mono mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Impact Numbers Banner */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
          {project.impactMetrics.map((metric, i) => (
            <div key={i} className="text-center">
              <div className="text-lg sm:text-2xl font-display font-extrabold text-white">
                {metric.value}
              </div>
              <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" /> System Overview
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.fullOverview}
          </p>
        </div>

        {/* The Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40">
            <h5 className="text-xs font-mono uppercase text-rose-400 font-bold mb-1.5">
              The Real-World Challenge
            </h5>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
            <h5 className="text-xs font-mono uppercase text-emerald-400 font-bold mb-1.5">
              The Engineering Solution
            </h5>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
            Architecture & Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs flex items-center gap-1.5 transition-all font-mono"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source / Scripts</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
