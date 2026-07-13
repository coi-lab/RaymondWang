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
        tldr: {
          summary:
            'I built a Python system that scrapes mechanical keyboard switch listings from niche vendors, normalizes inconsistent product names and pack sizes, stores price history in SQLite, and displays the results in a Flask interface.',
          highlights: [
            'A shared Core Engine supports modular scrapers for vendors including KBDFans, CannonKeys, and Divinikey.',
            'The scrapers prefer APIs and server-rendered JSON, handle different pagination systems, and use rate limits to avoid overwhelming vendor sites.',
            'Fuzzy matching, conflict dictionaries, regular expressions, and quantity normalization turn inconsistent listings into comparable per-switch prices.',
            'GitHub Actions runs the collection workflow daily, building a historical dataset for future price prediction, anomaly detection, and trend analysis.',
          ],
        },
        intro: [
          'The original idea was to build a website that checks the prices of mechanical keyboard products across the internet.',
          'I was inspired by a Linus Tech Tips video about general price trackers that did not quite fulfill what we needed from a price-checking tool. Here is the video: https://www.youtube.com/watch?v=1wEDXpc5m6A.',
          'Around the same time, Google I/O announced a universal shopping cart that would help users track products across the internet. That made me think about how I could give this project a more specific purpose. Mechanical keyboard building, a past hobby of mine, relies on many niche websites, which makes products and prices difficult to track.',
          'So, let us begin with the first step.'
        ],
        conclusion: [
          'This project started as a simple price checker, but it turned into a much larger lesson in scraping, data cleaning, automation, and working with AI as a coding partner.',
          'The biggest takeaway was that the hard part was not just collecting data. It was making messy real-world product names, quantities, prices, and vendor structures consistent enough to trust.',
          'From here, the next step is to keep building the historical dataset and use it as the foundation for better price prediction, anomaly detection, and trend analysis. So I will see you next time when I collect enough data to pull this off.',
          'For now, on to the next project ->'
        ],
        sections: [
          {
            eyebrow: 'AI???',
            title: 'Architecting the AI Workflow',
            body: [
              'I used this project as a way to learn how to work with AI effectively, beginning with a file structure that gave Codex the right context.',
              'I started with a dedicated prompts/ directory to manage generated instructions. This taught me several important lessons about managing AI context.',
              'Hierarchical agentic memory and self-improving notebooks: I use a project-skills.md file as the AI\'s memory, updating it as new rules are learned so the workflow can continuously improve.',
              'Memory compression and T-shirt-sized prompting: after using too many tokens in broad prompts, I learned to compress the memory and break work into smaller tasks so Codex can stay focused.'
            ],
            imageUrl: `${basePath}images/keyboard-switch-price-tracker/fileSystemMechWatcher.png`,
            caption: 'File structure used for Hierarchical Agentic Memory and prompt management. The project-skills.md file is used as the AI memory, updated with new learnings and rules.',
          },
          {
            eyebrow: 'Price History',
            title: 'Scraping that Web and Storing that Data',
            body: [
              'Next came the grunt work: web scraping and data storage. By the second website, I realized that the scrapers needed a shared core to handle common work efficiently across niche keyboard vendors. The Core Engine now manages the SQLite database, while separate modular scrapers handle vendors such as KBDFans, CannonKeys, and Divinikey.',
              'I faced several challenges along the way. Scraping became increasingly difficult and time-consuming, and inspecting raw HTML was not always enough.',
              'The JSON-first approach: many websites use Shopify and expose useful JSON objects behind the page. I shifted the scrapers to look for APIs and server-side-rendered data first, falling back to raw HTML parsing when needed.',
              'Pagination and API cursors: not every site uses a simple ?page=2 URL. The scrapers needed logic to follow API cursors and infinite-scroll controls to collect a complete catalog.',
              'Ethical rate limiting: after receiving 429 Too Many Requests errors, I reduced the request rate and added delays between requests.'
            ],
              
            imageUrl: `${basePath}images/keyboard-switch-price-tracker/vendorsLivePrices.png`,
            caption: 'The result of daily scraping across multiple vendors',
          },
          {
            eyebrow: 'the hard stuff (data engineering)',
            title: 'Sorting Switch Names and Identifying Quantities',
            body:[
              'I realized that scraping was not even most of the work. The harder problem was combining data from multiple vendors, identifying equivalent switches, and normalizing quantities. Slightly different product names prevented matching, while inconsistent pack sizes produced absurd per-switch prices.',
              'Fuzzy string matching: using thefuzz library and its token_set_ratio algorithm, I could estimate whether names such as Gateron Milky Yellow and Gateron Milky Yellow 2.0 referred to the same switch family.',
              'The subset trap and conflict dictionaries: with each matching error, I built a mutually exclusive conflict dictionary to prevent the algorithm from merging switches that only sounded similar. These rules distinguish tactile from linear switches and separate different colors, flowers, flavors, or whatever theme a manufacturer chose.',
              'Regex and unit-price conversion: I wanted to show the price per switch, but pack quantities proved unexpectedly difficult to extract. I developed vendor-specific quantity rules, then used regular expressions to find pack sizes and automatically convert each listing to a per-switch price.'
            ],
            imageUrl: `${basePath}images/keyboard-switch-price-tracker/pinnedHistoricalTrends.png`,
            caption: 'Live graphs of updated switch prices alongside the pinning feature for switches to watch.',
          },
          {
            eyebrow: 'Good stuff for the eyeballs',
            title: 'Frontend and Cloud Automation',
            body:[
              'Flask and AJAX front end: I built a local web interface using Python and Flask. A three-column design keeps the large amount of information from cluttering the screen.',
              'GitHub Actions workflow: to collect daily data for a future market-prediction model, I learned to set up a GitHub Actions workflow that starts an Ubuntu runner at 4:00 a.m., runs the scrapers, and pushes the updated data back to the repository.',
              'Git version control: I had used Git before, but this project gave me a deeper understanding after I encountered merge conflicts between local updates and GitHub Actions changes to the database file.'
            ],
            imageUrl: `${basePath}images/keyboard-switch-price-tracker/workFlows.png`,
            caption: 'The daily scraping workflow running through GitHub Actions.',
          },
        ],
      },
    },
    {
      id: 'semipipeline',
      date: 'In Progress',
      category: 'Machine Learning',
      title: 'SemiPipeline: Semiconductor Failure Detection',
      description:
        'A notebook-based machine learning project using SECOM manufacturing sensor data to detect rare failed wafer runs with leakage-aware preprocessing, XGBoost, feature selection, and PySpark auditing.',
      imageUrl: null,
      tags: ['Python', 'XGBoost', 'scikit-learn', 'PySpark', 'Manufacturing Data'],
      details: {
        layout: 'case-study',
        tldr: {
          summary:
            'I am building a leakage-aware machine learning pipeline that uses 592 SECOM manufacturing measurements to detect rare failed wafer runs. The main challenge is class imbalance: only 104 of 1,567 examples are failures.',
          highlights: [
            'Cleaning removed 144 constant or heavily missing sensor columns, leaving 448 features; PySpark reproduced the same result as pandas.',
            'The pipeline uses train-only preprocessing, KNN imputation, scaling, feature selection, class-weighted XGBoost, and validation-based threshold tuning.',
            'Unlike the 93%-accurate baseline that detected no failures, the current test result catches failures with 0.24 precision and 0.38 recall.',
            'Next steps include reusable scripts, model comparisons, safer PySpark row alignment, and cost-based threshold selection.',
          ],
        },
        overview:
          'This project began with a question: can hundreds of semiconductor sensor readings warn us when a wafer run is likely to fail? I am using the SECOM dataset to work through that question one stage at a time. The difficult part is not getting a high accuracy score. Because only 104 of the 1,567 runs failed, a model can appear accurate by predicting that every run will pass. The real goal is to catch useful failure signals without creating an overwhelming number of false alarms.',
        researchQuestion:
          'Can sensor data from semiconductor manufacturing runs be used to detect failed wafer runs with useful precision and recall, despite class imbalance and missing sensor values?',
        methodology: [
          'First came the data cleanup. I combined the raw sensor readings with their pass/fail labels, converted the labels to 0 and 1, and audited the hundreds of anonymous sensor columns. Removing columns that were constant or more than 50% empty reduced the dataset from 592 to 448 columns.',
          'Next, I rebuilt the modeling workflow to reduce data leakage. The data is separated into training, validation, and test sets before preprocessing, so the imputer, scaler, and feature selector learn only from the training data.',
          'For the current model, I use MinMaxScaler, KNNImputer, feature selection, and XGBoost in a scikit-learn Pipeline. Class weighting helps the model pay attention to rare failures, while average precision gives a more honest view of performance than accuracy alone.',
          'I also tune the decision threshold on validation data. Instead of accepting the default 0.5 cutoff, I compare precision and recall to find a more useful balance between missed failures and false alarms.',
          'Finally, I started reproducing the cleaning workflow in PySpark. The distributed audit found the same 144 dead or heavily missing columns and reached the same cleaned shape as the pandas workflow.',
        ],
        metrics: [
          ['Rows', '1,567'],
          ['Raw columns', '592'],
          ['Cleaned columns', '448'],
          ['Fail examples', '104'],
          ['Test accuracy', '0.88'],
          ['Fail precision / recall', '0.24 / 0.38'],
          ['Average precision', '0.2488'],
        ],
        results: [
          'The first XGBoost baseline reached about 93% accuracy, which looked promising until I saw that it predicted zero failures. That result made the central lesson of the project clear: accuracy is misleading when one class is this rare.',
          'The current leakage-aware pipeline has started catching failed runs. On the isolated test set, it reached 0.24 failure-class precision, 0.38 recall, a 0.29 F1-score, and 0.2488 average precision. These numbers are still modest, but they represent real progress over a model that never detects a failure.',
          'The preprocessing, feature selection, threshold tuning, and XGBoost model are now stored as a single scikit-learn Pipeline. I serialized the current version as secom_xgboost_production_v1.pkl so it can be loaded for future experiments.',
          'The project is not finished. My next steps are to move repeated notebook code into reusable scripts, compare additional models, improve PySpark row alignment, and define the real cost tradeoff between a false alarm and a missed wafer failure.',
        ],
        visuals: [
          {
            title: 'SECOM class balance and missing-data audit',
            note: 'Add a chart showing the 1,463 pass samples versus 104 failure samples, together with the sensor missing-value distribution.',
          },
          {
            title: 'Validation precision-recall curve',
            note: 'Add the threshold-tuning plot used to choose the current balance between failure precision and recall.',
          },
          {
            title: 'Current model results',
            note: 'Add a confusion matrix or notebook result showing how many failed wafer runs the current pipeline catches and misses.',
          },
        ],
        limitations: [
          'The dataset is highly imbalanced, with only 104 failure examples.',
          'The saved model is a learning artifact, not a production manufacturing system.',
          'Some exploratory notebook cells use older approaches that were later improved.',
          'The PySpark notebook still needs safer row alignment instead of relying on monotonically_increasing_id().',
        ],
      },
    },
    {
      id: 'krabbi-2025',
      date: 'Fall 2025',
      category: 'Robotics',
      title: "500g Mini-Sumo Bot 'Krabbi': Flag Robot",
      description:
        'A 500 g RoboWrestling bot that improves on Luigi with a geared, single-servo flag mechanism, collision-aware acceleration, an STM32 control system, and multiple match strategies.',
      imageUrl: `${basePath}images/krabbi-2025/krabbi.jpg`,
      videoUrl: `${basePath}images/krabbi-2025/krabbiBrazil.mp4`,
      cadImageUrl: `${basePath}images/krabbi-2025/krabbiCAD.png`,
      pcbImageUrl: `${basePath}images/krabbi-2025/krabbiPCB.png`,
      tags: ['C++', 'KiCad', 'BlackPill (STM32)', 'Rapid Prototyping', 'IMU Sensors'],
      details: {
        tldr: {
          summary:
            'Krabbi improves on Luigi with two sensor-decoy flags driven by one geared servo, an STM32 control system, and IMU-based collision detection that triggers full acceleration only after the front blade reaches an opponent.',
          highlights: [
            'Testing showed that accelerating too early can lift a robot\'s front edge, so Krabbi approaches carefully and accelerates after detecting contact.',
            'Swerving moves the flags across an opponent\'s sensors, while sentry mode tracks passively and commits after blade engagement.',
            'Major problems included a repeatedly burned line-sensor pin, slow IMU processing that may have delayed other sensors, and a front plate that could trap opponents above the blade.',
            'Krabbi earned a top-three placement at RacketJacket and reached the top 16 at RSM International in São Paulo.',
          ],
        },
        overview:
          'Krabbi is a 500 g sumo bot designed for the RoboJackets RoboWrestling team. We began with the goal of improving on Luigi by adding flags that could misdirect an opponent\'s sensors. What set our design apart was a geared mechanism that allowed one servo to operate both flags. We also added an IMU so the robot could recognize a collision and change its behavior during a match.',
        system:
          'A custom PCB with an STM32 BlackPill microcontroller controls the motor drivers, line sensors, IR sensors, IMU, and the single servo connected to both flags. A 12 V battery powers the robot, with separate 5 V regulators for the sensors and servo.',
        sections: [
          {
            title: 'Turning IMU Data into Collision Detection',
            body: [
              'Our first difficulty with the IMU was realizing that accurate orientation estimates normally require combining data from its accelerometer, gyroscope, and magnetometer. That full sensor-fusion approach was more computation than this match behavior needed.',
              'Instead, we focused on forward and backward acceleration. A sudden, strong negative acceleration indicates that Krabbi has struck another robot. Once that collision is detected and the front blade is likely underneath the opponent, Krabbi accelerates to complete the push.',
            ],
          },
          {
            title: 'Rethinking Speed and Match Strategy',
            body: [
              'We initially believed that maximum speed and power were the most important advantages: hit the opponent hard, get underneath it, and keep driving. Testing showed a weakness in that approach. Many robots lift at the front under hard acceleration, allowing a slower opponent with a lower blade to get underneath first.',
              'That discovery led to a more controlled strategy. Krabbi approaches more slowly, waits until contact and blade engagement, and then uses collision detection to trigger its acceleration. The hardware also enabled multiple behaviors. A left-right swerving mode moves the flags across the opponent\'s view, while a passive sentry mode tracks the opposing robot and commits to full speed only after Krabbi gets underneath it.',
            ],
          },
          {
            title: 'Electrical and Processing Problems',
            body: [
              'One line-sensor pin repeatedly burned out. Our leading suspicion is that a 5 V signal was reaching a 3.3 V receiver, although that does not yet explain why only one sensor was affected. Because the cause has not been confirmed, this remains an electrical issue to isolate and test.',
              'The STM32 was also performing too many IMU calculations. We tried a Kalman filter to reduce noise, but the IMU response remained slow. Our current hypothesis is that this workload delayed the IR and line-sensor updates. In RoboWrestling, those delays matter because every sensor and control decision must react quickly.',
            ],
          },
          {
            title: 'Mechanical Lessons',
            body: [
              'The front plate created another failure mode. Even when Krabbi got underneath an opponent, the other robot could become stuck between the blade and the plate. That interference effectively canceled the advantage of our low blade tolerance and showed that getting underneath an opponent is only useful if the chassis guides it cleanly upward.',
            ],
          },
        ],
        results: [
          'Top-three placement at RacketJacket in Atlanta, Georgia.',
          'Top 16 at RSM International in São Paulo, Brazil.',
        ],
      },
    },
    {
      id: 'krabbi',
      date: 'Fall 2024',
      category: 'Robotics',
      title: "500g Sumo Bot 'Luigi': Basic Bot",
      description:
        'An autonomous 500 g mini-sumo bot built for the RoboJackets RoboWrestling team. The bot uses an Arduino Uno with an array of IR and line sensors to detect the opposing robot and push it outside the dohyo.',
      imageUrl: `${basePath}images/luigi-2024/smaller_vehicle_image.jpg`,
      videoUrl: `${basePath}images/luigi-2024/main_video.mp4`,
      cadImageUrl: `${basePath}images/luigi-2024/chassis_image.png`,
      pcbImageUrl: `${basePath}images/luigi-2024/pcb_image.png`,
      tags: ['C++', 'KiCad', 'Arduino Uno', 'OnShape', '3D Printing'],
      details: {
        overview:
          'This was the first iteration of our 500 g sumo bot. We used a simple sensor array and PCB design to learn the fundamentals.',
        system:
          'An Arduino Uno controls the motor drivers, line sensors, and IR sensors through a custom PCB. A 12 V battery powers the robot, with 5 V regulation for the electronics.',
        results: [
          'Top-eight placement at the Florida Maker Faire in Orlando, Florida.',
        ],
      },
    },
  ];

  const [hoveredItem, setHoveredItem] = useState(publishData[0]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isTldr, setIsTldr] = useState(false);
  const selectedItem = publishData.find((item) => item.id === selectedItemId);
  const closeProject = () => {
    setSelectedItemId(null);
    setIsTldr(false);
  };
  const renderParagraphs = (content, className) => (
    <div className={className}>
      {(Array.isArray(content) ? content : [content]).map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );

  if (selectedItem?.details?.tldr && isTldr) {
    return (
      <div className="mx-auto max-w-5xl px-5 py-10 md:py-14">
        <ProjectToolbar onBack={closeProject} isTldr={isTldr} onToggle={() => setIsTldr(false)} />

        <article>
          <header className="grid gap-8 border-b border-gray-200 pb-8 md:grid-cols-[minmax(0,1fr)_240px] md:items-start">
            <div>
              <p className="font-nav mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#35224f]">
                {selectedItem.category} / {selectedItem.date} / TL;DR
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
                {selectedItem.title}
              </h1>
            </div>
            {selectedItem.imageUrl && (
              <img
                src={selectedItem.imageUrl}
                alt={`${selectedItem.title} preview`}
                className="aspect-square w-full object-cover"
              />
            )}
          </header>

          <section className="grid gap-8 py-10 md:grid-cols-[150px_1fr]">
            <h2 className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">In Short</h2>
            <div>
              <p className="max-w-3xl text-xl leading-8 text-gray-800">{selectedItem.details.tldr.summary}</p>
              <ul className="mt-8 space-y-4 text-gray-700">
                {selectedItem.details.tldr.highlights.map((highlight) => (
                  <li key={highlight} className="border-l-2 border-[#6d43a3] pl-5 leading-7">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </div>
    );
  }

  if (selectedItem?.details?.layout === 'blog') {
    return (
      <div className="mx-auto max-w-5xl px-5 py-10 md:py-14">
        <ProjectToolbar onBack={closeProject} isTldr={isTldr} onToggle={() => setIsTldr(true)} />

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
                {renderParagraphs(selectedItem.details.intro, 'mt-6 max-w-3xl space-y-5 text-lg leading-8 text-gray-700')}
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
                  {renderParagraphs(section.body, 'mt-5 space-y-4 leading-7 text-gray-700')}
                </div>
              </section>
            ))}
          </div>

          {selectedItem.details.conclusion && (
            <section className="border-t border-gray-200 py-10">
              <p className="font-nav mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">
                Conclusion
              </p>
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-950 md:text-3xl">
                Where the project landed
              </h2>
              {renderParagraphs(selectedItem.details.conclusion, 'mt-5 max-w-3xl space-y-4 leading-7 text-gray-700')}
            </section>
          )}
        </article>
      </div>
    );
  }

  if (selectedItem?.details?.layout === 'case-study') {
    return (
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <ProjectToolbar onBack={closeProject} isTldr={isTldr} onToggle={() => setIsTldr(true)} />

        <article>
          <header className="grid gap-8 border-b border-gray-200 pb-8 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
            <div>
              <p className="font-nav mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#35224f]">
                {selectedItem.category} / {selectedItem.date}
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
                {selectedItem.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">{selectedItem.description}</p>
            </div>
            {selectedItem.imageUrl ? (
              <img
                src={selectedItem.imageUrl}
                alt={`${selectedItem.title} preview`}
                className="aspect-square w-full object-cover"
              />
            ) : (
              <div className="flex aspect-square w-full items-center justify-center bg-[#35224f]">
                <div className="font-nav text-center text-xs font-semibold uppercase tracking-[0.24em] text-white">
                  VISUAL PLACEHOLDER
                </div>
              </div>
            )}
          </header>

          <section className="grid gap-10 border-b border-gray-200 py-10 md:grid-cols-[180px_1fr]">
            <h2 className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">Overview</h2>
            <div className="space-y-6 text-gray-700">
              <p className="leading-7">{selectedItem.details.overview}</p>
              <div>
                <h3 className="text-xl font-bold text-gray-950">Research Question</h3>
                <p className="mt-3 leading-7">{selectedItem.details.researchQuestion}</p>
              </div>
            </div>
          </section>

          <section className="grid gap-10 border-b border-gray-200 py-10 md:grid-cols-[180px_1fr]">
            <h2 className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">Metrics</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {selectedItem.details.metrics.map(([label, value]) => (
                <div key={label} className="border-t border-gray-200 pt-4">
                  <p className="font-nav text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">{label}</p>
                  <p className="mt-2 text-2xl font-bold text-gray-950">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-10 border-b border-gray-200 py-10 md:grid-cols-[180px_1fr]">
            <h2 className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">Methodology</h2>
            <ul className="space-y-4 text-gray-700">
              {selectedItem.details.methodology.map((step) => (
                <li key={step} className="border-l border-gray-200 pl-4 leading-7">
                  {step}
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-10 border-b border-gray-200 py-10 md:grid-cols-[180px_1fr]">
            <h2 className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">Results</h2>
            <ul className="space-y-4 text-gray-700">
              {selectedItem.details.results.map((result) => (
                <li key={result} className="border-l border-gray-200 pl-4 leading-7">
                  {result}
                </li>
              ))}
            </ul>
          </section>

          {selectedItem.details.visuals && (
            <section className="grid gap-10 border-b border-gray-200 py-10 md:grid-cols-[180px_1fr]">
              <h2 className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">Visuals to Add</h2>
              <div className="grid gap-6 lg:grid-cols-2">
                {selectedItem.details.visuals.map((visual) => (
                  <figure key={visual.title}>
                    <div className="flex aspect-[4/3] items-center justify-center border border-dashed border-gray-300 bg-gray-50 px-8 text-center">
                      <div>
                        <p className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">
                          Image Placeholder
                        </p>
                        <p className="mt-3 text-lg font-bold text-gray-950">{visual.title}</p>
                      </div>
                    </div>
                    <figcaption className="mt-3 text-sm leading-6 text-gray-500">{visual.note}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          <section className="grid gap-10 py-10 md:grid-cols-[180px_1fr]">
            <h2 className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">Limitations</h2>
            <ul className="space-y-4 text-gray-700">
              {selectedItem.details.limitations.map((limitation) => (
                <li key={limitation} className="border-l border-gray-200 pl-4 leading-7">
                  {limitation}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    );
  }

  if (selectedItem?.details) {
    return (
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <ProjectToolbar
          onBack={closeProject}
          isTldr={isTldr}
          onToggle={() => setIsTldr(true)}
          canToggle={Boolean(selectedItem.details.tldr)}
        />

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

        {selectedItem.details.sections && (
          <section className="border-b border-gray-200 py-10">
            <div className="space-y-10">
              {selectedItem.details.sections.map((section, index) => (
                <div key={section.title} className="grid gap-5 md:grid-cols-[180px_1fr]">
                  <p className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">
                    Development {String(index + 1).padStart(2, '0')}
                  </p>
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-950">{section.title}</h2>
                    {renderParagraphs(section.body, 'mt-4 max-w-3xl space-y-4 leading-7 text-gray-700')}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

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
                  onClick={() => {
                    if (!isClickable) return;
                    setIsTldr(false);
                    setSelectedItemId(item.id);
                  }}
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

const ProjectToolbar = ({ onBack, isTldr, onToggle, canToggle = true }) => (
  <div className="mb-10 flex items-center justify-between gap-4">
    <button
      type="button"
      onClick={onBack}
      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-[#35224f]"
    >
      <ArrowLeft size={16} />
      Back to projects
    </button>

    {canToggle && (
      <button
        type="button"
        role="switch"
        aria-checked={isTldr}
        aria-label={`Switch to ${isTldr ? 'big blurb' : 'TL;DR'} view`}
        onClick={onToggle}
        className="group inline-flex items-center gap-3 text-sm font-semibold text-[#35224f]"
      >
        <span>{isTldr ? 'TL;DR' : 'Big blurb'}</span>
        <span className="relative h-7 w-14 rounded-full bg-[#6d43a3] shadow-inner transition-colors group-hover:bg-[#593584]">
          <span
            className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
              isTldr ? 'translate-x-0' : 'translate-x-7'
            }`}
          />
        </span>
      </button>
    )}
  </div>
);

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
