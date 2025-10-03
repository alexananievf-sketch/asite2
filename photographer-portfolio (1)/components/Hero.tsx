
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center bg-fixed text-center px-[5%] relative overflow-hidden" 
      style={{ backgroundImage: `linear-gradient(135deg, rgba(255, 245, 235, 0.85) 0%, rgba(255, 238, 220, 0.8) 100%), url('https://picsum.photos/id/1011/1920/1080')` }}
    >
      <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(200,113,55,0.15)_0%,transparent_70%)] rounded-full animate-float"></div>
      <div className="absolute bottom-[-30%] left-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,165,116,0.12)_0%,transparent_70%)] rounded-full animate-float-reverse"></div>
      
      <div className="relative z-10 animate-fadeInUp">
        <h1 className="font-mulish text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight text-brand-dark shadow-black/5 leading-tight">
          Захоплюю <span className="text-brand-primary">моменти,</span><br/>створюю <span className="text-brand-primary">історії</span>
        </h1>
        <p className="text-xl md:text-2xl font-normal text-brand-text-secondary mb-10 tracking-[3px] italic">
          Фотографія як мистецтво емоцій
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto my-8 animate-pulse"></div>
        <div className="mt-8 flex gap-6 justify-center flex-wrap">
          <a href="#portfolio" className="bg-gradient-to-r from-brand-primary to-brand-primary-hover text-white py-4 px-12 rounded-full font-semibold text-lg tracking-wider transition-all duration-400 shadow-xl shadow-brand-primary/40 hover:shadow-2xl hover:shadow-brand-primary/60 hover:-translate-y-1.5">
            Переглянути роботи
          </a>
          <a href="#contact" className="bg-transparent text-brand-primary py-4 px-12 rounded-full font-semibold text-lg tracking-wider transition-all duration-400 border-2 border-brand-primary hover:bg-brand-primary hover:text-white hover:-translate-y-1.5">
            Зв'язатися зі мною
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
