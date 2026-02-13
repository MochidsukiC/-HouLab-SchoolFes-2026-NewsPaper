import React from 'react';
import { Article } from '../types';
import { FORTUNE_RANKING } from '../constants';

interface SidebarProps {
  articles: Article[];
}

const Sidebar: React.FC<SidebarProps> = ({ articles }) => {
  return (
    <aside className="h-full">
      {/* Fortune Telling Section */}
      <div className="bg-stone-200/50 p-4 border border-divider mb-8">
        <h4 className="font-headline font-bold text-lg tracking-widest text-center border-b border-ink/20 pb-2 mb-4">
          今日の占い
        </h4>
        <div className="space-y-2">
          {FORTUNE_RANKING.map((fortune) => (
            <div key={fortune.rank} className="flex items-center text-sm font-sans border-b border-ink/5 pb-1 last:border-0">
              <span className={`w-8 font-bold ${fortune.rank <= 3 ? 'text-accent-red' : 'text-ink/50'}`}>
                {fortune.rank}位
              </span>
              <span className="w-24 font-bold text-ink/80">{fortune.sign}</span>
              <span className="flex-grow text-right text-xs text-ink/70 overflow-hidden text-ellipsis whitespace-nowrap" title={fortune.item}>
                {fortune.item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t-4 border-ink mb-6">
        <h3 className="bg-ink text-paper inline-block px-2 py-1 font-sans font-bold text-xs uppercase tracking-widest mb-4">
          短信・コラム
        </h3>
        
        <div className="flex flex-col gap-0 divide-y divide-divider">
          {articles.map((article) => (
            <article key={article.id} className="py-4 group cursor-pointer">
              <h4 className="font-headline font-bold text-lg leading-tight mb-1 group-hover:text-accent-red transition-colors">
                {article.title}
              </h4>
              <p className="font-serif text-sm text-ink/70 line-clamp-3 mb-2 leading-relaxed">
                {article.content}
              </p>
              <span className="font-sans text-[10px] text-ink/40">
                {article.author} &mdash; {article.category}
              </span>
            </article>
          ))}
        </div>
      </div>

      {/* Retro Ad Placeholder */}
      <div className="border border-ink p-1 mt-8">
          <div className="border border-ink border-dashed p-4 text-center">
              <h5 className="font-headline font-bold text-xl mb-2">購買部よりお知らせ</h5>
              <p className="font-serif text-sm italic mb-4">「本日のラッキーアイテム、入荷しました。」</p>
              <button className="bg-ink text-paper font-sans text-xs font-bold px-4 py-2 hover:bg-accent-red transition-colors">
                  在庫確認
              </button>
          </div>
      </div>
    </aside>
  );
};

export default Sidebar;