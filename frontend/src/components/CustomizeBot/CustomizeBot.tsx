
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBotContext } from '../BotContext/BotContext';

const bots = [
  { id: 1, name: 'Bot A', image: '/bot1.png' },
  { id: 2, name: 'Bot B', image: '/bot1.png' },
  { id: 3, name: 'Bot C', image: '/botFace.png' },
  { id: 4, name: 'Bot D', image: '/bot-d.png' },
];

const CustomizeBot: React.FC = () => {
  const navigate = useNavigate();
  const { setSelectedBot } = useBotContext();

  const handleSelectBot = (bot: { id: number; name: string; image: string }) => {
    setSelectedBot(bot.image);
    localStorage.setItem('selectedBot', bot.image);
    navigate('/');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center">Choose Your Bot</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {bots.map((bot) => (
          <div
            key={bot.id}
            className="border rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={bot.image}
              alt={bot.name}
              className="w-32 h-32 object-cover rounded-md"
            />
            <h2 className="mt-4 text-lg font-medium">{bot.name}</h2>
            <button
              className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
              onClick={() => handleSelectBot(bot)}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomizeBot;
