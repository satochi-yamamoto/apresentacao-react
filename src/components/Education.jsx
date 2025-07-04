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
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Formação Acadêmica</h2>
        <div className="flex flex-col gap-8">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 pb-6 border-b last:border-b-0"
            >
              <div className="text-2xl text-blue-500">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="font-bold">{item.institution}</h3>
                <h4 className="text-blue-600">{item.degree}</h4>
                <p className="text-gray-600">{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
