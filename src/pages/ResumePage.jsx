import React from 'react';
import { FaCode, FaDatabase, FaServer } from 'react-icons/fa'; // Adding icons for skills

const ResumePage = () => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center mt-8 md:mt-16"> {/* Added mt-8 for mobile, mt-16 for desktop */}
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text mb-8">
          Resume
        </h2>
        
        {/* Download Button */}
        <p className="text-base sm:text-lg mb-6 text-light-text dark:text-dark-text">
          Download my resume by clicking the button below:
        </p>
        <a
          href="/assets/files/Charles-DeMichele.pdf"  // Ensure the path is correct
          download
          className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-full transition shadow-lg transform hover:scale-105"
        >
          Download Resume
        </a>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-200 dark:border-gray-700"></div>

        {/* Skills/Proficiencies Section */}
        <div className="mt-10 text-left sm:text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-light-text dark:text-dark-text mb-6">
            Proficiencies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Each skill is represented as a badge */}
            <div className="flex items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <FaCode className="text-teal-500 text-2xl mr-2" /> 
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg">JavaScript (ES6+)</span>
            </div>
            <div className="flex items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <FaCode className="text-teal-500 text-2xl mr-2" /> 
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg">React</span>
            </div>
            <div className="flex items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <FaServer className="text-teal-500 text-2xl mr-2" /> 
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg">Node.js</span>
            </div>
            <div className="flex items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <FaServer className="text-teal-500 text-2xl mr-2" /> 
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg">Express.js</span>
            </div>
            <div className="flex items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <FaDatabase className="text-teal-500 text-2xl mr-2" /> 
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg">MongoDB / NoSQL</span>
            </div>
            <div className="flex items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <FaDatabase className="text-teal-500 text-2xl mr-2" /> 
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg">MySQL / SQL</span>
            </div>
            <div className="flex items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <FaCode className="text-teal-500 text-2xl mr-2" /> 
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg">HTML5 / CSS3</span>
            </div>
            <div className="flex items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <FaCode className="text-teal-500 text-2xl mr-2" /> 
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg">Responsive Web Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
