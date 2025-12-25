import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { useCustomServiceForm } from './useCustomServiceForm';
import FormField from './FormField';
import ModalHeader from './ModalHeader';
import SuccessState from './SuccessState';
import { SERVICE_TYPES, BUDGET_OPTIONS, TIMELINE_OPTIONS } from './constants';

interface CustomServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomServiceModal: React.FC<CustomServiceModalProps> = ({ isOpen, onClose }) => {
  const {
    formState,
    activeField,
    isSubmitted,
    handleChange,
    handleSubmit,
    setActiveField,
  } = useCustomServiceForm(onClose);

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
                <ModalHeader />

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <SuccessState />
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
                      <FormField
                        label="Name"
                        icon={User}
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                        isActive={activeField === 'name'}
                        delay={0.2}
                        type="text"
                        placeholder="Your name"
                        required
                      />

                      {/* Phone Number Field */}
                      <FormField
                        label="Phone Number"
                        icon={Phone}
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        onFocus={() => setActiveField('phone')}
                        onBlur={() => setActiveField(null)}
                        isActive={activeField === 'phone'}
                        delay={0.25}
                        type="tel"
                        placeholder="+233XXXXXXXXX"
                        required
                      />

                      {/* Service Type Field */}
                      <FormField
                        label="Service Type"
                        icon={Sparkles}
                        name="serviceType"
                        value={formState.serviceType}
                        onChange={handleChange}
                        onFocus={() => setActiveField('serviceType')}
                        onBlur={() => setActiveField(null)}
                        isActive={activeField === 'serviceType'}
                        delay={0.3}
                        type="select"
                        required
                        options={[
                          { value: '', label: 'Select a service type' },
                          ...SERVICE_TYPES,
                        ]}
                      />

                      {/* Description Field */}
                      <FormField
                        label="Project Description"
                        icon={MessageSquare}
                        name="description"
                        value={formState.description}
                        onChange={handleChange}
                        onFocus={() => setActiveField('description')}
                        onBlur={() => setActiveField(null)}
                        isActive={activeField === 'description'}
                        delay={0.35}
                        type="textarea"
                        placeholder="Describe your project requirements..."
                        required
                        rows={4}
                      />

                      {/* Budget and Timeline Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                        >
                          <FormField
                            label="Budget Range"
                            name="budget"
                            value={formState.budget}
                            onChange={handleChange}
                            onFocus={() => setActiveField('budget')}
                            onBlur={() => setActiveField(null)}
                            isActive={activeField === 'budget'}
                            type="select"
                            options={[
                              { value: '', label: 'Select budget' },
                              ...BUDGET_OPTIONS,
                            ]}
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.45, type: "spring", stiffness: 200, damping: 20 }}
                        >
                          <FormField
                            label="Timeline"
                            name="timeline"
                            value={formState.timeline}
                            onChange={handleChange}
                            onFocus={() => setActiveField('timeline')}
                            onBlur={() => setActiveField(null)}
                            isActive={activeField === 'timeline'}
                            type="select"
                            options={[
                              { value: '', label: 'Select timeline' },
                              ...TIMELINE_OPTIONS,
                            ]}
                          />
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

