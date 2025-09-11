import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { navItems, heroData, contactData } from '../data/data';
import { CONTACT_EMAIL } from '../utils/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-200 dark:bg-slate-900 text-slate-600 dark:text-slate-400 py-12 transition-colors duration-300 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {heroData.name}
            </h3>
            <p className="text-slate-500 dark:text-slate-500 leading-relaxed">
              AI & Machine Learning Engineer
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white">Quick Links</h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block w-full md:w-auto text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center justify-center md:justify-start space-x-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-200"
              >
                <Mail size={18} />
                <span>{CONTACT_EMAIL}</span>
              </a>
            </div>
            <div className="flex space-x-4 pt-4 justify-center md:justify-start">
              <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-300 dark:bg-slate-800 text-slate-700 dark:text-white rounded-lg flex items-center justify-center hover:bg-slate-400 dark:hover:bg-slate-700 transform hover:scale-110 transition-all duration-200">
                <Github size={20} />
              </a>
              <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-300 dark:bg-slate-800 text-slate-700 dark:text-white rounded-lg flex items-center justify-center hover:bg-slate-400 dark:hover:bg-slate-700 transform hover:scale-110 transition-all duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-300 dark:border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <p>
              © {currentYear} {heroData.name}. All rights reserved.
            </p>
            <p className="flex items-center">
              Made with <Heart className="mx-1 text-red-500" size={16} /> and lots of AI research
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;