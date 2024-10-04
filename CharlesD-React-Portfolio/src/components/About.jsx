import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-800 p-8 rounded-lg mb-8 text-white">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="text-lg">
        I'm currently enrolled in a Full Stack Coding Bootcamp at the University of Central Florida, aiming to become a software developer...
      </p>
      <img src="/assets/images/chuck-the-diver.jpg" alt="Charles DeMichele" className="w-48 rounded-lg mt-4" />
    </section>
  );
};

export default About;
