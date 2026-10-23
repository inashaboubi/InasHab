# Portfolio INAS

Portfolio personnel développé avec React.js et Node.js.

## Structure du projet

```
PORTFOLIO Inas/
├── backend/          # API Node.js/Express
│   ├── server.js     # Serveur principal
│   └── package.json
├── frontend/         # Application React.js
│   ├── src/
│   │   ├── App.jsx   # Composant principal
│   │   └── App.css   # Styles
│   ├── public/
│   │   └── images/   # Images du portfolio
│   └── package.json
└── README.md
```

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

Le serveur démarrera sur `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

L'application sera disponible sur `http://localhost:5173`

## Images à ajouter

Placez vos images dans `frontend/public/images/` :

- **hero.jpg** - Votre photo pour la section hero
- **taskflow.png** - Capture d'écran du projet TaskFlow
- **fitlife.png** - Capture d'écran du projet FitLife
- **ecommerce.png** - Capture d'écran du projet E-commerce

## Personnalisation

Modifiez les données dans `backend/server.js` pour personnaliser :
- Informations de contact
- Liste des projets
- Expérience professionnelle
- Compétences
- Réseaux sociaux

## Technologies utilisées

### Frontend
- React.js
- React Router
- Framer Motion (animations)
- Lucide React (icônes)

### Backend
- Node.js
- Express
- CORS

## Fonctionnalités

- Navigation fluide entre les sections
- Mode sombre/clair
- Animations avec Framer Motion
- Design responsive
- Formulaire de contact
- Section projets avec captures d'écran
- Timeline d'expérience
- Compétences détaillées
