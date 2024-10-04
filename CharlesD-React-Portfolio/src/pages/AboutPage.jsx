import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src="assets/images/chuck-computer.jpg"
            alt="Charles DeMichele"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-10 text-light-text dark:text-dark-text">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Based in Philadelphia, PA, I am currently enrolled in UCF's Full Stack Coding Bootcamp, where I am gaining proficiency in:
          </p>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>JavaScript, Node.js, React, MongoDB, SQL</li>
            <li>Building scalable, responsive web applications</li>
            <li>Problem-solving and debugging complex software</li>
          </ul>
          <p className="text-lg mb-4">
            My journey has taken me from the restaurant industry—where I led teams, managed operations, and owned my own business—to commercial diving, where I excelled in high-pressure environments. These experiences have sharpened my leadership, resilience, and attention to detail, skills that now empower me in web development.
          </p>
          <p className="text-lg mb-4">
            I'm eager to apply my diverse background and technical expertise to help innovative teams build impactful software.
          </p>
          <p className="text-lg font-bold">
            Let’s connect and discuss how I can bring value to your development team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
