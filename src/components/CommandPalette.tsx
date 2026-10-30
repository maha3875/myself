import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  Zap, 
  User, 
  Clock, 
  FolderGit2, 
  BookOpen, 
  Mail, 
  Cpu, 
  Sparkles,
  Command,
  Layers,
  Globe,
  Tv
} from 'lucide-react';
import { Youtube } from './Icons';
import { profileData } from '../data/profile';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commands = [
    { label: 'Go to Hero & Terminal Cockpit', href: '#home', category: 'Navigation', icon: Command },
    { label: 'Core Domains: Interactive Bento Grid', href: '#domains', category: 'Navigation', icon: Layers },
    { label: 'Featured Projects (Techpickers, TN Kalvi)', href: '#projects', category: 'Navigation', icon: FolderGit2 },
    { label: 'Tech Stack & Infrastructure Ticker', href: '#tech-stack', category: 'Navigation', icon: Cpu },
    { label: 'Autonomous Automation Lab (Run Live Demos)', href: '#automation-lab', category: 'Navigation', icon: Zap },
    { label: 'Creator Media Channels (Maha Techz & Last Bench)', href: '#content', category: 'Navigation', icon: Tv },
    { label: 'Contact Maharajan & Send Project Brief', href: '#contact', category: 'Navigation', icon: Mail },
    
    // Quick Platforms
    { label: 'Techpickers Specification Portal', href: 'https://techpickers.in', category: 'Platform', icon: Globe, external: true },
    { label: 'TN Kalvi Online Resource Platform', href: 'https://tnkalvi.online', category: 'Platform', icon: Globe, external: true },
    { label: 'Maha Techz YouTube Channel', href: profileData.contact.socials.youtube, category: 'Creator', icon: Youtube, external: true },
    { label: 'Last Bench Creators (3D Animation)', href: profileData.contact.socials.youtubeLastBench, category: 'Creator', icon: Youtube, external: true },
    { label: 'GitHub Repositories (@maha3875)', href: profileData.contact.socials.github, category: 'Code', icon: Command, external: true },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (cmd: typeof commands[0]) => {
    if (cmd.external) {
      window.open(cmd.href, '_blank');
    } else {
      window.location.hash = cmd.href;
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="w-full max-w-xl rounded-2xl bg-[#0c101c] border border-slate-700/80 shadow-2xl overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a section or tool (e.g. Next.js, n8n, Techpickers, RPi)..."
            className="w-full bg-transparent text-sm font-mono text-white placeholder:text-slate-500 outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-slate-400">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(cmd)}
                  className="w-full p-2.5 rounded-xl text-left hover:bg-slate-800/80 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/50">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-slate-200 group-hover:text-white">
                      {cmd.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Navigate with mouse or click</span>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[10px]">
            ESC to close
          </kbd>
        </div>

      </div>
    </div>
  );
};
