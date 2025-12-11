import React from 'react';
import { MOCK_NEWS } from '../constants';

const NewsScreen: React.FC = () => {
  return (
    <div className="p-4 space-y-4 pb-20">
      {MOCK_NEWS.map((news) => (
        <div 
          key={news.id} 
          className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col active:scale-[0.99] transition-transform cursor-pointer"
        >
          {/* Image */}
          <div className="h-40 w-full overflow-hidden bg-gray-200 relative">
            <img 
              src={news.imageUrl} 
              alt={news.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Content */}
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="text-[#08D9D6] text-xs font-bold uppercase tracking-wider">
                Breaking
              </span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-gray-400 text-xs">
                {news.timeAgo}
              </span>
            </div>
            <h3 className="text-gray-900 font-bold leading-snug">
              {news.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsScreen;
