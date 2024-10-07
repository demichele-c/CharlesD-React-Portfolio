import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg py-12 sm:py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <img
            src="assets/images/chuck-computer.jpg"
            alt="Charles DeMichele"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 w-full text-light-text dark:text-dark-text md:pl-10"> {/* Added md:pl-10 for space */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">About Me</h2>
          <p className="text-base sm:text-lg mb-4">
            Based in Philadelphia, PA, I completed UCF's Full Stack Coding Bootcamp, where I gained proficiency in:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg mb-4">
            <li>JavaScript, Node.js, React, MongoDB, SQL</li>
            <li>Building scalable, responsive web applications</li>
            <li>Problem-solving and debugging complex software</li>
          </ul>
          <p className="text-base sm:text-lg mb-4">
            My journey has taken me from the restaurant industry—where I led teams, managed operations, and owned my own business—to commercial diving, where I excelled in high-pressure environments. These experiences have sharpened my leadership, resilience, and attention to detail, skills that now empower me in web development.
          </p>
          <p className="text-base sm:text-lg mb-4">
            I'm eager to apply my diverse background and technical expertise to help innovative teams build impactful software.
          </p>
          <p className="text-base sm:text-lg font-bold text-center md:text-left">
            Let’s connect and discuss how I can bring value to your development team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
