import React, { useEffect, useRef, useState } from 'react';
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
      id: 'lcs-fantasy-predictor',
      date: 'In Progress',
      category: 'Machine Learning',
      title: 'LCS Fantasy Predictor and Lineup Optimizer',
      description:
        'An experimental Python pipeline and dashboard for predicting weekly LCS Fantasy scores, champion choices, and legal six-slot rosters.',
      imageUrl: `${basePath}images/lcs-fantasy/hoverLcsFantasy.png`,
      tags: ['Python', 'Machine Learning', 'Data Pipelines', 'Optimization'],
      details: {
        layout: 'blog',
        tldr: {
          summary:
            'I am building a point-in-time LCS Fantasy system that turns professional match data and official market snapshots into weekly player projections, champion recommendations, and budget-valid six-slot lineups.',
          highlights: [
            'The pipeline keeps features behind roster lock and uses chronological evaluation so future games do not leak into earlier predictions.',
            'A sequential draft model tracks picks, bans, draft order, role eligibility, and the champion pool removed by Fearless rules.',
            'The lineup optimizer checks legal TOP, JGL, MID, BOT, SUP, and coach combinations under the current budget and includes organization-variety bonuses inside the search.',
            'A local dashboard separates official prices from experimental estimates and preserves weekly snapshots for later scoring and model review.',
          ],
        },
        intro: [
          'The original goal was to answer a fun question: can public match history help me build a better LCS Fantasy roster each week?',
          'That quickly became three connected problems. I needed to estimate player and coach scores, predict which champions could earn the strongest fantasy multiplier, and then find the best legal six-slot roster without breaking the budget.',
          'The difficult part is time. Esports data changes after every game, but a useful prediction must behave as if it were still standing at roster lock. That means every statistic, market price, draft state, and opponent feature needs a clear point-in-time boundary.',
          'The project is still in active development. The current system can build draft data, generate weekly recommendations, search legal rosters, and publish the results to an inspectable dashboard. I am continuing to capture official market rounds and test completed-week predictions.',
        ],
        conclusion: [
          'This project started as a fantasy calculator, but it became a larger lesson in time-aware machine learning, data provenance, draft modeling, and constrained optimization.',
          'The biggest takeaway is that producing a prediction is the easy part. The harder work is proving that the model only knew what would have been available at roster lock and making every estimate understandable after the live market changes.',
          'This is also my first project working extensively with client-side agents such as Google Antigravity, or AGY. It has been a completely different experience from working directly with Codex. AGY needs a much more explicit instruction and documentation system that describes the project rules, modeling boundaries, validation process, and normal operating workflow in enough detail to keep longer tasks on track.',
          'To combine the strengths of both tools while keeping token usage under control, I use Codex to inspect the repository, compress the relevant context, and write focused prompts for AGY. AGY can then carry out the larger client-side workflow with a clearer definition of what to change, what evidence is required, and which project rules must be preserved.',
          'I am actively developing this system. The next work is to capture more official price rounds, improve player uncertainty and matchup simulation, strengthen starter coverage, and keep testing model changes on unseen chronological weeks before they enter the weekly workflow.',
        ],
        sections: [
          {
            eyebrow: 'no peeking into next week',
            title: 'Building a Point-in-Time Data Pipeline',
            body: [
              'The pipeline begins with Oracle\'s Elixir player-game and team-game data. Player rows provide scoring inputs and the champion played, while team rows preserve the ordered picks and bans needed to reconstruct each draft.',
              'I use chronological evaluation instead of random train and test splits. In plain language, every simulated fantasy week can learn only from games that happened before its roster lock. Champion-model fitting uses 2020 through 2025, while 2026 remains outside the fitting window.',
              'Official market snapshots are stored as immutable JSON and CSV files because the live endpoint exposes the current market rather than a complete historical archive. Whenever an official price exists, it overrides the experimental historical estimate.',
            ],
            imageUrl: null,
            placeholderLabel: 'Point-in-time pipeline diagram',
            caption: 'Placeholder for the ingestion, roster-lock boundary, feature, prediction, and dashboard data flow.',
          },
          {
            eyebrow: 'picks, bans, and fearless',
            title: 'Reconstructing the Champion Draft',
            body: [
              'Champion prediction is not just a popularity ranking. A recommendation needs to account for player comfort, the current LCS meta, nearby international evidence, role eligibility, public bans, draft order, and champions already removed by Fearless rules.',
              'The draft builder converts each game into a canonical game record and a sequence of individual pick and ban actions. Each action stores only the draft state known before that choice, which gives the model an auditable view of what was still available.',
              'Map side and draft order are modeled separately because Blue side does not always pick first. Source conflicts are also kept visible instead of silently deleting an observed action that disagrees with the reconstructed rules.',
            ],
            imageUrl: null,
            placeholderLabel: 'Champion draft state',
            caption: 'Placeholder for an ordered pick-and-ban board with Fearless champion availability.',
          },
          {
            eyebrow: 'six slots, one budget',
            title: 'From Player Projections to a Legal Roster',
            body: [
              'The player model combines historical fantasy scoring, current form, known opponents, team win probability, and role-specific behavior. The champion model then adds an expected multiplier contribution for each projected starter.',
              'The optimizer checks every eligible combination of one TOP, JGL, MID, BOT, SUP, and coach under the current gold budget. It evaluates the complete organization-variety ladder inside the objective so a diverse roster can be compared fairly with a more individually expensive one.',
              'I also keep raw projected points visible beside a separate matchup-risk adjustment. This prevents the optimizer from hiding why a roster moved in the ranking when it contains players facing one another in the same match.',
            ],
            imageUrl: null,
            placeholderLabel: 'Lineup optimizer results',
            caption: 'Placeholder for the ranked six-slot lineup view with prices, projected points, and variety bonuses.',
          },
          {
            eyebrow: 'make the model explain itself',
            title: 'Dashboard, Audits, and the Feedback Loop',
            body: [
              'The local dashboard brings player trends, market prices, champion options, matchup context, and saved weekly lineups into one review surface. Official prices and experimental estimates receive different labels so an inferred history cannot be mistaken for captured market data.',
              'Each optimized week is saved as a self-contained snapshot. That matters because the market, schedule, and predictions change over time; preserving the old inputs makes it possible to score a completed round without accidentally reviewing it through a later model state.',
              'Unit tests cover the major ingestion, feature, draft, prediction, and optimization paths. Separate analysis reports record scoring checks, model ablations, and limitations so a more complicated feature stays experimental unless chronological evidence supports it.',
            ],
            imageUrl: null,
            placeholderLabel: 'Weekly dashboard',
            caption: 'Placeholder for the player trends, champion recommendations, and completed-week audit views.',
          },
        ],
      },
    },
    {
      id: 'keyboard-price-watch',
      date: 'Summer 2026',
      category: 'Coding Project',
      title: 'Keyboard Switch Price Tracker to an Automated AI Data Pipeline',
      description:
        'A Python-based tracker for monitoring keyboard switch prices, storing historical listings, and experimenting with ML-driven price analysis.',
      imageUrl: `${basePath}images/keyboard-switch-price-tracker/hoverKeyboardWatcher.svg`,
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
      date: 'Summer 2026',
      category: 'Machine Learning',
      title: 'From Wafer Failure Detection to an AI Semiconductor Pipeline',
      description:
        'A semiconductor data pipeline that cleans SECOM sensor data with PySpark, scores failed-wafer risk with XGBoost, and publishes the results to a Neo4j digital twin that can be queried in plain English.',
      imageUrl: `${basePath}images/semipipeline/hoverSemiPipeline.svg`,
      tags: ['Python', 'XGBoost', 'PySpark', 'Neo4j', 'LangChain'],
      details: {
        layout: 'blog',
        tldr: {
          summary:
            'I built an end-to-end semiconductor data pipeline that cleans 592 SECOM sensor measurements, predicts failed-wafer risk with XGBoost, sends scored runs into a Neo4j digital twin, and lets a user question that graph with natural language.',
          highlights: [
            'A 93%-accurate baseline predicted that every wafer passed, teaching me why accuracy is the wrong headline metric for only 104 failures out of 1,567 runs.',
            'Leakage-aware preprocessing, feature selection, class-weighted XGBoost, and threshold tuning produced 0.24 failure precision and 0.38 recall on an isolated test set.',
            'PySpark reproduced the pandas cleanup, removing 144 dead or heavily missing columns and reducing the data from 592 to 448 columns.',
            'The saved model scores wafer runs before Neo4j stores machines, wafers, risk scores, and telemetry; Gemini and LangChain then translate plain-English questions into Cypher.',
          ],
        },
        intro: [
          'The original idea was to answer one question: can hundreds of sensor readings tell us when a semiconductor wafer run is going to fail?',
          'I used the SECOM dataset, which has 1,567 manufacturing runs and 592 anonymous sensor measurements. The catch is that only 104 runs failed. That imbalance made this look like a normal classification project right up until my first model got 93% accuracy by predicting zero failures.',
          'So the project changed. It became less about making one model and more about building the full path around it: cleaning the data without leakage, choosing a useful failure threshold, reproducing the work in PySpark, publishing risk scores to a Neo4j digital twin, and finally asking the graph questions in plain English.',
          'Let us begin with the result that looked good and was actually useless.',
        ],
        conclusion: [
          'This project started as a machine learning notebook, but it became a lesson in how much work has to surround a model before its output is actually useful.',
          'The biggest takeaway was that a technically high score can still be the wrong result. The first model had better accuracy than the current one, but the current pipeline is the one that actually catches failures. It also produces a risk score that can move into another system instead of staying trapped in a notebook.',
          'The project is still experimental. The model only has 104 failure examples to learn from, the graph upload is a 10-row demonstration, and the Spark row alignment needs a safer replacement for monotonically_increasing_id(). Next I want to move the repeated notebook work into reusable scripts, compare more models, and choose thresholds based on the real cost of missed failures versus false alarms.',
          'For now, on to the next project ->',
        ],
        sections: [
          {
            eyebrow: '93% accurate, 0% useful',
            title: 'When Accuracy Lied to Me',
            body: [
              'My first XGBoost baseline reached about 93% accuracy. For a moment, that looked like the project was working. Then I checked the classification report and found that the model had predicted every run as a pass. It missed all of the failures.',
              'The problem was hiding in the class balance. There are 1,463 passing runs and only 104 failed runs, so a model can ignore the event I care about and still receive a good accuracy score.',
              'That changed which metrics I watched. I moved toward failure-class precision and recall, F1-score, and average precision. The current isolated test result has 0.24 precision, 0.38 recall, a 0.29 F1-score, and 0.2488 average precision. Those numbers are modest, but catching 6 of 16 failures is more useful than confidently catching none.',
            ],
            imageUrl: `${basePath}images/semipipeline/classImbalance.svg`,
            caption: 'Why the 93% baseline was misleading: pass samples dominate the SECOM dataset, while the current test confusion matrix shows 6 detected failures and 10 missed failures.',
          },
          {
            eyebrow: 'the hard stuff (data leakage)',
            title: 'Cleaning the Sensors Without Seeing the Answers',
            body: [
              'SECOM contains hundreds of anonymous sensor columns, many with missing values. I removed columns that were more than 50% empty and columns that never changed, which reduced the data from 592 columns to 448. Then KNN imputation fills the remaining gaps and MinMaxScaler puts the measurements on comparable scales.',
              'My earlier experiments taught me that the order matters. If an imputer, scaler, or feature selector learns from the complete dataset, information from validation and test rows can quietly leak into training. I rebuilt the workflow so the split happens first and every preprocessing step is fitted only on training data.',
              'I wrapped the imputer, scaler, feature selector, and class-weighted XGBoost model inside one scikit-learn Pipeline. Grid search uses average precision, SelectFromModel keeps 20 physical sensors in the current champion, and validation precision-recall behavior sets the decision threshold to 0.0792 instead of blindly using 0.5.',
              'The complete pipeline is serialized as secom_xgboost_production_v1.pkl. That means later notebooks can load the exact same preprocessing and model logic instead of trying to recreate it cell by cell.',
            ],
            imageUrl: `${basePath}images/semipipeline/leakageAwarePipeline.svg`,
            caption: 'The leakage-aware training order. Validation and test data stay isolated while preprocessing, feature selection, and XGBoost learn from the training split.',
          },
          {
            eyebrow: 'from pandas to the big data stuff',
            title: 'Rebuilding the Data Flow with PySpark',
            body: [
              'Once the model pipeline was saved, I wanted to move beyond a pandas-only experiment. The PySpark notebook ingests the raw sensor and label files, converts the pass/fail encoding, and audits each distributed column for missing or constant data.',
              'The Spark cleanup found the same 144 dead or heavily missing columns as the pandas workflow and reached the same cleaned shape: 1,567 rows by 448 columns. That matching result became a useful check that the distributed logic was not silently changing the dataset.',
              'Next, the notebook loads the saved scikit-learn pipeline and generates ML risk scores from the cleaned Spark data. Right now I bring a small sample into pandas for inference, so this is a bridge between distributed cleanup and local model scoring rather than a fully distributed model-serving system.',
              'There is also one shortcut I still need to fix. The experimental row alignment uses monotonically_increasing_id(), which is convenient but not a safe long-term key for joining labels and sensor rows. A stable source row identifier is the next version of this step.',
            ],
            imageUrl: `${basePath}images/semipipeline/sparkToScore.svg`,
            caption: 'The current inference path: distributed cleanup in PySpark feeds a saved scikit-learn/XGBoost pipeline and produces a risk score for each sampled wafer run.',
          },
          {
            eyebrow: 'making the model talk',
            title: 'A Digital Twin You Can Question',
            body: [
              'A risk score is more interesting when it is connected to the process that produced it. I used Neo4j Aura to make a small semiconductor digital twin: a Machine processes a Wafer, and that Wafer generates Telemetry. Each wafer node stores its timestamp, actual result, and ML risk score while its telemetry node stores the surviving sensor readings.',
              'The current demonstration uploads 10 scored rows. It is intentionally small while I work out the graph structure and credentials, but it proves that the model output can leave the notebook and become part of a queryable manufacturing system.',
              'For the final layer, I connected LangChain, Neo4j, and Gemini. GraphCypherQAChain reads the graph schema, turns a natural-language question into Cypher, runs the query, and returns an answer. In the notebook demo, I asked which wafer from Etch_Chamber_A had the highest risk. The chain found WAFER_2 with a score of 0.9988417029380798 and returned several attached sensor readings.',
              'This part also came with a security lesson. The chain requires allow_dangerous_requests=True, so a real deployment should use separate, read-only Neo4j credentials with the minimum permissions instead of handing an LLM a fully privileged database account.',
            ],
            imageUrl: `${basePath}images/semipipeline/digitalTwin.svg`,
            caption: 'The Neo4j graph structure and question-answering layer used by the 10-wafer demonstration.',
          },
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
                  {section.imageUrl ? (
                    <img src={section.imageUrl} alt={section.title} className="aspect-[4/3] w-full object-contain bg-gray-50" />
                  ) : (
                    <div className="flex aspect-[4/3] w-full items-center justify-center border border-dashed border-gray-300 bg-gray-50 px-8 text-center">
                      <div>
                        <p className="font-nav text-xs font-semibold uppercase tracking-[0.18em] text-[#35224f]">
                          Image Placeholder
                        </p>
                        <p className="mt-3 text-lg font-bold text-gray-950">
                          {section.placeholderLabel || section.title}
                        </p>
                      </div>
                    </div>
                  )}
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
          <div className="font-nav grid gap-3 px-4 pb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500 md:grid-cols-[110px_150px_minmax(0,1fr)] lg:grid-cols-[130px_180px_minmax(0,1fr)]">
            <div>Date</div>
            <div>Category</div>
            <div>Title</div>
          </div>

          <div className="space-y-1 rounded-xl bg-gray-50/70 p-1">
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
                  className={`grid w-full gap-3 rounded-lg px-3 py-4 text-left transition-[background-color,color,box-shadow,transform] duration-200 ease-out hover:bg-[#eee5f7] focus-visible:bg-[#eee5f7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a98acb]/50 md:grid-cols-[110px_150px_minmax(0,1fr)] lg:grid-cols-[130px_180px_minmax(0,1fr)] ${
                    isActive ? 'bg-[#f4eff9] text-[#35224f] shadow-sm' : 'text-gray-700'
                  } ${isClickable ? 'cursor-pointer hover:-translate-y-px' : 'cursor-default'}`}
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
  const [visibleItem, setVisibleItem] = useState(item);
  const [previousItem, setPreviousItem] = useState(null);
  const visibleItemRef = useRef(item);

  useEffect(() => {
    if (item.id === visibleItemRef.current.id) return undefined;

    setPreviousItem(visibleItemRef.current);
    visibleItemRef.current = item;
    setVisibleItem(item);

    const transitionTimer = window.setTimeout(() => {
      setPreviousItem(null);
    }, 220);

    return () => window.clearTimeout(transitionTimer);
  }, [item]);

  return (
    <div className="relative aspect-square w-full max-w-[min(100%,20rem)] overflow-hidden rounded-xl bg-[#f4eff9] shadow-sm">
      {previousItem && (
        <div className="project-preview-exit absolute inset-0">
          <ProjectPreviewVisual item={previousItem} />
        </div>
      )}
      <div key={visibleItem.id} className="project-preview-enter absolute inset-0">
        <ProjectPreviewVisual item={visibleItem} />
      </div>
    </div>
  );
};

const ProjectPreviewVisual = ({ item }) => {
  if (item.imageUrl) {
    return <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover" />;
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#35224f]">
      <div className="font-nav text-center text-xs font-semibold uppercase tracking-[0.24em] text-white">
        NO VISUAL DATA
      </div>
    </div>
  );
};

export default ProjectsPage;
