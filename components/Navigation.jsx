import React from 'react';
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react';

const Navigation = ({ navigation, activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-zinc-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center h-full gap-2"> {/* Changed gap to gap-2 for pill spacing */}
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}

                  {/* The New Indicator: Sharp, Clean, Animated Line */}
                  {/* This line sits inside the button at the bottom */}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-purple-500 rounded-full transition-all duration-300 ease-out ${
                      isActive ? 'w-1/2 opacity-100' : 'w-0 opacity-0 group-hover:w-1/3 group-hover:opacity-50'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Social Icons & Mobile Toggle */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200" /* Added purple hover for consistency */
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <button
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-zinc-900 border-b border-white/10 ${
        mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-3 space-y-1">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-white/10 text-white border-l-2 border-purple-500' /* Added purple accent to mobile active state */
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;