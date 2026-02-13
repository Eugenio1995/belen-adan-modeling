import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/sonner';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Gallery />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Home;
