import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight, Search, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'automation-lab', 'content', 'articles', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Automation Lab', href: '#automation-lab', id: 'automation-lab', badge: 'Interactive' },
    { name: 'Content', href: '#content', id: 'content' },
    { name: 'Articles', href: '#articles', id: 'articles' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080b11]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-teal-500 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all shrink-0">
              <div className="w-full h-full bg-[#080b11] rounded-[10px] flex items-center justify-center">
                <span className="font-display font-black text-xl gradient-text">M</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg text-white tracking-tight group-hover:text-cyan-400 transition-colors whitespace-nowrap">
                  {profileData.brand}
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 rounded whitespace-nowrap">
                  IT & Automation
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono tracking-tight -mt-0.5 hidden sm:block">
                {profileData.domain}
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-800/50 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="px-1.5 py-0.2 text-[9px] font-bold uppercase rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Quick Command Palette trigger */}
            <button
              onClick={onOpenCommandPalette}
              aria-label="Open command search"
              className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-all"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 rounded text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 hover:brightness-110 shadow-md shadow-cyan-500/20 transition-all font-sans"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-800 bg-[#0a0e17]/95 backdrop-blur-xl px-4 pt-3 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex items-center justify-between mb-3 px-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Navigation</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-900"
            >
              <Search className="w-3 h-3" /> Quick Find (⌘K)
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`p-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-cyan-950/70 text-cyan-300 border border-cyan-800/50 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-500 text-slate-950">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
