import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Card, CardContent } from './ui/card';
import { Ruler, User, Eye, Palette } from 'lucide-react';

const Stats = () => {
  const { language } = useLanguage();
  const t = translations[language].stats;

  const measurements = [
    { label: t.height, value: '162 cm', icon: Ruler, color: '#d987ff' },
    { label: t.bust, value: '82 cm', icon: Ruler, color: '#88a2ff' },
    { label: t.waist, value: '68 cm', icon: Ruler, color: '#ff965a' },
    { label: t.hips, value: '95 cm', icon: Ruler, color: '#78d692' },
  ];

  const details = [
    { label: t.shoes, value: '35/36', icon: User, color: '#ffe03d' },
    { label: t.shirt, value: '38 / SMALL', icon: User, color: '#ff84e4' },
    { label: t.trousers, value: '36/38', icon: User, color: '#b7fbff' },
  ];

  const features = [
    { label: t.eyes, value: t.eyesColor, icon: Eye, color: '#88a2ff' },
    { label: t.hair, value: t.hairColor, icon: Palette, color: '#d1903a' },
    { label: t.age, value: `26 ${t.years}`, icon: User, color: '#d987ff' },
  ];

  return (
    <section id="measurements" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 
              className="text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: "'Helvetica Neue', 'Arial', sans-serif" }}
            >
              {t.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-300 mx-auto mt-6"></div>
          </div>

          {/* Main Measurements */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {measurements.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="border-2 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                    </div>
                    <p className="text-2xl font-bold mb-2" style={{ color: item.color }}>
                      {item.value}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-gray-600">
                      {item.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Secondary Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Clothing Sizes */}
            <Card className="border-2 bg-gray-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {language === 'es' ? 'Tallas' : 'Sizes'}
                </h3>
                <div className="space-y-4">
                  {details.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-4 bg-white rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${item.color}20` }}
                          >
                            <Icon className="w-5 h-5" style={{ color: item.color }} />
                          </div>
                          <span className="text-sm uppercase tracking-wide text-gray-600">
                            {item.label}
                          </span>
                        </div>
                        <span className="font-semibold">{item.value}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Physical Features */}
            <Card className="border-2 bg-gray-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {language === 'es' ? 'Características' : 'Features'}
                </h3>
                <div className="space-y-4">
                  {features.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-4 bg-white rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${item.color}20` }}
                          >
                            <Icon className="w-5 h-5" style={{ color: item.color }} />
                          </div>
                          <span className="text-sm uppercase tracking-wide text-gray-600">
                            {item.label}
                          </span>
                        </div>
                        <span className="font-semibold">{item.value}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
