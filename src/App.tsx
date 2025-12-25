import { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import { skills, experiences, projects, services } from './data/portfolioData';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ThemeToggle />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Render all section components */}
      <HomeSection isActive={activeTab === 'home'} />
      
      <AboutSection 
        isActive={activeTab === 'about'} 
        skills={skills} 
        experiences={experiences} 
      />
      
      <PortfolioSection 
        isActive={activeTab === 'portfolio'} 
        projects={projects} 
      />
      
      <ServicesSection 
        isActive={activeTab === 'services'} 
        services={services} 
      />
      
      <ContactSection isActive={activeTab === 'contact'} />
    </div>
  );
}

export default App;
