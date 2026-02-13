import React from 'react';
import { Article } from '../types';

interface HeroArticleProps {
  article: Article;
}

const HeroArticle: React.FC<HeroArticleProps> = ({ article }) => {
  return (
    <article className="mb-8 lg:mb-0">
      {/* Header Info */}
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center gap-2 mb-1">
             <span className="bg-accent-red text-paper text-[10px] font-sans font-bold px-1.5 py-0.5 uppercase tracking-wider">
               {article.category}
             </span>
             {article.isBreaking && (
                <span className="text-accent-red font-sans text-xs font-bold animate-pulse">
                  ● 速報
                </span>
             )}
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold leading-[1.2] mb-2 text-ink">
          {article.title}
        </h2>
        
        {article.subtitle && (
          <h3 className="text-xl sm:text-2xl font-serif font-medium text-ink/70 mb-4 leading-relaxed">
            {article.subtitle}
          </h3>
        )}

        <div className="flex justify-between items-center border-t border-b border-divider py-2">
          <span className="font-sans text-xs font-bold text-ink/60">{article.author}</span>
          <span className="font-sans text-xs text-ink/40">{article.date} 新聞部新聞</span>
        </div>
      </div>

      {/* Main Feature Image */}
      <div className="relative mb-6 group cursor-pointer overflow-hidden border-4 border-white shadow-md bg-white transform -rotate-[0.5deg]">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-in-out rendering-pixelated"
        />
        {article.imageCaption && (
          <figcaption className="absolute bottom-0 left-0 w-full bg-ink/80 text-paper text-xs font-sans py-1 px-3 text-right">
            {article.imageCaption}
          </figcaption>
        )}
      </div>

      {/* Content Rendering */}
      <div className="font-serif text-lg leading-loose text-justify text-ink/90">
        {article.body ? (
          article.body.map((block, index) => {
            if (block.type === 'text') {
              return (
                <p key={index} className="mb-6 whitespace-pre-wrap">
                  {block.content}
                </p>
              );
            } else if (block.type === 'image') {
              return (
                <figure key={index} className="my-8 p-2 bg-white shadow-md border border-stone-200 transform rotate-[1deg] hover:rotate-0 transition-transform duration-300">
                  <div className="overflow-hidden border border-stone-100">
                      <img 
                        src={block.src} 
                        alt={block.caption || 'Article Image'} 
                        className="w-full h-auto rendering-pixelated grayscale-[10%] hover:grayscale-0 transition-all duration-500" 
                      />
                  </div>
                  {block.caption && (
                    <figcaption className="mt-2 text-sm font-sans text-ink/60 text-center font-bold tracking-tight">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }
            return null;
          })
        ) : (
          <p className="whitespace-pre-wrap first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px] first-letter:font-headline">
            {article.content}
          </p>
        )}
      </div>
    </article>
  );
};

export default HeroArticle;