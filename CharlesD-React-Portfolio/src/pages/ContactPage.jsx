import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-light-bg dark:bg-dark-bg py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-light-text dark:text-dark-text mb-10">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-light-text dark:text-dark-text mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-light-text dark:text-dark-text mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-light-text dark:text-dark-text mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-teal-500 text-white py-3 rounded hover:bg-teal-400 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
