import React from 'react';

const Resume = () => {
  return (
    <section className="bg-gray-800 p-8 rounded-lg mb-8 text-white">
      <h2 className="text-3xl font-semibold mb-4 text-center">Resume</h2>
      <div className="text-center mb-4">
        <a
          href="/assets/files/Charles_DeMichele_Resume.pdf"
          download
          className="bg-teal-500 text-white py-2 px-4 rounded"
        >
          Download My Resume
        </a>
      </div>
      <h3 className="text-2xl font-semibold mb-4">Proficiencies</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>HTML, CSS, JavaScript</li>
        <li>React, Node.js</li>
        <li>MongoDB, MySQL</li>
        <li>Express.js, RESTful APIs</li>
        <li>Version Control (Git, GitHub)</li>
        <li>Responsive Design</li>
        <li>Progressive Web Applications (PWAs)</li>
      </ul>
    </section>
  );
};

export default Resume;
