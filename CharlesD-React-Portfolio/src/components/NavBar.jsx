import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if a mode preference exists in localStorage
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : true; // Default to dark mode
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark'); // Save the mode to localStorage
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light'); // Save the mode to localStorage
    }
  }, [isDarkMode]); // This will run every time isDarkMode changes

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="fixed w-full bg-opacity-75 bg-gray-900 text-white z-10 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold hover:text-teal-400">
          Charles DeMichele
        </a>
        <ul className="flex space-x-6 text-lg">
          <li><a href="/about" className="hover:text-teal-400">About Me</a></li>
          <li><a href="/projects" className="hover:text-teal-400">Projects</a></li>
          <li><a href="/contact" className="hover:text-teal-400">Contact</a></li>
          <li><a href="/resume" className="hover:text-teal-400">Resume</a></li>
        </ul>
        <button
          onClick={toggleMode}
          className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-400"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
