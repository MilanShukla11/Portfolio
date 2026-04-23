import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect } from 'react';
import { useStore } from '../../store/useStore';

export default function CameraRig() {
  const { camera } = useThree();
  const scroll = useScroll();
  
  const setCurrentRoute = useStore((state) => state.setCurrentRoute);
  const setScrollToSection = useStore((state) => state.setScrollToSection); // NEW

  // NEW: Give the Navbar the ability to scroll the 3D Canvas
  useEffect(() => {
    setScrollToSection((offsetPercentage: number) => {
      // Calculate total scrollable height in pixels
      const maxScrollHeight = scroll.el.scrollHeight - scroll.el.clientHeight;
      // Smoothly scroll to the target pixel
      scroll.el.scrollTo({ top: maxScrollHeight * offsetPercentage, behavior: 'smooth' });
    });
  }, [scroll, setScrollToSection]);

  useFrame(() => {
    const offset = scroll.offset; // 0 to 1

    // 1. ROUTER LOGIC: Update the active page based on scroll percentage
    if (offset < 0.15) setCurrentRoute('HOME');
    else if (offset >= 0.15 && offset < 0.6) setCurrentRoute('PROJECTS');
    else if (offset >= 0.6 && offset < 0.85) setCurrentRoute('SKILLS');
    else setCurrentRoute('CONTACT');

    // 2. CAMERA MOVEMENT: The Journey
    // Home -> Pitch: Fly forward
    // Pitch -> Skills/Contact: Fly deeper into the void and lift up
    const targetZ = THREE.MathUtils.lerp(40, -80, offset);
    const targetY = THREE.MathUtils.lerp(8, offset > 0.6 ? 20 : 4, offset); 
    
    // 3. CAMERA ROTATION: The "Page Change" Illusion
    // When leaving the pitch (offset > 0.6), the camera tilts up to look at the UI
    const targetLookAtY = THREE.MathUtils.lerp(0, offset > 0.6 ? 20 : 0, offset);

    camera.position.z = targetZ;
    camera.position.y = targetY;
    
    // Instead of always looking at [0,0,0], we adjust the gaze
    const lookAtVector = new THREE.Vector3(0, targetLookAtY, targetZ - 10);
    camera.lookAt(lookAtVector);
  });

  return null;
}