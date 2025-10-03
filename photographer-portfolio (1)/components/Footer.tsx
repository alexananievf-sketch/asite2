
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 text-center py-8 px-[5%] text-sm">
      <p className="mb-2">&copy; 2025 Альона Ананьєва. Всі права захищені.</p>
      <p>
        Email: <a href="mailto:photo@example.com" className="text-brand-primary transition-colors hover:text-brand-primary-hover">photo@example.com</a> | 
        Телефон: <a href="tel:+380123456789" className="text-brand-primary transition-colors hover:text-brand-primary-hover">+380 12 345 67 89</a>
      </p>
    </footer>
  );
};

export default Footer;
