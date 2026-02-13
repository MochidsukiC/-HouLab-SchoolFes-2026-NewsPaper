import React, { useState } from 'react';
import { Article } from '../types';

interface HeroArticleProps {
  article: Article;
}

const HeroArticle: React.FC<HeroArticleProps> = ({ article }) => {
  const [mainImageError, setMainImageError] = useState(false);
  const [bodyImageErrors, setBodyImageErrors] = useState<Record<number, boolean>>({});

  const handleBodyImageError = (index: number) => {
    setBodyImageErrors(prev => ({ ...prev, [index]: true }));
  };

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
      <div className="relative mb-6 group cursor-pointer overflow-hidden border-4 border-white shadow-md bg-stone-200 transform -rotate-[0.5deg] min-h-[200px]">
        {article.imageUrl && (
          <>
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              onError={(e) => {
                console.warn('Main image load failed:', article.imageUrl);
                setMainImageError(true);
                e.currentTarget.onerror = null;
              }}
              className={`w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-in-out rendering-pixelated ${mainImageError ? 'opacity-30' : ''}`}
            />
            {mainImageError && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-paper/90 border-2 border-ink p-3 text-center transform -rotate-2 shadow-lg">
                  <span className="block font-headline font-bold text-lg text-ink">画像調整中</span>
                  <span className="block font-sans text-[10px] text-ink/60 mt-1 uppercase tracking-widest">Image Unavailable</span>
                </div>
              </div>
            )}
          </>
        )}
        
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
              const isError = bodyImageErrors[index];
              return (
                <figure key={index} className="my-8 p-2 bg-white shadow-md border border-stone-200 transform rotate-[1deg] hover:rotate-0 transition-transform duration-300">
                  <div className="relative overflow-hidden border border-stone-100 min-h-[150px] bg-stone-100">
                    <img 
                      src={block.src} 
                      alt={block.caption || 'Article Image'} 
                      onError={(e) => {
                        console.warn('Body image load failed:', block.src);
                        handleBodyImageError(index);
                        e.currentTarget.onerror = null;
                      }}
                      className={`w-full h-auto rendering-pixelated grayscale-[10%] hover:grayscale-0 transition-all duration-500 ${isError ? 'opacity-30' : ''}`} 
                    />
                    {isError && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-paper/90 border border-ink p-2 text-center shadow-sm">
                          <span className="block font-sans font-bold text-xs text-ink">NO PHOTO</span>
                        </div>
                      </div>
                    )}
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