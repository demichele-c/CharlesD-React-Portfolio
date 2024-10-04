import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg py-20">
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-bold text-light-text dark:text-dark-text mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* DevBlog Project */}
          <a href="https://dev-blog-je23.onrender.com/" className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition">
            <img src="assets/images/Dev-Blog.png" alt="Developer Blog Website" className="mb-4 rounded-lg" />
            <p className="text-white">DevBlog</p>
          </a>

          {/* Social Network API */}
          <a href="https://www.youtube.com/watch?v=r_HlHH-Ams8" className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition">
            <img src="assets/images/ThoughtLink-Api.png" alt="Social Network API" className="mb-4 rounded-lg" />
            <p className="text-white">Social Network API</p>
          </a>

          {/* Mix-It */}
          <a href="https://rich-strain.github.io/cocktail-search/" className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition">
            <img src="assets/images/mix-it.png" alt="Mix-It Cocktail Assistant" className="mb-4 rounded-lg" />
            <p className="text-white">Mix-It!</p>
          </a>

          {/* Employee Tracker */}
          <a href="https://drive.google.com/file/d/13vMsRiy04XIg2wh5PnVb1ZmYQsoFXyDb/view" className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition">
            <img src="assets/images/Employee-Tracker.png" alt="Employee Tracker" className="mb-4 rounded-lg" />
            <p className="text-white">Employee Tracker</p>
          </a>

          {/* DreamNet */}
          <a href="https://github.com/demichele-c/DreamNet" className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition">
            <img src="assets/images/DreamNet.png" alt="DreamNet AI Dream Interpreter" className="mb-4 rounded-lg" />
            <p className="text-white">DreamNet</p>
          </a>

          {/* Weather Dashboard */}
          <a href="https://demichele-c.github.io/Weather-Dashboard/" className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition">
            <img src="assets/images/weather-Dashboard.png" alt="Weather Dashboard" className="mb-4 rounded-lg" />
            <p className="text-white">Weather Dashboard</p>
          </a>

          {/* Note Taker */}
          <a href="https://github.com/demichele-c/Note-Taker" className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition">
            <img src="assets/images/note-taker.png" alt="Note Taker Application" className="mb-4 rounded-lg" />
            <p className="text-white">Note Taker</p>
          </a>

          {/* Task Board */}
          <a href="https://demichele-c.github.io/Task-Board/" className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition">
            <img src="assets/images/Task-Board.png" alt="Task Management Board" className="mb-4 rounded-lg" />
            <p className="text-white">Task Board</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
