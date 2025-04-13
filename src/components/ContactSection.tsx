import React from 'react';

interface ContactSectionProps {
  isActive: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isActive }) => {
  return (
    <section className={`min-h-screen flex items-center justify-center p-8 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r text-center from-primary-500 to-accent-500 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <div className="bg-gray-50 dark:bg-dark-800 p-8 rounded-2xl">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-lg hover:scale-105 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
