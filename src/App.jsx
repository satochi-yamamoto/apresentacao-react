<template>
  <div>
    <!-- Header -->
    <header class="header">
      <div class="container header-flex">
        <nav class="navbar">
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#experience">Experiência</a></li>
            <li><a href="#education">Formação</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        <div class="header-icons">
  <a href="https://github.com/satochi-yamamoto" target="_blank" rel="noopener noreferrer" title="GitHub">
    <font-awesome-icon :icon="['fab', 'github']" />
  </a>
  <a href="https://www.linkedin.com/in/alexyamamoto/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
    <font-awesome-icon :icon="['fab', 'linkedin']" />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" title="Discord">
    <font-awesome-icon :icon="['fab', 'discord']" />
  </a>
</div>
        <div class="mobile-menu">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Alexandre Satochi Yamamoto</h1>
          <h2>Coordenador de Desenvolvimento de Software e TI,</h2>
          <p>+25 anos de atuação na área de TI dos quais 12 anos dedicado a liderança de equipes em projetos de TI e de Desenvolvimento de Softwares</p>
          <div class="hero-cta">
            <a href="#contact" class="btn btn-primary">Entre em Contato</a>
            <a href="#experience" class="btn btn-outline">Ver Experiência</a>
          </div>
        </div>
        <div class="hero-image">
          <img src="images/avatar.jpg" alt="Alexandre Satochi Yamamoto">
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about">
      <div class="container">
        <h2 class="section-title">Sobre Mim</h2>
        <div class="about-content">
          <p>Profissional com mais de 25 anos de atuação na área de TI, especializado em gestão de equipes, infraestrutura de TI, desenvolvimento de software e segurança da informação. Possuo vasta experiência em projetos de modernização tecnológica, eficiência operacional da equipe de TI e redução de custos, com amplo domínio em metodologias ágeis, DevOps e padrões de segurança (ISO 9001, ISO 27001). Minha expertise inclui implantação de sistemas, gestão de servidores, banco de dados (SQL Server, MySQL) e plataformas de nuvem. Sou focado na entrega de valor ao negócio por meio de gestão de projetos e coordenação de equipes.</p>
          
          <p>Formado em Gestão da Tecnologia da Informação e Pos Graduado em Engenharia de Software possuo varios cursos de especialização na área.</p>
          
          <div class="about-stats">
            <div class="stat-item">
              <span class="stat-number">25+</span>
              <span class="stat-text">Anos de Experiência</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">12+</span>
              <span class="stat-text">Anos de liderança de equipes</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section experience">
      <div class="container">
        <h2 class="section-title">Experiência Profissional</h2>
        
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">2025 - Presente</div>
            <div class="timeline-content">
              <h3>Adelco Sistema de Energia</h3>
              <h4>Coodenador de TI</h4>
              <p>Liderança de equipes multidisciplinares no desenvolvimento do ERP Protheus da TOTVS.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-date">2024 - 2025</div>
            <div class="timeline-content">
              <h3>Terra Nova Logistica</h3>
              <h4>Coordenador de TI</h4>
              <p>Gestão da área de TI, responsavel pela equipe de Infraestrutura, Desenvolvimento e BI </p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-date">2023 - 2024</div>
            <div class="timeline-content">
              <h3>Primi Tecnologia</h3>
              <h4>Coodenador de Desenvolvimento</h4>
              <p>Responsagel pela gestão da equipe de desenvolvimento, liderando no desenvolvimento de aplicações internas e Mobiles, Gestão de equipe, onde implementei o DEVOps e a metodologia Agile</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2020 - 2023</div>
            <div class="timeline-content">
              <h3>K2A Partners </h3>
              <h4>Coordenador de TI e Operações</h4>
              <p>liderei a infraestrutura de TI, gerenciando serviços e servidores em ambientes de nuvem, garantindo links eficazes, acesso seguro via VPN e supervisionando as redes e serviços de TI. Como mantenedor de sistemas e DBA, desenvolvi novos relacionamentos de dados e criei procedimentos para a equipe de desenvolvimento, além de integrar dados com o Power BI.</p>
            </div>
                </div>

          <div class="timeline-item">
            <div class="timeline-date">2016 - 2020</div>
            <div class="timeline-content">
              <h3>Atiks</h3>
              <h4>Coordenador de Operações e Desenvolvimento de Software</h4>
              <p>Na liderança de Projetos Técnicos na Atiks TEM, fui encarregado de liderar e gerenciar diversas iniciativas estratégicas, desempenhando funções cruciais que incluíram gerenciamento de DevOps, supervisão do ciclo de vida dos projetos e validação de novas versões. Colaborei com a equipe de operações para garantir o desenvolvimento de novos itens e módulos para o Sistema TEM. Liderei com sucesso um projeto crucial de conversão de leitura OCR de faturas, melhorando significativamente a eficiência dos processos..</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2011 - 2015</div>
            <div class="timeline-content">
              <h3>TST Telmax </h3>
              <h4>Coordenador de TI</h4>
              <p>Na TST Telmax Soluções em Telecomunicações, atuei como Coordenador de Infraestrutura de TI, desempenhando um papel fundamental na gestão e desenvolvimento da infraestrutura de tecnologia da informação. Minhas principais responsabilidades incluíram liderar uma equipe de TI, gerenciar projetos de TI desde o planejamento até a implementação, integrar operações entre matriz e filiais, supervisionar intranet, backup, servidores em nuvem, administrar redes, servidores, telefonia e aplicações internas, iniciar projeto de telefonia SIP, contribuir para o desenvolvimento de sistemas e aplicativos de gestão de projetos, e auxiliar na integração de políticas ISO e no desenvolvimento de ferramentas de gestão de TI..</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2005 - 2011</div>
            <div class="timeline-content">
              <h3>Motorola Industrial</h3>
              <h4>Coordenador de Campo</h4>
              <p>Na Motorola Mobility, atuei como Coordenador Field Test, desempenhando um papel fundamental no campo de testes de aparelhos celulares. Minhas principais responsabilidades e competências incluíram:

