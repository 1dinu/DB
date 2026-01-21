
import React from 'react';
import { Page } from '../types.ts';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Delicious Baked Goods"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-blue-950/40 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
          <span className="text-blue-300 font-semibold tracking-widest mb-4 uppercase">Est. 2024 • Homagama</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 max-w-2xl leading-tight">
            Traditional Flavors, <br />
            <span className="text-blue-300">Modern Soul.</span>
          </h1>
          <p className="text-xl text-blue-50/90 mb-10 max-w-lg leading-relaxed">
            Experience the rich heritage of Sri Lankan sweets and savories reimagined for the contemporary palate. Perfect for celebrations that deserve something special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('quote')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-blue-600/20 text-center"
            >
              Get a Quotation
            </button>
            <button 
              onClick={() => onNavigate('products')}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all text-center"
            >
              Explore Products
            </button>
          </div>
        </div>
      </section>

      {/* Concept & Brand Intro */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif font-bold text-blue-950 leading-tight">
            Our Concept: The Art of Fusion
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
          <p className="text-lg text-slate-600 leading-relaxed">
            Droselle Bakes was born from a passion to preserve Sri Lanka's culinary heritage while elevating it through modern baking techniques. We believe that tradition shouldn't stay in the past—it should be celebrated daily.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            From our signature Watalappam-inspired cakes to our modern take on the classic Kokis, every bite is a tribute to our roots and a toast to the future.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/seed/food1/400/500" className="rounded-2xl shadow-lg mt-8" alt="Food detail" />
          <img src="https://picsum.photos/seed/food2/400/500" className="rounded-2xl shadow-lg" alt="Bakery detail" />
        </div>
      </section>

      {/* Services Highlight */}
      <section className="bg-blue-50/50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-blue-950 mb-4">Our Specialties</h2>
            <p className="text-slate-600">Tailored solutions for every occasion</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Custom Cakes', 
                desc: 'Bespoke designs for birthdays, weddings, and anniversaries with unique fusion flavors.',
                icon: '🎂'
              },
              { 
                title: 'Traditional Sweets', 
                desc: 'Artisanal Kokis, Kavum, and sweets made with premium ingredients and elegant packaging.',
                icon: '🍯'
              },
              { 
                title: 'Corporate Catering', 
                desc: 'Reliable food partnership for office meetings, official functions, and large-scale corporate events.',
                icon: '🤝'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-blue-50 hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-blue-950">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-blue-700 font-semibold hover:text-blue-900 flex items-center gap-2"
                >
                  Learn More <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto px-4 text-center">
        <div className="bg-blue-950 rounded-[3rem] py-20 px-8 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-900 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-slate-900 rounded-full blur-3xl opacity-50" />
          
          <h2 className="text-4xl font-serif font-bold mb-6 relative z-10">Planning an Event?</h2>
          <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto relative z-10">
            Let us help you create a memorable experience with our curated menus. Request a customized quotation today.
          </p>
          <button 
            onClick={() => onNavigate('quote')}
            className="bg-white text-blue-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl shadow-black/20 relative z-10"
          >
            Get a Free Quotation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
