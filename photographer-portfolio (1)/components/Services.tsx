
import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<Service> = ({ icon, title, description, price }) => (
  <div className="p-10 bg-gray-50 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-200">
    <div className="text-5xl mb-6 text-brand-primary">{icon}</div>
    <h3 className="text-2xl font-medium mb-4 text-brand-dark">{title}</h3>
    <p className="text-gray-500 mb-6 leading-relaxed">{description}</p>
    <div className="text-3xl font-semibold text-brand-primary mt-4">{price}</div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-[5%] max-w-7xl mx-auto bg-white">
      <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-center mb-4 tracking-wide text-brand-dark">
        Послуги
      </h2>
      <p className="text-center text-gray-500 mb-16 text-lg italic">
        Професійна фотозйомка для будь-яких подій
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
