import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

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

const ModalHeader: React.FC = () => {
  return (
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
  );
};

export default ModalHeader;

