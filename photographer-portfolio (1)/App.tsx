
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import { PORTFOLIO_IMAGES } from './constants';

const App: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleOpenLightbox = useCallback((index: number) => {
    setActiveImageIndex(index);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  const handleNextImage = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prevIndex) => (prevIndex! + 1) % PORTFOLIO_IMAGES.length);
    }
  }, [activeImageIndex]);

  const handlePrevImage = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prevIndex) => (prevIndex! - 1 + PORTFOLIO_IMAGES.length) % PORTFOLIO_IMAGES.length);
    }
  }, [activeImageIndex]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio onImageClick={handleOpenLightbox} />
        <Services />
        <Contact />
      </main>
      <Footer />
      {activeImageIndex !== null && (
        <Lightbox
          imageSrc={PORTFOLIO_IMAGES[activeImageIndex].src}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
          currentIndex={activeImageIndex}
          totalImages={PORTFOLIO_IMAGES.length}
        />
      )}
    </>
  );
};

export default App;
