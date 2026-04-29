import type { NodeData } from '../../store/useStore';

export const SQUAD_DATA: NodeData[] = [
  // THE DEFENSE 
  { id: 'cpp', title: 'C++ & OOP', type: 'skill', position: [-8, 1, 10], color: '#00599C', description: 'Memory-efficient logic.', techStack: ['C++', 'OOP'] },
  { id: 'python', title: 'Python & ML', type: 'skill', position: [8, 1, 0], color: '#3776AB', description: 'Predictive data analysis.', techStack: ['Python', 'Scikit-learn'] },
  { id: 'dsa', title: 'DSA', type: 'skill', position: [-8, 1, -10], color: '#FFD43B', description: 'Algorithmic problem solving.', techStack: ['Optimization'] },

  // THE MIDFIELD 
  { id: 'node', title: 'Node.js', type: 'skill', position: [8, 1, -20], color: '#339933', description: 'Scalable RESTful APIs.', techStack: ['Node.js', 'Express.js'] },
  { id: 'postgres', title: 'PostgreSQL', type: 'skill', position: [-8, 1, -30], color: '#336791', description: 'Relational schema design.', techStack: ['PostgreSQL', 'SQL'] },

  // THE STRIKERS (Projects from GitHub)
  { 
    id: 'kalakart', 
    title: 'Kala-Kart', 
    type: 'project', 
    position: [8, 1.5, -36], 
    color: '#f59e0b', 
    description: 'A full-stack e-commerce platform empowering rural and tribal artisans to sell handcrafted products online.', 
    techStack: ['HTML', 'Full-Stack', 'E-Commerce'],
    githubLink: 'https://github.com/MilanShukla11/Kala-Kart'
  },
  { 
    id: 'familytravel', 
    title: 'Family Travel Tracker', 
    type: 'project', 
    position: [-8, 1.5, -42], 
    color: '#3b82f6', 
    description: 'Built a full-stack travel management application to track family trips and manage destinations with CRUD functionality.', 
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'EJS'],
    githubLink: 'https://github.com/MilanShukla11/Family-travel-Tracker'
  },
  { 
    id: 'portfolio', 
    title: '3D Tactical Portfolio', 
    type: 'project', 
    position: [8, 1.5, -48], 
    color: '#10b981', 
    description: 'A high-performance 3D portfolio architected with React, Three.js, and Framer Motion through the lens of a tactical football squad.', 
    techStack: ['React', 'Three.js', 'TypeScript', 'Framer Motion'],
    githubLink: 'https://github.com/MilanShukla11/Portfolio'
  },
  { 
    id: 'blog', 
    title: 'Fullstack Blog App', 
    type: 'project', 
    position: [-8, 1.5, -54], 
    color: '#f59e0b', 
    description: 'A lightweight full-stack blogging platform featuring complete CRUD functionality for real-time post management.', 
    techStack: ['Node.js', 'Express.js', 'EJS', 'HTML/CSS'],
    githubLink: 'https://github.com/MilanShukla11/Fullstack-Blog-Web-Application'
  },
  { 
    id: 'bandname', 
    title: 'Band Name Generator', 
    type: 'project', 
    position: [8, 1.5, -60], 
    color: '#8b5cf6', 
    description: 'Random Band Name generator built with a lightweight backend architecture.', 
    techStack: ['Node.js', 'Express.js', 'JavaScript'],
    githubLink: 'https://github.com/MilanShukla11/Band-Name-Generator'
  },
  { 
    id: 'dicegame', 
    title: 'Interactive Dice Game', 
    type: 'project', 
    position: [-8, 1.5, -66], 
    color: '#ef4444', 
    description: 'A DOM-manipulation dice game where the numbers change dynamically with every refresh.', 
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/MilanShukla11/Dice-Game'
  }
];