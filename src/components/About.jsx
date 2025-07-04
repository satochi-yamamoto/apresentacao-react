import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Sobre Mim</h2>
        <p>Profissional com mais de 25 anos de atuação na área de TI, especializado em gestão de equipes, infraestrutura de TI, desenvolvimento de software e segurança da informação. Possuo vasta experiência em projetos de modernização tecnológica, eficiência operacional da equipe de TI e redução de custos, com amplo domínio em metodologias ágeis, DevOps e padrões de segurança (ISO 9001, ISO 27001). Minha expertise inclui implantação de sistemas, gestão de servidores, banco de dados (SQL Server, MySQL) e plataformas de nuvem. Sou focado na entrega de valor ao negócio por meio de gestão de projetos e coordenação de equipes.</p>

        <p className="mt-4">Formado em Gestão da Tecnologia da Informação e Pos Graduado em Engenharia de Software possuo varios cursos de especialização na área.</p>

        <div className="flex justify-center gap-12 mt-8">
          <div className="text-center">
            <span className="block text-4xl text-blue-500 font-bold">25+</span>
            <span className="text-gray-600">Anos de Experiência</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl text-blue-500 font-bold">12+</span>
            <span className="text-gray-600">Anos de liderança de equipes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
