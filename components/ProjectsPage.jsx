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
      category: 'Coding Project',
      title: 'Keyboard Switch Price Tracker to an Automated AI Data Pipeline',
      description:
        'A Python-based tracker for monitoring keyboard switch prices, storing historical listings, and experimenting with ML-driven price analysis.',
      imageUrl: `${basePath}images/keyboard-switch-price-tracker/hoverSwitchWatcher.png`,
      tags: ['Python', 'Data Pipelines', 'Machine Learning'],
      details: {
        layout: 'blog',
        intro: [
          'The original idea was to implement a website that price checks different mechanical keyboard items across the internet.',
          'I was inspired to do this project through Linus Tech Tips videos on different general price trackers that didnt quite fulfill what we needed out of a price checking tool. Here is the link: https://www.youtube.com/watch?v=1wEDXpc5m6A.',
          'In the midst of this video however, at GoogleIO they announced the univeral cart which would allow users to track and keep track of different items across the internet. So here I am thinking about how I could twist this project into something new. I realized that through a past hobby of mine keyboard building used a lot of niche websites and was quite hard to keep track of anything really.',
          'So let us begin with the first step. '
        ],
        sections: [
          {
            eyebrow: 'AI???',
            title: 'Architecting the AI Workflow',
            body: [
              'Taking this project a way to learn and utilize AI properly I began with setting a the proper filesystem to utilize Codex properly. ',
              'I began first with a dedicated prompts/ directory to manage all generations. This taught me some imporant lessons on managing AI context.',
              'Hierarchical Agentic Memory and Self Improving Notebooks: using a project-skills.md file to as a the AIs memory. Updating as new rules are learned, continuosly improving.',
              'Memory Compression and T-shirt sized Prompting: In using so many tokens while prompting I realized I need to compress the memoery and break tasks down to save Codexs time and to keep it locked in.'
            ],
            imageUrl: `${basePath}images/keyboard-switch-price-tracker/fileSystemMechWatcher.png`,
            caption: 'File structure used for Hierarchical Agentic Memory and prompt management. The project-skills.md file is used as the AI memory, updated with new learnings and rules.',
          },
          {
            eyebrow: 'Price History',
            title: 'Scraping that Web and Storing that Data',
            body: [
              'Now we move on to the grunt work of the project, web scraping and data storage. I quickly realized through scraping my second website that I had to make some kind of main function that all these scrapers could reference in order to efficiently scrape multiple of these niche keybaord websites. Thus the Core Engine came to be to handle the SQLite database, and the rest neing serperate modular scrapers for vendros like KBDFans, CannonKeys, and DiviniKeys.',
              'A couple things I faced along the way though. Scraping became more and more hard and time consuming, inspecting HTML would not cut it.',
              'The JSON-First Approach'
            ],
              
            imageUrl: `${basePath}images/keyboard-switch-price-tracker/hoverSwitchWatcher.png`,
            caption: 'Template image slot for the historical price graph UI.',
          },
          {
            eyebrow: 'Modeling',
            title: 'Exploring prediction and anomaly detection',
            body:
              'The ML layer is designed as an experiment space for predicting likely price ranges and flagging listings that differ sharply from recent market behavior.',
            imageUrl: `${basePath}images/keyboard-switch-price-tracker/hoverSwitchWatcher.png`,
            caption: 'Template image slot for model results, feature importance, or evaluation notes.',
          },
        ],
      },
    },
    {
      id: 'krabbi-2025',
      date: 'Fall 2025',
      category: 'Robotics',
      title: "500g Mini-Sumo Bot 'Krabbi': Flag robot",
      description:
        'New and improved 500g Robowrestling bot, using an STM32, IMU, servos (flag mechanism). The robot combines embedded control, custom PCB work, and strategic learning from the previous 500g Luigi.',
      imageUrl: `${basePath}images/krabbi-2025/krabbi.jpg`,
      videoUrl: `${basePath}images/krabbi-2025/krabbiBrazil.mp4`,
      cadImageUrl: `${basePath}images/krabbi-2025/krabbiCAD.png`,
      pcbImageUrl: `${basePath}images/krabbi-2025/krabbiPCB.png`,
      tags: ['C++', 'KiCad', 'BlackPill (STM32)', 'Rapid Prototyping', 'IMU Sensors'],
      details: {
        overview:
          'Just like Luigi, Krabbi is a 500g sumo bot designed for the RoboJackets RoboWrestling team,. The objective? To push the opponents bot outside of the Dohyo. With this iteration, we took our learnings from Luigi and various other robots to integrate a flag mechanis, and utilize an IMU (something that no other team in the club was implementing). The flag mechanism allowed for the bot to trick the opponents bot to run into the flags like a matador and their bull. We implemented the IMU to detect collisions with the opponents bots allowing us to increase our speed temporarily to get under the oppnents bot. ',
        system:
          'A custom PCB with a STM32 BlackPill microcontroller controlled motor drives, line sensors, IR sensors, an IMU, and a servo. The robot is powered from a 12V battery with a 5V regulator for the sensor and a 5V regulator for the servos. ',
        results: [
          'Top 3 Placement at RacketJacket in Atlanta, Georgia',
          'Top 16 at RSM Internation in Sao Paulo, Brazil',
        ],
      },
    },
    {
      id: 'krabbi',
      date: 'Fall 2024',
      category: 'Robotics',
      title: "500g Sumo Bot 'Luigi': Basic Bot",
      description:
        'Autonomous Mini-Sumo 500g bot built for the RoboJackets RoboWrestling team. The bot uses an Arduino Uno with an array of ir sensors and line sensors to autonomously detect the enemy bot and push them outside of the dohyo.',
      imageUrl: `${basePath}images/luigi-2024/smaller_vehicle_image.jpg`,
      videoUrl: `${basePath}images/luigi-2024/main_video.mp4`,
      cadImageUrl: `${basePath}images/luigi-2024/chassis_image.png`,
      pcbImageUrl: `${basePath}images/luigi-2024/pcb_image.png`,
      tags: ['C++', 'KiCad', 'Arduino Uno', 'OnShape', '3D Printing'],
      details: {
        overview:
          'This was the first iteration of our 500g sumo bot, with the most simple sensors and PCB design as a way of learning the fundamentals. ',
        system:
          'An Arduino Uno controlled motor drivers, line sensors, IR sensors, and a custom PCB powered from a 12V battery with 5V regulation.',
        results: [
          'Top 8 placeement at Florida Makerfaire, in Orlando, Florida.',
        ],
      },
    },
  ];

  const [hoveredItem, setHoveredItem] = useState(publishData[0]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const selectedItem = publishData.find((item) => item.id === selectedItemId);

  if (selectedItem?.details?.layout === 'blog') {
    return (
      <div className="mx-auto max-w-5xl px-5 py-10 md:py-14">
        <button
          type="button"
          onClick={() => setSelectedItemId(null)}
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-[#35224f]"
        >
          <ArrowLeft size={16} />
          Back to projects
        </button>

        <article>
          <header className="border-b border-gray-200 pb-8">
            <p className="font-nav mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#35224f]">
              {selectedItem.category} / {selectedItem.date}
            </p>
            <div className="grid gap-8 md:grid-cols-[1fr_180px] md:items-start">
              <div>
                <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
                  {selectedItem.title}
                </h1>
                <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-gray-700">
                  {(Array.isArray(selectedItem.details.intro)
                    ? selectedItem.details.intro
                    : [selectedItem.details.intro]
                  ).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <img
                src={selectedItem.imageUrl}
                alt={`${selectedItem.title} icon`}
                className="aspect-square w-32 object-contain md:ml-auto md:w-full"
              />
            </div>
          </header>

          <div className="divide-y divide-gray-200">
            {selectedItem.details.sections.map((section) => (
              <section key={section.title} className="grid gap-8 py-10 md:grid-cols-[1fr_1.15fr] md:items-start">
                <figure className="md:sticky md:top-20">
                  <img src={section.imageUrl} alt={section.title} className="aspect-[4/3] w-full object-contain bg-gray-50" />
                  <figcaption className="mt-3 text-sm leading-6 text-gray-500">{section.caption}</figcaption>
                </figure>
                <div>
                  <p className="font-nav mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">
                    {section.eyebrow}
                  </p>
                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-950 md:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-5 leading-7 text-gray-700">{section.body}</p>
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    );
  }

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
