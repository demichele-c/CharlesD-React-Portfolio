import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Validate each field when the user moves out of it (on blur)
    switch (name) {
      case 'name':
        setErrors({
          ...errors,
          name: value.trim() === '' ? 'Name is required' : ''
        });
        break;
      case 'email':
        setErrors({
          ...errors,
          email: value.trim() === ''
            ? 'Email is required'
            : !validateEmail(value)
            ? 'Please enter a valid email address'
            : ''
        });
        break;
      case 'message':
        setErrors({
          ...errors,
          message: value.trim() === '' ? 'Message is required' : ''
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled in and email is valid before submitting
    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
    }
    if (!formData.email.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
    } else if (!validateEmail(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address'
      }));
    }
    if (!formData.message.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Message is required'
      }));
    }

    // If no errors, submit the form
    if (
      formData.name &&
      formData.email &&
      formData.message &&
      validateEmail(formData.email)
    ) {
      console.log('Form submitted:', formData);
      // You can add your form submission logic here
    }
  };

  return (
    <div className="bg-light-bg dark:bg-dark-bg py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-light-text dark:text-dark-text mb-10">
          Contact Me
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-light-text dark:text-dark-text mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="w-full p-3 bg-gray-100 dark:bg-gray-700 dark:text-white text-black rounded focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-light-text dark:text-dark-text mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="w-full p-3 bg-gray-100 dark:bg-gray-700 dark:text-white text-black rounded focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-light-text dark:text-dark-text mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="w-full p-3 bg-gray-100 dark:bg-gray-700 dark:text-white text-black rounded focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
              rows="5"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded hover:bg-teal-400 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
