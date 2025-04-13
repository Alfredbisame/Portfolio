import React from 'react';

interface Service {
  title: string;
  desc: string;
}

interface ServicesSectionProps {
  isActive: boolean;
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ isActive, services }) => {
  return (
    <section className={`min-h-screen p-8 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r text-center from-primary-500 to-accent-500 text-transparent bg-clip-text">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-dark-800 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