Coordenação e Gerenciamento de Equipes de Testes de Aparelhos Celulares: Liderei e gerenciei equipes de testes de aparelhos celulares, garantindo a eficácia e qualidade dos testes.

Controle de Qualidade e Ações de Qualidade na América Latina: Atuei na coordenação e controle de qualidade dos testes e ações de qualidade em toda a América Latina.

Desenvolvimento e Implementação de Ferramentas e Softwares de Testes para Telefones Celulares: Contribuí para o desenvolvimento e implementação de ferramentas e softwares de testes para telefones celulares..</p>
            </div>
          </div>
          <!-- Other timeline items... -->
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="section education">
      <div class="container">
        <h2 class="section-title">Formação Acadêmica</h2>
        <div class="education-grid">
          <div class="education-item">
            <div class="education-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div>
              <h3>FMU</h3>
              <h4>Engenharia de Software</h4>
              <p>Pos Graduação em Curso</p>
            </div>
          </div>
           <div class="education-item" style="display: flex; align-items: flex-start; gap: 20px; padding-bottom: 24px; border-bottom: 1px solid #eee;">
                    <div class="education-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h3>UNISA - Universidade Santo Amaro</h3>
                        <h4>Gestão da Tecnologia da Informação</h4>
                        <p>Graduação completa</p>
                    </div>
                </div>
                <div class="education-item" style="display: flex; align-items: flex-start; gap: 20px;">
                    <div class="education-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h3>FESP - Faculdade de engenharia São Paulo</h3>
                        <h4>Engenharia Eletrica</h4>
                        <p>Graduação incompleta</p>
                    </div>
                </div>
          <!-- Other education items... -->
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section skills">
      <div class="container">
        <h2 class="section-title">Habilidades</h2>
        
        <div class="skills-grid">
          <div class="skill-item">
            <h3>Gestão de Projetos</h3>
            <div class="skill-bar">
              <div class="skill-level" style="width: 90%"></div>
            </div>
          </div>
            <div class="skill-item">
                    <h3>AWS</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 90%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <h3>Microsoft Azure</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 100%"></div>
                    </div>
                
                
                </div>
                <div class="skill-item">
                    <h3>Oracle Cloud</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 90%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <h3>ISO 9001 / ISO 27001</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 90%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <h3>Docker</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 100%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <h3>Metodologia Agil</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 100%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <h3>CI / CD</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 100%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <h3>SQL-Server</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 100%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <h3>MYSQL</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 100%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <h3>PostgreSQL</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 100%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <h3>Python / Django</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 100%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <h3>PHP / Laravel</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 100%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <h3>Node-js</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 100%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <h3>Java Script</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 100%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <h3>Power BI</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 100%"></div>
                    </div>
                </div>
          <!-- Other skills items... -->
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
      <div class="container">
        <h2 class="section-title">Entre em Contato</h2>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <span>yamamoto@ydsoftware.com.br</span>
            </div>
            <div class="info-item">
              <i class="fab fa-linkedin"></i>
              <span>linkedin.com/in/alexyamamoto</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <a href="#">Alexandre Satochi Yamamoto</a>
          </div>
          <div class="footer-links">
            <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#experience">Experiência</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-copyright">
          <p>&copy; {{ currentYear }} Alexandre Satochi Yamamoto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faGithub, faLinkedin, faDiscord, faGraduationCap, faEnvelope, faBars);

