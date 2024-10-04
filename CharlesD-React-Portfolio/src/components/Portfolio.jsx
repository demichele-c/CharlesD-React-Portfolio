import React from 'react';

const Portfolio = () => {
  return (
    <section className="bg-gray-800 p-8 rounded-lg mb-8 text-white">
      <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Cards */}
        <a href="https://dev-blog-je23.onrender.com/" className="block bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition">
          <img src="/assets/images/Dev-Blog.png" alt="DevBlog" className="mb-4 rounded-lg" />
          <p>DevBlog</p>
        </a>
        {/* Add more project links similarly */}
      </div>
    </section>
  );
};

export default Portfolio;
