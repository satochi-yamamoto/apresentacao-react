import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-100 to-gray-300 pt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        <div className="flex-1 md:pr-12 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Alexandre Satochi Yamamoto</h1>
          <h2 className="text-xl text-gray-600 mb-4">Coordenador de Desenvolvimento de Software e TI,</h2>
          <p className="mb-6">+25 anos de atuação na área de TI dos quais 12 anos dedicado a liderança de equipes em projetos de TI e de Desenvolvimento de Softwares</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#contact" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">Entre em Contato</a>
            <a href="#experience" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">Ver Experiência</a>
          </div>
        </div>
        <div className="flex-1 text-center">
          <img
            src="/images/avatar.jpg"
            alt="Alexandre Satochi Yamamoto"
            className="w-48 h-48 rounded-full shadow-lg border-4 border-white object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
