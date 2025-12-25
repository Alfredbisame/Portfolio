import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FormFieldProps {
  label: string;
  icon?: LucideIcon;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  isActive: boolean;
  delay?: number;
  type?: 'text' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  rows?: number;
  options?: Array<{ value: string; label: string }>;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  icon: Icon,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  isActive,
  delay = 0,
  type = 'text',
  placeholder,
  required = false,
  rows = 4,
  options = [],
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
    >
      <label className="text-sm font-medium mb-2 flex items-center">
        {Icon && <Icon className="w-4 h-4 mr-2 text-primary-500" />}
        {label}
      </label>
      <div className={`relative transition-all duration-300 ${isActive ? 'scale-[1.01]' : ''}`}>
        {type === 'textarea' ? (
          <textarea
            rows={rows}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
            placeholder={placeholder}
            required={required}
          />
        ) : type === 'select' ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            required={required}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            placeholder={placeholder}
            required={required}
          />
        )}
        {isActive && (
          <motion.span
            className="absolute inset-0 -z-10 rounded-lg bg-primary-500/5 blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default FormField;

