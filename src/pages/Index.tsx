
import React from 'react';
import Header from '../components/Header';
import PrizeDisplay from '../components/PrizeDisplay';
import YorubaBackground from '../components/YorubaBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-amber-50 relative overflow-hidden">
      <YorubaBackground />
      <div className="relative z-10 container mx-auto px-4 py-8">
        <Header />
        <PrizeDisplay />
      </div>
    </div>
  );
};

export default Index;
