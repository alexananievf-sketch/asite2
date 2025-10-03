import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-brand-text-primary font-medium text-[1.05rem] tracking-wide transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary after:transition-all after:duration-300 hover:text-brand-primary hover:after:w-full"
  >
    {children}
  </a>
);

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void }> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="text-white text-2xl font-semibold tracking-wider hover:text-brand-primary transition-colors duration-300">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed top-0 w-full bg-[rgba(255,251,247,0.97)] py-4 px-[5%] z-50 shadow-md backdrop-blur-md flex justify-between items-center">
        <a href="#hero" className="font-playfair text-xl md:text-2xl font-semibold text-brand-dark tracking-wider transition-colors duration-300 hover:text-brand-primary">
          Альона Ананьєва
        </a>
        <ul className="hidden md:flex list-none gap-10 items-center">
          <li><NavLink href="#about">Про мене</NavLink></li>
          <li><NavLink href="#portfolio">Портфоліо</NavLink></li>
          <li><NavLink href="#services">Послуги</NavLink></li>
          <li>
            <a href="#contact" className="bg-gradient-to-r from-brand-primary to-brand-primary-hover text-white py-3 px-8 rounded-full font-semibold text-sm tracking-widest transition-all duration-400 shadow-lg shadow-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/50 hover:-translate-y-1">
              Забронювати
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Open menu" className="p-2 space-y-1.5">
            <span className="block w-6 h-0.5 bg-brand-dark"></span>
            <span className="block w-6 h-0.5 bg-brand-dark"></span>
            <span className="block w-6 h-0.5 bg-brand-dark"></span>
          </button>
        </div>
      </nav>
      
      {isMenuOpen && (
        <div className="fixed inset-0 bg-brand-dark/95 z-[60] flex flex-col items-center justify-center text-center backdrop-blur-sm animate-fadeIn">
          <button onClick={toggleMenu} className="absolute top-6 right-[5%] text-white text-5xl hover:text-brand-primary transition-transform duration-300 hover:rotate-90" aria-label="Close menu">
             &times;
          </button>
          <ul className="flex flex-col gap-8">
            <li><MobileNavLink href="#about" onClick={toggleMenu}>Про мене</MobileNavLink></li>
            <li><MobileNavLink href="#portfolio" onClick={toggleMenu}>Портфоліо</MobileNavLink></li>
            <li><MobileNavLink href="#services" onClick={toggleMenu}>Послуги</MobileNavLink></li>
            <li><MobileNavLink href="#contact" onClick={toggleMenu}>Контакти</MobileNavLink></li>
          </ul>
          <div className="mt-12 pt-8 w-48 border-t border-white/20 text-white flex flex-col items-center gap-4">
            <a href="tel:+380123456789" className="text-lg tracking-wider hover:text-brand-primary transition-colors duration-300">+380 12 345 67 89</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg hover:text-brand-primary transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              Instagram
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
