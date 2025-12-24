import { 
  FaHouse, 
  FaUser, 
  FaBriefcase, 
  FaWrench, 
  FaEnvelope
} from 'react-icons/fa6';
import Dock from './Dock';

const tabs = [
  { id: 'home', label: 'Home', icon: FaHouse },
  { id: 'about', label: 'About', icon: FaUser },
  { id: 'portfolio', label: 'Portfolio', icon: FaBriefcase },
  { id: 'services', label: 'Services', icon: FaWrench },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];

export default function Navigation({ 
  activeTab, 
  setActiveTab 
}: { 
  activeTab: string; 
  setActiveTab: (tab: string) => void 
}) {

  // Prepare dock items with current icons
  const dockItems = tabs.map((tab) => {
    const Icon = tab.icon;
    const isActive = activeTab === tab.id;
    
    return {
      icon: <Icon className={`w-5 h-5 ${isActive ? 'text-primary-400' : 'text-white'}`} />,
      label: tab.label,
      onClick: () => setActiveTab(tab.id),
      className: isActive ? 'ring-2 ring-primary-400 ring-offset-2 ring-offset-black/30' : ''
    };
  });

  return (
    <>
      {/* Desktop Navigation - Dock on right side */}
      <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-40">
        <Dock 
          items={dockItems}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          distance={150}
          orientation="vertical"
        />
      </div>

      {/* Tablet Navigation - Horizontal Dock at Top */}
      <div className="hidden md:flex lg:hidden fixed top-4 left-1/2 -translate-x-1/2 z-40">
        <Dock 
          items={dockItems}
          baseItemSize={45}
          magnification={60}
          distance={120}
          orientation="horizontal"
        />
      </div>

      {/* Mobile Navigation - Horizontal Dock at Bottom */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
        <Dock 
          items={dockItems}
          baseItemSize={40}
          magnification={55}
          distance={100}
          orientation="horizontal"
        />
      </div>
    </>
  );
}
