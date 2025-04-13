import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  url?: string;
}

interface PortfolioSectionProps {
  isActive: boolean;
  projects: Project[];
}

const defaultProjects: Project[] = [
  {
    title: 'DevSync Platform',
    description:
      'A real-time collaboration platform for developers to code, review, and deploy from one unified dashboard. Integrated with GitHub and CI/CD pipelines.',
    image: '/devsync.jpeg',
    tech: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'TailwindCSS'],
    url: 'https://devsync.app',
  },
  {
    title: 'FitFlex App',
    description:
      'A fitness tracking mobile app that helps users build workout routines, track macros, and sync progress with wearables.',
    image: '/fitflex.jpeg',
    tech: ['React Native', 'Firebase', 'Expo', 'GraphQL'],
    url: 'https://fitflex.io',
  },
  {
    title: 'Ecomly E-commerce',
    description:
      'A full-featured e-commerce site with real-time inventory, payment integration, and an admin dashboard for order and product management.',
    image: '/ecomly.jpeg',
    tech: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    url: 'https://ecomly.store',
  },
  {
    title: 'Portfolio v3',
    description:
      'My latest personal portfolio built with modern tools and animations, showcasing my work and technical writing.',
    image: '/portfolio.jpeg',
    tech: ['Next.js', 'Framer Motion', 'TailwindCSS', 'TypeScript'],
    url: 'https://myportfolio.dev',
  },
  {
    title: 'EduMind LMS',
    description:
      'A learning management system designed for online instructors to manage classes, quizzes, and student analytics.',
    image: '/edumind.jpeg',
    tech: ['Django', 'React', 'Redis', 'Docker'],
    url: 'https://edumind.io',
  },
  {
    title: 'TaskForge',
    description:
      'A productivity app for managing projects, sprints, and team communication using Kanban boards and smart notifications.',
    image: '/taskforge.png',
    tech: ['Vue.js', 'Node.js', 'MySQL', 'Tailwind'],
    url: 'https://taskforge.app',
  },
];

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  isActive,
  projects = defaultProjects,
}) => {
  // Force all projects to be visible
  const displayProjects = [...defaultProjects];
  
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
          {displayProjects.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <motion.div
                className="h-full group bg-gray-50 dark:bg-dark-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: Math.min(index * 0.1, 0.5), duration: 0.4 }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
