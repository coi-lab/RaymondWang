import React from 'react';

const AchievementsPage = () => {
  const awards = [
    {
      title: 'Nationals 4th Place Medal in Flight',
      org: 'Science Olympiad',
      year: '2024',
      description:
        'Built and tuned lightweight aircraft with careful control of structure, trim, and rubber power.',
    },
    {
      title: 'Nationals 3rd Place Medal in Flight',
      org: 'Science Olympiad',
      year: '2023',
      description:
        'Competed nationally with custom-built planes made from extremely light and fragile materials.',
    },
    {
      title: 'Nationals 4th Place Medal in Air Trajectory',
      org: 'Science Olympiad',
      year: '2024',
      description: 'Designed and tuned a projectile system for high accuracy across target distances.',
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 md:py-16">
      <header className="border-b border-gray-200 pb-8">
        <p className="font-nav mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#35224f]">Achievements</p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">Awards</h1>
      </header>

      <div className="divide-y divide-gray-200">
        {awards.map((award) => (
          <article key={`${award.title}-${award.year}`} className="grid gap-5 py-8 md:grid-cols-[190px_1fr]">
            <aside className="font-nav text-xs font-semibold uppercase tracking-[0.16em] text-[#35224f]">
              <p>{award.year}</p>
              <p className="mt-2 text-gray-500">{award.org}</p>
            </aside>
            <div>
              <h2 className="text-2xl font-bold text-gray-950">{award.title}</h2>
              <p className="mt-3 leading-7 text-gray-700">{award.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;
