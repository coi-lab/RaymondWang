import React from 'react';
import { Award } from 'lucide-react';

const AchievementsPage = () => {
  const awards = [
    {
      title: 'Nationals 4th Place medal in Flight',
      org: 'Science Olympiad',
      year: '2024',
      description: 'Achieved a long flight time, with planes made from extremely light a fragile materials and very intricate tuning of plane and its rubber.'
    },
    {
      title: 'Nationals 3rd Place medal in Flight',
      org: 'Science Olympiad',
      year: '2023',
      description: 'Achieved a long flight time, with planes made from extremely light a fragile materials and very intricate tuning of plane and its rubber.'
    },
    {
      title: 'Nationals 4th Place medal in Air Trajectory',
      org: 'Science Olympiad',
      year: '2024',
      description: 'Achieved high accuracy with a air projected projectile at various targets.'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3 text-gray-800">Achievements</h1>
        <p className="text-lg text-gray-600">Recognition and accomplishments</p>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Awards & Honors</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, idx) => (
            <div key={idx} className="p-6 hover:bg-white/50 hover:border-l-4 hover:border-lavender-500 hover:shadow-md transition-all">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-lavender-100 flex items-center justify-center flex-shrink-0 border-2 border-lavender-200">
                  <Award className="text-gray-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{award.title}</h3>
                  <p className="text-sm font-semibold text-gray-600">{award.org} • {award.year}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 pl-16">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;

