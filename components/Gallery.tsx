
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants.tsx';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(GALLERY_ITEMS.map(item => item.category)))];

  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold text-stone-900 mb-6">Gallery</h1>
        <p className="text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
          Take a look at some of our favorite creations and the memorable events we've had the pleasure of catering.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-stone-900 text-white' 
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="relative aspect-square overflow-hidden rounded-3xl group cursor-pointer shadow-md"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
              <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
