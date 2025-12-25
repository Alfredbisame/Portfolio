import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/portfolioData';

interface PortfolioSectionProps {
  isActive: boolean;
  projects: Project[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  isActive,
  projects,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const getCurrentIndex = (projectIndex: number) => {
    return currentImageIndex[projectIndex] || 0;
  };

  const setCurrentIndex = (projectIndex: number, index: number) => {
    setCurrentImageIndex(prev => ({ ...prev, [projectIndex]: index }));
  };

  const nextImage = (projectIndex: number, totalImages: number) => {
    setCurrentIndex(projectIndex, (getCurrentIndex(projectIndex) + 1) % totalImages);
  };

  const prevImage = (projectIndex: number, totalImages: number) => {
    setCurrentIndex(projectIndex, (getCurrentIndex(projectIndex) - 1 + totalImages) % totalImages);
  };

  return (
    <section
      className={`min-h-screen p-8 transition-opacity duration-700 ease-in-out ${
        isActive ? 'opacity-100' : 'opacity-0 hidden'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary-500 to-accent-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, projectIndex) => {
            const currentIndex = getCurrentIndex(projectIndex);
            const totalImages = project.images.length;

            return (
              <div key={projectIndex} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <motion.div
                  className="h-full group bg-gray-50 dark:bg-dark-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: Math.min(projectIndex * 0.1, 0.5), duration: 0.4 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentIndex}
                        src={project.images[currentIndex]}
                        alt={`${project.title} - Image ${currentIndex + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>
                    
                    {/* Navigation Buttons */}
                    {totalImages > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage(projectIndex, totalImages);
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage(projectIndex, totalImages);
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}

                    {/* Image Indicators */}
                    {totalImages > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {project.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentIndex(projectIndex, idx);
                            }}
                            className={`h-1.5 rounded-full transition-all ${
                              idx === currentIndex
                                ? 'bg-white w-6'
                                : 'bg-white/50 w-1.5 hover:bg-white/75'
                            }`}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium text-sm transition-colors"
                      >
                        View Project <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
