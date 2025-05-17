
import React, { useState, useEffect } from 'react';
import { toast } from "@/components/ui/use-toast";

const PrizeDisplay = () => {
  const prizes = [100000, 50000, 40000, 30000, 20000, 10000, 8000, 6000, 4000, 2000, 1000];
  const [currentPrizeIndex, setCurrentPrizeIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const formatPrize = (amount: number) => {
    return new Intl.NumberFormat('en-NG', { 
      style: 'currency', 
      currency: 'NGN',
      maximumFractionDigits: 0 
    }).format(amount);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowDown' && !animating) {
      setAnimating(true);
      
      if (currentPrizeIndex < prizes.length - 1) {
        setCurrentPrizeIndex(prev => prev + 1);
        
        // Show toast for prize decrease
        toast({
          title: "Prize Decreased!",
          description: `New prize amount: ${formatPrize(prizes[currentPrizeIndex + 1])}`,
          duration: 2000,
        });
      }
      
      setTimeout(() => setAnimating(false), 500);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    // Instruction toast
    toast({
      title: "Game Instructions",
      description: "Press the DOWN ARROW key to decrease the prize amount",
      duration: 5000,
    });
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPrizeIndex, animating]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-1 rounded-xl shadow-2xl">
        <div className="bg-amber-100 rounded-lg p-8 md:p-12 border-4 border-amber-800">
          <div className={`text-6xl md:text-7xl lg:text-8xl font-bold text-amber-900 ${animating ? 'animate-bounce' : ''}`}>
            {formatPrize(prizes[currentPrizeIndex])}
          </div>
        </div>
      </div>
      
      <div className="mt-12 w-full max-w-md">
        <div className="space-y-2">
          {prizes.map((prize, index) => (
            <div 
              key={index} 
              className={`p-2 rounded-lg ${
                index === currentPrizeIndex 
                  ? 'bg-amber-600 text-white font-bold'
                  : index < currentPrizeIndex 
                    ? 'bg-gray-300 text-gray-500'
                    : 'bg-amber-200 text-amber-900'
              }`}
            >
              {formatPrize(prize)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrizeDisplay;
