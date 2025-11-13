import React from 'react';
import { User, ChevronDown, ArrowRight } from 'lucide-react';

const HomePage = ({ scrollToSection }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
      
      {/* Inject custom keyframes for the shimmer effect */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-12deg); }
          100% { transform: translateX(150%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      {/* Hero Section - The "Card" */}
      <div className="flex justify-center mb-16">
        <div className="relative group bg-white rounded-3xl p-10 shadow-xl border border-gray-100 max-w-xl w-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          
          {/* THE SHINE EFFECT: Automatic & Continuous */}
          {/* This gradient layer moves across the card automatically */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-purple-100/40 to-transparent animate-shimmer"></div>
          </div>

          {/* Card Content */}
          <div className="flex flex-col items-center text-center relative z-10">
            
            {/* Avatar Circle - UPDATED */}
            {/* Added 'overflow-hidden' so the image stays a circle */}
            <div className="w-32 h-32 bg-gray-50 rounded-full border-4 border-white shadow-md mb-6 relative group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img 
                src="./images/pfpimage.jpg"  /* <--- CHANGE THIS to your actual file path */
                alt="Raymond Wang" 
                className="w-full h-full object-cover" /* object-cover ensures it fills the circle without stretching */
              />
            </div>

            {/* Name & Title */}
            <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              Raymond Wang
            </h1>
            <p className="text-xl font-medium text-purple-600 mb-6">
              Sophomore, Computer Engineering @ Georgia Tech
            </p>
            
            {/* Divider */}
            <div className="w-16 h-1 bg-gray-100 rounded-full mb-6"></div>

            <p className="text-lg leading-relaxed text-gray-500">
              Passionate about Robotics and ML. Love building things.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { id: 'about', label: 'About Me', desc: 'Background Info' },
          { id: 'projects', label: 'Projects', desc: 'Things I have built' },
          { id: 'experience', label: 'Experience', desc: 'Professional history' }
        ].map((item) => (
          <div 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:border-purple-200 hover:-translate-y-1 group"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                {item.label}
              </h3>
              <ArrowRight className="text-gray-300 group-hover:text-purple-600 transform group-hover:translate-x-1 transition-all" size={20} />
            </div>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-16">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-purple-600 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default HomePage;