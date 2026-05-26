import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const ProjectsPage = () => {
  const basePath = import.meta.env.BASE_URL;
  const [selectedProject, setSelectedProject] = useState(null);

  const technologies = ['C++', 'KiCad', 'Arduino Uno', 'OnShape', '3D Printing'];
  const results = [
    'Kept the robot inside the dojo using line sensor feedback.',
    'Used IR sensors to locate and react to the opposing robot.',
    'Processed sensor data in real time with sub-50ms response targets.',
    'Reached Top 16 at the Florida MakerFaire tournament.',
  ];

  const projectTemplates = [
    {
      id: 'robot',
      title: 'Autonomous Robot Platform',
      subtitle: 'RoboWrestling competition robot',
      summary:
        'A compact RoboWrestling platform built around sensor fusion, custom electronics, and mechanical design for autonomous sumo-style competition.',
      image: `${basePath}images/smaller_vehicle_image.jpg`,
      available: true,
    },
    {
      id: 'template-1',
      title: 'Project Title',
      subtitle: 'Short project description',
      summary: 'Add a short project summary here.',
      image: null,
      available: false,
    },
    {
      id: 'template-2',
      title: 'Project Title',
      subtitle: 'Short project description',
      summary: 'Add a short project summary here.',
      image: null,
      available: false,
    },
  ];

  if (selectedProject === 'robot') {
    return (
    <div className="mx-auto max-w-6xl px-5 pb-10 pt-4 md:pb-12 md:pt-6">
        <button
          type="button"
          onClick={() => setSelectedProject(null)}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 transition-opacity hover:opacity-75"
        >
          <ArrowLeft size={16} />
          Back to projects
        </button>

        <header className="mb-6 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Project Details
              </p>
              <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                Autonomous Robot Platform
              </h1>
              <p className="mt-3 text-sm font-semibold text-white/70">Fall 2024</p>
            </div>

            <div className="md:min-w-[280px]">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Tools</h2>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-semibold text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <article className="p-6 md:p-8">
          <section className="pb-8">
            <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
              <img
                src={`${basePath}images/smaller_vehicle_image.jpg`}
                alt="Autonomous robot platform"
                className="aspect-[4/3] w-full rounded-sm object-cover"
              />

              <div className="space-y-7">
                <div>
                  <h2 className="font-display text-2xl font-bold text-white">Overview</h2>
                  <p className="mt-3 leading-7 text-white/85">
                    This discovery project was part of the build for the RoboJackets RoboWrestling
                    team. The goal was to create a robot that could stay inside the dojo while finding
                    and pushing an opposing robot out of bounds.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-white">System</h2>
                  <p className="mt-3 leading-7 text-white/85">
                    An Arduino Uno controlled motor drivers, line sensors, IR sensors, and a custom
                    PCB powered from a 12V battery with 5V regulation. I worked on the electronics and
                    mechanical integration with the team.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-8 py-8 md:grid-cols-[190px_1fr]">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Technical Work
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <figure>
                <img
                  src={`${basePath}images/chassis_image.png`}
                  alt="Robot chassis CAD view"
                  className="aspect-[4/3] w-full rounded-sm object-cover"
                />
                <figcaption className="mt-3 text-sm font-semibold text-white/75">Mechanical CAD and chassis layout.</figcaption>
              </figure>

              <figure>
                <img
                  src={`${basePath}images/pcb_image.png`}
                  alt="Robot PCB design"
                  className="aspect-[4/3] w-full rounded-sm object-cover"
                />
                <figcaption className="mt-3 text-sm font-semibold text-white/75">Custom PCB and circuit routing.</figcaption>
              </figure>
            </div>
          </section>

          <section className="grid gap-8 py-8 md:grid-cols-[190px_1fr]">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Results</h2>

            <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
              <ul className="space-y-3 text-white/85">
                {results.map((result) => (
                  <li key={result} className="px-4 py-3 leading-7">
                    {result}
                  </li>
                ))}
              </ul>

              <video
                controls
                className="aspect-video w-full rounded-sm bg-black"
                src={`${basePath}images/main_video.mp4`}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
        </article>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5 pb-10 pt-4 md:pb-12 md:pt-6">
      <p className="mb-4 px-4 py-2 text-sm font-semibold text-white/80 md:inline-block">
        Click a project image to view more details.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {projectTemplates.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => project.available && setSelectedProject(project.id)}
            disabled={!project.available}
            className={`group text-left ${project.available ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm transition-transform duration-300 group-hover:-translate-y-0.5">
              {project.image ? (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 flex items-end bg-[#35224f]/0 p-6 opacity-0 transition-all duration-300 group-hover:bg-[#35224f]/85 group-hover:opacity-100">
                    <div className="max-w-[90%]">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                        {project.title}
                      </p>
                      <p className="text-base font-medium leading-7 text-white">{project.summary}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex h-full w-full items-center justify-center text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                    Add Image
                  </div>
                  <div className="absolute inset-0 flex items-end bg-[#35224f]/0 p-6 opacity-0 transition-all duration-300 group-hover:bg-[#35224f]/85 group-hover:opacity-100">
                    <div className="max-w-[90%]">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                        {project.title}
                      </p>
                      <p className="text-base font-medium leading-7 text-white">{project.summary}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
