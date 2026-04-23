import { create } from 'zustand';

export type NodeData = {
  id: string;
  title: string;
  type: 'skill' | 'project';
  position: [number, number, number];
  color: string;
  description: string;
  techStack: string[];
  link?: string;
};

interface AppState {
  activeNode: NodeData | null;
  setActiveNode: (node: NodeData | null) => void;
  currentRoute: 'HOME' | 'PROJECTS' | 'SKILLS' | 'CONTACT';
  setCurrentRoute: (route: 'HOME' | 'PROJECTS' | 'SKILLS' | 'CONTACT') => void;
  
  // NEW: Store the function that smoothly scrolls the 3D canvas
  scrollToSection: ((offset: number) => void) | null;
  setScrollToSection: (fn: (offset: number) => void) => void;
}

export const useStore = create<AppState>((set) => ({
  activeNode: null,
  setActiveNode: (node) => set({ activeNode: node }),
  currentRoute: 'HOME',
  setCurrentRoute: (route) => set({ currentRoute: route }),
  
  // NEW: State for scrolling
  scrollToSection: null,
  setScrollToSection: (fn) => set({ scrollToSection: fn }),
}));