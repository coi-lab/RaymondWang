import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            © 2024 Your Name. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/coi-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-lavender-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="www.linkedin.com/in/raymondwang27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-lavender-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://discord.com/channels/774437813483339796/774437813956771871/1438314052550922260"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-lavender-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

