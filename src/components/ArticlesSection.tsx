import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  FileCode, 
  Layers 
} from 'lucide-react';
import { articlesData } from '../data/articles';
import { ArticleItem } from '../types';
import { ArticleModal } from './ArticleModal';

export const ArticlesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = ['all', 'Automation', 'System Administration', 'Networking', 'Cloud Security'];

  const filteredArticles = articlesData.filter(article => {
    if (filterCategory === 'all') return true;
    return article.category === filterCategory;
  });

  return (
    <section id="articles" className="py-24 relative bg-[#090d16] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-300 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>KNOWLEDGE BASE & NOTES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Technical Tutorials & <span className="gradient-text">SysAdmin Notes</span>
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl text-base">
              Hard-won lessons, production code templates, and network blueprints distilled from 14+ years of real-world implementation.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap ${
                  filterCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="p-7 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-xl group hover:-translate-y-1"
            >
              <div className="space-y-4">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-semibold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" /> {article.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {article.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Read Action */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Full Article & Code</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {article.codeSample && (
                  <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <FileCode className="w-3.5 h-3.5 text-cyan-400" /> Code Snippet Included
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};

