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
    <div className="mx-auto max-w-5xl px-5 pb-10 pt-4 md:pb-12 md:pt-6">
      <section className="p-6 md:p-8">
      <header className="pb-7">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Achievements</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">Awards</h1>
      </header>

      <div>
        {awards.map((award) => (
          <article key={`${award.title}-${award.year}`} className="grid gap-5 py-8 md:grid-cols-[190px_1fr]">
            <aside className="text-sm font-semibold text-white/70">
              <p>{award.year}</p>
              <p className="mt-2 text-white/85">{award.org}</p>
            </aside>
            <div>
              <h2 className="font-display text-2xl font-bold text-white">{award.title}</h2>
              <p className="mt-3 leading-7 text-white/85">{award.description}</p>
            </div>
          </article>
        ))}
      </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
