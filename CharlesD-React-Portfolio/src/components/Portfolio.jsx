import React from 'react';

const Portfolio = () => {
  return (
    <section id="work" className="bg-gray-800 p-8 rounded-lg mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-white light-mode:text-black">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* DevBlog */}
        <a
          href="https://dev-blog-je23.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition"
        >
          <img src="/assets/images/Dev-Blog.png" alt="Developer Blog Website" className="mb-4 rounded-lg" />
          <p className="text-white light-mode:text-black">DevBlog</p>
        </a>

        {/* Social Network API */}
        <a
          href="https://www.youtube.com/watch?v=r_HlHH-Ams8"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition"
        >
          <img src="/assets/images/ThoughtLink-Api.png" alt="Insomnia Testing an API Application" className="mb-4 rounded-lg" />
          <p className="text-white light-mode:text-black">Social Network API</p>
        </a>

        {/* Mix-It */}
        <a
          href="https://rich-strain.github.io/cocktail-search/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition"
        >
          <img src="/assets/images/mix-it.png" alt="A cocktail assistant application" className="mb-4 rounded-lg" />
          <p className="text-white light-mode:text-black">Mix-It!</p>
        </a>

        {/* Employee Tracker */}
        <a
          href="https://drive.google.com/file/d/13vMsRiy04XIg2wh5PnVb1ZmYQsoFXyDb/view"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition"
        >
          <img src="/assets/images/Employee-Tracker.png" alt="An application that tracks employee data" className="mb-4 rounded-lg" />
          <p className="text-white light-mode:text-black">Employee Tracker</p>
        </a>

        {/* DreamNet */}
        <a
          href="https://github.com/demichele-c/DreamNet"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition"
        >
          <img src="/assets/images/DreamNet.png" alt="DreamNet - AI dream interpreter" className="mb-4 rounded-lg" />
          <p className="text-white light-mode:text-black">DreamNet</p>
        </a>

        {/* Weather Dashboard */}
        <a
          href="https://demichele-c.github.io/Weather-Dashboard/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition"
        >
          <img src="/assets/images/weather-Dashboard.png" alt="Weather Dashboard" className="mb-4 rounded-lg" />
          <p className="text-white light-mode:text-black">Weather Dashboard</p>
        </a>

        {/* Note Taker */}
        <a
          href="https://github.com/demichele-c/Note-Taker"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition"
        >
          <img src="/assets/images/note-taker.png" alt="A note taking application" className="mb-4 rounded-lg" />
          <p className="text-white light-mode:text-black">Note Taker</p>
        </a>

        {/* Task Board */}
        <a
          href="https://demichele-c.github.io/Task-Board/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition"
        >
          <img src="/assets/images/Task-Board.png" alt="Task management application" className="mb-4 rounded-lg" />
          <p className="text-white light-mode:text-black">Task Board</p>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
