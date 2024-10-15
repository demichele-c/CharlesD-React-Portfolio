import React, { useState, useEffect } from 'react';
import { FaGithub, FaCode, FaDatabase, FaServer } from 'react-icons/fa'; // Importing GitHub and skill icons

const projects = [
  {
    name: 'ItinerAi',
    image: 'assets/images/coming-soon.png', 
    link: 'https://itinerai.onrender.com/', 
    repo: 'https://github.com/demichele-c/ItinerAi', 
    problem: 'Couples or individuals struggle to plan their date nights or itineraries easily.',
    process: 'Developed using React for the front end, GraphQL with Node.js and Express for the back end, MongoDB for data storage, and integrated OpenAI for generating itinerary suggestions.',
    solution: 'ItinerAi generates personalized date night itineraries based on user preferences such as location, activities, and food choices.',
    impact: 'Simplified the process of creating customized and thoughtful date night plans, helping users save time while creating memorable experiences.',
    technologies: 'React, Node.js, GraphQL, Express, MongoDB, OpenAI API',
  },
  {
    name: 'DevBlog',
    image: 'assets/images/Dev-Blog.png',
    link: 'https://demichele-c.github.io/Dev-Blog/',
    repo: 'https://github.com/demichele-c/Dev-Blog',
    problem: 'Developers often struggle with sharing insights and code effectively in a structured platform.',
    process: 'Built a full-stack blog platform using React for the front end, Node.js for the backend, and MongoDB as the database.',
    solution: 'Created a blog platform allowing developers to post, edit, and delete articles easily.',
    impact: 'Enhanced knowledge sharing within the developer community, increasing engagement and collaboration.',
    technologies: 'React, Node.js, MongoDB',
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
    technologies: 'Node.js, Express, MongoDB',
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
    technologies: 'JavaScript, HTML, CSS',
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
    technologies: 'Node.js, Inquirer, MySQL',
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
    technologies: 'Node.js, Express, OpenAI API',
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
    technologies: 'JavaScript, OpenWeather API',
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
    technologies: 'Express, Node.js, JavaScript',
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
    technologies: 'JavaScript, HTML, CSS',
  },
];

const Hero = () => {
  const [text, setText] = useState('Experienced Entrepreneur');
  const [fadeClass, setFadeClass] = useState('fadeIn'); // Manages fading in/out

  useEffect(() => {
    const textOptions = ['Experienced Entrepreneur', 'Commercial Diver', 'Software Developer'];
    let index = 0;

    const interval = setInterval(() => {
      setFadeClass('fadeOut'); // Start fading out the current text
      setTimeout(() => {
        index = (index + 1) % textOptions.length; // Move to the next text
        setText(textOptions[index]);
        setFadeClass('fadeIn'); // Fade the new text in
        if (index === textOptions.length - 1) {
          clearInterval(interval); // Stop after showing "Software Developer"
        }
      }, 1000); // Wait for fade-out transition before changing text
    }, 3000); // Time between text changes (2 seconds)

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full h-screen bg-cover bg-center dark:bg-gray-900"
        style={{ backgroundImage: 'url(/assets/images/chuck-the-diver.jpg)' }}
      >
        {/* Dark Overlay to Make Text Clearer */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* YouTube Short in Tailwind Card - Positioned Above Background */}
        <div className="absolute top-20 left-8 w-3/4 md:w-1/4 bg-white dark:bg-gray-800 bg-opacity-80 shadow-lg rounded-lg overflow-hidden z-10">
          <div className="p-2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/gXAr8is1cO0?autoplay=1&mute=0&controls=0&modestbranding=1&loop=1&playlist=gXAr8is1cO0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
              style={{
                aspectRatio: '9 / 16', // Keeps the YouTube Short's vertical ratio
              }}
            ></iframe>
          </div>
        </div>

        {/* Text and Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white dark:text-gray-100 h-full z-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 font-sans tracking-wide animate-bounce-custom">
            Hi, I'm Chuck!
          </h2>
          <p className={`text-lg sm:text-xl md:text-2xl mb-4 ${fadeClass}`}>
            {text}
          </p>
          <a href="#projects" className="inline-block px-4 py-2 bg-teal-500 hover:bg-teal-400 transition rounded-full text-white text-sm sm:text-base">
            See My Work
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 dark:bg-gray-800 py-10 px-4">
        <div className="container mx-auto mt-4 md:mt-12"> {/* Adjusted margin-top */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
            My Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group relative w-full h-auto bg-gray-200 dark:bg-gray-700 p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300">
                {/* Project Image and Title */}
                <img src={project.image} alt={project.name} className="w-full h-32 object-cover mb-4 rounded-lg" />
                <p className="text-center font-bold text-gray-900 dark:text-gray-100">{project.name}</p>

                {/* "See It In Action" Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-4 py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-400 transition"
                >
                  See It In Action
                </a>

                {/* Project Details Dropdown */}
                <div className="mt-4">
                  <details className="bg-white dark:bg-gray-800 rounded-md shadow p-3">
                    <summary className="text-teal-400 cursor-pointer">Problem</summary>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{project.problem}</p>
                  </details>
                  <details className="bg-white dark:bg-gray-800 rounded-md shadow p-3 mt-2">
                    <summary className="text-teal-400 cursor-pointer">Process</summary>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{project.process}</p>
                  </details>
                  <details className="bg-white dark:bg-gray-800 rounded-md shadow p-3 mt-2">
                    <summary className="text-teal-400 cursor-pointer">Solution</summary>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{project.solution}</p>
                  </details>
                  <details className="bg-white dark:bg-gray-800 rounded-md shadow p-3 mt-2">
                    <summary className="text-teal-400 cursor-pointer">Impact</summary>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{project.impact}</p>
                  </details>
                </div>

                {/* GitHub Repo Icon */}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-2 text-gray-800 dark:text-gray-100"
                >
                  <FaGithub className="inline-block text-3xl hover:text-teal-400 transition" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="bg-gray-200 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center mt-8 md:mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">Resume</h2>
          <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-6">
            Download my resume by clicking the button below:
          </p>
          <a
            href="/assets/files/Charles-DeMichele.pdf"
            download
            className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-full transition"
          >
            Download Resume
          </a>

          {/* Skills Section */}
          <div className="mt-10 text-left sm:text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
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
      </section>
    </div>
  );
};

export default Hero;
