import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/chuck-the-diver.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl md:text-7xl font-display animate-fadeIn">
          Charles DeMichele
        </h1>
        <p className="text-xl md:text-2xl mt-4 animate-fadeIn">
          Full-Stack Developer
        </p>
        <a href="/projects" className="mt-8 px-6 py-3 bg-teal-500 hover:bg-teal-400 transition rounded-full text-white">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
