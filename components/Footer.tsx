
import React from 'react';
import Logo from './Logo.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 pb-8">
      <div className="bg-blue-950 rounded-[4rem] text-white p-12 md:p-20 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
          <div className="space-y-6">
            <Logo light className="h-12" />
            <p className="text-blue-100/40 text-sm leading-relaxed max-w-xs">
              Hand-crafted Sri Lankan traditional foods presented in a contemporary style for all your celebrations.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-3 text-blue-100/60 text-sm font-medium">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Reach Out</h4>
            <ul className="space-y-4 text-blue-100/60 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-xl bg-blue-900 flex items-center justify-center text-blue-400">📍</span>
                <span>No. 12, Homagama, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-blue-900 flex items-center justify-center text-blue-400">📞</span>
                <span>077 790 5840</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-blue-900 flex items-center justify-center text-blue-400">✉️</span>
                <span>info@dd.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-blue-100/20 tracking-widest uppercase relative z-10">
          <p>© {new Date().getFullYear()} Droselle Bakes. Crafting with Love.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">IG</a>
            <a href="#" className="hover:text-white transition-colors">FB</a>
            <a href="#" className="hover:text-white transition-colors">WA</a>
          </div>
        </div>
        
        {/* Decorative corner blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
      </div>
    </footer>
  );
};

export default Footer;
