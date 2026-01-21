
import React, { useState } from 'react';
import { Page } from '../types.ts';
import Logo from './Logo.tsx';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Products', value: 'products' },
    { label: 'Gallery', value: 'gallery' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNav = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl border border-white/40 rounded-full custom-shadow px-6 py-3">
        <div className="flex justify-between items-center h-12">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleNav('home')}
          >
            <Logo className="h-10" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  currentPage === item.value 
                    ? 'bg-blue-950 text-white shadow-md' 
                    : 'text-slate-600 hover:bg-blue-50 hover:text-blue-950'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="w-px h-6 bg-slate-200 mx-2"></div>
            <button
              onClick={() => handleNav('quote')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              Get a Quotation
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-blue-900 rounded-full bg-slate-100 transition-colors"
            >
              {isOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white rounded-[2rem] border border-blue-50 custom-shadow p-6 space-y-3 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNav(item.value)}
              className={`block w-full text-left px-6 py-3 rounded-2xl text-base font-bold transition-colors ${
                currentPage === item.value ? 'bg-blue-950 text-white' : 'text-slate-600 hover:bg-blue-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('quote')}
            className="block w-full text-center mt-4 bg-blue-600 text-white px-4 py-4 rounded-2xl font-bold shadow-lg"
          >
            Get a Quotation
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
