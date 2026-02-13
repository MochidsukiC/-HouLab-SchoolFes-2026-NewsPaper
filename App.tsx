import React from 'react';
import Masthead from './components/Masthead';
import HeroArticle from './components/HeroArticle';
import ArticleCard from './components/ArticleCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { HERO_ARTICLE, SIDEBAR_ARTICLES, GRID_ARTICLES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-paper text-ink p-4 sm:p-6 md:p-8 lg:p-12 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto bg-paper shadow-2xl shadow-stone-400/20 p-4 sm:p-8 md:p-12 border border-stone-200">
        
        <Masthead />

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
          
          {/* Main Content Column (Left/Center) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Primary Feature Story */}
            <section aria-label="主要記事">
              <HeroArticle article={HERO_ARTICLE} />
            </section>

            <div className="w-full h-px bg-divider my-2"></div>

            {/* Secondary Stories Grid */}
            <section aria-label="その他の記事" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
               {/* Vertical Divider line for the grid using pseudo-element or border logic */}
               <div className="md:border-r border-divider pr-0 md:pr-8 lg:pr-12">
                  <ArticleCard article={GRID_ARTICLES[0]} />
                  <div className="mt-8">
                    <ArticleCard article={GRID_ARTICLES[2]} compact />
                  </div>
               </div>
               <div>
                  <ArticleCard article={GRID_ARTICLES[1]} />
               </div>
            </section>

          </div>

          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[66.666%] w-px bg-divider -ml-6"></div>

          {/* Sidebar Column (Right) */}
          <div className="lg:col-span-4 pl-0 lg:pl-6">
            <Sidebar articles={SIDEBAR_ARTICLES} />
          </div>

        </main>

        <Footer />
        
      </div>
    </div>
  );
};

export default App;