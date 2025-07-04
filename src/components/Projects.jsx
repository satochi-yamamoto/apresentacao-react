import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: "images/projects/project1.jpg",
      alt: "Projeto 1",
      title: "Site de apresentação versão React.js",
      description: "Site de apresentação desenvolvido na linguagem React",
      link: "https://react.satochi.com.br/"
    },
    {
      id: 2,
      image: "images/projects/project2.jpg",
      alt: "Projeto 2",
      title: "Site de apresentação versão Vue.js",
      description: "Site de apresentação desenvolvido na linguagem Vue3",
      link: "https://vue.satochi.com.br/"
    },
    {
      id: 3,
      image: "images/projects/whats.jpg",
      alt: "Projeto 3",
      title: "API Automação Whatsapp",
      description: "API de Automação de mensagens do Whatsapp",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projetos Destacados</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="relative rounded shadow overflow-hidden h-64">
              <img src={project.image} alt={project.alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-white p-4">
                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="mb-4 text-center">{project.description}</p>
                <a href={project.link} className="border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-900">Ver Detalhes</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;