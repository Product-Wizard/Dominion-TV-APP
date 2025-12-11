import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white/95 backdrop-blur-sm h-14 flex items-center justify-center border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <h1 className="text-[#08D9D6] font-bold text-lg tracking-wide uppercase">
        {title}
      </h1>
    </header>
  );
};

export default Header;
