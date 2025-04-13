import React, { useEffect, useState } from 'react';
import { Download, Github, Linkedin, Mail, Code, Zap, Sparkles } from 'lucide-react';

interface HomeSectionProps {
  isActive: boolean;
}

const HomeSection: React.FC<HomeSectionProps> = ({ isActive }) => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    if (isActive) {
      setLoaded(true);
    }
  }, [isActive]);

  return (
    <section 
      className={`min-h-screen flex items-center justify-center p-8 transition-all duration-700 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
      }`}
    >
      <div className="relative z-10 text-center max-w-4xl">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '8s' }}></div>
          <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl animate-pulse"
               style={{ animationDuration: '10s' }}></div>
        </div>
        
        {/* Profile image with animated border */}
        <div className="relative w-48 h-48 md:w-48 md:h-52 mx-auto mb-10 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-accent-500 to-primary-600 animate-spin opacity-70"
               style={{ animationDuration: '8s' }}></div>
          <div className="absolute inset-1 rounded-full bg-white dark:bg-dark-900"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden transform group-hover:scale-105 transition-transform duration-500 shadow-lg">
            <img
              src="/self.jpg"
              alt="Alfred Fianyo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        
        {/* Name with animated text reveal */}
        <div className="overflow-hidden mb-4">
          <h1 
            className={`text-4xl md:text-7xl font-bold bg-gradient-to-r from-primary-400 via-accent-500 to-primary-500 text-transparent bg-clip-text animate-gradient transform ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } transition-all duration-1000`}
          >
            Alfred Fianyo
          </h1>
        </div>
        
        {/* Title with animated text reveal */}
        <div className="overflow-hidden mb-8">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className={`w-5 h-5 text-accent-500 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            } transition-all duration-1000 delay-300`} />
            <p 
              className={`text-xl md:text-2xl text-gray-700 dark:text-gray-300 ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } transition-all duration-1000 delay-200`}
            >
              Senior Software Engineer
            </p>
            <Sparkles className={`w-5 h-5 text-accent-500 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            } transition-all duration-1000 delay-300`} />
          </div>
        </div>
        
        {/* Social links with staggered animation */}
        <div className="flex justify-center gap-6 mb-12">
          {[
            { icon: <Github className="w-6 h-6" />, delay: 400, color: 'hover:text-gray-800 dark:hover:text-white', href: '#' },
            { icon: <Linkedin className="w-6 h-6" />, delay: 500, color: 'hover:text-blue-600', href: '#' },
            { icon: <Mail className="w-6 h-6" />, delay: 600, color: 'hover:text-red-500', href: '#' },
            { icon: <Code className="w-6 h-6" />, delay: 700, color: 'hover:text-green-500', href: '#' },
            { icon: <Zap className="w-6 h-6" />, delay: 800, color: 'hover:text-yellow-500', href: '#' }
          ].map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className={`p-4 rounded-full bg-gray-100/80 dark:bg-dark-800/80 backdrop-blur-sm ${item.color} transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${item.delay}ms` }}
              aria-label={`Social link ${index + 1}`}
            >
              {item.icon}
            </a>
          ))}
        </div>
        
        {/* Resume button with animated gradient border */}
        <div 
          className={`relative group ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000 delay-900`}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 via-accent-500 to-primary-600 rounded-full opacity-70 group-hover:opacity-100 blur-sm group-hover:blur transition-all duration-300"></div>
          <button className="relative bg-white dark:bg-dark-800 text-primary-500 dark:text-primary-400 font-medium px-10 py-4 rounded-full flex items-center gap-3 mx-auto hover:scale-105 transition-all duration-300 shadow-xl">
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </button>
        </div>
        
        {/* Animated typing text */}
        <div 
          className={`mt-12 text-sm text-gray-500 dark:text-gray-400 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000 delay-1000`}
        >
          <p className="typewriter-text">Building innovative solutions with modern technologies</p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
