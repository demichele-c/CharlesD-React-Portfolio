import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-6">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm sm:text-base">Made with ❤️ by Charles DeMichele</p>
        <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} DeMicheleWebsiteSolutions</p>
        <div className="mt-4 flex justify-center space-x-4 sm:space-x-6">
          <a 
            href="https://github.com/demichele-c" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-teal-500 dark:hover:text-teal-400"
          >
            <i className="fab fa-github text-xl sm:text-2xl"></i>  {/* GitHub icon */}
          </a>
          <a 
            href="https://www.linkedin.com/in/charles-demichele-601366313/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-teal-500 dark:hover:text-teal-400"
          >
            <i className="fab fa-linkedin text-xl sm:text-2xl"></i>  {/* LinkedIn icon */}
          </a>
          <a 
            href="https://stackoverflow.com/users/27630717/demichele-c" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-teal-500 dark:hover:text-teal-400"
          >
            <i className="fab fa-stack-overflow text-xl sm:text-2xl"></i>  {/* Stack Overflow icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
