import React from 'react';
import { Github, Instagram, Linkedin, Menu, X } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/coi-lab', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/raymondwang27', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

const Navigation = ({ pages, activePage, changePage, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header className="font-nav sticky top-0 z-50 px-4 pt-2">
      <div className="mx-auto max-w-6xl px-1">
        <div className="flex h-10 items-center justify-between gap-6">
          <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
            {pages.map((page) => (
              <button
                key={page.id}
                type="button"
                onClick={() => changePage(page.id)}
                className={`px-3 py-1 text-sm font-semibold transition-colors ${
                  activePage === page.id
                    ? 'text-white underline decoration-white underline-offset-4'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {page.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 transition-colors hover:text-white"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <button
            type="button"
            className="p-2 text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="mx-auto mt-2 max-w-6xl px-1 py-3 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-6xl flex-col">
            {pages.map((page) => (
              <button
                key={page.id}
                type="button"
                onClick={() => changePage(page.id)}
                className={`px-3 py-2 text-left text-sm font-semibold ${
                  activePage === page.id ? 'text-white underline decoration-white underline-offset-4' : 'text-white/70'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
