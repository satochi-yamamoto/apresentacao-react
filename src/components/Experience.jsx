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
    {
      date: "2023 - 2024",
      company: "Primi Tecnologia",
      position: "Coodenador de Desenvolvimento",
      description: "Responsagel pela gestão da equipe de desenvolvimento, liderando no desenvolvimento de aplicações internas e Mobiles, Gestão de equipe, onde implementei o DEVOps e a metodologia Agile"
    },    
    {
      date: "2020 - 2023",
      company: "K2A Partners",
      position: "Coordenador de TI e Operações",
      description: "liderei a infraestrutura de TI, gerenciando serviços e servidores em ambientes de nuvem, garantindo links eficazes, acesso seguro via VPN e supervisionando as redes e serviços de TI. Como mantenedor de sistemas e DBA, desenvolvi novos relacionamentos de dados e criei procedimentos para a equipe de desenvolvimento, além de integrar dados com o Power BI."
    },  
    {
      date: "2016 - 2020",
      company: "ATIKS",
      position: "Coordenador de Operações e Desenvolvimento de Software",
      description: "Na liderança de Projetos Técnicos na Atiks TEM, fui encarregado de liderar e gerenciar diversas iniciativas estratégicas, desempenhando funções cruciais que incluíram gerenciamento de DevOps, supervisão do ciclo de vida dos projetos e validação de novas versões. Colaborei com a equipe de operações para garantir o desenvolvimento de novos itens e módulos para o Sistema TEM. Liderei com sucesso um projeto crucial de conversão de leitura OCR de faturas, melhorando significativamente a eficiência dos processos."
    }, 
    {
      date: "2011 - 2015",
      company: "TST - TELMAX",
      position: "Coordenador de TI",
      description: "Na liderança de Projetos Técnicos na Atiks TEM, fui encarregado de liderar e gerenciar diversas iniciativas estratégicas, desempenhando funções cruciais que incluíram gerenciamento de DevOps, supervisão do ciclo de vida dos projetos e validação de novas versões. Colaborei com a equipe de operações para garantir o desenvolvimento de novos itens e módulos para o Sistema TEM. Liderei com sucesso um projeto crucial de conversão de leitura OCR de faturas, melhorando significativamente a eficiência dos processos."
    },
    {
      date: "2005 - 2011",
      company: "Motorola Industrial",
      position: "Estagiário - Coordenador de qualidade e Coordenador de Campo",
      description: "Na Motorola Mobility, atuei como Coordenador Field Test, desempenhando um papel fundamental no campo de testes de aparelhos celulares. Minhas principais responsabilidades e competências incluíram: Coordenação e Gerenciamento de Equipes de Testes de Aparelhos Celulares: Liderei e gerenciei equipes de testes de aparelhos celulares, garantindo a eficácia e qualidade dos testes. Controle de Qualidade e Ações de Qualidade na América Latina: Atuei na coordenação e controle de qualidade dos testes e ações de qualidade em toda a América Latina. Desenvolvimento e Implementação de Ferramentas e Softwares de Testes para Telefones Celulares: Contribuí para o desenvolvimento e implementação de ferramentas e softwares de testes para telefones celulares"
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
