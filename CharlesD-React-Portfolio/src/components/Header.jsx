import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    document.body.classList.toggle('light-mode');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-gray-800 text-white p-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold">
        <span className="text-teal-500">Charles</span> DeMichele
      </h1>
      <nav>
        <ul className="flex space-x-6 text-lg">
          <li><NavLink to="/" className="hover:text-teal-400">About Me</NavLink></li>
          <li><NavLink to="/portfolio" className="hover:text-teal-400">Portfolio</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-teal-400">Contact</NavLink></li>
          <li><NavLink to="/resume" className="hover:text-teal-400">Resume</NavLink></li>
        </ul>
      </nav>
      <button onClick={toggleMode} className="bg-teal-500 text-white py-2 px-4 rounded">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
