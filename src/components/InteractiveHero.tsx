import React, { useState, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Network, 
  Cpu, 
  Code2, 
  Layers, 
  Copy, 
  Check, 
  Globe,
  Radio,
  Tv,
  MapPin
} from 'lucide-react';
import { profileData } from '../data/profile';

export const InteractiveHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'edge' | 'n8n' | 'silicon' | 'media'>('edge');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    runTerminalCommand('edge');
  }, []);

  const runTerminalCommand = (tab: 'edge' | 'n8n' | 'silicon' | 'media') => {
    setActiveTab(tab);
    let outputLines: string[] = [];

    if (tab === 'edge') {
      outputLines = [
        `$ edge-infra status --cluster global-edge`,
        `> Stack: Next.js 15 • Tailwind CSS • Supabase Postgres • Cloudflare Workers`,
        `> Edge Latency: 28ms to nearest PoP | Caching: s-maxage=3600 (HIT 99.4%)`,
        `> Active Platforms: techpickers.in (specs portal) | tnkalvi.online (EdTech)`,
        `✔ HEALTH: 100% OPERATIONAL | Edge worker responses sub-45ms.`
      ];
    } else if (tab === 'n8n') {
      outputLines = [
        `$ docker compose ps && n8n-cli active-workflows`,
        `> Container: caddy:latest (HTTPS Reverse Proxy with Auto TLS) ... RUNNING`,
        `> Container: n8nio/n8n:latest (Self-Hosted Workflow Cluster) ... RUNNING`,
        `> Python Daemon: Pandas ETL & Log Anomaly Streamer ... IDLE / READY`,
        `> Active Pipelines: 120+ Scheduled Institutional Cron Triggers`,
        `✔ OUTPUT: 1,500 Exam marksheets rendered into PDFs & dispatched in 12 mins.`
      ];
    } else if (tab === 'silicon') {
      outputLines = [
        `$ silicon-monitor --board "Arduino Uno R4 (RA4M1 32-bit Cortex)"`,
        `> Peripherals: SPI ST7789 Color TFT (240x320) @ 60 FPS DMA`,
        `> Telemetry: CAN-bus / Auxiliary Automotive 12V Sensor Line`,
        `> Standby Power Consumption: 2.1mA with sleep interrupt wake-up`,
        `✔ HARDWARE STATUS: Cockpit gauges active & streaming live telemetry.`
      ];
    } else if (tab === 'media') {
      outputLines = [
        `$ studio-pipeline --render --studio "Last Bench Creators"`,
        `> 3D Engine: Blender 3D + Cycles / Eevee realtime pipeline`,
        `> Channel 1: Last Bench Creators (Relatable 3D Animated Skits)`,
        `> Channel 2: Maha Techz (Hardware teardowns & consumer electronics)`,
        `> Channel 3: Maha Tech Automation (No-code & Python builder guides)`,
        `✔ ENGAGEMENT: 100,000+ total views across creative channels.`
      ];
    }

    setTerminalOutput(outputLines);
  };

  const copyContactEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid-pattern">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[420px] bg-gradient-to-tr from-cyan-500/15 via-teal-500/10 to-indigo-600/15 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-cyan-600/10 blur-[90px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Terminal Header Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-lg shadow-black/40 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-slate-200 font-semibold tracking-wide">
            {profileData.badge}
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introductions & Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-cyan-400 font-bold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {profileData.subheadline}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
                {profileData.headline}
              </h1>
            </div>

            {/* High-Velocity Tagline */}
            <p className="text-lg sm:text-xl font-display font-semibold text-slate-200 leading-snug border-l-2 border-cyan-400 pl-4 py-1">
              &ldquo;{profileData.tagline}&rdquo;
            </p>

            {/* Role Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {profileData.roles.map((role, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  {role}
                </span>
              ))}
            </div>

            {/* Bio summary */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-normal">
              {profileData.bioShort}
            </p>

            {/* Action Buttons: "Explore Systems", "View Projects", "Get in Touch" */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#domains"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:brightness-110 hover:shadow-cyan-500/40 transition-all font-sans"
              >
                <span>Explore Systems</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all font-sans"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all font-sans"
              >
                <span>Get in Touch</span>
              </a>

              <button
                onClick={copyContactEmail}
                className="px-3.5 py-3 rounded-xl bg-slate-900/40 hover:bg-slate-800/80 border border-slate-800 text-slate-400 hover:text-slate-200 font-mono text-xs flex items-center gap-1.5 transition-all"
                title="Copy direct email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Email'}</span>
              </button>
            </div>

            {/* Quick Stat Counters */}
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

          {/* Right Column: High-Velocity Live HUD / Console Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-[#0b0f19]/90 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl overflow-hidden">
              
              {/* Window Header Bar */}
              <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400">maharajan@antigravity:~</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ONLINE (60 FPS)</span>
                </div>
              </div>

              {/* HUD Mode Switcher */}
              <div className="flex items-center gap-1 p-2 bg-slate-950/60 border-b border-slate-800/80 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => runTerminalCommand('edge')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeTab === 'edge' 
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" /> edge.status
                </button>

                <button
                  onClick={() => runTerminalCommand('n8n')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeTab === 'n8n' 
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" /> n8n.docker
                </button>

                <button
                  onClick={() => runTerminalCommand('silicon')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeTab === 'silicon' 
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" /> silicon.telemetry
                </button>

                <button
                  onClick={() => runTerminalCommand('media')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    activeTab === 'media' 
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Tv className="w-3.5 h-3.5" /> media.render
                </button>
              </div>

              {/* Console Screen */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] text-slate-300 space-y-2.5 min-h-[250px] bg-[#070a10]">
                {terminalOutput.map((line, i) => (
                  <div 
                    key={i} 
                    className={`${
                      line.startsWith('$') 
                        ? 'text-cyan-400 font-bold' 
                        : line.startsWith('✔') 
                        ? 'text-emerald-400 font-semibold' 
                        : line.startsWith('>') 
                        ? 'text-slate-200' 
                        : 'text-slate-400'
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

              {/* Console Footer */}
              <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">
                  Switch tabs to inspect live sub-systems
                </span>
                <a
                  href="#domains"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 font-mono text-xs"
                >
                  <span>Explore Bento Pillars</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>

            {/* Quick Pillars Ticker */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-800/60">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Next.js • Supabase • Cloudflare</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-800/60">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Docker • n8n • Caddy • Python</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-800/60">
                <Cpu className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Arduino Uno R4 • TFT • RPi</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-800/60">
                <Tv className="w-4 h-4 text-purple-400 shrink-0" />
                <span>3D Animation • Last Bench Creators</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
