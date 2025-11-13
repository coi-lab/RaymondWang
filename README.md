# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Project Structure

```
rayWebsite/
├── components/          # React components
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ResumePage.jsx
│   ├── GoalsPage.jsx
│   ├── ProjectsPage.jsx
│   ├── ExperiencePage.jsx
│   ├── AchievementsPage.jsx
│   └── Navigation.jsx
├── App.jsx             # Main app component
├── main.jsx            # Entry point
├── index.html          # HTML template
├── index.css           # Global styles (Tailwind)
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   The app will be available at `http://localhost:5173` (or another port if 5173 is busy)

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` folder.

To preview the production build:

```bash
npm run preview
```

## Customization

Each page component is in its own file, making it easy to customize:

- **HomePage.jsx** - Landing page with hero section and navigation cards
- **AboutPage.jsx** - Personal information and background
- **ResumePage.jsx** - Resume display and download
- **GoalsPage.jsx** - Career goals and roadmap
- **ProjectsPage.jsx** - Featured project showcase
- **ExperiencePage.jsx** - Work experience and internships
- **AchievementsPage.jsx** - Awards, honors, and accomplishments

Simply edit the respective component file to update the content!

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Features

- ✅ Responsive design (mobile-friendly)
- ✅ Modern UI with gradient themes
- ✅ Smooth page transitions
- ✅ Mobile navigation menu
- ✅ Modular component structure
- ✅ Easy to customize and extend

## Tips

- Edit content directly in the component files
- Modify colors in Tailwind classes (purple/indigo theme)
- Add new pages by creating a new component and adding it to `App.jsx`
- Update navigation items in `App.jsx`

Enjoy building your portfolio! 🚀

