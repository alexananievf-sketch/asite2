import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Дякую за ваше повідомлення! Я зв\'яжуся з вами найближчим часом.');
  };

  return (
    <section id="contact" className="py-20 px-[5%] bg-brand-soft-bg text-brand-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-center mb-4 tracking-wide text-brand-dark">
          Зв'яжіться зі мною
        </h2>
        <p className="text-center text-brand-text-secondary mb-16 text-lg italic">
          Готова відповісти на всі ваші запитання
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-8">
            <label htmlFor="name" className="block mb-2 font-medium tracking-widest text-sm uppercase text-brand-text-secondary">Ваше ім'я</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full py-4 px-5 border border-gray-300 bg-white text-brand-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="phone" className="block mb-2 font-medium tracking-widest text-sm uppercase text-brand-text-secondary">Телефон</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              className="w-full py-4 px-5 border border-gray-300 bg-white text-brand-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block mb-2 font-medium tracking-widest text-sm uppercase text-brand-text-secondary">Повідомлення (необов'язково)</label>
            <textarea 
              id="message" 
              name="message" 
              rows={6}
              className="w-full py-4 px-5 border border-gray-300 bg-white text-brand-dark rounded-xl resize-vertical min-h-[150px] focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full py-5 bg-brand-primary text-white rounded-xl font-semibold uppercase tracking-[2px] cursor-pointer transition-all duration-300 hover:bg-brand-primary-hover hover:-translate-y-1 shadow-lg shadow-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/50"
          >
            Відправити
          </button>
        </form>

        <div className="text-center mt-16 pt-12 border-t border-brand-primary/20">
          <p className="text-brand-text-secondary text-lg mb-6">
            ... або зв'яжіться напряму
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:+380123456789" className="font-semibold text-brand-dark text-xl hover:text-brand-primary transition-colors">
              +380 12 345 67 89
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white py-3 px-8 rounded-full font-semibold text-sm tracking-widest transition-all duration-400 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
