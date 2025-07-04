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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Habilidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div className="space-y-2" key={index}>
              <h3 className="font-semibold">{skill.name}</h3>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div
                  className="h-full bg-blue-500 rounded"
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
