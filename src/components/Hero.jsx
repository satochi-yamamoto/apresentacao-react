import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Alexandre Satochi Yamamoto</h1>
          <h2>Coordenador de Desenvolvimento de Software e TI,</h2>
          <p>+25 anos de atuação na área de TI dos quais 12 anos dedicado a liderança de equipes em projetos de TI e de Desenvolvimento de Softwares</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Entre em Contato</a>
            <a href="#experience" className="btn btn-outline">Ver Experiência</a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/images/avatar.jpg" 
            alt="Alexandre Satochi Yamamoto" 
            className="avatar-rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
