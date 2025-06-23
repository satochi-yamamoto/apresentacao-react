// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Gestão de Projetos', level: 90 },
    { name: 'AWS', level: 90 },
    { name: 'Microsoft Azure', level: 100 },
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
