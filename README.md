# Raymond Wang Portfolio Website

A personal portfolio website for presenting Raymond Wang's background, resume, projects, experience, and achievements.

## Status

Active development

## Overview

This project is a React-based portfolio site built to organize and present my engineering work in one place. It includes a homepage, about page, resume viewer, project showcase, achievements page, and supporting hidden pages for experience and goals.

The site is focused on communicating my interests in computer engineering, robotics, machine learning, hardware systems, and project-based learning. It is designed to be useful for recruiters, professors, teammates, and future collaborators who want a quick overview of my technical background.

## Features

- Interactive homepage card with role highlights
- About page with personal background and profile image
- Resume page with embedded PDF viewer plus open/download links
- Project showcase with detailed pages for robotics and software projects
- Robotics project pages with CAD, PCB, image, and video assets
- Blog-style project writeup for the keyboard switch price tracker
- Achievements page for Science Olympiad awards
- Hash-based navigation for GitHub Pages-friendly routing
- Responsive layout built with Tailwind CSS

## Tech Stack

- Language: JavaScript / JSX
- Frameworks/Libraries: React, Vite, Tailwind CSS, Lucide React
- Tools: npm, GitHub Pages, gh-pages
- Assets: PDF resume, project images, project videos

## Folder Structure

```txt
RaymondWang/
|-- components/
|   |-- AboutPage.jsx
|   |-- AchievementsPage.jsx
|   |-- ExperiencePage.jsx
|   |-- Footer.jsx
|   |-- GoalsPage.jsx
|   |-- HomePage.jsx
|   |-- Navigation.jsx
|   |-- ProjectsPage.jsx
|   `-- ResumePage.jsx
|-- public/
|   |-- documents/
|   `-- images/
|-- App.jsx
|-- main.jsx
|-- index.css
|-- index.html
|-- package.json
|-- tailwind.config.js
|-- vite.config.js
`-- README.md
```

Generated folders such as `node_modules/` and `dist/` are not part of the main source structure.

## Setup

Install project dependencies:

```bash
npm install
```

## Usage

Start the local development server:

```bash
npm run dev
```

Build the site for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Deploy to GitHub Pages using the configured `gh-pages` script:

```bash
npm run deploy
```

The configured homepage in `package.json` is:

```txt
https://coi-lab.github.io/RaymondWang/
```

## Results or Current Progress

The portfolio currently includes the main navigation, homepage, about page, resume page, project page, achievements page, footer, and supporting hidden pages for experience and goals.

Current project entries include:

- Levi and Waluigi Sumo Robots
- Keyboard Switch Price Tracker to an Automated AI Data Pipeline
- 500g Mini-Sumo Bot "Krabbi"
- 500g Sumo Bot "Luigi"

The project also includes public assets for the resume, profile image, robotics media, CAD/PCB visuals, and keyboard switch tracker screenshots.

## Roadmap

- [ ] Continue refining project descriptions and technical writeups
- [ ] Add more complete details for Levi and Waluigi Sumo Robots
- [ ] Review copy for spelling, grammar, and consistency
- [ ] Add or update screenshots as projects change
- [ ] Confirm mobile layout across common viewport sizes
- [ ] Keep the resume PDF current

## Lessons Learned

This project helped practice building a modular React application with reusable page components, asset management through Vite's public folder, responsive styling with Tailwind CSS, and deployment through GitHub Pages.

It also serves as a writing exercise: each project page needs to explain technical work clearly without overstating the status or results.

## Notes

- This is a personal portfolio site, not a production application.
- Some project content is still marked as in progress.
- The resume PDF and project media should be updated whenever the underlying work changes.
- The app uses hash-based navigation so it can work smoothly on GitHub Pages.
