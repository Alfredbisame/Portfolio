import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Lightbulb, Smartphone, Users, Zap } from 'lucide-react';
import CustomServiceModal from './CustomServiceModal';

interface Service {
  title: string;
  desc: string;
}

interface ServicesSectionProps {
  isActive: boolean;
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ isActive, services }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsInView(true), 300);
      return () => clearTimeout(timer);
    } else {
      setIsInView(false);
    }
  }, [isActive]);

  // Map service titles to icons
  const getServiceIcon = (title: string) => {
    switch (title) {
      case 'Full Stack Development':
        return <Code className="w-10 h-10" />;
      case 'Cloud Architecture':
        return <Cloud className="w-10 h-10" />;
      case 'Technical Consultation':
        return <Lightbulb className="w-10 h-10" />;
      case 'Mobile Development':
        return <Smartphone className="w-10 h-10" />;
      case 'Team Leadership':
        return <Users className="w-10 h-10" />;
      case 'Performance Optimization':
        return <Zap className="w-10 h-10" />;
      default:
        return <Code className="w-10 h-10" />;
    }
  };

  // Get a brief example for each service
  const getServiceExample = (title: string) => {
    switch (title) {
      case 'Full Stack Development':
        return 'React, Node.js, TypeScript, MongoDB';
      case 'Cloud Architecture':
        return 'AWS, Azure, GCP, Serverless';
      case 'Technical Consultation':
        return 'System design, Architecture reviews';
      case 'Mobile Development':
        return 'React Native, Flutter, iOS, Android';
      case 'Team Leadership':
        return 'Agile, Scrum, Code reviews';
      case 'Performance Optimization':
        return 'Lazy loading, Code splitting, Caching';
      default:
        return '';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section 
      className={`min-h-screen p-8 transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-0 hidden'}`}
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, rgba(0, 0, 0, 0) 70%)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-400 text-transparent bg-clip-text animate-gradient">
            Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Delivering cutting-edge solutions with a focus on performance, scalability, and user experience
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-100 dark:border-dark-700 h-full flex flex-col transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-400/10 to-accent-400/10 text-primary-500 dark:text-primary-400">
                    {getServiceIcon(service.title)}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-400/10 text-primary-500 dark:text-primary-400">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{service.desc}</p>
                
                <div className="mt-auto">
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-dark-700 p-3 rounded-lg">
                    {getServiceExample(service.title)}
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-primary-500 dark:text-primary-400 font-medium text-sm">Learn more</span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-500/10 text-primary-500 dark:text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {hoveredIndex === index && (
                  <motion.div 
                    className="absolute -z-10 inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
          >
            Request Custom Service
          </motion.button>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Need something specific? Let's discuss your unique requirements
          </p>
        </motion.div>
        
        {/* Custom Service Modal */}
        <CustomServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
      
      {/* Decorative elements */}
      <div className="hidden lg:block absolute top-1/4 left-10 w-24 h-24 border border-primary-400/20 rounded-full animate-pulse"></div>
      <div className="hidden lg:block absolute bottom-1/4 right-10 w-32 h-32 border border-accent-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="hidden lg:block absolute top-1/3 right-1/4 w-16 h-16 border border-primary-400/10 rounded-full animate-spin"></div>
    </section>
  );
};

export default ServicesSection;
