import React from 'react';

import { FaGithub, FaLinkedin, FaDiscord, FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-semibold text-gray-800">
            <li><a href="#about" className="hover:text-blue-500">Sobre</a></li>
            <li><a href="#experience" className="hover:text-blue-500">Experiência</a></li>
            <li><a href="#education" className="hover:text-blue-500">Formação</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Habilidades</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contato</a></li>
          </ul>
        </nav>
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/satochi-yamamoto" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-800 hover:text-gray-600">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/alexyamamoto/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-blue-700 hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" title="Discord" className="text-indigo-600 hover:text-indigo-400">
            <FaDiscord />
          </a>
        </div>
        <div className="block md:hidden text-2xl">
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Header;
