import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="about-content">
          <p>Profissional com mais de 25 anos de atuação na área de TI, especializado em gestão de equipes, infraestrutura de TI, desenvolvimento de software e segurança da informação. Possuo vasta experiência em projetos de modernização tecnológica, eficiência operacional da equipe de TI e redução de custos, com amplo domínio em metodologias ágeis, DevOps e padrões de segurança (ISO 9001, ISO 27001). Minha expertise inclui implantação de sistemas, gestão de servidores, banco de dados (SQL Server, MySQL) e plataformas de nuvem. Sou focado na entrega de valor ao negócio por meio de gestão de projetos e coordenação de equipes.</p>
          
          <p>Formado em Gestão da Tecnologia da Informação e Pos Graduado em Engenharia de Software possuo varios cursos de especialização na área.</p>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-text">Anos de Experiência</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12+</span>
              <span className="stat-text">Anos de liderança de equipes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
