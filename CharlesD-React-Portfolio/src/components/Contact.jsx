import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Send email via EmailJS using API Key
      emailjs.send(
        'service_lv68xy9', // Your EmailJS service ID
        '__ejs-test-mail-service__', // Your EmailJS template ID
        formData,
        'VkbKqRhdzgoPhA8Ac' // Use your API key here
      )
        .then((response) => {
          setStatusMessage('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        })
        .catch((error) => {
          setStatusMessage('Failed to send message.');
          console.error('Error sending message:', error);
        });
    }
  };

  return (
    <section id="contact-me" className="bg-gray-800 p-8 rounded-lg mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-center text-white">Contact Me</h2>
      {statusMessage && <p className="text-center text-white mb-4">{statusMessage}</p>}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full p-2 rounded bg-gray-700 text-white ${errors.name ? 'border border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full p-2 rounded bg-gray-700 text-white ${errors.email ? 'border border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-white">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full p-2 rounded bg-gray-700 text-white ${errors.message ? 'border border-red-500' : ''}`}
            rows="5"
          />
          {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-400"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
