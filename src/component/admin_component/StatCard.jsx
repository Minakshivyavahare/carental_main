import React from 'react';

const StatCard = ({ title, value, change }) => {
  const isPositive = change.startsWith('↑');
  const changeColor = isPositive ? 'text-green-400' : 'text-red-400';

  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <div className="text-gray-400 text-xs sm:text-sm">{title}</div>
      <div className="text-white text-lg sm:text-xl font-semibold mt-1">{value}</div>
      <div className={`text-xs sm:text-sm ${changeColor} mt-1`}>{change}</div>
    </div>
  );
};

export default StatCard;