import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Zap, 
  Play, 
  Terminal, 
  FileSpreadsheet, 
  Code2, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Calculator, 
  Send, 
  Download,
  Copy,
  Check,
  RotateCcw
} from 'lucide-react';
import { automationDemos } from '../data/automationDemos';

export const AutomationLab: React.FC = () => {
  const [activeDemoId, setActiveDemoId] = useState<string>('demo-apps-script');
  
  // Apps Script Demo State
  const [studentName, setStudentName] = useState('Kavitha Selvam');
  const [courseName, setCourseName] = useState('Google Workspace & Cloud Admin');
  const [score, setScore] = useState(94);
  const [isScriptRunning, setIsScriptRunning] = useState(false);
  const [scriptLogs, setScriptLogs] = useState<string[]>([]);
  const [generatedCert, setGeneratedCert] = useState<boolean>(false);

  // Excel VBA ROI Calculator State
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [teamSize, setTeamSize] = useState(4);
  const [vbaRunning, setVbaRunning] = useState(false);
  const [vbaProgress, setVbaProgress] = useState(0);

  // Python Pipeline State
  const [pythonRunning, setPythonRunning] = useState(false);
  const [pythonOutput, setPythonOutput] = useState<{ totalGb: number; anomalies: number; topHost: string } | null>(null);

  // Webhook State
  const [webhookEvent, setWebhookEvent] = useState<'attendance' | 'exam' | 'server'>('attendance');
  const [webhookDispatched, setWebhookDispatched] = useState(false);

  // Snippet Copy State
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const currentDemo = automationDemos.find(d => d.id === activeDemoId) || automationDemos[0];

  const handleRunAppsScript = () => {
    setIsScriptRunning(true);
    setGeneratedCert(false);
    setScriptLogs(['[00.1s] Trigger received from Form submission...']);

    setTimeout(() => {
      setScriptLogs(prev => [...prev, '[00.4s] Connecting to Google Docs Certificate Template ID: TMPL_CERT_2024']);
    }, 400);

    setTimeout(() => {
      setScriptLogs(prev => [...prev, `[00.9s] Merging fields: {{STUDENT_NAME}} => "${studentName}", {{COURSE}} => "${courseName}", {{SCORE}} => "${score}%"`]);
    }, 900);

    setTimeout(() => {
      setScriptLogs(prev => [...prev, '[01.3s] DriveApp rendering high-res vector PDF blob (420 KB)...']);
    }, 1300);

    setTimeout(() => {
      setScriptLogs(prev => [
        ...prev, 
        '[01.8s] GmailApp.sendEmail() dispatched to student inbox with PDF attachment!',
        '✔ SUCCESS: End-to-end execution completed in 1.8 seconds.'
      ]);
      setIsScriptRunning(false);
      setGeneratedCert(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, 1800);
  };

  const handleRunVBA = () => {
    setVbaRunning(true);
    setVbaProgress(0);

    const interval = setInterval(() => {
      setVbaProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setVbaRunning(false);
          confetti({
            particleCount: 40,
            spread: 50,
            origin: { y: 0.7 }
          });
          return 100;
        }
        return prev + 25;
      });
    }, 100);
  };

  const handleRunPython = () => {
    setPythonRunning(true);
    setTimeout(() => {
      setPythonOutput({
        totalGb: 48.6,
        anomalies: 3,
        topHost: '192.168.20.142 (Lab 4 Terminal)'
      });
      setPythonRunning(false);
    }, 800);
  };

  const handleDispatchWebhook = () => {
    setWebhookDispatched(true);
    setTimeout(() => {
      confetti({
        particleCount: 35,
        spread: 45,
        origin: { y: 0.7 }
      });
    }, 400);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  // Calculations for VBA ROI
  const annualHoursSaved = hoursPerWeek * teamSize * 48; // 48 work weeks
  const annualWorkDaysSaved = Math.round(annualHoursSaved / 8);

  return (
    <section id="automation-lab" className="py-24 relative bg-[#060910] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300 mb-3">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>INTERACTIVE AUTOMATION LAB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Test & Run Real <span className="gradient-text">Automation Workflows</span>
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl text-base">
              Don&apos;t just read about automation—interact with simulated pipelines built with Google Apps Script, Excel VBA, Python, and Webhooks.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-cyan-900/50 flex items-center gap-3">
            <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
            <div className="text-xs font-mono">
              <div className="text-slate-300 font-semibold">Average Automation ROI</div>
              <div className="text-cyan-400 font-bold">90% to 99% Time Reduction</div>
            </div>
          </div>
        </div>

        {/* Demo Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {automationDemos.map((demo) => {
            const isSelected = activeDemoId === demo.id;
            return (
              <button
                key={demo.id}
                onClick={() => {
                  setActiveDemoId(demo.id);
                  setScriptLogs([]);
                  setGeneratedCert(false);
                }}
                className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-950/30'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-1 ${
                    isSelected ? 'text-cyan-400' : 'text-slate-400'
                  }`}>
                    {demo.platform}
                  </span>
                  <div className={`text-xs sm:text-sm font-semibold line-clamp-2 ${
                    isSelected ? 'text-white' : 'text-slate-300'
                  }`}>
                    {demo.title}
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">Saved:</span>
                  <span className="text-emerald-400 font-bold">{demo.timeSaved}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Demo Playground Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Simulation Interface */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    Interactive Simulator
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white mt-0.5">
                    {currentDemo.title}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {currentDemo.platform}
                </span>
              </div>

              {/* SIMULATOR TYPE 1: GOOGLE APPS SCRIPT CERTIFICATE WORKFLOW */}
              {currentDemo.demoType === 'sheets-workflow' && (
                <div className="space-y-5">
                  <p className="text-xs text-slate-300">
                    Customize student details below and click &ldquo;Execute Apps Script Trigger&rdquo; to simulate how a Form submission auto-generates certificates and emails them in 2 seconds.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">
                        Student / Participant Name:
                      </label>
                      <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:border-cyan-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">
                        Score Percentage:
                      </label>
                      <input
                        type="number"
                        min="50"
                        max="100"
                        value={score}
                        onChange={(e) => setScore(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:border-cyan-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      Course / Exam Subject:
                    </label>
                    <input
                      type="text"
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:border-cyan-500 outline-none"
                    />
                  </div>

                  {/* Trigger Button */}
                  <button
                    onClick={handleRunAppsScript}
                    disabled={isScriptRunning}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>{isScriptRunning ? 'Executing Apps Script Pipeline...' : 'Execute Apps Script Trigger'}</span>
                  </button>

                  {/* Terminal Execution Logs */}
                  {scriptLogs.length > 0 && (
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1 animate-in fade-in">
                      {scriptLogs.map((log, i) => (
                        <div key={i} className={log.startsWith('✔') ? 'text-emerald-400 font-bold' : 'text-slate-300'}>
                          {log}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Live Rendered Certificate Preview */}
                  {generatedCert && (
                    <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border-2 border-cyan-500/50 text-center space-y-3 shadow-xl">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                        Certificate of Achievement
                      </div>
                      <div className="text-xl sm:text-2xl font-display font-black text-white">
                        {studentName}
                      </div>
                      <p className="text-xs text-slate-300">
                        has successfully completed <span className="text-cyan-300 font-semibold">{courseName}</span> with a grade score of <span className="text-emerald-400 font-bold">{score}%</span>.
                      </p>
                      <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Digitally verified & dispatched via Google Apps Script</span>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* SIMULATOR TYPE 2: EXCEL VBA ROI & MACRO RUNNER */}
              {currentDemo.demoType === 'vba-optimizer' && (
                <div className="space-y-6">
                  <p className="text-xs text-slate-300">
                    Adjust your team parameters to calculate annual hours saved through custom Excel VBA macros and automated spreadsheet consolidation.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
                        <span>Manual Hours / Person / Week:</span>
                        <span className="text-cyan-400 font-bold">{hoursPerWeek} hrs</span>
                      </div>
                      <input
                        type="range"
                        min="2"
                        max="25"
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                        className="w-full accent-cyan-500"
                      />
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
                        <span>Staff / Team Members:</span>
                        <span className="text-cyan-400 font-bold">{teamSize} people</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="30"
                        value={teamSize}
                        onChange={(e) => setTeamSize(Number(e.target.value))}
                        className="w-full accent-cyan-500"
                      />
                    </div>
                  </div>

                  {/* Dynamic Metrics */}
                  <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 text-center">
                    <div>
                      <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                        {annualHoursSaved.toLocaleString()}
                      </div>
                      <div className="text-xs font-mono text-cyan-400 uppercase mt-0.5">
                        Hours Saved / Year
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">
                        {annualWorkDaysSaved}
                      </div>
                      <div className="text-xs font-mono text-slate-300 uppercase mt-0.5">
                        Full Work Days Reclaimed
                      </div>
                    </div>
                  </div>

                  {/* Macro Runner Simulation */}
                  <div className="space-y-2">
                    <button
                      onClick={handleRunVBA}
                      disabled={vbaRunning}
                      className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>{vbaRunning ? 'Processing 12 Subject Workbooks...' : 'Run VBA Macro Engine'}</span>
                    </button>

                    {vbaProgress > 0 && (
                      <div className="space-y-1">
                        <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                          <div 
                            className="bg-emerald-400 h-full transition-all duration-150"
                            style={{ width: `${vbaProgress}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-[11px] font-mono text-slate-400">
                          <span>Merging 1,500 rows...</span>
                          <span className="text-emerald-400 font-bold">{vbaProgress}% Completed (1.8s)</span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              )}

              {/* SIMULATOR TYPE 3: PYTHON DATA PIPELINE */}
              {currentDemo.demoType === 'python-pipeline' && (
                <div className="space-y-5">
                  <p className="text-xs text-slate-300">
                    Simulate streaming 10,000 raw server access logs through a Python Pandas pipeline to filter bandwidth consumption and detect anomalies.
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-400 space-y-1">
                    <div className="text-cyan-400 font-semibold mb-1">Sample Raw Log Format:</div>
                    <div className="text-slate-400">192.168.10.45 - - [30/Oct/2026:14:02:11 +0530] &quot;GET /assets/library.iso&quot; 200 482910400</div>
                    <div className="text-slate-400">192.168.20.142 - - [30/Oct/2026:14:03:02 +0530] &quot;POST /sync/exam_db&quot; 200 892019200</div>
                  </div>

                  <button
                    onClick={handleRunPython}
                    disabled={pythonRunning}
                    className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-500/20"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>{pythonRunning ? 'Parsing Logs with Pandas...' : 'Execute Python Pipeline'}</span>
                  </button>

                  {pythonOutput && (
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono">
                      <div className="text-emerald-400 font-bold">✔ Pipeline Finished in 0.8s:</div>
                      <div className="flex justify-between text-slate-300">
                        <span>Total Bandwidth Aggregated:</span>
                        <span className="text-white font-bold">{pythonOutput.totalGb} GB</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Anomalous Spikes Flagged (&gt;250MB):</span>
                        <span className="text-rose-400 font-bold">{pythonOutput.anomalies} users</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Top Host:</span>
                        <span className="text-cyan-400">{pythonOutput.topHost}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* SIMULATOR TYPE 4: WEBHOOK DISPATCHER */}
              {currentDemo.demoType === 'notification-dispatcher' && (
                <div className="space-y-5">
                  <p className="text-xs text-slate-300">
                    Trigger automated real-time alerts dispatched via WhatsApp Cloud API and SMS gateways for critical institutional events.
                  </p>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono text-slate-400">
                      Select Trigger Event:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => { setWebhookEvent('attendance'); setWebhookDispatched(false); }}
                        className={`p-2.5 rounded-xl text-xs font-mono border text-center transition-all ${
                          webhookEvent === 'attendance'
                            ? 'bg-cyan-950 text-cyan-300 border-cyan-800'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        Student Absence
                      </button>
                      <button
                        onClick={() => { setWebhookEvent('exam'); setWebhookDispatched(false); }}
                        className={`p-2.5 rounded-xl text-xs font-mono border text-center transition-all ${
                          webhookEvent === 'exam'
                            ? 'bg-cyan-950 text-cyan-300 border-cyan-800'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        Exam Schedule
                      </button>
                      <button
                        onClick={() => { setWebhookEvent('server'); setWebhookDispatched(false); }}
                        className={`p-2.5 rounded-xl text-xs font-mono border text-center transition-all ${
                          webhookEvent === 'server'
                            ? 'bg-cyan-950 text-cyan-300 border-cyan-800'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        Server Offline
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleDispatchWebhook}
                    className="w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-md shadow-teal-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Dispatch Automated Webhook Payload</span>
                  </button>

                  {webhookDispatched && (
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono animate-in fade-in">
                      <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Webhook Dispatched (200 OK - 82ms)</span>
                      </div>
                      <div className="text-slate-400 text-[11px]">
                        Recipient: +91 98765 43210 (Guardian Mobile) • WhatsApp API Template: daily_attendance_ta
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[11px]">
                        &ldquo;Dear Parent, student Kavitha was marked present in Class 10A at 08:58 AM today. - Office of Principal&rdquo;
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>

          </div>

          {/* Right Column: Code Snippet & Architecture */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl">
              
              <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>Production Code Snippet</span>
                </div>
                <button
                  onClick={() => copyCode(currentDemo.snippet)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-300 hover:text-white transition-colors"
                >
                  {copiedSnippet ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedSnippet ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-4 font-mono text-[11px] text-slate-300 overflow-x-auto max-h-[380px] bg-[#070a10] leading-relaxed">
                <pre>{currentDemo.snippet}</pre>
              </div>

            </div>

            {/* Problem & Solution Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                  Why this was engineered:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentDemo.problem}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block mb-1">
                  Automated Impact:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentDemo.solution}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

