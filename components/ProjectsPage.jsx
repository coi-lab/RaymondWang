import React from 'react';
import { Lightbulb, Play, Image as ImageIcon, ZoomIn } from 'lucide-react';

const ProjectsPage = () => {
  // --- CONFIGURATION: Update your file names here ---
  // Make sure these files are in your 'public' folder
  const media = {
    robotImage: "./images/smaller_vehicle_image.jpg",   // Main Hero Image
    mainDemoVideo: "./images/main_video.mp4",           // Main Video at bottom
    techImage1: "./images/chassis_image.png",            // Technical Image #1 (Left)
    techImage2: "./images/pcb_image.png"             // Technical Image #2 (Right)
  };

  const results = [
    'Robot can keep itself inside the dojo',
    'Using the IR sensors to detect the other robot',
    'Processed sensor data in real-time (<50ms latency)',
    'Top 16 in the Florida MakerFaire tournament'
  ];

  const technologies = ['C++', 'KiCad', 'Arduino Uno', 'OnShape', '3D Printing'];

  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3 text-gray-800">Discovery Project</h1>
        <p className="text-lg text-gray-600">Featured technical project showcase</p>
      </div>
      
      <article className="space-y-12 max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Autonomous Robot Platform</h2>
              <p className="text-purple-600 font-medium">Fall 2024</p>
            </div>
            <div className="md:min-w-[300px]">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="bg-gray-50 px-3 py-1 rounded-lg text-sm font-medium text-gray-700 border border-gray-200 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 transition-all">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 1. HERO IMAGE (The Robot) */}
        <div className="relative w-full h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
          <img 
            src={media.robotImage} 
            alt="Robot Main View" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Fallback overlay if image is missing */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 -z-10">
             <div className="text-center text-gray-400">
                <ImageIcon size={48} className="mx-auto mb-2" />
                <p>Image not found at {media.robotImage}</p>
             </div>
          </div>
        </div>

        {/* Overview Text */}
        <div className="prose max-w-none pl-4 border-l-4 border-purple-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            This discovery project was part of the build for the RoboJackets Robowrestling team.  
            The goal was to create a robot capable of keeping itself inside the dojo while fighting against another robot. 
            We used IR sensors to detect the other robot and push them off the dojo and line sensors to keep the robot in.
            The brain of the robot was an Arduino Uno connected to motor drivers, line sensors, and IR sensors.
          </p>
        </div>

        {/* Technical Section */}
        <div className="space-y-6">
          <div className="pl-4 border-l-4 border-gray-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Technical Approach</h3>
            <p className="text-gray-600">
              Breakdown of the mechanical design and PCB design. 
            </p>
          </div>

          {/* 2. TECHNICAL IMAGES GRID (Replacing Videos) */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Tech Image 1 */}
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 group relative h-72">
              <img 
                src={media.techImage1} 
                alt="Technical Detail 1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 border-t border-gray-200">
                <p className="font-semibold text-gray-800 flex items-center gap-2">
                  <ZoomIn size={16} className="text-purple-600" /> PCB / Circuit Design
                </p>
              </div>
            </div>

            {/* Tech Image 2 */}
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 group relative h-72">
               <img 
                src={media.techImage2} 
                alt="Technical Detail 2"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 border-t border-gray-200">
                <p className="font-semibold text-gray-800 flex items-center gap-2">
                  <ZoomIn size={16} className="text-purple-600" /> Mechanical CAD View
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
           <p className="text-gray-700 leading-relaxed pl-5">
            The system architecture consists of an Arduino Uno connected to motor drivers, line sensors, and IR sensors.
            The motor drivers were controlled by the Arduino Uno using the L298N motor driver IC.
            The line sensors were controlled by the Arduino Uno using the lunar robotics line sensor IC.
            The IR sensors were controlled by the Arduino Uno using the JSUMO IR sensors.
            The brain of the robot was an Arduino Uno connected to motor drivers, line sensors, and IR sensors.
            This was then all powered by a 12V battery and a 5V regulator all connected on a custom PCB designed by me and a team member. 
          </p>
        </div>

        {/* Results & Impact */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Results & Impact</h3>
          <ul className="space-y-3 mb-8">
            {results.map((result, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 font-medium">{result}</span>
              </li>
            ))}
          </ul>
          
          {/* 3. MAIN DEMO VIDEO */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Play size={24} className="fill-purple-600 text-purple-600" />
              Final Project Demo
            </h4>
            <div className="relative w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-300">
              <video 
                controls 
                className="w-full aspect-video"
                src={media.mainDemoVideo}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectsPage;