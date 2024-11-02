// src/app/contact/page.tsx
'use client';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        'service_k991bp7',         // Replace with your EmailJS service ID
        'template_6qgqgfe',        // Replace with your EmailJS template ID
        {
          from_name: formData.name,   // Match template variable names
          from_email: formData.email, // Match template variable names
          message: formData.message,  // Match template variable names
        },
        'tMTROKh_3LFGsPiII'           // Replace with your EmailJS public key
      );
      setStatusMessage("Your message has been sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatusMessage("Failed to send your message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  // Automatically clear the status message after 3 seconds
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage('');
      }, 3000);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [statusMessage]);

  return (
    <div className="bg-gray-900 min-h-screen pt-16 text-white">
      <section className="p-8 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-6 text-lg">Feel free to reach out to me using the form below!</p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-red-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-red-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-red-500"
          ></textarea>
          <button
            type="submit"
            className="p-3 rounded-md bg-red-500 text-white font-bold hover:bg-red-600 transition duration-300"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {/* Status message with fade-out effect */}
          {statusMessage && (
            <p className={`mt-4 text-sm ${statusMessage.includes("success") ? "text-green-400" : "text-red-400"} fade-out`}>
              {statusMessage}
            </p>
          )}
        </form>
      </section>
      <style jsx>{`
        .fade-out {
          animation: fadeOut 3s forwards;
        }
        @keyframes fadeOut {
          0% { opacity: 1; }
          90% { opacity: 1; } /* Maintain opacity before fading */
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