export default {
  name: 'App',
  components: {
    FontAwesomeIcon
  },
  setup() {
    const currentYear = ref(new Date().getFullYear());

    onMounted(() => {
      // Mobile menu toggle functionality
      const mobileMenu = document.querySelector('.mobile-menu');
      const navbar = document.querySelector('.navbar');
      
      if (mobileMenu && navbar) {
        mobileMenu.addEventListener('click', () => {
          navbar.classList.toggle('active');
        });
      }
    });

    return {
      currentYear
    };
  }
};
</script>

<style>
/* Base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header styles */
.header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.navbar ul {
  display: flex;
  list-style: none;
}

.navbar ul li a {
  margin: 0 15px;
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s;
}

.navbar ul li a:hover {
  color: #0077b5;
}

.header-icons {
  display: flex;
  gap: 20px;
  align-items: center;
}

.header-icons a {
  color: #333;
  font-size: 1.5rem;
  transition: transform 0.3s;
}

.header-icons a:hover {
  transform: translateY(-3px);
}

.mobile-menu {
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
}

/* Hero section */
.hero {
  padding: 120px 0 60px;
  background-color: #f9f9f9;
}

.hero .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-image {
  flex: 1;
  text-align: center;
}

.hero-image img {
  max-width: 100%;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #222;
}

.hero h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #444;
  font-weight: 400;
}

.hero p {
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #666;
}

.hero-cta {
  display: flex;
  gap: 15px;
}

/* Button styles */
.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-primary {
  background-color: #0077b5;
  color: white;
}

.btn-primary:hover {
  background-color: #005f8d;
}

.btn-outline {
  border: 2px solid #0077b5;
  color: #0077b5;
}

.btn-outline:hover {
  background-color: #0077b5;
  color: white;
}

/* Section styles */
.section {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.2rem;
  color: #222;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background-color: #0077b5;
  margin: 15px auto 0;
}

/* About section */
.about-content p {
  margin-bottom: 20px;
  font-size: 1.1rem;
  line-height: 1.8;
}

.about-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #0077b5;
  margin-bottom: 5px;
}

.stat-text {
  font-size: 1.1rem;
  color: #666;
}

/* Timeline styles */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 2px;
  background-color: #0077b5;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.timeline-item {
  padding: 20px 0;
  position: relative;
}

.timeline-date {
  position: absolute;
  width: 120px;
  background-color: #0077b5;
  color: white;
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  left: 50%;
  margin-left: -60px;
  top: 20px;
  font-weight: 600;
}

.timeline-content {
  width: 46%;
  padding: 20px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-left: 54%;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-right: 54%;
}

.timeline-content h3 {
  margin-bottom: 5px;
  color: #0077b5;
}

.timeline-content h4 {
  margin-bottom: 15px;
  color: #555;
  font-weight: 500;
}

.timeline-content p {
  color: #666;
  line-height: 1.6;
}

/* Education section */
.education-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 800px;
  margin: 0 auto;
}

.education-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid #eee;
}

.education-icon {
  font-size: 1.8rem;
  color: #0077b5;
}

.education-item h3 {
  margin-bottom: 5px;
  color: #222;
}

.education-item h4 {
  margin-bottom: 5px;
  color: #444;
  font-weight: 500;
}

.education-item p {
  color: #666;
}

/* Skills section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
}

.skill-item h3 {
  margin-bottom: 10px;
  color: #444;
}

.skill-bar {
  height: 10px;
  background-color: #eee;
  border-radius: 5px;
  overflow: hidden;
}

.skill-level {
  height: 100%;
  background-color: #0077b5;
  border-radius: 5px;
}

/* Contact section */
.contact-content {
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
}

.contact-info {
  width: 100%;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.info-item i {
  font-size: 1.5rem;
  color: #0077b5;
  width: 30px;
  text-align: center;
}

.info-item span {
  font-size: 1.1rem;
  color: #444;
}

/* Footer styles */
.footer {
  background-color: #222;
  color: white;
  padding: 40px 0 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.footer-logo a {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
}

.footer-links ul {
  display: flex;
  list-style: none;
  gap: 20px;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: white;
}

.footer-copyright {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #444;
  color: #aaa;
  font-size: 0.9rem;
}

/* Responsive styles */
@media (max-width: 768px) {
  .header-flex {
    flex-direction: column;
    padding: 15px;
  }

  .navbar {
    width: 100%;
    margin: 15px 0;
  }

  .navbar ul {
    flex-direction: column;
    align-items: center;
    display: none;
  }

  .navbar.active ul {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }

  .hero .container {
    flex-direction: column;
  }

  .hero-content {
    margin-bottom: 40px;
    text-align: center;
  }

  .hero-cta {
    justify-content: center;
  }

  .timeline::before {
    left: 30px;
  }

  .timeline-date {
    left: 30px;
    margin-left: 0;
    text-align: left;
    width: auto;
  }

  .timeline-content {
    width: calc(100% - 80px);
    margin-left: 80px !important;
  }

  .footer-content {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .footer-links ul {
    justify-content: center;
  }
}
</style>
