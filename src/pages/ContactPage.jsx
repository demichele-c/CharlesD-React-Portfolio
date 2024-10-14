import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg py-12 sm:py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text mb-10">
          Get In Touch
        </h2>
        <p className="text-lg sm:text-xl text-light-text dark:text-dark-text mb-6">
          I'd love to hear from you! Feel free to reach out via email.
        </p>
        <a
          href="mailto:demichele.charles@gmail.com"
          className="inline-block bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-400 transition duration-300"
        >
          Send me an email
        </a>
        <p className="text-lg sm:text-xl text-light-text dark:text-dark-text mt-6">
          You can also find me on GitHub, LinkedIn, and Stack Overflow. Links are available in the footer below.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
