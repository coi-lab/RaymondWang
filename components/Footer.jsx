import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#35224f] px-4 pb-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-1 py-4 text-sm font-semibold text-white/75 md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 Raymond Wang. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/coi-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/raymondwang27"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
