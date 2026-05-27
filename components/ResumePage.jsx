import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

const ResumePage = () => {
  const basePath = import.meta.env.BASE_URL;
  const resumeUrl = `${basePath}images/Raymond_General_Resume.pdf`;

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 md:py-16">
      <header className="mb-8 flex flex-col gap-5 border-b border-gray-200 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-nav mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#35224f]">Resume</p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">Resume</h1>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-0 py-2 text-sm font-semibold text-gray-700 underline underline-offset-4 transition-colors hover:text-[#35224f]"
          >
            <ExternalLink size={16} />
            Open PDF
          </a>
          <a
            href={resumeUrl}
            download="Raymond_Wang_Resume.pdf"
            className="inline-flex items-center gap-2 px-0 py-2 text-sm font-semibold text-[#35224f] underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>
      </header>

      <div className="overflow-hidden border border-gray-200 bg-white">
        <iframe
          src={`${resumeUrl}#toolbar=0&navpanes=0&view=FitH`}
          className="h-[820px] w-full"
          title="Raymond Wang Resume"
        />
      </div>
    </div>
  );
};

export default ResumePage;
