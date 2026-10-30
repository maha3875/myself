import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { InteractiveHero } from './components/InteractiveHero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { AutomationLab } from './components/AutomationLab';
import { ContentSection } from './components/ContentSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';

export function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Home — strong introduction + interactive visual hero */}
        <InteractiveHero />

        {/* 2. About Me — your journey and professional profile */}
        <AboutSection />

        {/* 3. Skills — Networking, SysAdmin, Google Workspace, M365, Automation, Web Tech, AI */}
        <SkillsSection />

        {/* 4. Experience — 14+ years of technical experience (Interactive Journey Timeline) */}
        <JourneyTimeline />

        {/* 5. Projects — TechPickers, TNKalvi, school systems, automation projects */}
        <ProjectsShowcase />

        {/* 6. Automation Lab — interactive live demos of Excel/Sheets/Apps Script/VB/Python */}
        <AutomationLab />

        {/* 7. Content — YouTube and educational/technology content */}
        <ContentSection />

        {/* 8. Articles — technical tutorials and notes */}
        <ArticlesSection />

        {/* 9. Contact — professional contact / social links */}
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

