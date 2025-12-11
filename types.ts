export type TabType = 'home' | 'news' | 'settings';

export interface Program {
  id: string;
  title: string;
  host: string;
  startTime: string;
  endTime: string;
}

export interface NewsItem {
  id: string;
  title: string;
  timeAgo: string;
  imageUrl: string;
}
