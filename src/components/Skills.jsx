// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Gestão de Projetos', level: 90 },
    { name: 'AWS', level: 90 },
    { name: 'Microsoft Azure', level: 100 },
    { name: 'Oracle Cloud', level: 100 },
    { name: 'ISO 9001 / ISO 27001', level: 100 },
    { name: 'Docker', level: 100 },
    { name: 'Metodologia Agile', level: 100 },
    { name: 'CI / CD', level:100 },
    { name: 'SQL-Server', level: 100 },
    { name: 'MySQL', level: 100 },
    { name: 'PostgreSQL', level: 100 },
    { name: 'Python / Django', level: 100 },
    { name: 'PHP / Laravel', level: 100 },
    { name: 'Node-js', level: 100 },
    { name: 'Java Script', level: 100 },
    { name: 'Power BI', level: 100 },
    // Adicione outras habilidades conforme necessário
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-level" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
