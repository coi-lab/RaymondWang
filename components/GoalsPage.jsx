import React from 'react';
import { ChevronRight } from 'lucide-react';

const GoalsPage = () => {
  const roadmapPhases = [
    {
      timeline: 'Short-term (0-2 years)',
      color: 'purple',
      goals: [
        'Complete my undergraduate degree with focus on Computer Engineering',
        'Gain hands-on experience through internships at leading tech companies',
        'Develop proficiency in advanced technical skills including Data Analytics, Robotics Experience through RoboWrestling',
        'Build a portfolio of meaningful projects that demonstrate real-world application'
      ]
    },
    {
      timeline: 'Mid-term (2-5 years)',
      color: 'indigo',
      goals: [
        'Gain industy experience in SemiConductors or Robotics',
        'Contribute to research or development projects with tangible impact',
        'Build professional network and establish reputation in the engineering community',
        'Take on leadership roles in technical projects or teams'
      ]
    },
    {
      timeline: 'Long-term (5+ years)',
      color: 'violet',
      goals: [
        'Achieve senior technical or leadership position in my field',
        'Make significant contributions to advancing technology in Semiconductors or Robotics',
        'Mentor the next generation of engineers (maybe Science Olympiad)',
        'Continue professional development and stay at the forefront of innovation'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3 text-gray-800">Career Goals</h1>
        <p className="text-lg text-gray-600">My roadmap to success and future vision</p>
      </div>

      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Long-Term Vision</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          My ultimate career goal is to work in the Robotics or ML field maybe even both at the same time.
           I envision myself making meaningful contributions to the field 
          while continuously growing as a technical leader and problem solver.
        </p>
      </div>

      <div className="space-y-5">
        <h2 className="text-3xl font-bold text-gray-800">Roadmap to Success</h2>
        
        {roadmapPhases.map((phase, idx) => (
          <div key={idx} className="relative p-6 hover:bg-white/50 hover:border-l-4 hover:border-lavender-500 transition-all">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{phase.timeline}</h3>
            <ul className="space-y-3">
              {phase.goals.map((goal, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-6 h-6 rounded-full bg-lavender-300 flex items-center justify-center flex-shrink-0">
                    <ChevronRight size={16} className="text-gray-700" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsPage;

