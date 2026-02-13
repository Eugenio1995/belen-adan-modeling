import React from 'react';
import { Scroll } from 'lucide-react';

export const WikiHero = () => {
  return (
    <section className="wiki-hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <Scroll className="hero-icon" size={80} />
        <h1 className="hero-title">Wiki CucsiAO</h1>
        <p className="hero-subtitle">
          Guía completa del mundo medieval épico de CucsiAO
        </p>
        <div className="hero-scroll-indicator">
          <span>Explora el manual</span>
        </div>
      </div>
    </section>
  );
};