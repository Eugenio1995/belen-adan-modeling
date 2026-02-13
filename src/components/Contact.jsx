import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error(t.form.error);
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    toast.success(t.form.success);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t.info.email,
      value: 'belenadan.modelo@gmail.com',
      href: 'mailto:belenadan.modelo@gmail.com',
      color: '#d987ff',
    },
    {
      icon: Phone,
      label: t.info.phone,
      value: '+54 11 5110 2534',
      href: 'tel:+5401151102534',
      color: '#88a2ff',
    },
    {
      icon: MapPin,
      label: t.info.location,
      value: 'Buenos Aires, Argentina',
      href: null,
      color: '#ff965a',
    },
    {
      icon: Instagram,
      label: t.info.social,
      value: '@beluadan',
      href: 'https://instagram.com/beluadan',
      color: '#ff84e4',
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-50">
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div>
            {/* Contact Form */}
            {/* <Card className="border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.name}
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder={t.form.name}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.email}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder={t.form.email}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.subject}
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full"
                      placeholder={t.form.subject}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.message}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[150px]"
                      placeholder={t.form.message}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6 text-xs uppercase tracking-widest font-mono transition-all"
                  >
                    {t.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card> */}

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card 
                    key={index}
                    className="border-2 hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${item.color}20` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: item.color }} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs uppercase tracking-wider text-gray-600 mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lg font-semibold hover:underline"
                              style={{ color: item.color }}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-lg font-semibold">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Social Media Links */}
              <Card className="border-2 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-center">
                    {language === 'es' ? 'Sígueme en redes' : 'Follow me on social media'}
                  </h3>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://instagram.com/beluadan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                    >
                      <Instagram className="w-6 h-6" style={{ color: '#ff84e4' }} />
                    </a>
                    <a
                      href="https://tiktok.com/@beluadan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                    >
                      <svg className="w-6 h-6" style={{ color: '#d987ff' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
