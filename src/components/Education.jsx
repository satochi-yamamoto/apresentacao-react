import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationItems = [
    {
      institution: "FMU",
      degree: "Engenharia de Software",
      status: "Pos Graduação em Curso"
    },
    {
      institution: "UNISA - Universidade Santo Amaro",
      degree: "Gestão da Tecnologia da Informação",
      status: "Graduação completa"
    },
    {
      institution: "FESP - Faculdade de engenharia São Paulo",
      degree: "Engenharia Eletrica",
      status: "Graduação incompleta"
    }
  ];

  return (
    <section id="education" className="section education" style={{ marginTop: '60px', marginBottom: '60px' }}>
      <div className="container">
        <h2 className="section-title">Formação Acadêmica</h2>
        <div className="education-grid" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {educationItems.map((item, index) => (
            <div 
              key={index} 
              className="education-item" 
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '20px', 
                paddingBottom: '24px', 
                borderBottom: index < educationItems.length - 1 ? '1px solid #eee' : 'none' 
              }}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div>
                <h3>{item.institution}</h3>
                <h4>{item.degree}</h4>
                <p>{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
