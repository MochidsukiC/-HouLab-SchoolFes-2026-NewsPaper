import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  compact?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, compact = false }) => {
  return (
    <article className="flex flex-col h-full border-t border-divider pt-4 pb-6">
       <span className="text-accent-blue text-[10px] font-sans font-bold uppercase tracking-wider mb-2 block">
          {article.category}
       </span>
      <h3 className={`font-headline font-bold text-ink leading-tight mb-2 ${compact ? 'text-lg' : 'text-2xl'}`}>
        {article.title}
      </h3>
      {article.subtitle && !compact && (
        <h4 className="font-serif italic text-ink/70 text-sm mb-3">
          {article.subtitle}
        </h4>
      )}
      <p className="font-serif text-sm sm:text-base leading-relaxed text-ink/80 line-clamp-4 flex-grow text-justify">
        {article.content}
      </p>
       <div className="mt-4 pt-2 border-t border-dotted border-divider flex justify-between items-center">
          <span className="font-sans text-[10px] uppercase font-bold text-ink/50">{article.author}</span>
          <span className="text-accent-red font-serif text-xl leading-none">❧</span>
       </div>
    </article>
  );
};

export default ArticleCard;