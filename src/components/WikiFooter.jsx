import React from 'react';
import { Facebook, Instagram, Youtube, MessageSquare } from 'lucide-react';
import { socialLinks } from '../mock.js';

export const WikiFooter = () => {
  const getIcon = (iconName) => {
    const iconMap = {
      'facebook': Facebook,
      'instagram': Instagram,
      'youtube': Youtube,
      'message-square': MessageSquare
    };
    const IconComponent = iconMap[iconName] || MessageSquare;
    return <IconComponent size={24} />;
  };

  return (
    <footer className="wiki-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">CucsiAO</h3>
          <p className="footer-description">
            Servidor de Argentum Online con temática de fantasía medieval épica.
            Únete a la aventura en las tierras de Cypher.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Nuestras Redes Sociales</h4>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                {getIcon(social.icon)}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 CucsiAO. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};