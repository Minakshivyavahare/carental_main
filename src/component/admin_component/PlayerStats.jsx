import React from 'react';

const PlayerStats = () => {
  const players = [
    { name: 'Horseth', score: 9200 },
    { name: 'Zora Hadid', score: 950 },
    { name: 'Martiana', score: 1800 },
    { name: 'Revo Shaun', score: 1500 },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <div className="text-gray-400 text-sm">Player Statistics</div>
      <div className="mt-2 space-y-2">
        {players.map((player, index) => (
          <div key={index} className="flex justify-between text-sm">
            <span>{player.name}</span>
            <span>{player.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerStats;