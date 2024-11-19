import React from 'react';
import { MessageCircle, Twitter, Instagram, Youtube, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img 
            src="https://i.ibb.co/VxKN3Mj/olimpia-logo.png"
            alt="Olimpia Logo" 
            className="h-40 w-40 object-contain mb-4"
          />
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
            Tricampeón de América y Campeón del Mundo
          </h2>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="flex gap-6 mb-4">
            <a href="#" className="hover:text-gray-400 transition-colors bg-gray-800 p-3 rounded-full">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors bg-gray-800 p-3 rounded-full">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors bg-gray-800 p-3 rounded-full">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors bg-gray-800 p-3 rounded-full">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors bg-gray-800 p-3 rounded-full">
              <Send className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">© 2024 Club Olimpia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;