import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon from Font Awesome

const projects = [
  {
    name: 'DevBlog',
    image: 'assets/images/Dev-Blog.png',
    link: 'https://demichele-c.github.io/Dev-Blog/',
    repo: 'https://github.com/demichele-c/Dev-Blog',
    problem: 'Developers often struggle with sharing insights and code effectively in a structured platform.',
    process: 'Built a full-stack blog platform using React for the front end, Node.js for the backend, and MongoDB as the database.',
    solution: 'Created a blog platform allowing developers to post, edit, and delete articles easily.',
    impact: 'Enhanced knowledge sharing within the developer community, increasing engagement and collaboration.',
    technologies: 'React, Node.js, MongoDB'
  },
  {
    name: 'Social Network API',
    image: 'assets/images/ThoughtLink-Api.png',
    link: 'https://www.youtube.com/watch?v=r_HlHH-Ams8',
    repo: 'https://github.com/demichele-c/ThoughtLink',
    problem: 'Managing users, thoughts, and friendships efficiently in a social network application.',
    process: 'Designed an API using Node.js, Express, and MongoDB to handle user, thought, and friend management.',
    solution: 'Created a scalable API that allows CRUD operations for users, thoughts, and their friends.',
    impact: 'Streamlined development for other social network applications by providing a reusable API.',
    technologies: 'Node.js, Express, MongoDB'
  },
  {
    name: 'Mix-It!',
    image: 'assets/images/mix-it.png',
    link: 'https://rich-strain.github.io/cocktail-search/',
    repo: 'https://github.com/rich-strain/cocktail-search',
    problem: 'Users find it difficult to discover and store cocktail recipes for future reference.',
    process: 'Built a cocktail recipe application using Vanilla JavaScript, HTML, and CSS with a focus on user experience.',
    solution: 'Created a search-friendly app where users can search for cocktail recipes and save them to their favorites.',
    impact: 'Improved cocktail recipe discovery and management, making it easier for users to find and try new drinks.',
    technologies: 'JavaScript, HTML, CSS'
  },
  {
    name: 'Employee Tracker',
    image: 'assets/images/Employee-Tracker.png',
    link: 'https://drive.google.com/file/d/13vMsRiy04XIg2wh5PnVb1ZmYQsoFXyDb/view',
    repo: 'https://github.com/demichele-c/Employee-Tracker',
    problem: 'HR departments struggle with efficiently managing employees, departments, and roles.',
    process: 'Built a command-line application using Node.js and MySQL to manage employees, roles, and departments.',
    solution: 'A tool that allows HR to track employees, departments, and their roles efficiently.',
    impact: 'Reduced time spent on employee management and increased overall organizational efficiency.',
    technologies: 'Node.js, Inquirer, MySQL'
  },
  {
    name: 'DreamNet',
    image: 'assets/images/DreamNet.png',
    link: 'https://github.com/demichele-c/DreamNet',
    repo: 'https://github.com/demichele-c/DreamNet',
    problem: 'People often seek insights into the meaning of their dreams and want a quick, AI-powered solution.',
    process: 'Developed an AI-powered dream interpretation tool using the OpenAI API, Node.js, and Express.',
    solution: 'Provided a user-friendly interface where users can input their dreams and get AI-generated interpretations.',
    impact: 'Offered users an innovative way to explore the meanings behind their dreams, making AI more accessible.',
    technologies: 'Node.js, Express, OpenAI API'
  },
  {
    name: 'Weather Dashboard',
    image: 'assets/images/weather-Dashboard.png',
    link: 'https://demichele-c.github.io/Weather-Dashboard/',
    repo: 'https://github.com/demichele-c/Weather-Dashboard',
    problem: 'Users often need accurate and timely weather information for planning their day or trips.',
    process: 'Built a weather app using JavaScript and the OpenWeather API to provide real-time weather information.',
    solution: 'A dashboard where users can get the current weather and forecast for cities around the world.',
    impact: 'Enhanced the ability for users to plan their daily activities based on real-time weather data.',
    technologies: 'JavaScript, OpenWeather API'
  },
  {
    name: 'Note Taker',
    image: 'assets/images/note-taker.png',
    link: 'https://github.com/demichele-c/Note-Taker',
    repo: 'https://github.com/demichele-c/Note-Taker',
    problem: 'Users need a simple yet effective way to take and store notes digitally for easy access.',
    process: 'Developed a note-taking application using Express.js and Node.js for handling back-end requests and storage.',
    solution: 'A web application where users can create, store, and delete notes efficiently.',
    impact: 'Provided a simple tool for users to organize their thoughts and tasks in a digital format.',
    technologies: 'Express, Node.js, JavaScript'
  },
  {
    name: 'Task Board',
    image: 'assets/images/Task-Board.png',
    link: 'https://demichele-c.github.io/Task-Board/',
    repo: 'https://github.com/demichele-c/Task-Board',
    problem: 'Managing multiple tasks can be overwhelming without a structured organization system.',
    process: 'Created a task management board using HTML, CSS, and JavaScript to organize tasks visually.',
    solution: 'A task board where users can add, remove, and manage tasks effectively.',
    impact: 'Improved user productivity by providing a clear overview of tasks and their statuses.',
    technologies: 'JavaScript, HTML, CSS'
  }
];

const ProjectsPage = () => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg py-20">
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-bold text-light-text dark:text-dark-text mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative w-full h-auto bg-gray-200 dark:bg-gray-700 p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300">
              {/* Project Image and Title */}
              <img src={project.image} alt={project.name} className="w-full h-32 object-cover mb-4 rounded-lg" />
              <p className="text-black dark:text-white text-center font-bold">{project.name}</p>

              {/* Dropdown for Problem, Process, Solution, Impact */}
              <div className="mt-4 space-y-2">
                <details className="bg-white dark:bg-gray-800 rounded-md shadow p-3">
                  <summary className="text-teal-400 cursor-pointer">Problem</summary>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{project.problem}</p>
                </details>
                <details className="bg-white dark:bg-gray-800 rounded-md shadow p-3">
                  <summary className="text-teal-400 cursor-pointer">Process</summary>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{project.process}</p>
                </details>
                <details className="bg-white dark:bg-gray-800 rounded-md shadow p-3">
                  <summary className="text-teal-400 cursor-pointer">Solution</summary>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{project.solution}</p>
                </details>
                <details className="bg-white dark:bg-gray-800 rounded-md shadow p-3">
                  <summary className="text-teal-400 cursor-pointer">Impact</summary>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{project.impact}</p>
                </details>
              </div>

              {/* "See It In Action" Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-4 py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-400 transition"
              >
                See It In Action
              </a>

              {/* GitHub Repo Icon */}
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-2 text-gray-800 dark:text-white"
              >
                <FaGithub className="inline-block text-3xl hover:text-teal-400 transition" /> {/* GitHub Icon */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
