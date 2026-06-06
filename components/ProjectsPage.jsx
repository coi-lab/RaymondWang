import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const ProjectsPage = () => {
  const basePath = import.meta.env.BASE_URL;

  const publishData = [
    {
      id: 'levi-waluigi',
      date: 'In Progress',
      category: 'Robotics',
      title: 'Levi and Waluigi Sumo Robots',
      description:
        'Work in progress.',
      imageUrl: null,
      tags: ['Robotics', 'Autonomous Control', 'Sumo'],
    },
    {
      id: 'keyboard-price-watch',
      date: 'In Progress',
      category: 'Machine Learning',
      title: 'Keyboard Switch Price Watch',
      description:
        'Work in progress.',
      imageUrl: null,
      tags: ['Python', 'Pricing', 'Group Buys'],
    },
    {
      id: 'krabbi-2025',
      date: 'Fall 2025',
      category: 'Robotics',
      title: "500g Sumo Bot 'Krabbi': Flag robot",
      description:
        'Autonomous mini-sumo robot iteration focused on competition-ready behavior, sensor response, and robust edge-control for 500g RoboWrestling.',
      imageUrl: `${basePath}images/krabbi.jpg`,
      videoUrl: `${basePath}images/krabbiBrazil.mp4`,
      cadImageUrl: `${basePath}images/krabbiCAD.png`,
      pcbImageUrl: `${basePath}images/krabbiPCB.png`,
      tags: ['C++', 'KiCad', 'Arduino Uno', 'OnShape', '3D Printing'],
      details: {
        overview:
          'This discovery project was part of the build for the RoboJackets RoboWrestling team. The goal was to create a robot that could stay inside the dojo while finding and pushing an opposing robot out of bounds.',
        system:
          'An Arduino Uno controlled motor drivers, line sensors, IR sensors, and a custom PCB powered from a 12V battery with 5V regulation.',
        results: [
          'Kept the robot inside the dojo using line sensor feedback.',
          'Used IR sensors to locate and react to the opposing robot.',
          'Processed sensor data in real time with sub-50ms response targets.',
          'Reached Top 16 at the Florida MakerFaire tournament.',
        ],
      },
    },
    {
      id: 'krabbi',
      date: 'Fall 2024',
      category: 'Robotics',
      title: "500g Sumo Bot 'Luigi': Basic Bot",
      description:
        'Autonomous RoboWrestling platform using line sensors for ring detection and IR sensors for opponent tracking. The robot combines embedded control, custom PCB work, and mechanical design inside a compact competition platform.',
      imageUrl: `${basePath}images/smaller_vehicle_image.jpg`,
      videoUrl: `${basePath}images/main_video.mp4`,
      cadImageUrl: `${basePath}images/chassis_image.png`,
      pcbImageUrl: `${basePath}images/pcb_image.png`,
      tags: ['C++', 'KiCad', 'Arduino Uno', 'OnShape', '3D Printing'],
      details: {
        overview:
          'This discovery project was part of the build for the RoboJackets RoboWrestling team. The goal was to create a robot that could stay inside the dojo while finding and pushing an opposing robot out of bounds.',
        system:
          'An Arduino Uno controlled motor drivers, line sensors, IR sensors, and a custom PCB powered from a 12V battery with 5V regulation.',
        results: [
          'Kept the robot inside the dojo using line sensor feedback.',
          'Used IR sensors to locate and react to the opposing robot.',
          'Processed sensor data in real time with sub-50ms response targets.',
          'Reached Top 16 at the Florida MakerFaire tournament.',
        ],
      },
    },
  ];

  const [hoveredItem, setHoveredItem] = useState(publishData[0]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const selectedItem = publishData.find((item) => item.id === selectedItemId);

  if (selectedItem?.details) {
    return (
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <button
          type="button"
          onClick={() => setSelectedItemId(null)}
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-[#35224f]"
        >
          <ArrowLeft size={16} />
          Back to projects
        </button>

        <header className="border-b border-gray-200 pb-8">
          <p className="font-nav mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#35224f]">
            {selectedItem.category} / {selectedItem.date}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
            {selectedItem.title}
          </h1>
          <p className="mt-6 max-w-3xl leading-7 text-gray-700">{selectedItem.description}</p>
        </header>

        <section className="grid gap-10 border-b border-gray-200 py-10 md:grid-cols-[1.05fr_0.95fr]">
          <img src={selectedItem.imageUrl} alt={selectedItem.title} className="aspect-[4/3] w-full object-cover" />
          <div className="space-y-8">
            <div>
              <h2 className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">Overview</h2>
              <p className="mt-4 leading-7 text-gray-700">{selectedItem.details.overview}</p>
            </div>
            <div>
              <h2 className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">System</h2>
              <p className="mt-4 leading-7 text-gray-700">{selectedItem.details.system}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-b border-gray-200 py-10 md:grid-cols-[180px_1fr]">
          <h2 className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">Technical Work</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <figure>
              <img src={selectedItem.cadImageUrl} alt="Robot chassis CAD view" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="mt-3 text-sm text-gray-500">Mechanical CAD and chassis layout.</figcaption>
            </figure>
            <figure>
              <img src={selectedItem.pcbImageUrl} alt="Robot PCB design" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="mt-3 text-sm text-gray-500">Custom PCB and circuit routing.</figcaption>
            </figure>
          </div>
        </section>

        <section className="grid gap-10 py-10 md:grid-cols-[180px_1fr]">
          <h2 className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">Results</h2>
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
            <ul className="space-y-4 text-gray-700">
              {selectedItem.details.results.map((result) => (
                <li key={result} className="border-l border-gray-200 pl-4 leading-7">
                  {result}
                </li>
              ))}
            </ul>
            <video controls className="aspect-video w-full bg-black" src={selectedItem.videoUrl}>
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 md:py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">Projects</h1>
      </header>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(200px,24vw)] xl:grid-cols-[minmax(0,1fr)_320px]">
        <section>
          <div className="font-nav grid gap-3 pb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500 md:grid-cols-[110px_150px_minmax(0,1fr)] lg:grid-cols-[130px_180px_minmax(0,1fr)]">
            <div>Date</div>
            <div>Category</div>
            <div>Title</div>
          </div>

          <div className="border-t border-gray-200">
            {publishData.map((item) => {
              const isActive = hoveredItem.id === item.id;
              const isClickable = Boolean(item.details);

              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setHoveredItem(item)}
                  onFocus={() => setHoveredItem(item)}
                  onClick={() => isClickable && setSelectedItemId(item.id)}
                  className={`grid w-full gap-3 border-b border-gray-200 py-4 text-left transition-colors md:grid-cols-[110px_150px_minmax(0,1fr)] lg:grid-cols-[130px_180px_minmax(0,1fr)] ${
                    isActive ? 'text-[#35224f]' : 'text-gray-700'
                  } ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="text-sm leading-6 text-gray-600 md:text-[15px]">
                    {item.date}
                  </div>

                  <div className="text-sm leading-6 text-gray-600 md:text-[15px]">
                    {item.category}
                  </div>

                  <h2 className="text-sm font-medium leading-6 md:text-[15px]">{item.title}</h2>
                </button>
              );
            })}
          </div>
        </section>

        <aside className="hidden md:block">
          <div className="sticky top-20">
            <PreviewImage item={hoveredItem} />
          </div>
        </aside>
      </div>
    </div>
  );
};

const PreviewImage = ({ item }) => {
  if (item.imageUrl) {
    return (
      <img
        key={item.id}
        src={item.imageUrl}
        alt={item.title}
        className="aspect-square w-full max-w-[min(100%,20rem)] object-cover opacity-100 transition-opacity duration-300"
      />
    );
  }

  return (
    <div className="flex aspect-square w-full max-w-[min(100%,20rem)] items-center justify-center bg-[#35224f]">
      <div className="font-nav text-center text-xs font-semibold uppercase tracking-[0.24em] text-white">
        NO VISUAL DATA
      </div>
    </div>
  );
};

export default ProjectsPage;
