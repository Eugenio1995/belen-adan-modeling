import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Button } from './ui/button';

const Gallery = () => {
  const { language } = useLanguage();
  const t = translations[language].gallery;
  const [activeCategory, setActiveCategory] = useState('all');

  const portfolioItems = [
    { id: 1, category: 'editorial', color: 'linear-gradient(135deg, #ffd1e7 0%, #ff84e4 100%)' },
    { id: 2, category: 'commercial', color: 'linear-gradient(135deg, #88a2ff 0%, #1f47e6 100%)' },
    { id: 3, category: 'lifestyle', color: 'linear-gradient(135deg, #f6fd87 0%, #ffe03d 100%)' },
    { id: 4, category: 'studio', color: 'linear-gradient(135deg, #b6cbcb 0%, #aaaaaa 100%)' },
    { id: 5, category: 'editorial', color: 'linear-gradient(135deg, #d987ff 0%, #ff84e4 100%)' },
    { id: 6, category: 'commercial', color: 'linear-gradient(135deg, #ff965a 0%, #d1903a 100%)' },
    { id: 7, category: 'lifestyle', color: 'linear-gradient(135deg, #78d692 0%, #a1a500 100%)' },
    { id: 8, category: 'studio', color: 'linear-gradient(135deg, #b7fbff 0%, #88a2ff 100%)' },
    { id: 9, category: 'editorial', color: 'linear-gradient(135deg, #ffd1e7 0%, #d987ff 100%)' },
  ];

  const categories = ['all', 'editorial', 'commercial', 'lifestyle', 'studio'];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 
              className="text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: "'Helvetica Neue', 'Arial', sans-serif" }}
            >
              {t.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.subtitle}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2 text-xs uppercase tracking-widest font-mono transition-all ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-black border-2 border-gray-200 hover:border-black'
                }`}
                variant={activeCategory === category ? 'default' : 'outline'}
              >
                {t.categories[category]}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl"
                style={{ aspectRatio: '3/4' }}
              >
                <div 
                  className="w-full h-full"
                  style={{ background: item.color }}
                >
                  <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-center text-white">
                      <p className="text-xs uppercase tracking-widest font-mono">
                        {t.categories[item.category]}
                      </p>
                      <p className="text-xs mt-2">Image {item.id}</p>
                    </div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs uppercase tracking-wide font-mono text-black">
                    {t.categories[item.category]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
