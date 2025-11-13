import React from 'react';
import { ChevronRight } from 'lucide-react';

const ExperiencePage = () => {
  const experiences = [
    {
      title: 'Web Development Instructor',
      company: 'ScioVirtual',
      period: 'June 2025 - August 2025',
      description: 'Taught student middle school to high school, how to code and build website.',
      achievements: [
        'Designed interactive lessons emphasizing debugging and real world applications',
        'Helped improve course satisfaction score from 6.8 to 8.7 through student feedback',
        'Created a custom curriculum tailored to student needs and interests'
      ]
    },
    {
      title: 'Machine Learning Research Assistant',
      company: 'Miami University',
      period: 'August 2022 - February 2023',
      description: 'Developed Python based ML models using scikit-learn, NumPy, and Pandas to localize arrhythmias using 12-lead ECG',
      achievements: [
        'Helped reduce the surgical procedure time by a predicted 2 hours which would help doctors get through more patients',
        'Created data visualizations in Matplotlib and MATLAB to assess model performance and detext bias.',
        'Published two peer reviewed papers'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3 text-gray-800">Experience</h1>
        <p className="text-lg text-gray-600">Professional journey and growth</p>
      </div>
      
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="p-6 hover:bg-white/50 hover:border-l-4 hover:border-lavender-500 hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{exp.title}</h2>
                <p className="text-xl text-gray-700 font-semibold">{exp.company}</p>
              </div>
              <span className="inline-block bg-lavender-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mt-2 md:mt-0 border border-lavender-200">
                {exp.period}
              </span>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-lavender-300 flex items-center justify-center flex-shrink-0">
                    <ChevronRight size={14} className="text-gray-700" />
                  </div>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-6 border-l-4 border-lavender-400">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Additional Experience</h2>
        <p className="text-gray-700 mb-4">
          Beyond formal positions, I've gained valuable experience through:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-lavender-600 font-bold text-2xl leading-none">•</span>
            <span><strong>Leadership:</strong> Electrical Member for RoboWrestling, Social Media Team at CHEFS</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-lavender-600 font-bold text-2xl leading-none">•</span>
            <span><strong>Volunteer Work:</strong> Volunteer to event supervise at the State level for Ohio Science Olympiad</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-lavender-600 font-bold text-2xl leading-none">•</span>
            <span><strong>Research:</strong> Potentially working on VIP</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExperiencePage;

