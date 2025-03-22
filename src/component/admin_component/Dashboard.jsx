import React from 'react';
import StatCard from './StatCard';
import Chart from './Chart';
import SkillProgress from './SkillProgress';
import RadarChart from './RadarChart';
import PlayerStats from './PlayerStats';
import Map from './Map';

const Dashboard = ({ googleMapsApiKey }) => {
  return (
    <div className="p-4 bg-gray-900 text-white flex-1 overflow-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard title="New Events" value="13,278" change="↑ 8.25%" />
        <StatCard title="Completed Events" value="10,312" change="↓ 0.25%" />
        <StatCard title="Pending Events" value="1,214" change="↑ 0.85%" />
        <StatCard title="Canceled Events" value="3,520" change="↓ 8.25%" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <Chart title="Distance Covered" />
        <Chart title="Danger Zone" />
        <SkillProgress />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <Chart title="Air Support" type="bar" />
        <PlayerStats />
        <RadarChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Chart title="Civilian Population" type="bar" />
        <Map apiKey={googleMapsApiKey} />
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <div className="text-gray-400 text-sm">Top Players</div>
          <div className="mt-2 space-y-1">
            {[
              'ShadowKnight',
              'PixelSorcerer',
              'MysticGamer',
              'CyberNinja',
              'QuantumWarrior',
              'FrostyTroll',
              'StormSeeker',
              'OmegaTrace',
            ].map((player, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{player}</span>
                <div className="w-24 bg-gray-700 h-2 rounded-full">
                  <div
                    className="bg-teal-400 h-2 rounded-full"
                    style={{ width: `${100 - index * 10}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;