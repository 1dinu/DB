
import React, { useState } from 'react';
import { PRODUCTS } from '../constants.tsx';
import { Product } from '../types.ts';

const Products: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'sweet' | 'savory' | 'dessert'>('all');

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-blue-950">Our <span className="text-blue-600">Bakery Menu</span></h1>
        <p className="text-slate-500 max-w-xl mx-auto">Explore our authentic Sri Lankan flavors combined with contemporary craftsmanship.</p>
      </div>

      {/* Pill Filters - Inspired by middle screen */}
      <div className="flex justify-center flex-wrap gap-3">
        {(['all', 'sweet', 'savory', 'dessert'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
              filter === cat 
                ? 'bg-blue-950 text-white shadow-xl scale-105' 
                : 'bg-white text-slate-500 hover:bg-blue-50 hover:text-blue-950 border border-slate-100'
            } capitalize`}
          >
            {cat === 'all' ? 'All Treats' : cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-[3rem] p-6 custom-shadow group hover:-translate-y-2 transition-all duration-300">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4">
                 <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-blue-950 uppercase tracking-widest shadow-sm">
                   {product.category}
                 </span>
              </div>
            </div>
            
            <div className="space-y-3 px-2">
              <h3 className="text-2xl font-bold text-blue-950 leading-tight">{product.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                {product.description}
              </p>
              
              <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                <span className="text-xl font-bold text-blue-950">$12.50</span>
                <button className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
