// ContactFormPopup.jsx
"use client";
import { useState } from "react";
import Lottie from 'react-lottie';
import animationData from './contact.json';

const ContactFormPopup = ({ isOpen, togglePopup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require('./contact.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await res.json();

    if (res.ok) {
      alert(result.message);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert(result.message);
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3 transform transition-transform duration-300 scale-100 hover:scale-105">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Contact Me</h2>
          <button onClick={togglePopup} className="text-red-500 hover:text-red-700">
            <i className="fas fa-times fa-lg"></i>
          </button>
        </div>
        <Lottie options={defaultOptions} height={150} width={150} />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 text-black rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 text-black rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 text-black rounded w-full p-2"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={togglePopup}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full md:w-auto"
            >
              Close
            </button>
            <button
              type="submit"
              className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full md:w-auto"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default ContactFormPopup;
