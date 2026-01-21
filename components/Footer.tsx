
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-xl font-serif font-bold mb-4 tracking-wider">DROSELLE BAKES</h3>
            <p className="text-blue-200/80 max-w-xs">
              Redefining Sri Lankan traditional flavors with a modern twist. Perfect for your celebrations and corporate events.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Products</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-blue-200/80">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                No. 12, Homagama
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                077 790 5840
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                info@dd.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-400/60">
          <p>© {new Date().getFullYear()} Droselle Bakes. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
