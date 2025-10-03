export interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
  category: 'portrait' | 'event' | 'family' | 'love-story';
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  price: string;
}
