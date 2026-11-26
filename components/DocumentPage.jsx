import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
const DocumentPage = ({ title, filename }) => {
  const basePath = import.meta.env.BASE_URL;
  const documentUrl = `${basePath}documents/${filename}`;

  return (
    <div className="mx-auto max-w-5xl px-5 pb-12 pt-6 md:pb-16 md:pt-8">
      <header className="mb-8 flex flex-col gap-5 border-b border-gray-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
        <h1 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">{title}</h1>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href={documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-0 py-2 text-sm font-semibold text-gray-700 underline underline-offset-4 transition-colors hover:text-[#35224f]"
          >
            <ExternalLink size={16} aria-hidden="true" />
            Open PDF
          </a>
          <a
            href={documentUrl}
            download={filename}
            className="inline-flex items-center gap-2 px-0 py-2 text-sm font-semibold text-[#35224f] underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            <Download size={16} aria-hidden="true" />
            Download PDF
          </a>
        </div>
      </header>

      <div className="overflow-hidden border border-gray-200 bg-white">
        <iframe
          src={`${documentUrl}#toolbar=0&navpanes=0&view=FitH`}
          className="block h-[70vh] w-full md:h-[820px]"
          title={`Raymond Wang ${title}`}
        />
      </div>
    </div>
  );
};

export default DocumentPage;
