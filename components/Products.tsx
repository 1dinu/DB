
import React, { useState } from 'react';
import { PRODUCTS } from '../constants.tsx';
import { Product } from '../types';

const Products: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'sweet' | 'savory' | 'dessert'>('all');

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold text-blue-950 mb-6">Our Menu</h1>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Explore our range of traditional favorites and modern creations. Each item is crafted with love and the finest ingredients.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {(['all', 'sweet', 'savory', 'dessert'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat 
                  ? 'bg-blue-900 text-white shadow-lg' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-900'
              } capitalize`}
            >
              {cat === 'all' ? 'View All' : `${cat}s`}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group flex flex-col">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 shadow-md border border-blue-50">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-serif font-bold text-blue-950">{product.name}</h3>
                <span className="bg-blue-100 text-blue-900 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-slate-400">
          No products found in this category. Check back soon!
        </div>
      )}
    </div>
  );
};

export default Products;
