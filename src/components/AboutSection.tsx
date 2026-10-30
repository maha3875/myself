import React, { useState } from 'react';
import { 
  User, 
  Award, 
  BookOpen, 
  Cpu, 
  Server, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  HeartHandshake, 
  Compass,
  FileText
} from 'lucide-react';
import { profileData } from '../data/profile';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'narrative' | 'principles' | 'domains'>('narrative');

  const principles = [
    {
      title: "Eliminate Human Toil, Multiply Human Value",
      desc: "If an administrative or educational task requires copying and pasting repetitive values more than 3 times, it deserves an automated script.",
      icon: Zap,
      accent: "text-amber-400"
    },
    {
      title: "Zero-Downtime Infrastructure",
      desc: "Rock-solid hardware diagnostics, disciplined 3-2-1 backup strategies, and segmented VLANs keep schools and offices running continuously.",
      icon: ShieldCheck,
      accent: "text-cyan-400"
    },
    {
      title: "EdTech with Empathy",
      desc: "Software is useless if teachers find it stressful. True digital transformation empowers educators with zero-friction, intuitive spreadsheets.",
      icon: HeartHandshake,
      accent: "text-emerald-400"
    },
    {
      title: "Self-Sustaining Documentation",
      desc: "Every system, network bridge, and Apps Script pipeline I architect is documented so teams can operate independently.",
      icon: BookOpen,
      accent: "text-indigo-400"
    }
  ];

  const domains = [
    {
      name: "Institutional Education & Schools",
      stat: "14+ Years",
      highlight: "Campus Networks, EMIS, Exam Analytics, Google Classroom, Biometric IoT"
    },
    {
      name: "Google Workspace & Cloud Tenants",
      stat: "5,000+ Accounts",
      highlight: "Enterprise Security Policies, GAM CLI, SPF/DKIM/DMARC, Shared Drives"
    },
    {
      name: "Lightweight Scripting & Tooling",
      stat: "85+ Automations",
      highlight: "Google Apps Script, Python Pandas, Excel VBA, Windows PowerShell"
    },
    {
      name: "Digital Publishing & Tech Media",
      stat: "50,000+ Reach",
      highlight: "TechPickers reviews, TNKalvi portal, YouTube technical guides"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300 mb-3">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>ABOUT MAHARAJAN C</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            14+ Years at the Intersection of <span className="gradient-text">IT Infrastructure & Automation</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From troubleshooting physical motherboard circuitry in 2010 to orchestrating enterprise cloud tenants and custom AI-augmented pipelines today.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-4 mb-8 overflow-x-auto font-mono text-xs">
          <button
            onClick={() => setActiveTab('narrative')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'narrative'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <User className="w-4 h-4" /> Professional Profile & Story
          </button>

          <button
            onClick={() => setActiveTab('principles')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'principles'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Compass className="w-4 h-4" /> Core Principles
          </button>

          <button
            onClick={() => setActiveTab('domains')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'domains'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Cpu className="w-4 h-4" /> Domain Footprint
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === 'narrative' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
              {profileData.bioLong.map((para, i) => (
                <p key={i} className="text-slate-300/90">
                  {para}
                </p>
              ))}

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 relative overflow-hidden mt-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                <p className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2 font-semibold">
                  The Core Philosophy
                </p>
                <blockquote className="text-lg italic font-display text-white border-l-2 border-cyan-400 pl-4 py-1">
                  “I don't look at technology as wires, servers, or lines of code. I look at it as time saved for real people.”
                </blockquote>
              </div>
            </div>

            {/* Quick Profile Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="font-display font-bold text-white text-base">Quick Snapshot</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {profileData.domain}
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Total Tech Experience</span>
                    <span className="font-mono font-bold text-cyan-400">14+ Years</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Primary Domain</span>
                    <span className="font-semibold text-slate-200">IT Infrastructure & EdTech</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Core Specialty</span>
                    <span className="font-semibold text-teal-300">Google Workspace & Apps Script</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Secondary Specialty</span>
                    <span className="font-semibold text-indigo-300">Microsoft 365, Python & VBA</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Platforms Founded</span>
                    <span className="font-semibold text-amber-300">TechPickers, TNKalvi</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Location / Zone</span>
                    <span className="text-slate-200">{profileData.contact.location} ({profileData.contact.timezone})</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#experience"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all font-mono"
                  >
                    <span>View 14-Year Technology Journey</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </a>
                </div>
              </div>

              {/* Tagline Banner */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-center">
                <p className="font-mono text-xs text-cyan-300 font-semibold">
                  {profileData.tagline}
                </p>
              </div>
            </div>

          </div>
        )}

        {activeTab === 'principles' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className={`w-6 h-6 ${principle.accent}`} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'domains' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {domains.map((dom, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
                    {dom.stat}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  {dom.name}
                </h3>
                <p className="text-slate-400 text-sm">
                  {dom.highlight}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

