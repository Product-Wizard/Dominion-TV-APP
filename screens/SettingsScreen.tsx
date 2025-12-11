import React, { useState } from 'react';
import { Bell, Info, ChevronRight, ShieldCheck } from 'lucide-react';

const SettingsScreen: React.FC = () => {
  const [pushEnabled, setPushEnabled] = useState(true);

  return (
    <div className="p-4 space-y-6 pb-20">
      
      {/* Preferences Section */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-50 bg-gray-50/50">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Preferences</h2>
        </div>
        
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#08D9D6]">
              <Bell size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Push Notifications</p>
              <p className="text-xs text-gray-500">Receive alerts for live shows</p>
            </div>
          </div>
          
          {/* Custom Toggle Switch */}
          <button 
            onClick={() => setPushEnabled(!pushEnabled)}
            className={`
              relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none
              ${pushEnabled ? 'bg-[#08D9D6]' : 'bg-gray-300'}
            `}
          >
            <span 
              className={`
                inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 shadow-sm
                ${pushEnabled ? 'translate-x-6' : 'translate-x-1'}
              `} 
            />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-50 bg-gray-50/50">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">About</h2>
        </div>

        <div className="divide-y divide-gray-50">
          <div className="p-4 flex items-center justify-between active:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
               <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                <Info size={18} />
              </div>
              <span className="text-sm font-medium text-gray-900">Version</span>
            </div>
            <span className="text-sm text-gray-500 font-mono">1.0.0 (MVP)</span>
          </div>

          <div className="p-4 flex items-center justify-between active:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex items-center space-x-3">
               <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                <ShieldCheck size={18} />
              </div>
              <span className="text-sm font-medium text-gray-900">Privacy Policy</span>
            </div>
            <ChevronRight size={16} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <div className="text-center pt-8">
        <p className="text-xs text-gray-400">Powered by Dominion TV</p>
        <p className="text-[10px] text-gray-300 mt-1">© 2024 All Rights Reserved</p>
      </div>

    </div>
  );
};

export default SettingsScreen;
