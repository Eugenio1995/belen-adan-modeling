import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white z-0"></div>
      
      <div className="container mx-auto px-4 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6 lg:space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-mono uppercase tracking-widest text-gray-600">
                {t.location}
              </p>
              <h1 
                className="font-display text-6xl lg:text-8xl font-extrabold uppercase leading-none tracking-tight"
                style={{ fontFamily: "'Helvetica Neue', 'Arial', sans-serif" }}
              >
                {t.title}
              </h1>
              <p 
                className="text-lg lg:text-xl uppercase tracking-wider font-medium"
                style={{ fontFamily: "'Helvetica Neue', 'Arial', sans-serif", color: '#d987ff' }}
              >
                {t.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('portfolio')}
                className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-6 text-xs uppercase tracking-widest font-mono transition-all"
              >
                {t.cta}
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white rounded-full px-8 py-6 text-xs uppercase tracking-widest font-mono transition-all"
              >
                {t.contact}
              </Button>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative">
            <div 
              className="w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #ffd1e7 0%, #d987ff 100%)' }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white opacity-30">
                  <p className="text-sm uppercase tracking-widest font-mono">Hero Image</p>
                  <p className="text-xs mt-2">500x600px</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div 
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg opacity-20"
              style={{ background: '#d987ff' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
