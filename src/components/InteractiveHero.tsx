import React, { useState, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Network, 
  Cpu, 
  Code2, 
  Clock, 
  Layers, 
  Copy, 
  Check 
} from 'lucide-react';
import { profileData } from '../data/profile';

export const InteractiveHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'automation' | 'infra' | 'terminal'>('profile');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);

  // Initial terminal simulation
  useEffect(() => {
    runTerminalCommand('sys.status');
  }, []);

  const runTerminalCommand = (cmd: string) => {
    setIsTyping(true);
    let outputLines: string[] = [];

    if (cmd === 'sys.status') {
      outputLines = [
        `$ maharajan.sys --profile --status`,
        `> Identity: Maharajan C [Verified IT Professional]`,
        `> Experience: 14+ Years (Systems, Campus Networks & Automation)`,
        `> Core Stack: Google Workspace • M365 • Python • Apps Script • MikroTik`,
        `> Active Mission: "I build technology that makes work simpler."`,
        `> System Health: 100% OPERATIONAL | Zero manual bottlenecks.`
      ];
    } else if (cmd === 'automation.demo') {
      outputLines = [
        `$ run-workflow --task "bulk_exam_marksheet_pdf"`,
        `[1/4] Parsing 1,500 student raw marks from Google Sheets... DONE (0.8s)`,
        `[2/4] Normalizing grading curves & calculating percentiles... DONE (1.2s)`,
        `[3/4] Merging personalized SVG templates into watermarked PDFs... DONE (3.4s)`,
        `[4/4] Uploading to Google Drive & dispatching via Gmail API... DONE (2.1s)`,
        `✔ SUCCESS: 1,500 report cards processed in 7.5 seconds (Saved ~18 manual hours!)`
      ];
    } else if (cmd === 'network.map') {
      outputLines = [
        `$ net-audit --campus "Main Campus"`,
        `> Core Router: MikroTik CCR1009-7G-1C-1S+ (Uptime: 182 days)`,
        `> VLAN 10 (Admin & Accounts): 192.168.10.0/24 [ISOLATED]`,
        `> VLAN 20 (Faculty & Labs): 192.168.20.0/24 [QoS: 100Mbps Bandwidth]`,
        `> VLAN 30 (Guest & Student Wi-Fi): 192.168.30.0/24 [Rate-Limited]`,
        `> Security: Zero spoofing with SPF/DKIM/DMARC enforced.`
      ];
    } else if (cmd === 'techpickers.tnkalvi') {
      outputLines = [
        `$ platforms.inspect`,
        `> TechPickers: Tech reviews, curated PC hardware, networking gear guides.`,
        `> TNKalvi: Educational tools, automated sheets & circulars for teachers.`,
        `> Community Impact: 50,000+ users empowered across Tamil Nadu.`
      ];
    }

    setTerminalOutput(outputLines);
    setIsTyping(false);
  };

  const copyContactEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid-pattern">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-teal-500/10 to-indigo-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-cyan-600/10 blur-[90px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-lg shadow-black/40 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-slate-300">
            Available for IT Architecture & Custom Automation
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-[11px] font-mono text-cyan-400 font-semibold tracking-wide uppercase">
            14+ Years in Tech
          </span>
        </div>

        {/* Main Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introductions & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {profileData.tagline}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.12]">
                {profileData.headline}
                <span className="block mt-2 gradient-text">
                  {profileData.subheadline}
                </span>
              </h1>
            </div>

            {/* Role Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {profileData.roles.map((role, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-xs sm:text-sm font-medium rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  {role}
                </span>
              ))}
            </div>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {profileData.bioShort}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#experience"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:brightness-110 hover:shadow-cyan-500/40 transition-all font-sans"
              >
                <span>Explore My Tech Journey</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#automation-lab"
                className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-900/60 hover:border-cyan-500/50 text-cyan-300 font-semibold text-sm flex items-center gap-2 transition-all font-sans"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Try Automation Lab</span>
              </a>

              <button
                onClick={copyContactEmail}
                className="px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-slate-300 font-mono text-xs flex items-center gap-2 transition-all"
                title="Copy Maharajan's direct email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copied ? 'Copied email!' : profileData.contact.email}</span>
              </button>
            </div>

            {/* Quick Interactive Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              {profileData.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                      {stat.value}
                    </span>
                    <span className="text-xs font-mono text-cyan-400 font-semibold">{stat.unit}</span>
                  </div>
                  <div className="text-xs font-medium text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Tech Console & Live Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-[#0b0f19]/90 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl overflow-hidden">
              
              {/* Window Title Bar */}
              <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400">maharajan@sys-node:~</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Interactive Tab Switcher */}
              <div className="flex items-center gap-1 p-2 bg-slate-950/60 border-b border-slate-800/80 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => {
                    setActiveTab('profile');
                    runTerminalCommand('sys.status');
                  }}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeTab === 'profile' 
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" /> sys.status
                </button>

                <button
                  onClick={() => {
                    setActiveTab('automation');
                    runTerminalCommand('automation.demo');
                  }}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeTab === 'automation' 
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" /> automation.run
                </button>

                <button
                  onClick={() => {
                    setActiveTab('infra');
                    runTerminalCommand('network.map');
                  }}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeTab === 'infra' 
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Network className="w-3.5 h-3.5" /> network.vlan
                </button>

                <button
                  onClick={() => {
                    setActiveTab('terminal');
                    runTerminalCommand('techpickers.tnkalvi');
                  }}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeTab === 'terminal' 
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" /> platforms
                </button>
              </div>

              {/* Console Screen */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] text-slate-300 space-y-2.5 min-h-[260px] bg-[#070a10]">
                {terminalOutput.map((line, i) => (
                  <div 
                    key={i} 
                    className={`${
                      line.startsWith('$') 
                        ? 'text-cyan-400 font-bold' 
                        : line.startsWith('✔') 
                        ? 'text-emerald-400 font-semibold' 
                        : line.startsWith('[') 
                        ? 'text-teal-300' 
                        : 'text-slate-300'
                    }`}
                  >
                    {line}
                  </div>
                ))}

                <div className="flex items-center gap-2 pt-2 text-cyan-400 font-bold">
                  <span>❯</span>
                  <span className="w-2.5 h-4 bg-cyan-400 animate-pulse inline-block" />
                </div>
              </div>

              {/* Console Bottom Action Bar */}
              <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">
                  Click buttons above to trigger live diagnostics
                </span>
                <a
                  href="#automation-lab"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 font-mono text-xs"
                >
                  <span>Open Full Lab</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>

            {/* Quick Highlights below card */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-800/60">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Google Workspace Admin</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-800/60">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Microsoft 365 / Entra ID</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-800/60">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Google Apps Script & Python</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-800/60">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>MikroTik & Cisco Networks</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

