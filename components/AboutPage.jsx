import React from 'react';

const AboutPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-10 pt-4 md:pb-12 md:pt-6">
      <section className="p-6 md:p-8">
        <header className="pb-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">About</p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">About Me</h1>
        </header>

        <div className="space-y-7 pt-7 text-lg leading-8 text-white/85">
          <p>
            I'm a Computer Engineering student at Georgia Tech, driven by curiosity and a desire to
            solve practical problems through technology. My interest in engineering started with
            taking things apart, figuring out how they worked, and slowly learning how to build my
            own.
          </p>
          <p>
            I am especially interested in robotics, machine learning, and hardware systems. I like
            projects where the work crosses boundaries: circuits, software, mechanical design, data,
            and testing all feeding into the same final result.
          </p>
          <p>
            Outside of academics, I follow F1, play volleyball, and spend a lot of time learning from
            side projects and technical videos. I try to bring that same mix of focus and curiosity
            into the teams and projects I work on.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
