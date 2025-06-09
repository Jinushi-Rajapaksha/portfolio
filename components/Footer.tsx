'use client';

import { Heart } from 'lucide-react';
import { Dancing_Script } from 'next/font/google';

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="py-8 bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a
              href="#hero"
              onClick={(e) => handleScroll(e, 'hero')}
              className={`${dancing.className} text-2xl text-white hover:text-blue-400 transition-colors`}
            >
              Jinushi Rajapaksha
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <nav>
              <ul className="flex flex-wrap justify-center gap-6">
                {['about', 'skills', 'projects', 'contact'].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      onClick={(e) => handleScroll(e, section)}
                      className="hover:text-white transition-colors"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="flex items-center justify-center text-sm">
            <span>© {currentYear} Jinushi Rajapaksha. All rights reserved. Made with</span>
            <Heart className="mx-1 text-red-500" size={16} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;