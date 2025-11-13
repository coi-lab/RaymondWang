import React from 'react';
import { Download, FileText } from 'lucide-react';

const ResumePage = () => {
  // This points to the file in your 'public' folder
  const resumeUrl = "./Raymond_General_Resume.pdf"; 

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <div className="text-left">
            <h1 className="text-5xl font-bold mb-3 text-gray-800">My Resume</h1>
            <p className="text-lg text-gray-600">Professional qualifications and experience</p>
          </div>
          
          {/* CHANGED: Button is now an <a> tag for direct download */}
          <a 
            href={resumeUrl} 
            download="Raymond_Wang_Resume.pdf" 
            className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all font-semibold shadow-md"
          >
            <Download size={20} />
            Download PDF
          </a>
        </div>
      </div>
      
      <div className="p-4 md:p-8">
        {/* CHANGED: Removed dashed border, added shadow and iframe */}
        <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 h-[850px]">
          <iframe 
            src={`${resumeUrl}#toolbar=0`} 
            className="w-full h-full"
            title="Resume PDF"
          >
            {/* Fallback for browsers that cannot view PDFs */}
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <FileText size={48} className="text-gray-400" />
              <p className="text-gray-600">Unable to display PDF.</p>
              <a href={resumeUrl} download className="text-blue-600 hover:underline">
                Click here to download instead.
              </a>
            </div>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;