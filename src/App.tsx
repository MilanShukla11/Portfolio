import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';

import Pitch from './components/3D/Pitch';
import Effects from './components/3D/Effects';
import CameraRig from './components/3D/CameraRig';
import TacticalBall from './components/3D/TacticalBall';
import Squad from './components/3D/Squad';
import HtmlOverlay from './components/UI/HtmlOverlay';
import NodeOverlay from './components/UI/NodeOverlay';
import Navbar from './components/UI/Navbar';
import ProjectsPage from './pages/ProjectsPage'; // NEW

// We extracted the 3D Canvas into its own component
function PitchExperience() {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 1.2]} gl={{ antialias: false, powerPreference: "high-performance" }} camera={{ fov: 45, position: [0, 8, 40] }}>
          
          <ScrollControls pages={6} damping={0.2}>
            <CameraRig />
            <TacticalBall />
            <HtmlOverlay /> 
            <Squad /> 
          </ScrollControls>
          
          <Pitch />
          <Effects />
          
        </Canvas>
      </div>
      <NodeOverlay />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <main className="relative w-screen h-screen bg-[#0a0a0a] overflow-hidden">
        
        {/* Navbar stays at the App level so it never unmounts */}
        <Navbar /> 

        {/* Routes control which page is shown */}
        <Routes>
          <Route path="/" element={<PitchExperience />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>

      </main>
    </BrowserRouter>
  );
}