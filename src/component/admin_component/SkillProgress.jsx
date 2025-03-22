import React from 'react';

const SkillProgress = () => {
  const skills = [
    { name: 'Speed', value: 80 },
    { name: 'Accuracy', value: 65 },
    { name: 'Endurance', value: 90 },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <div className="text-gray-400 text-sm mb-2">Skill Progress</div>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between text-xs sm:text-sm text-gray-300">
              <span>{skill.name}</span>
              <span>{skill.value}%</span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
              <div
                className="bg-teal-400 h-2 rounded-full"
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillProgress;