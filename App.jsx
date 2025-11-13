import React, { useState, useEffect, useRef } from 'react';
import { Home, User, Briefcase, Target, FileText, Award, Lightbulb } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ResumePage from './components/ResumePage';
import GoalsPage from './components/GoalsPage';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';
import AchievementsPage from './components/AchievementsPage';

const navigation = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'goals', label: 'Goals', icon: Target },
  { id: 'projects', label: 'Projects', icon: Lightbulb },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'achievements', label: 'Achievements', icon: Award },
];

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionRefs = useRef({});

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offset = 64; // Navigation bar height
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for nav bar

      for (const section of navigation) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation
        navigation={navigation}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex-1">
        {/* Home Section - Grey background */}
        <section 
          id="home" 
          ref={el => sectionRefs.current['home'] = el}
          className="bg-gray-50 min-h-screen py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HomePage scrollToSection={scrollToSection} />
          </div>
        </section>

        {/* About Section - Lavender background */}
        <section 
          id="about" 
          ref={el => sectionRefs.current['about'] = el}
          className="bg-lavender-50 min-h-screen py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AboutPage />
          </div>
        </section>

        {/* Resume Section - Grey background */}
        <section 
          id="resume" 
          ref={el => sectionRefs.current['resume'] = el}
          className="bg-gray-50 min-h-screen py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ResumePage />
          </div>
        </section>

        {/* Goals Section - Lavender background */}
        <section 
          id="goals" 
          ref={el => sectionRefs.current['goals'] = el}
          className="bg-lavender-50 min-h-screen py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GoalsPage />
          </div>
        </section>

        {/* Projects Section - Grey background */}
        <section 
          id="projects" 
          ref={el => sectionRefs.current['projects'] = el}
          className="bg-gray-50 min-h-screen py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectsPage />
          </div>
        </section>

        {/* Experience Section - Lavender background */}
        <section 
          id="experience" 
          ref={el => sectionRefs.current['experience'] = el}
          className="bg-lavender-50 min-h-screen py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ExperiencePage />
          </div>
        </section>

        {/* Achievements Section - Grey background */}
        <section 
          id="achievements" 
          ref={el => sectionRefs.current['achievements'] = el}
          className="bg-gray-50 min-h-screen py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AchievementsPage />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

