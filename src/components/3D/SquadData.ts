import type { NodeData } from '../../store/useStore';

export const SQUAD_DATA: NodeData[] = [
  // THE DEFENSE 
  { id: 'cpp', title: 'C++ & OOP', type: 'skill', position: [-8, 1, 10], color: '#00599C', description: 'Memory-efficient logic.', techStack: ['C++', 'OOP'] },
  { id: 'python', title: 'Python & ML', type: 'skill', position: [8, 1, 0], color: '#3776AB', description: 'Predictive data analysis.', techStack: ['Python', 'Scikit-learn'] },
  { id: 'dsa', title: 'DSA', type: 'skill', position: [-8, 1, -10], color: '#FFD43B', description: 'Algorithmic problem solving.', techStack: ['Optimization'] },

  // THE MIDFIELD 
  { id: 'node', title: 'Node.js', type: 'skill', position: [8, 1, -20], color: '#339933', description: 'Scalable RESTful APIs.', techStack: ['Node.js', 'Express.js'] },
  { id: 'postgres', title: 'PostgreSQL', type: 'skill', position: [-8, 1, -30], color: '#336791', description: 'Relational schema design.', techStack: ['PostgreSQL', 'SQL'] },

  // THE STRIKERS (Projects with links)
  { 
    id: 'ecommerce', 
    title: 'Tribal Art E-Commerce', 
    type: 'project', 
    position: [8, 1.5, -40], 
    color: '#f59e0b', 
    description: 'Digital marketplace for tribal artisans.', 
    techStack: ['JS', 'UI/UX'],
    githubLink: 'https://github.com/MilanShukla11/tribal-art-ecommerce',
    liveLink: 'https://tribal-art-demo.vercel.app'
  },
  { 
    id: 'health', 
    title: 'ML Health Surveillance', 
    type: 'project', 
    position: [-8, 1.5, -48], 
    color: '#f59e0b', 
    description: 'AI predictive model for disease outbreaks.', 
    techStack: ['Python', 'XGBoost']
  },
  { 
    id: 'blog', 
    title: 'Full-Stack Blog', 
    type: 'project', 
    position: [8, 1.5, -56], 
    color: '#f59e0b', 
    description: 'MVC-patterned dynamic platform.', 
    techStack: ['Node', 'EJS'],
    githubLink: 'https://github.com/MilanShukla11/fullstack-blog'
  },
  { 
    id: 'dicegame', 
    title: 'Dice Game', 
    type: 'project', 
    position: [8, 1.5, -40], 
    color: '#f59e0b', 
    description: 'Digital marketplace for tribal artisans.', 
    techStack: ['JS'],
    githubLink: 'https://github.com/MilanShukla11/Dice-Game'
  },
];