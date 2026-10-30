import React from 'react';
import { ArrowUp, Heart, Sparkles, Terminal, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070d] border-t border-slate-850 pt-16 pb-12 text-slate-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-850">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-[#080b11] rounded-[7px] flex items-center justify-center">
                  <span className="font-display font-black text-sm text-cyan-400">M</span>
                </div>
              </div>
              <span className="font-display font-bold text-base text-white">
                {profileData.brand}
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              {profileData.subheadline}
            </p>

            <p className="font-mono text-[11px] text-cyan-400">
              {profileData.tagline}
            </p>

            <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>14+ Years of Technical Reliability & Automation</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono uppercase text-[11px] text-slate-300 font-bold tracking-wider block">
              Portfolio Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience Journey</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a>
              <a href="#automation-lab" className="hover:text-cyan-400 transition-colors text-cyan-400 font-medium">Automation Lab</a>
              <a href="#content" className="hover:text-cyan-400 transition-colors">YouTube Content</a>
              <a href="#articles" className="hover:text-cyan-400 transition-colors">Articles & Notes</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Key Platforms */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono uppercase text-[11px] text-slate-300 font-bold tracking-wider block">
              Platforms & Media
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="https://techpickers.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>TechPickers</span>
                  <span className="text-[10px] font-mono text-slate-400">Gadget & Hardware Hub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://tnkalvi.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>TNKalvi</span>
                  <span className="text-[10px] font-mono text-slate-400">EdTech & Teacher Tools</span>
                </a>
              </li>
              <li>
                <a 
                  href={profileData.contact.socials.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>YouTube Masterclasses</span>
                  <span className="text-[10px] font-mono text-slate-400">Video Tutorials</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} {profileData.brand} • {profileData.domain}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Built with React, Vite & Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

