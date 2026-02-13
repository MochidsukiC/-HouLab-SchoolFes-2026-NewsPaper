import { Article, Category, WeatherData, FortuneItem } from './types';

export const CURRENT_DATE = "2月13日";

export const WEATHER: WeatherData = {
  location: '放らぼ',
  temp: 18,
  condition: '晴れ',
  high: 22,
  low: 12
};

export const FORTUNE_RANKING: FortuneItem[] = [
  { rank: 1, sign: 'てんびん座', item: 'エメラルド' },
  { rank: 2, sign: 'おとめ座', item: 'ゾンビーフ' },
  { rank: 3, sign: 'しし座', item: 'トマト' },
  { rank: 4, sign: 'さそり座', item: '麦わら帽子' },
  { rank: 5, sign: 'かに座', item: '刺身の上に載ってるタンポポ' },
  { rank: 6, sign: 'いて座', item: '不労所得' },
  { rank: 7, sign: 'ふたご座', item: 'ファンタグレープ' },
  { rank: 8, sign: 'うし座', item: 'ウサギ肉' },
  { rank: 9, sign: 'ひつじ座', item: '羊毛' },
  { rank: 10, sign: 'みずがめ座', item: 'みずがめのスポーンエッグ' },
  { rank: 11, sign: 'やぎ座', item: '紙' },
  { rank: 12, sign: 'うお座', item: '校長の頭' },
];

export const HERO_ARTICLE: Article = {
  id: 'hero-1',
  title: "1年1組の教室魔改造される!?!?",
  author: "取材: 佐藤甘味 / 編集: 佐藤甘味 狼月兎紀 わんと",
  date: "2/13",
  category: Category.SCHOOL,
  // 明示的な相対パスに変更
  imageUrl: "./images/classroom_main.jpg",
  imageCaption: "参考画像1: 改装された1年1組の教室全景",
  content: "2月11日の午後11:30頃に某るとら氏に1年1組に取材の許可を得て、取材をしに行ったところ...", 
  body: [
    {
      type: 'text',
      content: "2月11日の午後11:30頃に某るとら氏に1年1組に取材の許可を得て、取材をしに行ったところ上記の画像(参考画像1)のような光景が広がっていた。また、教室の後ろには見覚えのある顔面が飾られており、(参考画像2)何か事件性のある様となっていた。この教室の魔改造を行ったのは1年1組の若芽生もく氏その人であり、本人曰く「先生には許可を取ったので大丈夫なんじゃないすかぁ？」と供述しており犯行を認めている模様。"
    },
    {
      type: 'image',
      src: "./images/face_on_wall.jpg",
      caption: "参考画像2: 教室の後ろに飾られた謎の顔面"
    },
    {
      type: 'text',
      content: "この画像以外にも教室にはまだ謎が隠されている。下の画像(参考画像3)をご覧いただきたい。"
    },
    {
      type: 'image',
      src: "./images/animals_corner.jpg",
      caption: "参考画像3: 教室の隅の動物たち"
    },
    {
      type: 'text',
      content: "この画像は1年1組の教室の角に追いやられている動物たちである。この悲惨な行為を行ったのは教室の魔改造の犯人である若芽生 もく氏である。我々はこの様な行為が許されていいのかを読者の皆様に問いかけたい。"
    }
  ]
};

export const SIDEBAR_ARTICLES: Article[] = [
  {
    id: 'side-1',
    title: "部員募集中！",
    author: "生徒会",
    date: CURRENT_DATE,
    category: Category.SCHOOL,
    content: "新聞写真部では、真実を追求する記者とカメラマンを募集しています。未経験者歓迎。"
  },
  {
    id: 'side-2',
    title: "次号予告",
    author: "編集部",
    date: CURRENT_DATE,
    category: Category.SCHOOL,
    content: "次回は「食堂のパン争奪戦」について特集予定。ご期待ください。"
  }
];

export const GRID_ARTICLES: Article[] = [
  {
    id: 'grid-1',
    title: "校内サーバー増強計画",
    subtitle: "マイクラ部との共同プロジェクト始動",
    author: "技術班",
    date: CURRENT_DATE,
    category: Category.TECHNOLOGY,
    content: "放課後のラグを解消するため、生徒会予算で新サーバー導入が決定。快適な建築ライフが約束される。"
  },
  {
    id: 'grid-2',
    title: "春の体育祭、種目決定",
    subtitle: "eスポーツ部門が新設か",
    author: "運動部連合",
    date: CURRENT_DATE,
    category: Category.SCHOOL,
    content: "伝統的なリレーに加え、今年は「画面の中の戦い」も得点対象に？議論が白熱している。"
  },
  {
    id: 'grid-3',
    title: "購買の新作パンレビュー",
    subtitle: "「焼きそばパン」の逆襲",
    author: "グルメ同好会",
    date: CURRENT_DATE,
    category: Category.CULTURE,
    content: "長らくメロンパンの陰に隠れていた焼きそばパンが、具材増量でリニューアル。即完売の事態に。"
  }
];