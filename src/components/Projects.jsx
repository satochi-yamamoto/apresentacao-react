import React from 'react';
import './ProjectsSection.css'; // Arquivo CSS para estilos (opcional)

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
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projetos Destacados</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <img src={project.image} alt={project.alt} />
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="btn btn-outline">Ver Detalhes</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;