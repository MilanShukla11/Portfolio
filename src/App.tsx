import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import { AnimatePresence, motion } from 'framer-motion';

import Pitch from './components/3D/Pitch';
import Effects from './components/3D/Effects';
import CameraRig from './components/3D/CameraRig';
import TacticalBall from './components/3D/TacticalBall';
import MiniCards from './components/3D/MiniCards';
import HtmlOverlay from './components/UI/HtmlOverlay';
import Navbar from './components/UI/Navbar';
import ProjectsPage from './pages/ProjectsPage';

// Floating particles background (appears on all pages)
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#10b981] opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${Math.random() * 20 + 10}s`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
};

function PitchExperience() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas dpr={[1, 1.2]} gl={{ antialias: false, powerPreference: "high-performance" }} camera={{ fov: 45, position: [0, 8, 40] }}>
        <ScrollControls pages={6} damping={0.2}>
          <CameraRig />
          <TacticalBall />
          <MiniCards />
          <HtmlOverlay />
        </ScrollControls>
        <Pitch />
        <Effects />
      </Canvas>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  return (
    <main className={`relative w-screen h-screen bg-[#0a0a0a] ${!isProjectsPage ? 'overflow-hidden' : 'overflow-auto'}`}>
      <FloatingParticles />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <PitchExperience />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <ProjectsPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}