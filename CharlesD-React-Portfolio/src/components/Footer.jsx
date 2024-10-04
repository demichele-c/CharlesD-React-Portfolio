import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center py-6 text-white">
      <p>Made with ❤️ by Charles DeMichele</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://github.com/demichele-c" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-teal-400" />
        </a>
        <a href="https://www.linkedin.com/in/charles-demichele-601366313/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-teal-400" />
        </a>
        <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">
          <FaStackOverflow className="text-2xl hover:text-teal-400" />
        </a>
      </div>
      <p className="mt-4">&copy; 2024 DeMicheleWebsiteSolutions</p>
    </footer>
  );
};

export default Footer;
