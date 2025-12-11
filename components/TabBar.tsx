import React from 'react';
import { Home, Newspaper, Settings } from 'lucide-react';
import { TabType } from '../types';

interface TabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  const getTabClass = (tab: TabType) => {
    return activeTab === tab ? 'text-[#08D9D6]' : 'text-gray-400';
  };

  return (
    <div className="bg-white border-t border-gray-200 h-16 flex items-center justify-around shadow-[0_-2px_10px_rgba(0,0,0,0.05)] pb-safe">
      <button 
        onClick={() => onTabChange('home')}
        className={`flex flex-col items-center justify-center w-full h-full ${getTabClass('home')}`}
      >
        <Home size={24} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
        <span className="text-[10px] font-medium mt-1">Home</span>
      </button>

      <button 
        onClick={() => onTabChange('news')}
        className={`flex flex-col items-center justify-center w-full h-full ${getTabClass('news')}`}
      >
        <Newspaper size={24} strokeWidth={activeTab === 'news' ? 2.5 : 2} />
        <span className="text-[10px] font-medium mt-1">News</span>
      </button>

      <button 
        onClick={() => onTabChange('settings')}
        className={`flex flex-col items-center justify-center w-full h-full ${getTabClass('settings')}`}
      >
        <Settings size={24} strokeWidth={activeTab === 'settings' ? 2.5 : 2} />
        <span className="text-[10px] font-medium mt-1">Settings</span>
      </button>
    </div>
  );
};

export default TabBar;
