// src/components/Contact.jsx
import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Entre em Contato</h2>

        <div className="flex justify-center">
          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <span>yamamoto@ydsoftware.com.br</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin className="text-blue-500" />
              <span>linkedin.com/in/alexyamamoto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
