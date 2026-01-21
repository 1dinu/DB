
import React from 'react';
import { Page } from '../types.ts';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-24 pt-20 overflow-hidden">
      {/* Hero Section - Inspired by the leftmost screen in the reference */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] p-8 md:p-20 relative overflow-hidden custom-shadow min-h-[80vh] flex flex-col justify-center items-center text-center">
          {/* Floating Decorative Elements (Macarons) */}
          <div className="absolute top-10 left-10 w-24 h-24 animate-bounce delay-100 hidden md:block">
            <img src="https://img.icons8.com/emoji/160/macaron-emoji.png" alt="macaron" className="w-full h-full rotate-12 opacity-80" />
          </div>
          <div className="absolute bottom-20 right-10 w-32 h-32 animate-pulse hidden md:block">
            <img src="https://img.icons8.com/emoji/160/macaron-emoji.png" alt="macaron" className="w-full h-full -rotate-45 opacity-60 brightness-110" />
          </div>
          <div className="absolute top-1/4 right-20 w-16 h-16 animate-bounce delay-300 hidden md:block">
            <img src="https://img.icons8.com/emoji/160/macaron-emoji.png" alt="macaron" className="w-full h-full rotate-90 brightness-75" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl md:text-8xl font-bold text-blue-950 leading-[1.1] mb-6">
              CLOSER TO LOVE <br />
              WITH <span className="font-serif-italic text-blue-600 font-normal">every bite</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-md mx-auto mb-10 leading-relaxed">
              Indulge in the deliciousness of freshly baked treats to kickstart your mornings with joy!
            </p>
            <button 
              onClick={() => onNavigate('products')}
              className="bg-[#6B8EA9] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-900 transition-all shadow-xl active:scale-95"
            >
              Let's Explore
            </button>
          </div>
          
          <div className="mt-16 w-full max-w-lg mx-auto md:absolute md:bottom-[-5%] md:left-1/2 md:-translate-x-1/2">
            <img 
              src="https://images.unsplash.com/photo-1578985543813-689480d24f82?q=80&w=1974&auto=format&fit=crop" 
              className="rounded-t-[3rem] shadow-2xl w-full object-cover h-[300px] md:h-[400px]"
              alt="Cake close up"
            />
          </div>
        </div>
      </section>

      {/* Middle Screen Inspiration - Discover by Category & Popular items */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column - Category Discover */}
          <div className="lg:col-span-4 bg-white rounded-[3rem] p-8 custom-shadow flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-blue-950">Discover By <br /><span className="text-blue-600">Category</span></h2>
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-blue-950">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {['Cake', 'Pastry', 'Cupcake', 'Donuts'].map((cat, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-[2rem] flex flex-col items-center gap-3 hover:bg-blue-50 transition-colors cursor-pointer group">
                   <div className="w-full aspect-square bg-white rounded-2xl overflow-hidden">
                      <img src={`https://picsum.photos/seed/${cat}/200`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                   </div>
                   <span className="font-bold text-sm text-blue-950">{cat}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#D98E5F]/10 p-6 rounded-[2rem] border border-[#D98E5F]/20 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#D98E5F] uppercase tracking-wider">Everyone's Favorite</p>
                <h3 className="text-2xl font-bold text-blue-950">40% OFF</h3>
                <button className="mt-2 bg-white text-[#D98E5F] text-xs font-bold px-4 py-2 rounded-full shadow-sm">Order Now</button>
              </div>
              <div className="w-20 h-20">
                <img src="https://img.icons8.com/emoji/160/croissant-emoji.png" className="w-full h-full object-contain rotate-12" />
              </div>
            </div>
          </div>

          {/* Right Column - Popular items */}
          <div className="lg:col-span-8 bg-white rounded-[3rem] p-8 md:p-12 custom-shadow">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-blue-950">Popular <span className="text-blue-600">Bakes</span></h2>
              <button className="text-blue-600 font-bold hover:underline">View All</button>
            </div>

            <div className="space-y-6">
              {[
                { name: 'Ube Flavoured Cake', price: '$55.00', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1974&auto=format&fit=crop' },
                { name: 'German Chocolate Cake', price: '$48.00', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1974&auto=format&fit=crop' },
                { name: 'Seeni Sambol Brioche', price: '$12.00', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-4 rounded-[2.5rem] bg-slate-50/50 hover:bg-white transition-all group border border-transparent hover:border-blue-50 hover:shadow-xl">
                  <div className="w-24 h-24 rounded-3xl overflow-hidden flex-shrink-0">
                    <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-blue-950 mb-1">{item.name}</h4>
                    <div className="flex gap-2">
                       <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border border-slate-100 font-bold text-slate-400">Traditional</span>
                       <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border border-slate-100 font-bold text-slate-400 italic">Signature</span>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-3">
                    <span className="text-xl font-bold text-blue-950">{item.price}</span>
                    <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-full shadow-sm">
                       <button className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-lg">-</button>
                       <span className="font-bold text-sm">1</span>
                       <button className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Callout */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-blue-950 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Corporate <br /><span className="text-blue-400">Partnerships</span></h2>
            <p className="text-blue-100/60 text-lg mb-8 leading-relaxed">
              We provide tailored food solutions for official functions, team meetings, and corporate celebrations. 
            </p>
            <button 
              onClick={() => onNavigate('quote')}
              className="bg-white text-blue-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl active:scale-95"
            >
              Request Partnership
            </button>
          </div>
          <div className="w-full max-w-md relative z-10">
            <img src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop" className="rounded-[3rem] shadow-2xl" />
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-20 -ml-16 -mb-16"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
