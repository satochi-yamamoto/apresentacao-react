import React from 'react';

const Experience = () => {
  const experiences = [
    {
      date: "2025 - Presente",
      company: "Adelco Sistema de Energia",
      position: "Coordenador de TI",
      description: "Liderança de equipes multidisciplinares no desenvolvimento do ERP Protheus da TOTVS."
    },
    {
      date: "2024 - 2025",
      company: "Terra Nova Logistica",
      position: "Coordenador de TI",
      description: "Gestão da área de TI, responsavel pela equipe de Infraestrutura, Desenvolvimento e BI"
    },
    // Adicione outras experiências conforme necessário
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experiência Profissional</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-content">
                <h3>{exp.company}</h3>
                <h4>{exp.position}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
