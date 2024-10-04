import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('Experienced Entrepreneur');
  const [fadeClass, setFadeClass] = useState('fadeIn'); // Manages fading in/out

  useEffect(() => {
    const textOptions = ['Experienced Entrepreneur', 'Commercial Diver', 'Full-Stack Developer'];
    let index = 0;

    const interval = setInterval(() => {
      setFadeClass('fadeOut'); // Start fading out the current text
      setTimeout(() => {
        index = (index + 1) % textOptions.length; // Move to the next text
        setText(textOptions[index]);
        setFadeClass('fadeIn'); // Fade the new text in
        if (index === textOptions.length - 1) {
          clearInterval(interval); // Stop after showing "Full-Stack Developer"
        }
      }, 1000); // Wait for fade-out transition before changing text
    }, 2000); // Time between text changes (2 seconds)

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/chuck-the-diver.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl md:text-7xl font-display animate-fadeIn">
          Charles DeMichele
        </h1>
        <p className={`text-xl md:text-2xl mt-4 ${fadeClass}`}>
          {text}
        </p>
        <a href="/projects" className="mt-8 px-6 py-3 bg-teal-500 hover:bg-teal-400 transition rounded-full text-white">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
