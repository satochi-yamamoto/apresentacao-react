import React from 'react';
import './VolunteerSection.css'; // Arquivo de estilos

const VolunteerSection = () => {
  const volunteerExperiences = [
    {
      id: 1,
      title: "Grupo Escoteiro Cooper Cotia - 131",
      description: "Atualmente atuo como voluntário na Escoteira do Cooper Cotia do Distrito do Butantã SP, realizo trabalhos na equipe de apoio de Pais, atuando como suporte nas atividades, refeições e em Festas dos jovens do grupo Escoteiro aos finais de semana."
    },
    {
      id: 2,
      title: "Representante do GAP - CooperAtletico Clube",
      description: "Atuante no Grupo de apoio a prevenção realizando monitorias e inspeções do Clube CooperCotia em busca de melhorias e qualidade para os Socios."
    }
  ];

  return (
    <section id="volunteer" className="section volunteer">
      <div className="container">
        <h2 className="section-title">Trabalho Voluntário</h2>
        
        {volunteerExperiences.map((experience) => (
          <div key={experience.id} className="volunteer-content">
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VolunteerSection;