import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Sparkles } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div 
                  className="h-64 rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #88a2ff 0%, #b7fbff 100%)' }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white opacity-30">
                      <p className="text-xs uppercase tracking-widest font-mono">Image 1</p>
                    </div>
                  </div>
                </div>
                <div 
                  className="h-64 rounded-lg mt-8"
                  style={{ background: 'linear-gradient(135deg, #ffe03d 0%, #f6fd87 100%)' }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-700 opacity-30">
                      <p className="text-xs uppercase tracking-widest font-mono">Image 2</p>
                    </div>
                  </div>
                </div>
                <div 
                  className="h-64 rounded-lg col-span-2"
                  style={{ background: 'linear-gradient(135deg, #ff965a 0%, #ffd1e7 100%)' }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white opacity-30">
                      <p className="text-xs uppercase tracking-widest font-mono">Image 3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6" style={{ color: '#d987ff' }} />
                <h2 
                  className="text-4xl lg:text-5xl font-semibold"
                  style={{ fontFamily: "'Helvetica Neue', 'Arial', sans-serif" }}
                >
                  {t.title}
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  {t.description}
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  {t.experience}
                </p>
              </div>

              {/* Stats Quick View */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 rounded-lg bg-gray-50">
                  <p className="text-3xl font-bold" style={{ color: '#d987ff' }}>26</p>
                  <p className="text-xs uppercase tracking-wide text-gray-600 mt-1">
                    {translations[language].stats.age}
                  </p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50">
                  <p className="text-3xl font-bold" style={{ color: '#88a2ff' }}>162cm</p>
                  <p className="text-xs uppercase tracking-wide text-gray-600 mt-1">
                    {translations[language].stats.height}
                  </p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50">
                  <p className="text-3xl font-bold" style={{ color: '#ff965a' }}>BA</p>
                  <p className="text-xs uppercase tracking-wide text-gray-600 mt-1">Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
