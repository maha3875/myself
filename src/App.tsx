import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { InteractiveHero } from './components/InteractiveHero';
import { BentoDomains } from './components/BentoDomains';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TechStackSection } from './components/TechStackSection';
import { AutomationLab } from './components/AutomationLab';
import { ContentSection } from './components/ContentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';

export function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top High-Velocity Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Operational Systems */}
      <main>
        {/* 1. Hero Section: Maharajan Chithiraimuthu, Tagline, Action buttons, Terminal badge */}
        <InteractiveHero />

        {/* 2. Core Domains / Pillars: Interactive Bento Grid */}
        <BentoDomains />

        {/* 3. Featured Projects Showcase: Techpickers (techpickers.in), TN Kalvi Online (tnkalvi.online), n8n Automation */}
        <ProjectsShowcase />

        {/* 4. Tech Stack & Infrastructure Ticker / Badges */}
        <TechStackSection />

        {/* 5. Autonomous Automation Lab: Interactive Live Simulators */}
        <AutomationLab />

        {/* 6. Digital Media & Creator Channels: Maha Techz & Last Bench Creators */}
        <ContentSection />

        {/* 7. Footer & Contact: Direct mailto trigger, social links, live IST clock */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Command Palette (⌘K) */}
      <CommandPalette 
        isOpen={commandPaletteOpen} 
        onClose={() => setCommandPaletteOpen(false)} 
      />
    </div>
  );
}

export default App;
