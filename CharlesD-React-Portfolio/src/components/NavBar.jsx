import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if a mode preference exists in localStorage
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : true; // Default to dark mode
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark'); // Add Tailwind's 'dark' class to <html>
      localStorage.setItem('theme', 'dark'); // Save the mode to localStorage
    } else {
      document.documentElement.classList.remove('dark'); // Remove Tailwind's 'dark' class from <html>
      localStorage.setItem('theme', 'light'); // Save the mode to localStorage
    }
  }, [isDarkMode]); // This will run every time isDarkMode changes

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="fixed w-full bg-opacity-75 bg-white dark:bg-gray-900 text-gray-900 dark:text-white z-10 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold hover:text-teal-500 dark:hover:text-teal-400">
          Charles DeMichele
        </a>
        <ul className="flex space-x-6 text-lg">
          <li><a href="/about" className="hover:text-teal-500 dark:hover:text-teal-400">About Me</a></li>
          <li><a href="/projects" className="hover:text-teal-500 dark:hover:text-teal-400">Projects</a></li>
          <li><a href="/contact" className="hover:text-teal-500 dark:hover:text-teal-400">Contact</a></li>
          <li><a href="/resume" className="hover:text-teal-500 dark:hover:text-teal-400">Resume</a></li>
        </ul>

        {/* Stylish Switch for Dark/Light Mode */}
        <div className="flex items-center">
          <span className="mr-2 text-sm text-gray-500 dark:text-gray-300">
            {isDarkMode ? 'Dark' : 'Light'}
          </span>
          <label className="relative inline-block w-14 h-8">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleMode}
              className="opacity-0 w-0 h-0"
            />
            <span className="slider round absolute top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-full cursor-pointer transition-colors duration-300"></span>
            <span
              className={`dot absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                isDarkMode ? 'transform translate-x-6 bg-teal-500' : ''
              }`}
            ></span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
