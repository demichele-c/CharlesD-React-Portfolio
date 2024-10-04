import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src="assets\images\chuck-computer.jpg"
            alt="Charles DeMichele"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-10 text-light-text dark:text-dark-text">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
          I'm currently enrolled in a Full Stack Coding Bootcamp at the University of Central Florida, aiming to become a software developer. With 16 years in the restaurant industry as a chef, manager, and owner/operator, I've honed leadership, management, and problem-solving skills. Running my own restaurant taught me resilience, innovation, and the importance of customer satisfaction.

In 2021, I transitioned to commercial diving, specializing in underwater construction. This role sharpened my technical skills, attention to detail, and ability to thrive under pressure.

My diverse background fosters adaptability and a continuous learning mindset, driving my passion for technology. I am eager to apply my unique skills to software development, contributing to dynamic teams and solving complex problems.

Let's connect if you're looking for a motivated, versatile individual ready to bring a fresh perspective to your team and make meaningful contributions in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
