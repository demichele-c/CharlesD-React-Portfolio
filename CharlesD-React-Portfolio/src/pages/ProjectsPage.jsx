import React from 'react';

const projects = [
  {
    title: 'DevBlog',
    image: '/assets/images/Dev-Blog.png',
    link: 'https://dev-blog-je23.onrender.com/',
  },
  {
    title: 'Social Network API',
    image: '/assets/images/ThoughtLink-Api.png',
    link: 'https://www.youtube.com/watch?v=r_HlHH-Ams8',
  },
  // Add more projects here
];

const ProjectsPage = () => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-light-text dark:text-dark-text mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block transform hover:scale-105 transition-transform duration-300 bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
