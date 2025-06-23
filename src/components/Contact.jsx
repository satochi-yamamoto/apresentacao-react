// src/components/Contact.jsx
import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope />
              <span>yamamoto@ydsoftware.com.br</span>
            </div>
            <div className="info-item">
              <FaLinkedin />
              <span>linkedin.com/in/alexyamamoto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
