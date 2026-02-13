export enum Category {
  TECHNOLOGY = '技術',
  WORLD = '国際',
  FINANCE = '経済',
  CULTURE = '文化',
  OPINION = '社説',
  SCHOOL = '校内', // Added for the school newspaper context
}

export type ArticleBodyBlock = 
  | { type: 'text'; content: string }
  | { type: 'image'; src: string; caption?: string };

export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  content: string; // Plain text summary or fallback
  body?: ArticleBodyBlock[]; // Rich content structure
  category: Category;
  imageUrl?: string;
  imageCaption?: string;
  isBreaking?: boolean;
}

export interface WeatherData {
  temp: number;
  condition: string;
  location: string;
  high: number;
  low: number;
}

export interface FortuneItem {
  rank: number;
  sign: string;
  item: string;
}