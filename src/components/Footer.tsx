import React from 'react';
import { ArrowUp, Sparkles, Mail, Heart } from 'lucide-react';
import { Github, Youtube, Linkedin, Twitter } from './Icons';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070d] border-t border-slate-800 pt-16 pb-12 text-slate-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
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

            <p className="text-slate-300 leading-relaxed text-xs max-w-sm italic">
              &ldquo;{profileData.tagline}&rdquo;
            </p>

            <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>📍 Thoothukudi, India | ⚡ Autonomous Builder</span>
            </div>

            {/* Quick Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.contact.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="GitHub @maha3875"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profileData.contact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-blue-950/50 text-slate-400 hover:text-blue-300 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={profileData.contact.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-rose-950/50 text-slate-400 hover:text-rose-300 transition-colors"
                title="Maha Techz"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profileData.contact.email}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-cyan-950/50 text-slate-400 hover:text-cyan-300 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono uppercase text-[11px] text-slate-300 font-bold tracking-wider block">
              Systems Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home &amp; Terminal</a>
              <a href="#domains" className="hover:text-cyan-400 transition-colors">Core Bento Pillars</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a>
              <a href="#tech-stack" className="hover:text-cyan-400 transition-colors">Tech Matrix &amp; Ticker</a>
              <a href="#automation-lab" className="hover:text-cyan-400 transition-colors text-cyan-400 font-semibold">Automation Lab</a>
              <a href="#content" className="hover:text-cyan-400 transition-colors">Creator Media Hub</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Get in Touch</a>
            </div>
          </div>

          {/* Key Platforms */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono uppercase text-[11px] text-slate-300 font-bold tracking-wider block">
              Platforms &amp; Media
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="https://techpickers.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span className="text-white font-medium">Techpickers</span>
                  <span className="text-[10px] font-mono text-cyan-400">techpickers.in</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://tnkalvi.online" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span className="text-white font-medium">TN Kalvi Online</span>
                  <span className="text-[10px] font-mono text-cyan-400">tnkalvi.online</span>
                </a>
              </li>
              <li>
                <a 
                  href={profileData.contact.socials.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span className="text-slate-300">Maha Techz</span>
                  <span className="text-[10px] font-mono text-slate-500">Hardware &amp; Reviews</span>
                </a>
              </li>
              <li>
                <a 
                  href={profileData.contact.socials.youtubeLastBench} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center justify-between"
                >
                  <span className="text-slate-300">Last Bench Creators</span>
                  <span className="text-[10px] font-mono text-purple-400">3D Animation</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} {profileData.brand} • Engineered at terminal velocity.
          </div>

          <div className="flex items-center gap-4">
            <span>Next.js • Tailwind • Supabase • Cloudflare</span>
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
