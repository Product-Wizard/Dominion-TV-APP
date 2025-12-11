import React, { useState, useEffect } from 'react';
import { Play, Tv } from 'lucide-react';
import { SCHEDULE_DATA, YOUTUBE_CHANNEL_URL } from '../constants';
import { Program } from '../types';

const HomeScreen: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute to check for LIVE status
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  const checkIfLive = (program: Program): boolean => {
    const now = currentTime;
    
    const [startH, startM] = program.startTime.split(':').map(Number);
    const [endH, endM] = program.endTime.split(':').map(Number);

    const startDate = new Date(now);
    startDate.setHours(startH, startM, 0, 0);

    const endDate = new Date(now);
    endDate.setHours(endH, endM, 0, 0);

    // Handle case where show goes past midnight (not present in current data, but good practice)
    if (endDate < startDate) {
      endDate.setDate(endDate.getDate() + 1);
    }

    return now >= startDate && now <= endDate;
  };

  const handlePlayClick = (program: Program, isLive: boolean) => {
    if (isLive) {
      window.open(YOUTUBE_CHANNEL_URL, '_blank');
    } else {
      const searchUrl = `https://www.youtube.com/results?search_query=Dominion+TV+${encodeURIComponent(program.title)}`;
      window.open(searchUrl, '_blank');
    }
  };

  return (
    <div className="p-4 space-y-4 pb-20">
      {SCHEDULE_DATA.map((program) => {
        const isLive = checkIfLive(program);

        return (
          <div 
            key={program.id}
            className={`
              relative bg-white rounded-xl overflow-hidden flex items-center p-3 shadow-sm transition-all
              ${isLive ? 'border-2 border-yellow-400 ring-2 ring-yellow-400/20' : 'border border-gray-100'}
            `}
          >
            {/* Left: Thumbnail */}
            <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
              <Tv className="text-gray-400" size={24} />
            </div>

            {/* Middle: Info */}
            <div className="flex-1 min-w-0 pr-2">
              <div className="flex items-center space-x-2 mb-1">
                {isLive && (
                  <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded animate-pulse">
                    LIVE
                  </span>
                )}
                <span className="text-[#08D9D6] text-xs font-semibold">
                  {program.startTime} - {program.endTime}
                </span>
              </div>
              <h3 className="text-gray-900 font-bold text-sm truncate leading-tight mb-0.5">
                {program.title}
              </h3>
              <p className="text-gray-500 text-xs truncate">
                {program.host}
              </p>
            </div>

            {/* Right: Play Button */}
            <button 
              onClick={() => handlePlayClick(program, isLive)}
              className={`
                flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors
                ${isLive 
                  ? 'bg-[#08D9D6] text-white hover:bg-[#06c3c0] shadow-md shadow-[#08D9D6]/30' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
              aria-label={`Play ${program.title}`}
            >
              <Play size={18} fill={isLive ? "currentColor" : "none"} className={isLive ? "ml-1" : "ml-1"} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default HomeScreen;
