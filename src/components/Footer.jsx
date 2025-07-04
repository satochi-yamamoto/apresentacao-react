// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="text-2xl font-bold">
            <a href="#">Alexandre Satochi Yamamoto</a>
          </div>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            <li><a href="#about" className="hover:text-blue-400">Sobre</a></li>
            <li><a href="#experience" className="hover:text-blue-400">Experiência</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Habilidades</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contato</a></li>
          </ul>
          <div className="flex space-x-4 text-xl mt-4 md:mt-0">
            <a href="https://github.com/satochi-yamamoto" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/alexyamamoto/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaDiscord />
            </a>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm">&copy; {new Date().getFullYear()} Alexandre Satochi Yamamoto. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
