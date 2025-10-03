import { PortfolioImage, Service } from './types';

// To change portfolio photos, just replace the URLs in this array.
// Use high-quality images with a similar aspect ratio for best results.
export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  // Portraits
  { id: 1, src: 'https://picsum.photos/id/1015/800/600', alt: 'Portrait of a woman by a lake', category: 'portrait' },
  { id: 5, src: 'https://picsum.photos/id/1062/800/600', alt: 'Close-up portrait with flowers', category: 'portrait' },
  { id: 6, src: 'https://picsum.photos/id/1074/800/600', alt: 'Man looking out over a cityscape', category: 'portrait' },
  { id: 9, src: 'https://picsum.photos/id/343/800/600', alt: 'Woman in a hat', category: 'portrait' },
  
  // Love Story
  { id: 3, src: 'https://picsum.photos/id/1040/800/600', alt: 'Couple walking in a city', category: 'love-story' },
  { id: 4, src: 'https://picsum.photos/id/1043/800/600', alt: 'Wedding photo in a field', category: 'love-story' },
  { id: 10, src: 'https://picsum.photos/id/370/800/600', alt: 'Couple holding hands', category: 'love-story' },
  { id: 11, src: 'https://picsum.photos/id/431/800/600', alt: 'Couple on a bridge', category: 'love-story' },

  // Family
  { id: 7, src: 'https://picsum.photos/id/219/800/600', alt: 'Family photo on a pier', category: 'family' },
  { id: 2, src: 'https://picsum.photos/id/1025/800/600', alt: 'Person with a dog on a beach', category: 'family' },
  { id: 12, src: 'https://picsum.photos/id/200/800/600', alt: 'Child playing', category: 'family' },
  { id: 13, src: 'https://picsum.photos/id/305/800/600', alt: 'Family walking in the forest', category: 'family' },
  
  // Event
  { id: 8, src: 'https://picsum.photos/id/327/800/600', alt: 'Event photography with crowds', category: 'event' },
  { id: 14, src: 'https://picsum.photos/id/119/800/600', alt: 'Concert photo', category: 'event' },
  { id: 15, src: 'https://picsum.photos/id/177/800/600', alt: 'Birthday party', category: 'event' },
  { id: 16, src: 'https://picsum.photos/id/28/800/600', alt: 'Conference meeting', category: 'event' },
];

export const SERVICES: Service[] = [
  {
    icon: '📸',
    title: 'Портретна фотосесія',
    description: 'Індивідуальна або сімейна фотосесія. Робота зі світлом, підбір локації, професійна обробка знімків.',
    price: 'від 2000 грн',
  },
  {
    icon: '💍',
    title: 'Весільна зйомка',
    description: 'Повний день зйомки вашого весілля. Репортажна та постановочна фотографія, альбом у подарунок.',
    price: 'від 15000 грн',
  },
  {
    icon: '🎉',
    title: 'Подієва фотографія',
    description: 'Зйомка корпоративних заходів, днів народження, презентацій. Репортажний стиль зйомки.',
    price: 'від 3500 грн',
  },
];
