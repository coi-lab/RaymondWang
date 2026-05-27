import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white px-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 py-5 text-sm font-semibold text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 Raymond Wang. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/coi-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#35224f]"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/raymondwang27"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#35224f]"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#35224f]"
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
