import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t-4 border-double border-ink pt-8 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div className="flex flex-col gap-2">
            <h5 className="font-headline font-bold text-xl">放らぼ高等学院 新聞写真部</h5>
            <p className="font-serif text-sm text-ink/70 leading-relaxed">
                校内の出来事から世界のアートまで。<br/>
                「真実を写し、言葉で繋ぐ」をモットーに活動しています。
            </p>
        </div>

        <div className="flex flex-col gap-2 md:items-center">
            <h6 className="font-sans font-bold text-xs tracking-widest text-ink/50">紙面案内</h6>
            <ul className="font-serif text-sm space-y-1">
                <li><a href="#" className="hover:underline">一面</a></li>
                <li><a href="#" className="hover:underline">学校生活</a></li>
                <li><a href="#" className="hover:underline">部活動報告</a></li>
                <li><a href="#" className="hover:underline">写真ギャラリー</a></li>
            </ul>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
             <h6 className="font-sans font-bold text-xs tracking-widest text-ink/50">購読案内</h6>
             <p className="font-serif text-sm text-ink/70 text-right">
                 次号の配布等は生徒会室前掲示板をご確認ください。
             </p>
             <div className="flex mt-2 w-full max-w-[200px]">
                 <input type="email" placeholder="メールアドレス" className="flex-grow border border-ink bg-transparent px-2 py-1 font-sans text-xs focus:outline-none" />
                 <button className="bg-ink text-paper px-3 py-1 font-sans text-xs font-bold uppercase">→</button>
             </div>
        </div>
      </div>
      
      <div className="mt-12 text-center border-t border-ink/10 pt-4">
          <p className="font-sans text-[10px] text-ink/40 tracking-widest">
              © {new Date().getFullYear()} Holab High School Newspaper & Photography Club. All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;