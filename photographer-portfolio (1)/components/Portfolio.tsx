import React, { useState, useMemo } from 'react';
import { PORTFOLIO_IMAGES } from '../constants';

interface PortfolioProps {
  onImageClick: (index: number) => void;
}

const CATEGORIES = {
  'portrait': 'Портрет',
  'love-story': 'Love Story',
  'family': 'Сімейні',
  'event': 'Події',
};
const categoryKeys = Object.keys(CATEGORIES) as (keyof typeof CATEGORIES)[];

const Portfolio: React.FC<PortfolioProps> = ({ onImageClick }) => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof CATEGORIES | 'all'>('all');

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') {
      return PORTFOLIO_IMAGES;
    }
    return PORTFOLIO_IMAGES.filter(image => image.category === activeCategory);
  }, [activeCategory]);
  
  return (
    <section id="portfolio" className="py-20 px-[5%] max-w-7xl mx-auto bg-gray-50">
      <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-center mb-4 tracking-wide text-brand-dark">
        Портфоліо
      </h2>
      <p className="text-center text-gray-500 mb-12 text-lg italic">
        Добірка моїх найкращих робіт
      </p>

      <div className="flex justify-center flex-wrap gap-x-4 gap-y-3 mb-12">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-6 py-2 rounded-full font-semibold tracking-wide transition-colors duration-300 text-sm ${
            activeCategory === 'all' 
              ? 'bg-brand-primary text-white shadow-md' 
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          Всі роботи
        </button>
        {categoryKeys.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold tracking-wide transition-colors duration-300 text-sm ${
              activeCategory === cat 
                ? 'bg-brand-primary text-white shadow-md' 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {CATEGORIES[cat]}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="h-80 bg-cover bg-center rounded-2xl overflow-hidden relative cursor-pointer group transition-transform duration-300 hover:-translate-y-1.5"
            style={{ backgroundImage: `url(${image.src})` }}
            onClick={() => onImageClick(PORTFOLIO_IMAGES.findIndex(p => p.id === image.id))}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
