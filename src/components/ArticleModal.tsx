import React, { useState } from 'react';
import { X, Calendar, Clock, Copy, Check, BookOpen, Share2 } from 'lucide-react';
import { ArticleItem } from '../types';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!article) return null;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0c101b] border border-slate-700/80 shadow-2xl shadow-cyan-950/40 p-6 sm:p-8 space-y-6 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Meta Bar */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-semibold">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              {article.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
            {article.title}
          </h3>

          <p className="text-sm text-cyan-300/90 font-mono italic">
            By Maharajan C • IT Professional & Automation Specialist
          </p>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
          {article.content.map((p, idx) => (
            <p key={idx} className="whitespace-pre-line text-slate-300/90">
              {p}
            </p>
          ))}
        </div>

        {/* Code Sample */}
        {article.codeSample && (
          <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden space-y-0">
            <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="uppercase text-cyan-400 font-bold">{article.codeSample.language} Implementation</span>
              <button
                onClick={() => handleCopyCode(article.codeSample!.code)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-300 hover:text-white transition-colors"
              >
                {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCode ? 'Copied Snippet' : 'Copy Code'}</span>
              </button>
            </div>
            <div className="p-4 font-mono text-xs text-slate-200 overflow-x-auto bg-[#070a10] leading-relaxed">
              <pre>{article.codeSample.code}</pre>
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
          {article.tags.map((tag, tIdx) => (
            <span 
              key={tIdx}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-400 border border-slate-800"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-mono text-slate-400">
            Published on maharajanc.com
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-white transition-colors"
          >
            Close Article
          </button>
        </div>

      </div>
    </div>
  );
};

