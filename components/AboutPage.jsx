import React from 'react';

const AboutPage = () => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <section className="grid gap-10 border-b border-gray-200 pb-12 md:grid-cols-[220px_1fr] md:gap-16">
        <div>
          <img
            src={`${basePath}images/about/pfpimage.jpg`}
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
          <div className="mt-8 space-y-6 text-lg leading-8 text-gray-700">
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
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
