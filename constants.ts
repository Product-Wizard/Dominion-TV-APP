import { NewsItem, Program } from './types';

export const SCHEDULE_DATA: Program[] = [
  { id: '1', startTime: '07:00', endTime: '08:50', title: 'DAYBREAK LIVE', host: 'Morning Team' },
  { id: '2', startTime: '09:00', endTime: '09:50', title: 'AGENDA', host: 'Political Desk' },
  { id: '3', startTime: '10:00', endTime: '10:50', title: 'The Big Conversation', host: 'Sarah Johnson' },
  { id: '4', startTime: '11:00', endTime: '11:55', title: 'Dominion Sport', host: 'Sports Crew' },
  { id: '5', startTime: '12:00', endTime: '13:50', title: 'NEWS at 12 noon', host: 'News Anchor' },
  { id: '6', startTime: '13:00', endTime: '13:50', title: 'E-Plus', host: 'Entertainment' },
  { id: '7', startTime: '14:00', endTime: '14:50', title: 'LOJUDE DOMINION', host: 'Cultural Desk' },
  { id: '8', startTime: '15:30', endTime: '16:30', title: 'IYO AYE', host: 'Lifestyle Team' },
  { id: '9', startTime: '18:00', endTime: '19:00', title: 'The POLISCOPE', host: 'Analysis Team' },
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Dominion TV Launches New HD Studio Facility',
    timeAgo: '2h ago',
    imageUrl: 'https://picsum.photos/200/200?random=1'
  },
  {
    id: 'n2',
    title: 'Global Markets Rally as Tech Stocks Surge',
    timeAgo: '4h ago',
    imageUrl: 'https://picsum.photos/200/200?random=2'
  },
  {
    id: 'n3',
    title: 'Local Sports Team Secures Championship Victory',
    timeAgo: '5h ago',
    imageUrl: 'https://picsum.photos/200/200?random=3'
  },
  {
    id: 'n4',
    title: 'Weather Update: Heavy Rains Expected This Weekend',
    timeAgo: '1d ago',
    imageUrl: 'https://picsum.photos/200/200?random=4'
  },
  {
    id: 'n5',
    title: 'Tech Expo 2024: The Future of AI in Broadcasting',
    timeAgo: '1d ago',
    imageUrl: 'https://picsum.photos/200/200?random=5'
  }
];

export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/'; 
