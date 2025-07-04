 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/src/components/Projects.jsx b/src/components/Projects.jsx
index a702e40e3fe98a0cf6d5f3c6c2f88b8a9291134b..e153ea9fc7f3750383f2c5ee31efc0a6257dbdac 100644
--- a/src/components/Projects.jsx
+++ b/src/components/Projects.jsx
@@ -3,50 +3,74 @@ import React from 'react';
 const ProjectsSection = () => {
   const projects = [
     {
       id: 1,
       image: "images/projects/project1.jpg",
       alt: "Projeto 1",
       title: "Site de apresentação versão React.js",
       description: "Site de apresentação desenvolvido na linguagem React",
       link: "https://react.satochi.com.br/"
     },
     {
       id: 2,
       image: "images/projects/project2.jpg",
       alt: "Projeto 2",
       title: "Site de apresentação versão Vue.js",
       description: "Site de apresentação desenvolvido na linguagem Vue3",
       link: "https://vue.satochi.com.br/"
     },
     {
       id: 3,
       image: "images/projects/whats.jpg",
       alt: "Projeto 3",
       title: "API Automação Whatsapp",
       description: "API de Automação de mensagens do Whatsapp",
       link: "#"
+    },
+    {
+      id: 4,
+      image: "images/projects/project3.png",
+      alt: "Projeto 4",
+      title: "Micro serviço Gerador de CV com IA",
+      description: "Projeto de site para criação de CVs por IA",
+      link: "https://cv.satochi.com.br/"
+    },
+    {
+      id: 5,
+      image: "images/projects/project4.png",
+      alt: "Projeto 5",
+      title: "Gerador de Propostas MEI",
+      description: "Site para criação de propostas",
+      link: "https://gerador-propostas-me-is.vercel.app/"
+    },
+    {
+      id: 6,
+      image: "images/projects/project5.png",
+      alt: "Projeto 6",
+      title: "Gerador de Politicas para Sites",
+      description: "Site para geração de politicas de Site (Em desenvolvimento)",
+      link: "https://gerador-termos-pol-ticas.vercel.app/"
     }
   ];
 
   return (
     <section id="projects" className="py-20">
       <div className="max-w-6xl mx-auto px-6">
         <h2 className="text-3xl font-bold mb-12 text-center">Projetos Destacados</h2>
 
         <div className="grid md:grid-cols-3 gap-6">
           {projects.map((project) => (
             <div key={project.id} className="relative rounded shadow overflow-hidden h-64">
               <img src={project.image} alt={project.alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
               <div className="absolute inset-0 bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-white p-4">
                 <h3 className="text-xl mb-2">{project.title}</h3>
                 <p className="mb-4 text-center">{project.description}</p>
                 <a href={project.link} className="border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-900">Ver Detalhes</a>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 
EOF
)
