const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/data', (req, res) => {
  res.json({
    portfolio: {
      name: 'INAS',
      title: 'Développeuse Web & Mobile',
      tagline: 'Je transforme les idées en expériences digitales.',
      description: 'Passionnée par le développement web et mobile, je crée des solutions modernes et performantes pour répondre aux besoins des entreprises et des utilisateurs.',
      stats: {
        experience: '2+ années d\'expérience',
        projects: '10+ Projets réalisés',
        motivation: '100% Motivée'
      },
      skills: {
        technologies: [
          { name: 'JavaScript', icon: 'JS', description: 'Langage de programmation essentiel pour le web' },
          { name: 'React.js', icon: '⚛️', description: 'Framework JavaScript pour construire des interfaces utilisateur' },
          { name: 'TypeScript', icon: 'TS', description: 'Superset de JavaScript avec typage statique' },
          { name: 'Laravel', icon: '🔴', description: 'Framework PHP pour applications web robustes' },
          { name: 'Flutter', icon: '📱', description: 'Framework pour applications mobiles multiplateformes' },
          { name: 'HTML & CSS', icon: '🎨', description: 'Fondamentaux du développement web' }
        ],
        tools: [
          { name: 'Git', icon: '📦' },
          { name: 'GitHub', icon: '🐙' },
          { name: 'VS Code', icon: '💻' },
          { name: 'Postman', icon: '📬' },
          { name: 'Figma', icon: '🎨' },
          { name: 'Docker', icon: '🐳' }
        ]
      },
      projects: [
        {
          id: 1,
          title: 'TaskFlow',
          type: 'Web',
          image: '/images/taskflow.png',
          description: 'Application de gestion de tâches collaborative avec synchronisation en temps réel.',
          technologies: ['React.js', 'Laravel', 'MySQL'],
          link: '/projects/taskflow'
        },
        {
          id: 2,
          title: 'FitLife',
          type: 'Mobile',
          image: '/images/fitlife.png',
          description: 'Application mobile de suivi fitness avec plans d\'entraînement personnalisés.',
          technologies: ['Flutter', 'Firebase'],
          link: '/projects/fitlife'
        },
        {
          id: 3,
          title: 'E-commerce',
          type: 'Web',
          image: '/images/ecommerce.png',
          description: 'Plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
          technologies: ['React.js', 'TypeScript', 'Node.js'],
          link: '/projects/ecommerce'
        }
      ],
      experience: [
        {
          period: '2024 - Aujourd\'hui',
          title: 'Développeuse Web & Mobile (Freelance)',
          description: [
            'Développement de sites web et applications mobiles pour divers clients',
            'Gestion complète du cycle de vie des projets',
            'Communication directe avec les clients pour comprendre leurs besoins'
          ]
        },
        {
          period: '2022 - 2024',
          title: 'Développeuse Full Stack (Stage)',
          description: [
            'Participation au développement d\'applications web complexes',
            'Collaboration avec l\'équipe technique sur les fonctionnalités backend et frontend',
            'Optimisation des performances et de l\'expérience utilisateur'
          ]
        },
        {
          period: '2021 - 2022',
          title: 'Formation en Développement Informatique',
          description: [
            'Acquisition des fondamentaux en programmation',
            'Apprentissage des frameworks modernes (React, Laravel, Flutter)',
            'Réalisation de projets pratiques pour consolider les compétences'
          ]
        }
      ],
      qualities: [
        { name: 'Passionnée par la tech', icon: '💡' },
        { name: 'Esprit d\'équipe', icon: '🤝' },
        { name: 'Autonome', icon: '🚀' },
        { name: 'Toujours en apprentissage', icon: '📚' }
      ],
      contact: {
        email: 'inas@example.com',
        phone: '+33 6 12 34 56 78',
        location: 'Paris, France',
        social: {
          github: 'https://github.com/inas',
          linkedin: 'https://linkedin.com/in/inas',
          twitter: 'https://twitter.com/inas'
        }
      }
    }
  });
});

// Serve static files for project images
app.use('/images', express.static(path.join(__dirname, '../frontend/public/images')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
