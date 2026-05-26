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
    <div className="mx-auto max-w-5xl px-5 pb-10 pt-4 md:pb-12 md:pt-6">
      <section className="p-6 md:p-8">
      <header className="pb-7">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Experience</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">Experience</h1>
      </header>

      <div>
        {experiences.map((exp) => (
          <section key={`${exp.title}-${exp.company}`} className="grid gap-5 py-8 md:grid-cols-[230px_1fr]">
            <aside className="text-sm font-semibold text-white/70">
              <p>{exp.period}</p>
              <p className="mt-2 text-white/85">{exp.company}</p>
            </aside>

            <div>
              <h2 className="font-display text-2xl font-bold text-white">{exp.title}</h2>
              <p className="mt-3 leading-7 text-white/85">{exp.description}</p>
              <ul className="mt-5 space-y-3 text-white/85">
                {exp.achievements.map((achievement) => (
                  <li key={achievement} className="px-4 py-3 leading-7">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="pt-8">
        <h2 className="font-display text-2xl font-bold text-white">Additional Experience</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {additional.map(([title, detail]) => (
            <div key={title} className="p-5">
              <h3 className="font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/80">{detail}</p>
            </div>
          ))}
        </div>
      </section>
      </section>
    </div>
  );
};

export default ExperiencePage;
