
import React, { useEffect } from 'react';

interface LightboxProps {
  imageSrc: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalImages: number;
}

const Lightbox: React.FC<LightboxProps> = ({ imageSrc, onClose, onNext, onPrev, currentIndex, totalImages }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div 
      className="fixed inset-0 bg-black/95 z-[100] flex justify-center items-center animate-fadeIn"
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-10 text-white text-5xl cursor-pointer bg-transparent border-none transition-all duration-300 hover:text-brand-primary hover:rotate-90 z-[102]"
        onClick={onClose}
      >
        &times;
      </button>

      <button
        className="absolute top-1/2 left-5 -translate-y-1/2 text-white text-4xl bg-white/10 border-none w-14 h-14 rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center hover:bg-brand-primary/80 hover:scale-110 z-[102]"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        &#8249;
      </button>

      <div className="relative max-w-[90%] max-h-[90vh] flex items-center justify-center animate-zoomIn" onClick={(e) => e.stopPropagation()}>
        <img 
          src={imageSrc} 
          alt="Enlarged portfolio view" 
          className="max-w-full max-h-[90vh] object-contain rounded-2xl" 
        />
      </div>

      <button
        className="absolute top-1/2 right-5 -translate-y-1/2 text-white text-4xl bg-white/10 border-none w-14 h-14 rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center hover:bg-brand-primary/80 hover:scale-110 z-[102]"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        &#8250;
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-base bg-black/50 py-2 px-6 rounded-full">
        {currentIndex + 1} / {totalImages}
      </div>
    </div>
  );
};

// A simple fade-in animation for the lightbox background
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease;
  }
`;

const StyleInjector: React.FC = () => <style>{animationStyles}</style>;

const LightboxWithStyles: React.FC<LightboxProps> = (props) => (
  <>
    <StyleInjector />
    <Lightbox {...props} />
  </>
);


export default LightboxWithStyles;
