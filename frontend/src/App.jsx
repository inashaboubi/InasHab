import { useState } from 'react';
import './App.css';

const portfolioData = {
  name: 'INAS',
  title: 'Inas Haboubi',
  tagline: 'Étudiante en 3ᵉ année du cycle ingénieur en developpement informatique',
  description: 'Intéressée par le développement web et mobile, notamment la conception et le développement d\'applications modernes et performantes répondant aux besoins des entreprises et des utilisateurs. Actuellement en dernière année du cycle ingénieur en développement informatique à l\'ISMAGI, je suis à la recherche d\'un stage PFE à partir de février 2027.',
  skills: {
    technologies: [
      { name: 'JavaScript', icon: 'JS', description: 'Langage de programmation pour créer des applications web interactives.' },
      { name: 'React.js', icon: '⚛️', description: 'Bibliothèque JavaScript pour concevoir des interfaces utilisateur modernes.' },
      { name: 'TypeScript', icon: 'TS', description: 'Superset de JavaScript qui apporte un typage statique au code.' },
      { name: 'Laravel', icon: '🔴', description: 'Framework PHP pour développer des applications web robustes.' },
      { name: 'Flutter', icon: '📱', description: 'Framework pour créer des applications mobiles multiplateformes.' },
      { name: 'HTML & CSS', icon: '🎨', description: 'Technologies fondamentales pour structurer et styliser des pages web.' },
      { name: 'Bootstrap', icon: '🅱️', description: 'Framework CSS permettant de créer des interfaces web responsives, modernes et adaptées à tous les écrans.' }
    ]
  },
  projects: [
    {
      id: 1,
      title: 'HCP visiteurs',
      type: 'Mobile',
      description: 'Une application mobile Flutter destinée à moderniser la gestion des visiteurs du Haut-Commissariat au Plan (HCP)',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      link: '#project-details'
    },
    {
      id: 2,
      title: 'AllNetworks Emploi',
      type: 'Web',
      description: 'Plateforme web de gestion des offres d\'emploi et des candidatures pour la société AllNetworks Maroc',
      technologies: ['JavaScript', 'Node.js', 'MySQL'],
      link: '#'
    },
    {
      id: 3,
      title: 'CinePick',
      type: 'Web',
      description: 'CinePick est une plateforme dédiée à la découverte de films',
      technologies: ['React.js', 'Vue.js', 'Node.js'],
      link: '#'
    }
  ],
  experience: [
    {
      period: '05/2026 – 07/2026',
      title: 'Stagiaire Développeuse Web',
      company: 'AllNetworks Maroc',
      description: [
        'Création d\'une plateforme web de gestion des offres d\'emploi et des candidatures avec JavaScript et Node.js'
      ]
    },
    {
      period: '05/2025 – 07/2025',
      title: 'Stagiaire Développeuse Web et Mobile',
      company: 'Haut Commissariat au Plan',
      description: [
        'Conception d\'un système de suivi des visiteurs et rendez-vous avec Flutter'
      ]
    },
    {
      period: '07/2024 – 08/2024',
      title: 'Stagiaire Développeuse Web',
      company: 'Martech Conseil',
      description: [
        'Participation aux présentations de projets, dont un projet client majeur'
      ]
    },
    {
      period: '04/2024 – 05/2024',
      title: 'Stagiaire Développeuse Web',
      company: 'Inova Services',
      description: [
        'Développement de projets web avec Laravel',
        'Intégration d\'authentification, gestion de bases de données et APIs REST'
      ]
    }
  ],
  contact: {
    email: 'inas@example.com',
    phone: '+33 6 12 34 56 78',
    location: 'Paris, France',
    social: {
      github: 'https://github.com/inashaboubi',
      linkedin: 'https://www.linkedin.com/in/inas-hab/'
    }
  }
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    setShowProjectModal(true);
  };

  const handleShowGallery = () => {
    setShowGallery(true);
    setCurrentImage(0);
  };

  const getCurrentImages = () => {
    if (selectedProject === 1) return hcpImages;
    if (selectedProject === 2) return allnetworksImages;
    if (selectedProject === 3) return cinepickImages;
    return [];
  };

  const nextImage = () => {
    const images = getCurrentImages();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = getCurrentImages();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const hcpImages = [
    '/images/hcp-capture-1.png',
    '/images/hcp-capture-2.png',
    '/images/hcp-capture-3.png',
    '/images/hcp-capture-4.png',
    '/images/hcp-capture-5.png'
  ];

  const allnetworksImages = [
    '/images/allnetworks-1.png',
    '/images/allnetworks-2.png',
    '/images/allnetworks-3.png',
    '/images/allnetworks-4.png',
    '/images/allnetworks-5.png'
  ];

  const cinepickImages = [
    '/images/cinepick-1.png',
    '/images/cinepick-2.png',
    '/images/cinepick-3.png'
  ];

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        name={portfolioData.name}
      />
      
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills data={portfolioData} />
        <Projects data={portfolioData} onProjectClick={handleProjectClick} />
        <Experience data={portfolioData} />
        <Contact data={portfolioData} />
      </main>

      <Footer name={portfolioData.name} />

      {showProjectModal && selectedProject === 1 && (
        <div className="modal-overlay" onClick={() => setShowProjectModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowProjectModal(false)}>×</button>
            <h2>Gestion des Visiteurs HCP</h2>
            <p>Une application mobile Flutter destinée à moderniser la gestion des visiteurs du Haut-Commissariat au Plan (HCP), en remplaçant les méthodes manuelles par une solution numérique centralisée, simple et efficace.</p>
            
            <div className="modal-section">
              <h3>Problème</h3>
              <p>La gestion traditionnelle des visiteurs reposait sur des cahiers papier pour enregistrer les entrées et sorties, consulter l'historique des visites et gérer les rendez-vous, rendant le suivi difficile et la recherche d'informations moins efficace.</p>
            </div>

            <div className="modal-section">
              <h3>Solution</h3>
              <p>Une application mobile Flutter permettant l'enregistrement des visiteurs, la gestion des check-in/check-out, l'impression de badges personnalisés, la consultation de l'historique des visites et la gestion des types de visites et des événements associés.</p>
            </div>

            <div className="modal-section">
              <h3>Technologies</h3>
              <p>Flutter · Dart · Firebase</p>
            </div>

            <div className="modal-section">
              <a href="https://github.com/inashaboubi/HCP_PROJECTin" target="_blank" rel="noopener noreferrer" className="github-link">
                Voir le projet sur GitHub →
              </a>
            </div>

            <div className="modal-section">
              <button className="btn-secondary capture-btn" onClick={handleShowGallery}>
                Voir quelques captures →
              </button>
              <p className="capture-note">
                Les images sont floues, car elles ont été capturées à partir d’une tablette et enregistrées avec une qualité moyenne.
              </p>
            </div>
          </div>
        </div>
      )}

      {showProjectModal && selectedProject === 2 && (
        <div className="modal-overlay" onClick={() => setShowProjectModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowProjectModal(false)}>×</button>
            <h2>Plateforme de Recrutement – AllNetworks Maroc</h2>
            <p>Une plateforme web de gestion du recrutement permettant de centraliser les offres d'emploi et les candidatures, de simplifier le suivi des candidats et de digitaliser le processus de recrutement d'AllNetworks Maroc.</p>
            
            <div className="modal-section">
              <h3>Problème</h3>
              <p>Le processus de recrutement repose sur des méthodes manuelles et des informations dispersées, rendant la gestion des offres d'emploi, le suivi des candidatures et l'administration des comptes moins efficaces.</p>
            </div>

            <div className="modal-section">
              <h3>Solution</h3>
              <p>Une application web organisée autour de trois profils : visiteur, candidat et administrateur. Elle permet de consulter les offres, de créer un compte, de postuler, de suivre ses candidatures et de gérer les offres d'emploi, les candidatures et les utilisateurs depuis une interface centralisée.</p>
            </div>

            <div className="modal-section">
              <h3>Technologies</h3>
              <p>JavaScript · Node.js · HTML · CSS · MySQL · UML</p>
            </div>

            <div className="modal-section">
              <a href="https://github.com/inashaboubi/Allnetworks_emploi" target="_blank" rel="noopener noreferrer" className="github-link">
                Voir le projet sur GitHub →
              </a>
            </div>

            <div className="modal-section">
              <button className="btn-secondary capture-btn" onClick={handleShowGallery}>
                Voir quelques captures →
              </button>
            </div>
          </div>
        </div>
      )}

      {showProjectModal && selectedProject === 3 && (
        <div className="modal-overlay" onClick={() => setShowProjectModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowProjectModal(false)}>×</button>
            <h2>Plateforme de Films – CinePick</h2>
            <p>Une plateforme web de découverte de films permettant d'explorer les films les mieux notés, de rechercher des titres spécifiques et de consulter leurs détails et résumés depuis une interface intuitive.</p>
            
            <div className="modal-section">
              <h3>Problème</h3>
              <p>Trouver un film à regarder parmi de nombreux titres peut être difficile sans une plateforme centralisée permettant de découvrir les films populaires et d'accéder rapidement à leurs informations.</p>
            </div>

            <div className="modal-section">
              <h3>Solution</h3>
              <p>Une application web qui propose une sélection de films les mieux notés, une barre de recherche pour trouver des films spécifiques et une page de détails présentant leur résumé et leurs informations essentielles.</p>
            </div>

            <div className="modal-section">
              <h3>Technologies</h3>
              <p>HTML · CSS · Vue.js · React.js · Node.js · API de films</p>
            </div>

            <div className="modal-section">
              <a href="https://github.com/inashaboubi/CinePick_movieapp" target="_blank" rel="noopener noreferrer" className="github-link">
                Voir le projet sur GitHub →
              </a>
            </div>

            <div className="modal-section">
              <button className="btn-secondary capture-btn" onClick={handleShowGallery}>
                Voir quelques captures →
              </button>
            </div>
          </div>
        </div>
      )}

      {showGallery && (
        <div className="gallery-modal" onClick={() => setShowGallery(false)}>
          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-close" onClick={() => setShowGallery(false)}>×</button>
            <button className="gallery-btn prev" onClick={prevImage}>←</button>
            <img src={getCurrentImages()[currentImage]} alt={`Capture ${currentImage + 1}`} />
            <button className="gallery-btn next" onClick={nextImage}>→</button>
            <div className="gallery-dots">
              {getCurrentImages().map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Header({ darkMode, toggleTheme, name }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="#accueil" className="logo-link">
            <div className="logo-text">
              <span className="logo-first">Inas</span>
              <span className="logo-second">HABOUBI</span>
            </div>
          </a>
        </div>
        <nav id="main-navigation" className={`nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a>
          <a href="#apropos" onClick={() => setMenuOpen(false)}>À propos</a>
          <a href="#competences" onClick={() => setMenuOpen(false)}>Compétences</a>
          <a href="#projets" onClick={() => setMenuOpen(false)}>Projets</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Expérience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? '☀' : '☾'}
          </button>
          <a href="/INAS HABOUBI CV.pdf" download className="btn-primary">Télécharger mon CV</a>
        </div>
        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Hero({ data }) {
  return (
    <section id="accueil" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="title-white">Inas</span>
              <span className="title-red"> Haboubi</span>
            </h1>
            <p className="tagline">{data.tagline}</p>
            <p className="description">{data.description}</p>
            <div className="hero-buttons">
              <a href="#projets" className="btn-primary">
                Découvrir mes projets →
              </a>
              <a href="/INAS HABOUBI CV.pdf" download className="btn-secondary">
                Télécharger mon CV
              </a>
            </div>
            <div className="social-links">
              <a href={data.contact.social.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={data.contact.social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src="/images/inas-portrait.png" alt="Inas Haboubi" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ data }) {
  return (
    <section id="apropos" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01.</span>
          <h2>À propos de moi</h2>
        </div>
        <div className="about-content">
          <div className="about-left">
            <p>
              Je suis étudiante en dernière année du cycle ingénieur en développement informatique à l'ISMAGI, intéressée par le développement web et mobile, la conception d'interfaces modernes et la création d'applications performantes et intuitives. Je m'intéresse particulièrement aux technologies JavaScript, React.js, TypeScript, Laravel et Flutter, ainsi qu'à la conception de solutions adaptées aux besoins des entreprises et des utilisateurs.
            </p>
            <p>
              Cet intérêt se reflète dans mes projets, notamment <strong>HCP Visiteurs</strong>, une application mobile développée avec Flutter pour la gestion des visiteurs au Haut-Commissariat au Plan, ainsi qu'une plateforme réalisée pour <strong>AllNetworks Maroc</strong>, dédiée à la gestion des offres d'emploi de l'entreprise. Ces projets me permettent de mettre en pratique mes compétences en développement web et mobile et de concevoir des solutions adaptées à des besoins réels.
            </p>
          </div>
          <div className="about-divider"></div>
          <div className="about-right">
            <div className="formation">
              <h3>Formation</h3>
              <div className="formation-item">
                <div className="formation-title">Cycle Ingénieur en développement Informatique (3eme année)</div>
                <div className="formation-school">ISMAGI Hay Riad</div>
                <div className="formation-period">2024 – 2027</div>
              </div>
              <div className="formation-item">
                <div className="formation-title">Développement Digital Full Stack</div>
                <div className="formation-school">ISTA NTIC, Hay Riad</div>
                <div className="formation-period">2022 – 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills({ data }) {
  return (
    <section id="competences" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02.</span>
          <h2>Mes compétences</h2>
        </div>
        <div className="skills-content">
          <div className="skills-category">
            <h3>Technologies maîtrisées</h3>
            <div className="tech-grid">
              {data.skills.technologies.map((tech, index) => (
                <div key={index} className="tech-card">
                  <div className="tech-icon">{tech.icon}</div>
                  <h4>{tech.name}</h4>
                  <p>{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects({ data, onProjectClick }) {
  return (
    <section id="projets" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03.</span>
          <h2>Mes projets</h2>
        </div>
        <p className="section-description">
          Voici quelques projets sur lesquels j'ai travaillé. Chaque projet est une opportunité 
          d'apprendre, de créer et d'aller plus loin.
        </p>
        <div className="projects-grid">
          {data.projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.id === 1 || project.id === 2 || project.id === 3 ? (
                  <button className="btn-secondary project-modal-btn" onClick={() => onProjectClick(project.id)}>
                    Voir les détails →
                  </button>
                ) : (
                  <a href={project.link} className="project-link">
                    Voir les détails →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience({ data }) {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04.</span>
          <h2>Expérience</h2>
        </div>
        <p className="section-description">
          Mon parcours professionnel et académique.
        </p>
        <div className="timeline">
          {data.experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h3>{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <ul>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ data }) {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-number">05.</span>
          <h2>Contact</h2>
        </div>
        <h3 className="contact-title">Construisons quelque chose ensemble.</h3>
        <p className="contact-subtitle">
          À la recherche d'un stage PFE en développement web et mobile à partir de février 2027. Ouverte aux stages, aux opportunités professionnelles, aux collaborations et aux projets innovants.
        </p>
        <div className="contact-buttons">
          <a href="https://www.linkedin.com/in/inas-hab/" target="_blank" rel="noopener noreferrer" className="btn-secondary contact-btn">
            <span className="contact-icon">Li</span> LinkedIn
          </a>
          <a href="https://github.com/inashaboubi" target="_blank" rel="noopener noreferrer" className="btn-secondary contact-btn">
            <span className="contact-icon">GH</span> GitHub
          </a>
          <a href="/INAS HABOUBI CV.pdf" download className="btn-secondary contact-btn">
            <span className="contact-icon">↓</span> CV
          </a>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=habiness11@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-email-link">
              <span className="contact-icon">@</span> habiness11@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">⌖</span> Rabat, Maroc
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ name }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p>© 2026 Inas HABOUBI</p>
          </div>
          <div className="footer-center">
            <p>Créons ensemble des projets exceptionnels.</p>
          </div>
          <div className="footer-right">
            <div className="logo">
              <a href="#accueil" className="logo-link">
                <div className="logo-text">
                  <span className="logo-first">Inas</span>
                  <span className="logo-second">HABOUBI</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
