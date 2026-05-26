import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

const ResumePage = () => {
  const basePath = import.meta.env.BASE_URL;
  const resumeUrl = `${basePath}images/Raymond_General_Resume.pdf`;

  return (
    <div className="mx-auto max-w-5xl px-5 pb-10 pt-4 md:pb-12 md:pt-6">
      <header className="mb-6 flex flex-col gap-5 p-6 md:flex-row md:items-end md:justify-between md:p-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Resume</p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">Resume</h1>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 transition-opacity hover:opacity-75"
          >
            <ExternalLink size={16} />
            Open PDF
          </a>
          <a
            href={resumeUrl}
            download="Raymond_Wang_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 transition-opacity hover:opacity-75"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>
      </header>

      <div className="overflow-hidden rounded-sm bg-white">
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
