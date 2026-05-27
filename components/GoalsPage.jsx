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
    <div className="mx-auto max-w-5xl px-5 py-12 md:py-16">
      <header className="border-b border-gray-200 pb-8">
        <p className="font-nav mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#35224f]">Goals</p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">Career Goals</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">
          My long-term aim is to work in robotics, machine learning, or the overlap between both,
          while growing into someone who can lead technical projects from idea to working system.
        </p>
      </header>

      <div className="divide-y divide-gray-200">
        {roadmapPhases.map((phase) => (
          <section key={phase.timeline} className="grid gap-5 py-8 md:grid-cols-[190px_1fr]">
            <div>
              <h2 className="text-2xl font-bold text-gray-950">{phase.timeline}</h2>
              <p className="font-nav mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#35224f]">{phase.range}</p>
            </div>
            <ul className="space-y-3 text-gray-700">
              {phase.goals.map((goal) => (
                <li key={goal} className="border-l border-gray-200 pl-4 leading-7">
                  {goal}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default GoalsPage;
