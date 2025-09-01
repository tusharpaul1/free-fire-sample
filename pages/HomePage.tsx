import React from 'react';
import { Button } from '../components/Button';
import type { Page } from '../App';

interface HomePageProps {
  setPage: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
  return (
    <div className="text-center py-16 animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
        Enter the <span className="text-brand-primary">Battle Arena</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
        Join weekly Free Fire tournaments, compete against the best, and win exclusive prizes. Are you ready for the challenge?
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
        <Button onClick={() => setPage('tournaments')} variant="primary" className="text-lg w-full sm:w-auto">View Tournaments</Button>
        <Button variant="outline" className="text-lg w-full sm:w-auto">Register Now</Button>
      </div>
    </div>
  );
};
