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
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Experiência Profissional</h2>

        <div className="relative border-l-2 border-blue-500">
          {experiences.map((exp, index) => (
            <div className="mb-10 ml-6" key={index}>
              <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
                {index + 1}
              </div>
              <span className="text-blue-500 font-semibold">{exp.date}</span>
              <div className="bg-white shadow rounded p-4 mt-2">
                <h3 className="font-bold">{exp.company}</h3>
                <h4 className="text-blue-600">{exp.position}</h4>
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
