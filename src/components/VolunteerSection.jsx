import React from 'react';


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
    <section id="volunteer" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Trabalho Voluntário</h2>

        {volunteerExperiences.map((experience) => (
          <div key={experience.id} className="mb-8">
            <h3 className="font-bold text-xl">{experience.title}</h3>
            <p className="text-gray-700">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VolunteerSection;