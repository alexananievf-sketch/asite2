
import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-center mb-4 tracking-wide text-brand-dark">{children}</h2>
);

const SectionSubtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-center text-gray-500 mb-16 text-lg italic">{children}</p>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-[5%] max-w-7xl mx-auto bg-gradient-to-b from-brand-light-bg to-brand-soft-bg">
      <SectionTitle>Про мене</SectionTitle>
      <SectionSubtitle>Більше 8 років створюю неповторні візуальні історії</SectionSubtitle>
      
      <div className="grid md:grid-cols-5 gap-16 items-center">
        <div 
          className="md:col-span-2 w-full h-[450px] bg-cover bg-center rounded-3xl transition-all duration-500 shadow-xl shadow-brand-primary/20 hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-brand-primary/30"
          style={{ backgroundImage: `url('https://picsum.photos/id/343/400/450')` }}
        ></div>
        <div className="md:col-span-3">
          <h3 className="font-playfair text-4xl font-semibold mb-6 text-brand-dark">
            Привіт! Я Альона
          </h3>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Професійний фотограф з Києва. Моя спеціалізація — портретна, весільна та подієва фотографія. 
            Вірю, що кожен момент унікальний і заслуговує бути збереженим у найкращому вигляді.
          </p>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Працюю з професійним обладнанням Canon та студійним світлом. Кожна фотосесія для мене — 
            це можливість розкрити індивідуальність клієнта та створити атмосферні знімки, які залишаться 
            з вами назавжди.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Мій підхід — це поєднання технічної майстерності, творчого бачення та уваги до деталей. 
            Завжди відкрита до нових ідей та експериментів.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
