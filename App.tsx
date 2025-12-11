import React, { useState } from 'react';
import TabBar from './components/TabBar';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import SettingsScreen from './screens/SettingsScreen';
import { TabType } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'news':
        return <NewsScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  const getHeaderTitle = () => {
    switch (activeTab) {
      case 'home': return 'DOMINION TV';
      case 'news': return 'NEWS';
      case 'settings': return 'SETTINGS';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">
      {/* Mobile Frame Simulation: Constrained width, full height on mobile, constrained on desktop */}
      <div className="w-full max-w-md h-[100dvh] bg-white shadow-2xl overflow-hidden flex flex-col relative">
        
        {/* Header */}
        <Header title={getHeaderTitle()} />

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto overscroll-contain no-scrollbar">
          {renderContent()}
        </main>

        {/* Bottom Navigation */}
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
        
      </div>
    </div>
  );
};

export default App;
