import React from 'react';
import { FaGithub, FaLinkedin, FaDiscord, FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-flex">
        <nav className="navbar">
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#experience">Experiência</a></li>
            <li><a href="#education">Formação</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        <div className="header-icons">
          <a href="https://github.com/satochi-yamamoto" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub style={{ color: '#181717', fontSize: '1.5rem' }} />
          </a>
          <a href="https://www.linkedin.com/in/alexyamamoto/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin style={{ color: '#0077b5', fontSize: '1.5rem' }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" title="Discord">
            <FaDiscord style={{ color: '#5865F2', fontSize: '1.5rem' }} />
          </a>
        </div>
        <div className="mobile-menu">
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Header;
