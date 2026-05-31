import React, { useState } from 'react';

const HomePage = () => {
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg) translateZ(0px)');
  const [glare, setGlare] = useState(
    'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.50), rgba(53,34,79,0.08) 22%, transparent 54%)'
  );
  const [isResting, setIsResting] = useState(true);

  const roleNodes = [
    'Software Engineering Intern: Tokyo Electron (TEL)',
    'Hardware Researcher: EPIC Lab (Hip Exoskeletons)',
    'Autonomous Robotics: Krabbi (500g Sumo Bot)',
  ];

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 14;
    const rotateX = -((y - centerY) / centerY) * 14;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setIsResting(false);
    setTransform(`rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(30px)`);
    setGlare(
      `radial-gradient(circle at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(255,255,255,0.70), rgba(53,34,79,0.14) 24%, transparent 56%)`
    );
  };

  const handleMouseLeave = () => {
    setIsResting(true);
    setTransform('rotateX(0deg) rotateY(0deg) translateZ(0px)');
    setGlare('radial-gradient(circle at 50% 50%, rgba(255,255,255,0.50), rgba(53,34,79,0.08) 22%, transparent 54%)');
  };

  return (
    <div className="flex min-h-[calc(100vh-7rem)] items-center justify-center px-5 py-12">
      <div className="w-full max-w-[30rem]" style={{ perspective: '1000px' }}>
        <section
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`relative h-[17rem] w-full overflow-hidden rounded-2xl border border-gray-300 bg-[#fafafa] p-6 shadow-[4px_4px_0px_#35224f] ${
            isResting ? 'transition-transform duration-300 ease-out' : ''
          }`}
          style={{
            transform,
            transformStyle: 'preserve-3d',
          }}
          aria-label="Interactive Raymond Wang business card"
        >
          <div className="pointer-events-none absolute inset-0 mix-blend-screen" style={{ background: glare }} />

          <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto_auto]">
            <div className="flex items-start justify-between gap-6">
              <div className="font-nav text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                DOC-REF: RW-2028
              </div>
              <div className="font-nav text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                STATUS: ACTIVE
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-2xl font-extrabold uppercase tracking-[0.22em] text-gray-950 md:text-3xl">
                Raymond Wang
              </h1>
              <p className="font-nav mt-4 text-[11px] font-semibold uppercase leading-5 tracking-[0.16em] text-gray-700">
                Electrical Engineering // CHEA & Robotics
              </p>
            </div>

            <div className="mb-4 grid gap-1.5">
              {roleNodes.map((role) => (
                <div key={role} className="font-nav text-[10px] font-semibold leading-4 text-[#35224f]">
                  &gt; {role}
                </div>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
              <div className="h-[2px] w-20 bg-[#35224f]" />
              <BarcodeMark />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const BarcodeMark = () => (
  <div className="grid h-12 w-28 grid-cols-12 gap-[3px]" aria-hidden="true">
    {[2, 8, 4, 10, 6, 12, 5, 9, 3, 11, 7, 4].map((height, index) => (
      <span
        key={`${height}-${index}`}
        className="self-end bg-[#35224f]"
        style={{ height: `${height * 4}px` }}
      />
    ))}
  </div>
);

export default HomePage;
