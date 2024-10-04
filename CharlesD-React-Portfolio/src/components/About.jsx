import React from 'react';

const About = () => {
  return (
    <section id="about-me" className="bg-gray-800 p-8 rounded-lg mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-white">About Me</h2>
      <p className="text-lg text-white">
      I'm currently enrolled in a Full Stack Coding Bootcamp at the University of Central Florida, aiming to become a software developer. With 16 years in the restaurant industry as a chef, manager, and owner/operator, I've honed leadership, management, and problem-solving skills. Running my own restaurant taught me resilience, innovation, and the importance of customer satisfaction.

In 2021, I transitioned to commercial diving, specializing in underwater construction. This role sharpened my technical skills, attention to detail, and ability to thrive under pressure.

My diverse background fosters adaptability and a continuous learning mindset, driving my passion for technology. I am eager to apply my unique skills to software development, contributing to dynamic teams and solving complex problems.

Let's connect if you're looking for a motivated, versatile individual ready to bring a fresh perspective to your team and make meaningful contributions in the tech industry.
      </p>
      {/* Full-screen image */}
      <div className="w-full h-screen bg-cover bg-center mb-8" style={{ backgroundImage: `url(/assets/images/chuck-the-diver.jpg)` }}>
        {/* Additional content like a centered caption can go here */}
      </div>
    </section>
  );
};

export default About;
