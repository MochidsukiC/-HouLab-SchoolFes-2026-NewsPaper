import React from 'react';
import { CURRENT_DATE, WEATHER } from '../constants';

const Masthead: React.FC = () => {
  return (
    <header className="border-b-4 border-double border-ink/80 mb-8 pt-4 px-4 sm:px-0">
      {/* Top Meta Bar */}
      <div className="flex justify-between items-center border-b border-ink/20 pb-2 text-xs sm:text-sm font-sans font-bold text-ink/70 tracking-widest">
        <span>新聞部新聞 2/13号</span>
        <span>{CURRENT_DATE}</span>
        <span>{WEATHER.location} {WEATHER.temp}°C {WEATHER.condition}</span>
      </div>

      {/* Main Logo Area */}
      <div className="py-8 text-center relative">
        <div className="flex flex-col items-center justify-center">
            {/* School Name (Superscription) */}
            <span className="font-headline font-bold text-lg sm:text-2xl md:text-3xl tracking-[0.2em] mb-2 text-ink/80 block w-full">
                放らぼ高等学院
            </span>
            {/* Club Name (Main Title) */}
            <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ink font-black tracking-widest leading-none whitespace-nowrap scale-x-90 origin-center" style={{ fontFeatureSettings: '"palt"' }}>
            新聞写真部
            </h1>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 left-0 hidden lg:block">
           <span className="font-sans text-xs font-bold border border-ink px-2 py-1 bg-ink text-paper">部員募集中</span>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden lg:block">
           <span className="font-sans text-xs font-bold text-accent-red uppercase tracking-widest border border-accent-red px-2 py-1">定期刊行</span>
        </div>
      </div>

      {/* Navigation / Motto */}
      <nav className="border-t border-ink/20 py-2">
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-12 text-sm font-sans font-bold tracking-widest text-ink/80">
          <li className="hover:text-accent-red cursor-pointer transition-colors">学校行事</li>
          <li className="hover:text-accent-red cursor-pointer transition-colors">部活動</li>
          <li className="hover:text-accent-red cursor-pointer transition-colors">生徒会</li>
          <li className="hover:text-accent-red cursor-pointer transition-colors">地域</li>
          <li className="hover:text-accent-red cursor-pointer transition-colors">特集</li>
        </ul>
      </nav>
    </header>
  );
};

export default Masthead;