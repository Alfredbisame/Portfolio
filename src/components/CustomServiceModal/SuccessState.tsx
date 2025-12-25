import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const SuccessState: React.FC = () => {
  return (
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
  );
};

export default SuccessState;

