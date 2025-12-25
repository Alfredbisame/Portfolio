import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, User, MessageSquare, CheckCircle, Github, Linkedin, Phone } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

interface ContactSectionProps {
  isActive: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isActive }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsInView(true), 300);
      return () => clearTimeout(timer);
    } else {
      setIsInView(false);
    }
  }, [isActive]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: '', phone: '', message: '' });
      }, 3000);
    }, 1000);
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
    hidden: { y: 20, opacity: 0 },
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
      className={`min-h-screen flex items-center justify-center p-8 transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-0 hidden'}`}
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, rgba(0, 0, 0, 0) 70%)'
      }}
    >
      <motion.div 
        className="max-w-5xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-400 text-transparent bg-clip-text animate-gradient">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-3 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white dark:bg-dark-800 p-8 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-100 dark:border-dark-700">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    className="flex flex-col items-center justify-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    className="space-y-6"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div variants={itemVariants}>
                      <label className="text-sm font-medium mb-2 flex items-center">
                        <User className="w-4 h-4 mr-2 text-primary-500" />
                        Name
                      </label>
                      <div className={`relative transition-all duration-300 ${activeField === 'name' ? 'scale-[1.02]' : ''}`}>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField(null)}
                          className="w-full px-4 py-4 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                          placeholder="Your name"
                          required
                        />
                        {activeField === 'name' && (
                          <motion.span 
                            className="absolute inset-0 -z-10 rounded-lg bg-primary-500/5 blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="text-sm font-medium mb-2 flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-primary-500" />
                        Phone Number
                      </label>
                      <div className={`relative transition-all duration-300 ${activeField === 'phone' ? 'scale-[1.02]' : ''}`}>
                        <input
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          onFocus={() => setActiveField('phone')}
                          onBlur={() => setActiveField(null)}
                          className="w-full px-4 py-4 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                          placeholder="+1234567890"
                          required
                        />
                        {activeField === 'phone' && (
                          <motion.span 
                            className="absolute inset-0 -z-10 rounded-lg bg-primary-500/5 blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="text-sm font-medium mb-2 flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2 text-primary-500" />
                        Message
                      </label>
                      <div className={`relative transition-all duration-300 ${activeField === 'message' ? 'scale-[1.02]' : ''}`}>
                        <textarea
                          rows={5}
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          onFocus={() => setActiveField('message')}
                          onBlur={() => setActiveField(null)}
                          className="w-full px-4 py-4 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                          placeholder="Tell me about your project or inquiry..."
                          required
                        ></textarea>
                        {activeField === 'message' && (
                          <motion.span 
                            className="absolute inset-0 -z-10 rounded-lg bg-primary-500/5 blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </div>
                    </motion.div>

                    <motion.button
                      type="submit"
                      variants={itemVariants}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-4 rounded-lg flex items-center justify-center group relative overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 to-accent-600 transition-all duration-300 transform translate-y-full group-hover:translate-y-0"></span>
                      <span className="relative flex items-center">
                        Send Message
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-dark-700 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">EMAIL</h4>
                  <a href="mailto:contact@example.com" className="text-lg font-medium text-primary-500 hover:text-primary-600 transition-colors flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    alfredfianyo50@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">LOCATION</h4>
                  <p className="text-lg font-medium">Achimota, Acccra , Ghana</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">CONNECT</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all"
                    >
                      <FaXTwitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-dark-700">
                <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Available for</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Freelance Projects
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Collaborations 
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Full-time Opportunities
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
            variants={itemVariants} 
            className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400"
          >
            <p className="inline-flex items-center space-x-2">
              <span>© {new Date().getFullYear()} Alfred Fianyo</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span>All rights reserved</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <a 
                href="#privacy" 
                className="hover:text-primary-500 transition-colors"
              >
                Privacy Policy
              </a>
            </p>
            <p className="mt-2">
              Built with ❤️ using <strong>React</strong>, <strong>TypeScript</strong> && <strong>Tailwind</strong>
            </p>
          </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;