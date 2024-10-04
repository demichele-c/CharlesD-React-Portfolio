import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email || !validateEmail(formData.email)) validationErrors.email = 'Valid email is required';
    if (!formData.message) validationErrors.message = 'Message is required';
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
    }
  };

  return (
    <section className="bg-gray-800 p-8 rounded-lg mb-8 text-white">
      <h2 className="text-3xl font-semibold mb-4 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="text-center">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input-field"
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="input-field"
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="input-field"
          ></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>
        <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded">Send</button>
      </form>
    </section>
  );
};

export default Contact;
