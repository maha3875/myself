import React, { useState } from 'react';
import { 
  Play, 
  ExternalLink, 
  Eye, 
  Clock, 
  Sparkles, 
  Tv, 
  BookOpen, 
  Layers 
} from 'lucide-react';
import { Youtube } from './Icons';
import { contentVideos } from '../data/content';
import { profileData } from '../data/profile';

export const ContentSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Content' },
    { id: 'Google Workspace', label: 'Google Workspace' },
    { id: 'Automation & Excel', label: 'Automation & Excel' },
    { id: 'IT & Networking', label: 'IT & Networking' },
    { id: 'Tech Guides', label: 'Tamil Tech & Guides' }
  ];

  const filteredVideos = contentVideos.filter(video => {
    if (selectedCategory === 'all') return true;
    return video.category === selectedCategory;
  });

  return (
    <section id="content" className="py-24 relative bg-[#080b11] tech-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-800/60 text-xs font-mono text-rose-300 mb-3">
              <Youtube className="w-3.5 h-3.5 text-rose-400" />
              <span>CONTENT & EDUCATIONAL MEDIA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Empowering Through <span className="gradient-text">Video Masterclasses</span>
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl text-base">
              Practical, no-fluff tutorials guiding educators, students, and IT practitioners in Google Workspace, networking, and institutional automation.
            </p>
          </div>

          <a
            href={profileData.contact.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs font-mono flex items-center gap-2 shadow-lg shadow-rose-600/25 transition-all self-start md:self-auto"
          >
            <Youtube className="w-4 h-4 fill-current" />
            <span>Visit YouTube Channel</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 pb-4 mb-8 overflow-x-auto no-scrollbar font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap font-semibold ${
                selectedCategory === cat.id
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-rose-500/40 transition-all flex flex-col justify-between overflow-hidden shadow-xl group hover:-translate-y-1"
            >
              <div className="p-6 space-y-4">
                
                {/* Thumbnail Simulation / Banner */}
                <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80 flex items-center justify-center overflow-hidden group-hover:border-rose-500/30 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Play Button Icon */}
                  <div className="w-12 h-12 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-lg shadow-rose-600/40 group-hover:scale-110 transition-transform z-10">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>

                  {/* Badges on Thumbnail */}
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-rose-300 border border-rose-900/60 z-10">
                    {video.channel}
                  </span>
                  <span className="absolute bottom-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-slate-300 z-10 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {video.duration}
                  </span>
                </div>

                {/* Video Info */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1.5">
                    <span className="text-rose-400 font-semibold">{video.category}</span>
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {video.views}</span>
                  </div>
                  <h3 className="text-base font-display font-bold text-white group-hover:text-rose-300 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {video.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {video.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer */}
              <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={video.url || profileData.contact.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1.5"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="text-[11px] font-mono text-slate-400">
                  HD Tutorial
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Channel Banner Callout */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-rose-950/40 via-slate-900/60 to-indigo-950/40 border border-rose-900/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-display font-bold text-white">
              Want custom tech tutorials for your school or team?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              I produce customized training videos, administrative onboarding walkthroughs, and automated workflow guides.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs font-mono whitespace-nowrap transition-all shadow-lg"
          >
            Request Training / Consultation
          </a>
        </div>

      </div>
    </section>
  );
};
