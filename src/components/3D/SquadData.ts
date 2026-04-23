import type { NodeData } from '../../store/useStore';

export const SQUAD_DATA: NodeData[] = [
  // THE DEFENSE (Languages & Core Logic)
  { 
    id: 'cpp', 
    title: 'C++ & OOP', 
    type: 'skill', 
    position: [-15, 1, 20], 
    color: '#00599C', // C++ Blue
    description: 'Proficient in C++ and Object-Oriented Programming. Focused on writing robust, memory-efficient logic for complex systems.',
    techStack: ['C++', 'OOP', 'Logic']
  },
  { 
    id: 'dsa', 
    title: 'Data Structures & Algorithms', 
    type: 'skill', 
    position: [0, 1, 20], 
    color: '#FFD43B', // Python Yellow
    description: 'Strong foundation in core computing concepts, focusing on efficient data manipulation and algorithmic problem solving.',
    techStack: ['DSA', 'Optimization']
  },
  { 
    id: 'python', 
    title: 'Python & ML', 
    type: 'skill', 
    position: [15, 1, 20], 
    color: '#3776AB', // Python Blue
    description: 'Utilizing Python for machine learning models, predictive data analysis, and advanced algorithmic implementations.',
    techStack: ['Python', 'Scikit-learn', 'XGBoost']
  },

  // THE MIDFIELD (Backend & Databases)
  { 
    id: 'node', 
    title: 'Node.js & Express', 
    type: 'skill', 
    position: [-12, 1, -5], 
    color: '#339933', // Node Green
    description: 'Architecting fast, scalable RESTful APIs and server-side applications using Node.js and the Express framework.',
    techStack: ['Node.js', 'Express.js', 'REST APIs', 'EJS']
  },
  { 
    id: 'postgres', 
    title: 'PostgreSQL & SQL', 
    type: 'skill', 
    position: [12, 1, -5], 
    color: '#336791', // Postgres Blue
    description: 'Designing relational database schemas, writing complex SQL queries, and ensuring secure, efficient data storage.',
    techStack: ['PostgreSQL', 'SQL', 'Databases']
  },

  // THE STRIKERS (High-Impact Projects)
  { 
    id: 'ecommerce', 
    title: 'Tribal Art E-Commerce', 
    type: 'project', 
    position: [-18, 1.5, -30], 
    color: '#f59e0b',
    description: 'Designed a highly responsive digital marketplace for tribal artisans, improving mobile engagement by 35%. Nominated for the Eureka Competition and represented the college at IIT Bombay.',
    techStack: ['HTML/CSS', 'JavaScript', 'UI/UX']
  },
  { 
    id: 'health', 
    title: 'ML Health Surveillance', 
    type: 'project', 
    position: [0, 1.5, -35], 
    color: '#f59e0b',
    description: 'Developed an ML predictive model to forecast water-borne disease outbreaks, achieving an estimated 80% accuracy. Engineered a mobile PWA to streamline real-time data collection for ASHA workers, reducing reporting time by 30%.',
    techStack: ['Python', 'Scikit-learn', 'XGBoost', 'PWA']
  },
  { 
    id: 'blog', 
    title: 'Full-Stack Blog Platform', 
    type: 'project', 
    position: [18, 1.5, -30], 
    color: '#f59e0b',
    description: 'Architected an MVC-patterned blog platform with dynamic EJS templating, rendering content 25% faster. Integrated server-side routing to successfully handle 100% of secure CRUD operations.',
    techStack: ['Node.js', 'Express.js', 'EJS', 'SQL']
  }
];