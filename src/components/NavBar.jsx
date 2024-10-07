import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : true;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-opacity-75 bg-white dark:bg-gray-900 text-gray-900 dark:text-white z-10 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold hover:text-teal-500 dark:hover:text-teal-400">
          Charles DeMichele
        </a>

        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>

        {/* Navbar Links */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex space-y-4 md:space-y-0 md:space-x-6 text-lg mt-4 md:mt-0`}
        >
          <li><a href="/about" className="hover:text-teal-500 dark:hover:text-teal-400">About Me</a></li>
          <li><a href="/projects" className="hover:text-teal-500 dark:hover:text-teal-400">Projects</a></li>
          <li><a href="/contact" className="hover:text-teal-500 dark:hover:text-teal-400">Contact</a></li>
          <li><a href="/resume" className="hover:text-teal-500 dark:hover:text-teal-400">Resume</a></li>
        </ul>

        {/* Dark/Light Mode Switch */}
        <div className="hidden md:flex items-center ml-4">
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
