
import React from 'react';
import type { Page } from '../App';
import { Button } from './Button';

interface HeaderProps {
  setPage: (page: Page) => void;
}

const NavLink: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <button onClick={onClick} className="text-gray-400 hover:text-brand-primary transition-colors duration-300 font-medium">
    {children}
  </button>
);

export const Header: React.FC<HeaderProps> = ({ setPage }) => {
  return (
    <header className="bg-gray-800/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => setPage('home')}>
            <h1 className="text-2xl font-bold text-white">
              FF <span className="text-brand-primary">Battle Arena</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => setPage('home')}>Home</NavLink>
            <NavLink onClick={() => setPage('tournaments')}>Tournaments</NavLink>
            <NavLink onClick={() => setPage('leaderboard')}>Leaderboard</NavLink>
            <NavLink onClick={() => setPage('ai-tips')}>AI Pro Tips</NavLink>
          </div>
          <div className="flex items-center space-x-4">
             <NavLink onClick={() => setPage('profile')}>Profile</NavLink>
             <Button variant="primary">Login</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
