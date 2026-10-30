import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Copy, 
  Check, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { Github, Youtube, Linkedin, Twitter } from './Icons';
import { profileData } from '../data/profile';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Live IST Time Display
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Autonomous Automation / Edge Systems',
    message: ''
  });

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#080b11] tech-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300 mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>COMMUNICATION & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Let&apos;s Build at <span className="gradient-text">Terminal Velocity</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Whether you need autonomous workflow architectures, high-performance edge web applications, embedded prototypes, or creative digital media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Direct Inquiries
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Builder
                </span>
              </div>

              {/* Primary Email */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-cyan-400">Direct Contact Email:</span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="font-mono text-xs sm:text-sm text-white select-all break-all">
                    {profileData.contact.email}
                  </span>
                  <button
                    onClick={() => handleCopyEmail(profileData.contact.email)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Clean Mailto Action Button */}
              <a
                href={`mailto:${profileData.contact.email}?subject=Project%20Inquiry%20-%20Maharajan%20Chithiraimuthu`}
                className="w-full py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Mail Client</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              {/* Location & Timezone Live Status */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Location</span>
                  </div>
                  <div className="font-semibold text-xs text-white">
                    {profileData.contact.location}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>IST (Local Time)</span>
                  </div>
                  <div className="font-mono font-bold text-xs text-emerald-400">
                    {currentTime || 'IST (UTC+5:30)'}
                  </div>
                </div>
              </div>

            </div>

            {/* Social & Creator Media Networks */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold block">
                Creator Channels &amp; Profiles
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={profileData.contact.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center gap-2.5 transition-all text-xs font-mono"
                >
                  <Github className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">GitHub (maha3875)</span>
                </a>

                <a
                  href={profileData.contact.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950 hover:bg-blue-950/40 border border-slate-800 hover:border-blue-800/60 text-slate-300 hover:text-blue-300 flex items-center gap-2.5 transition-all text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={profileData.contact.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950 hover:bg-rose-950/40 border border-slate-800 hover:border-rose-800/60 text-slate-300 hover:text-rose-300 flex items-center gap-2.5 transition-all text-xs font-mono"
                >
                  <Youtube className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Maha Techz</span>
                </a>

                <a
                  href={profileData.contact.socials.youtubeLastBench}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950 hover:bg-purple-950/40 border border-slate-800 hover:border-purple-800/60 text-slate-300 hover:text-purple-300 flex items-center gap-2.5 transition-all text-xs font-mono"
                >
                  <Youtube className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Last Bench Creators</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative">
              
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                Send a Message or Technical Brief
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-mono">
                Have a software project, automation pipeline, or hardware concept? Drop your note below.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-slate-950 border border-emerald-500/40 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white">
                    Message Received, {formData.name || 'Friend'}!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out regarding &ldquo;{formData.subject}&rdquo;. I will review your note and respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Autonomous Automation / Edge Systems', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-xs sm:text-sm font-sans text-white placeholder:text-slate-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ramesh@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-xs sm:text-sm font-sans text-white placeholder:text-slate-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Focus Area / Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-xs sm:text-sm font-sans text-white outline-none transition-colors"
                    >
                      <option value="Autonomous Automation / Edge Systems">Autonomous Automation (n8n, Docker, Python)</option>
                      <option value="Full-Stack Edge Web App (Next.js, Supabase)">Full-Stack Edge Web App (Next.js, Supabase)</option>
                      <option value="Embedded Silicon / Hardware Prototyping">Embedded Silicon / Hardware Prototyping (Arduino / RPi)</option>
                      <option value="Digital Media / 3D Animation Production">Digital Media / 3D Animation (Last Bench Creators)</option>
                      <option value="Tech Consultation & Architecture Advisory">Technical Advisory &amp; Architecture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Project Brief / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your concept, challenge, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 text-xs sm:text-sm font-sans text-white placeholder:text-slate-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 text-slate-950 font-bold text-xs sm:text-sm font-sans flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting Brief...' : 'Send Message to Maharajan'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
