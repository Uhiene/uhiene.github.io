import React from 'react';

interface SkillCardProps {
  title: string;
  skills: { name: string; icon?: JSX.Element }[];
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, className = '' }) => {
  return (
    <div className={`shadow-slate-300 shadow-lg border border-slate-200 bg-white p-12 rounded-xl w-full ${className}`}>
      <h2 className="text-3xl font-semibold gradient-text mb-6">{title}</h2>
      <div className="flex flex-wrap gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 bg-gray-50 text-gray-800 p-4 min-w-44 rounded-2xl">
            {skill.icon && <span className="mr-2 text-2xl">{skill.icon}</span>}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
