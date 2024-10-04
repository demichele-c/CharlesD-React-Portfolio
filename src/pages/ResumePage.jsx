import React from 'react';

const ResumePage = () => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-light-text dark:text-dark-text mb-8">Resume</h2>
        <p className="text-lg mb-6 text-light-text dark:text-dark-text">
          Download my resume by clicking the button below:
        </p>
        <a
          href="/assets/files/Charles-DeMichele-Resume.pdf"  // Make sure this path points to the right location
          download
          className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-full transition"
        >
          Download Resume
        </a>

        {/* Skills/Proficiencies */}
        <div className="mt-10">
          <h3 className="text-3xl font-semibold text-light-text dark:text-dark-text mb-4">Proficiencies</h3>
          <ul className="list-disc list-inside text-light-text dark:text-dark-text text-lg">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB / NoSQL</li>
            <li>MySQL / SQL</li>
            <li>HTML5 / CSS3</li>
            <li>Git / GitHub</li>
            <li>Responsive Web Design</li>
            <li>RESTful API Development</li>
            <li>Progressive Web Apps (PWAs)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
