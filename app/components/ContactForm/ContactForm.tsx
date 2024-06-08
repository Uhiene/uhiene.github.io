"use client"
import React, { useState } from 'react';
import FormInput from './FormInput'; // Adjust the import path according to your file structure

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
     ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-11/12 lg:w-3/5 mx-auto p-10 mt-10 bg-slate-50 shadow-md rounded-xl text-center">
      <h2 className="text-4xl font-bold mb-4 text-slate-900">Get in touch</h2>
      <p className="mb-10 text-slate-500">Let's work together!</p>
      <FormInput
        id="name"
        name="name"
        placeholder="Enter your name..."
        value={formData.name}
        onChange={handleChange}
      />
      <FormInput
        id="email"
        name="email"
        placeholder="name@example.com"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormInput
        id="phone"
        name="phone"
        placeholder="Phone Number"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
      />
      <FormInput
        id="message"
        name="message"
        placeholder="Message"
        as="textarea"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit" className="w-full lg:w-4/5 bg-pink-500 text-white p-2 rounded">Send Message</button>
    </form>
  );
};

export default ContactForm;
