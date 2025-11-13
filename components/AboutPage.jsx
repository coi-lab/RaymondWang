import React from 'react';

const AboutPage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3 text-gray-800">About Me</h1>
        <p className="text-lg text-gray-600">Get to know my story and passion</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-gray-700 text-lg leading-relaxed space-y-6">
          <p>
            I'm a Computer Engineering student at Georgia Tech, 
            driven by curiosity and a desire to solve complex problems through technology. 
            My journey in engineering began with a fascination for how things work, and a love for building things, and has 
            evolved into a commitment to creating innovative solutions that make a difference.
          </p>
          <p>
            Beyond academics, I'm passionate about F1, Volleyball, and Technology. I believe in maintaining 
            a balance between technical excellence and personal growth. Whether it's working on 
            side projects, binging YouTube videos, or playing volleyball, I'm always seeking new ways to expand my knowledge and skills.
          </p>
          <p>
            I bring a unique combination of technical expertise, creative problem-solving, and 
            collaborative spirit to every project. My approach combines analytical thinking with 
            innovative design, allowing me to develop solutions that are both practical and forward-thinking. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

