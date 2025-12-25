import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';

interface CustomServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomServiceModal: React.FC<CustomServiceModalProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    serviceType: '',
    description: '',
    budget: '',
    timeline: '',
  });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format service type for display
    const getServiceTypeLabel = (value: string) => {
      const labels: { [key: string]: string } = {
        'web-development': 'Web Development',
        'mobile-development': 'Mobile Development',
        'cloud-architecture': 'Cloud Architecture',
        'consultation': 'Technical Consultation',
        'other': 'Other'
      };
      return labels[value] || value;
    };

    // Format budget for display
    const getBudgetLabel = (value: string) => {
      const labels: { [key: string]: string } = {
        'under-5k': 'Under $5,000',
        '5k-10k': '$5,000 - $10,000',
        '10k-25k': '$10,000 - $25,000',
        '25k-50k': '$25,000 - $50,000',
        '50k-plus': '$50,000+'
      };
      return labels[value] || value || 'Not specified';
    };

    // Format timeline for display
    const getTimelineLabel = (value: string) => {
      const labels: { [key: string]: string } = {
        'asap': 'ASAP',
        '1-month': '1 Month',
        '2-3-months': '2-3 Months',
        '3-6-months': '3-6 Months',
        '6-plus-months': '6+ Months'
      };
      return labels[value] || value || 'Not specified';
    };

    // Format message for WhatsApp
    const whatsappMessage = `*Custom Service Request*

*Name:* ${formState.name}
*Phone:* ${formState.phone}
*Service Type:* ${getServiceTypeLabel(formState.serviceType)}
*Budget:* ${getBudgetLabel(formState.budget)}
*Timeline:* ${getTimelineLabel(formState.timeline)}

*Project Description:*
${formState.description}

---
This message was sent from my portfolio website.`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '233554572904';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, '_blank');

    // Show success state
    setIsSubmitted(true);
    
    // Reset form and close after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        phone: '',
        serviceType: '',
        description: '',
        budget: '',
        timeline: '',
      });
      onClose();
    }, 3000);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.8,
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-white dark:bg-dark-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-accent-400/10 rounded-2xl"></div>
              
              {/* Close button */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-red-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="relative p-8 md:p-10">
                {/* Header */}
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center mb-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.2,
                    }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-400/20 to-accent-400/20 mb-4"
                  >
                    <Sparkles className="w-8 h-8 text-primary-500" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-400 text-transparent bg-clip-text">
                    Request Custom Service
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Tell us about your project and we'll get back to you
                  </p>
                </motion.div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className="flex flex-col items-center justify-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          delay: 0.1,
                        }}
                      >
                        <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        Request Submitted!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-center max-w-md">
                        Your request has been sent to WhatsApp. We'll get back to you as soon as possible!
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Name Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <label className="text-sm font-medium mb-2 flex items-center">
                          <User className="w-4 h-4 mr-2 text-primary-500" />
                          Name
                        </label>
                        <div className={`relative transition-all duration-300 ${activeField === 'name' ? 'scale-[1.01]' : ''}`}>
                          <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            onFocus={() => setActiveField('name')}
                            onBlur={() => setActiveField(null)}
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
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

                      {/* Phone Number Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25, type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <label className="text-sm font-medium mb-2 flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-primary-500" />
                          Phone Number
                        </label>
                        <div className={`relative transition-all duration-300 ${activeField === 'phone' ? 'scale-[1.01]' : ''}`}>
                          <input
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            onFocus={() => setActiveField('phone')}
                            onBlur={() => setActiveField(null)}
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
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

                      {/* Service Type Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <label className="text-sm font-medium mb-2 flex items-center">
                          <Sparkles className="w-4 h-4 mr-2 text-primary-500" />
                          Service Type
                        </label>
                        <div className={`relative transition-all duration-300 ${activeField === 'serviceType' ? 'scale-[1.01]' : ''}`}>
                          <select
                            name="serviceType"
                            value={formState.serviceType}
                            onChange={handleChange}
                            onFocus={() => setActiveField('serviceType')}
                            onBlur={() => setActiveField(null)}
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                            required
                          >
                            <option value="">Select a service type</option>
                            <option value="web-development">Web Development</option>
                            <option value="mobile-development">Mobile Development</option>
                            <option value="cloud-architecture">Cloud Architecture</option>
                            <option value="consultation">Technical Consultation</option>
                            <option value="other">Other</option>
                          </select>
                          {activeField === 'serviceType' && (
                            <motion.span
                              className="absolute inset-0 -z-10 rounded-lg bg-primary-500/5 blur-sm"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                        </div>
                      </motion.div>

                      {/* Description Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35, type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <label className="text-sm font-medium mb-2 flex items-center">
                          <MessageSquare className="w-4 h-4 mr-2 text-primary-500" />
                          Project Description
                        </label>
                        <div className={`relative transition-all duration-300 ${activeField === 'description' ? 'scale-[1.01]' : ''}`}>
                          <textarea
                            rows={4}
                            name="description"
                            value={formState.description}
                            onChange={handleChange}
                            onFocus={() => setActiveField('description')}
                            onBlur={() => setActiveField(null)}
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                            placeholder="Describe your project requirements..."
                            required
                          />
                          {activeField === 'description' && (
                            <motion.span
                              className="absolute inset-0 -z-10 rounded-lg bg-primary-500/5 blur-sm"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                        </div>
                      </motion.div>

                      {/* Budget and Timeline Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                        >
                          <label className="text-sm font-medium mb-2 block">Budget Range</label>
                          <div className={`relative transition-all duration-300 ${activeField === 'budget' ? 'scale-[1.01]' : ''}`}>
                            <select
                              name="budget"
                              value={formState.budget}
                              onChange={handleChange}
                              onFocus={() => setActiveField('budget')}
                              onBlur={() => setActiveField(null)}
                              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                            >
                              <option value="">Select budget</option>
                              <option value="under-5k">Under $5,000</option>
                              <option value="5k-10k">$5,000 - $10,000</option>
                              <option value="10k-25k">$10,000 - $25,000</option>
                              <option value="25k-50k">$25,000 - $50,000</option>
                              <option value="50k-plus">$50,000+</option>
                            </select>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.45, type: "spring", stiffness: 200, damping: 20 }}
                        >
                          <label className="text-sm font-medium mb-2 block">Timeline</label>
                          <div className={`relative transition-all duration-300 ${activeField === 'timeline' ? 'scale-[1.01]' : ''}`}>
                            <select
                              name="timeline"
                              value={formState.timeline}
                              onChange={handleChange}
                              onFocus={() => setActiveField('timeline')}
                              onBlur={() => setActiveField(null)}
                              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                            >
                              <option value="">Select timeline</option>
                              <option value="asap">ASAP</option>
                              <option value="1-month">1 Month</option>
                              <option value="2-3-months">2-3 Months</option>
                              <option value="3-6-months">3-6 Months</option>
                              <option value="6-plus-months">6+ Months</option>
                            </select>
                          </div>
                        </motion.div>
                      </div>

                      {/* Submit Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                        className="pt-4"
                      >
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-4 rounded-lg flex items-center justify-center group relative overflow-hidden font-medium"
                        >
                          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 to-accent-600 transition-all duration-300 transform translate-y-full group-hover:translate-y-0"></span>
                          <span className="relative flex items-center">
                            Submit Request
                            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </motion.button>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomServiceModal;

