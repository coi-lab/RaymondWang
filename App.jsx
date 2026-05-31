import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ResumePage from './components/ResumePage';
import GoalsPage from './components/GoalsPage';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';
import AchievementsPage from './components/AchievementsPage';

const pages = [
  { id: 'home', label: 'Home', component: HomePage },
  { id: 'about', label: 'About', component: AboutPage },
  { id: 'resume', label: 'Resume', component: ResumePage },
  { id: 'projects', label: 'Projects', component: ProjectsPage },
  { id: 'achievements', label: 'Achievements', component: AchievementsPage },
];

const hiddenPages = [
  { id: 'experience', label: 'Experience', component: ExperiencePage },
  { id: 'goals', label: 'Goals', component: GoalsPage },
];

const allPages = [...pages, ...hiddenPages];

const App = () => {
  const initialPage = window.location.hash.replace('#', '');
  const [activePage, setActivePage] = useState(
    allPages.some((page) => page.id === initialPage) ? initialPage : 'home'
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ActiveComponent = allPages.find((page) => page.id === activePage)?.component || HomePage;

  useEffect(() => {
    const syncPageFromHash = () => {
      const pageId = window.location.hash.replace('#', '');
      setActivePage(allPages.some((page) => page.id === pageId) ? pageId : 'home');
    };

    window.addEventListener('popstate', syncPageFromHash);
    window.addEventListener('hashchange', syncPageFromHash);

    return () => {
      window.removeEventListener('popstate', syncPageFromHash);
      window.removeEventListener('hashchange', syncPageFromHash);
    };
  }, []);

  const changePage = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.history.pushState(null, '', pageId === 'home' ? window.location.pathname : `#${pageId}`);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navigation
        pages={pages}
        activePage={activePage}
        changePage={changePage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex-1">
        <ActiveComponent changePage={changePage} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
