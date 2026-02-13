import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "'Helvetica Neue', 'Arial', sans-serif" }}
              >
                BELÉN ADÁN
              </h3>
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                {translations[language].hero.subtitle}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                {language === 'es' ? 'Enlaces' : 'Links'}
              </h4>
              <div className="space-y-2">
                <a href="#about" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {translations[language].nav.about}
                </a>
                <a href="#portfolio" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {translations[language].nav.portfolio}
                </a>
                <a href="#measurements" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {translations[language].nav.measurements}
                </a>
                <a href="#contact" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {translations[language].nav.contact}
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                {translations[language].nav.contact}
              </h4>
              <div className="space-y-3">
                <a 
                  href="mailto:belenadan.modelo@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  belenadan.modelo@gmail.com
                </a>
                <a 
                  href="https://instagram.com/beluadan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @beluadan
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Belén Adán. {t.rights}
            </p>
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              {t.portfolio}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
