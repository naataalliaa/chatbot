import React, { createContext, useState, useContext } from 'react';

interface BotContextType {
  selectedBot: string;
  setSelectedBot: (bot: string) => void;
}

const BotContext = createContext<BotContextType | undefined>(undefined);

export const BotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedBot, setSelectedBot] = useState<string>('/bot1.png'); // Default bot image
  return (
    <BotContext.Provider value={{ selectedBot, setSelectedBot }}>
      {children}
    </BotContext.Provider>
  );
};

export const useBotContext = () => {
  const context = useContext(BotContext);
  if (!context) {
    throw new Error('useBotContext must be used within a BotProvider');
  }
  return context;
};
