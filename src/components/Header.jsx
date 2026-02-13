import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold uppercase tracking-tight hover:opacity-70 transition-opacity"
            style={{ fontFamily: "'Helvetica Neue', 'Arial', sans-serif" }}
          >
            Belén Adán
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm uppercase tracking-wide hover:text-purple-500 transition-colors"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm uppercase tracking-wide hover:text-purple-500 transition-colors"
            >
              {t.portfolio}
            </button>
            <button
              onClick={() => scrollToSection('measurements')}
              className="text-sm uppercase tracking-wide hover:text-purple-500 transition-colors"
            >
              {t.measurements}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm uppercase tracking-wide hover:text-purple-500 transition-colors"
            >
              {t.contact}
            </button>
          </div>

          {/* Language Toggle */}
          <Button
            onClick={toggleLanguage}
            variant="outline"
            size="sm"
            className="rounded-full border-2 hover:bg-gray-100 transition-all"
          >
            <Globe className="w-4 h-4 mr-2" />
            {language === 'es' ? 'EN' : 'ES'}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-around pb-4 pt-2 border-t border-gray-100">
          <button
            onClick={() => scrollToSection('about')}
            className="text-xs uppercase tracking-wide hover:text-purple-500 transition-colors"
          >
            {t.about}
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-xs uppercase tracking-wide hover:text-purple-500 transition-colors"
          >
            {t.portfolio}
          </button>
          <button
            onClick={() => scrollToSection('measurements')}
            className="text-xs uppercase tracking-wide hover:text-purple-500 transition-colors"
          >
            {t.measurements}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-xs uppercase tracking-wide hover:text-purple-500 transition-colors"
          >
            {t.contact}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
