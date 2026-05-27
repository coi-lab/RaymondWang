import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const HomePage = ({ changePage }) => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <section className="grid gap-10 border-b border-gray-200 pb-12 md:grid-cols-[220px_1fr] md:gap-16">
        <div>
          <img
            src={`${basePath}images/pfpimage.jpg`}
            alt="Raymond Wang"
            className="aspect-square w-44 object-cover md:w-full"
          />
        </div>

        <div className="max-w-3xl">
          <p className="font-nav mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#35224f]">
            Computer Engineering at Georgia Tech
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
            Raymond Wang
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
            I build across robotics, machine learning, embedded systems, and web tools. My work is
            usually hands-on: turning sensors, boards, models, and code into things that move,
            measure, or help people understand a problem better.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => changePage('projects')}
              className="inline-flex items-center gap-2 px-0 py-2 text-sm font-semibold text-[#35224f] underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              View Projects
              <ArrowUpRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => changePage('resume')}
              className="inline-flex items-center gap-2 px-0 py-2 text-sm font-semibold text-gray-700 underline underline-offset-4 transition-colors hover:text-[#35224f]"
            >
              Resume
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-8 py-10 md:grid-cols-3">
        {[
          ['Focus', 'Robotics, embedded systems, machine learning, and practical engineering.'],
          ['Current Work', 'RoboWrestling hardware, sensor integration, PCB design, and controls.'],
          ['Background', 'Research, teaching, technical competitions, and project-based learning.'],
        ].map(([title, copy]) => (
          <div key={title} className="border-t border-gray-200 pt-5">
            <h2 className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">{copy}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
