import React from 'react';

const GoalsPage = () => {
  const roadmapPhases = [
    {
      timeline: 'Short Term',
      range: '0-2 years',
      goals: [
        'Complete my undergraduate degree with a focus on Computer Engineering.',
        'Gain internship experience at technical companies.',
        'Build deeper experience in robotics, embedded systems, and data analysis.',
        'Keep developing a project portfolio with real hardware and software outcomes.',
      ],
    },
    {
      timeline: 'Mid Term',
      range: '2-5 years',
      goals: [
        'Gain industry experience in semiconductors, robotics, or related systems work.',
        'Contribute to projects with visible technical impact.',
        'Build a strong engineering network and reputation.',
        'Take on leadership roles in technical projects or teams.',
      ],
    },
    {
      timeline: 'Long Term',
      range: '5+ years',
      goals: [
        'Grow into a senior technical or engineering leadership role.',
        'Contribute to meaningful advances in robotics, ML, or semiconductor systems.',
        'Mentor younger engineers and Science Olympiad students.',
        'Continue learning as the field changes.',
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-5 pb-10 pt-4 md:pb-12 md:pt-6">
      <section className="p-6 md:p-8">
      <header className="pb-7">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Goals</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">Career Goals</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
          My long-term aim is to work in robotics, machine learning, or the overlap between both,
          while growing into someone who can lead technical projects from idea to working system.
        </p>
      </header>

      <div>
        {roadmapPhases.map((phase) => (
          <section key={phase.timeline} className="grid gap-5 py-8 md:grid-cols-[190px_1fr]">
            <div>
              <h2 className="font-display text-2xl font-bold text-white">{phase.timeline}</h2>
              <p className="mt-1 text-sm font-semibold text-white/70">{phase.range}</p>
            </div>
            <ul className="space-y-3 text-white/85">
              {phase.goals.map((goal) => (
                <li key={goal} className="px-4 py-3 leading-7">
                  {goal}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      </section>
    </div>
  );
};

export default GoalsPage;
