import React from 'react';

const ExperiencePage = () => {
  const experiences = [
    {
      title: 'Web Development Instructor',
      company: 'ScioVirtual',
      period: 'June 2025 - August 2025',
      description: 'Taught middle and high school students how to code and build websites.',
      achievements: [
        'Designed interactive lessons around debugging and real-world applications.',
        'Helped improve course satisfaction from 6.8 to 8.7 through student feedback.',
        'Created a custom curriculum tailored to student needs and interests.',
      ],
    },
    {
      title: 'Machine Learning Research Assistant',
      company: 'Miami University',
      period: 'August 2022 - February 2023',
      description:
        'Developed Python-based ML models using scikit-learn, NumPy, and Pandas to localize arrhythmias using 12-lead ECG data.',
      achievements: [
        'Worked on models intended to reduce surgical procedure time.',
        'Created Matplotlib and MATLAB visualizations to assess model performance and detect bias.',
        'Published two peer-reviewed papers.',
      ],
    },
  ];

  const additional = [
    ['Leadership', 'Electrical member for RoboWrestling and social media team member at CHEFS.'],
    ['Volunteer Work', 'Event supervisor volunteer at the Ohio Science Olympiad state level.'],
    ['Research', 'Exploring VIP opportunities and applied technical research.'],
  ];

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 md:py-16">
      <header className="border-b border-gray-200 pb-8">
        <p className="font-nav mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#35224f]">Experience</p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">Experience</h1>
      </header>

      <div className="divide-y divide-gray-200">
        {experiences.map((exp) => (
          <section key={`${exp.title}-${exp.company}`} className="grid gap-5 py-8 md:grid-cols-[230px_1fr]">
            <aside className="font-nav text-xs font-semibold uppercase tracking-[0.16em] text-[#35224f]">
              <p>{exp.period}</p>
              <p className="mt-2 text-gray-500">{exp.company}</p>
            </aside>

            <div>
              <h2 className="text-2xl font-bold text-gray-950">{exp.title}</h2>
              <p className="mt-3 leading-7 text-gray-700">{exp.description}</p>
              <ul className="mt-5 space-y-3 text-gray-700">
                {exp.achievements.map((achievement) => (
                  <li key={achievement} className="border-l border-gray-200 pl-4 leading-7">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-950">Additional Experience</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {additional.map(([title, detail]) => (
            <div key={title} className="border-t border-gray-200 pt-4">
              <h3 className="font-bold text-gray-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
