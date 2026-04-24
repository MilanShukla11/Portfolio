import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../../store/useStore';

export default function TacticalBall() {
  const ballRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();
  const scrollToSection = useStore((state) => state.scrollToSection);
  const [goalTriggered, setGoalTriggered] = useState(false);

  useFrame(() => {
    const ballProgress = Math.min(Math.max((scroll.offset - 0.1) / 0.6, 0), 1);
    
    // Smooth easing near the goal (ballProgress > 0.9)
    let easedProgress = ballProgress;
    if (ballProgress > 0.9) {
      const t = (ballProgress - 0.9) / 0.1;
      easedProgress = 0.9 + (1 - Math.pow(1 - t, 3)) * 0.1;
    }
    
    const targetZ = THREE.MathUtils.lerp(20, -60, easedProgress);
    
    if (ballRef.current) {
      ballRef.current.position.z = targetZ;
      ballRef.current.rotation.x = THREE.MathUtils.lerp(0, -Math.PI * 16, easedProgress);
    }

    // When ball reaches the goal zone (Z <= -58) and not yet triggered
    const isGoal = targetZ <= -58;
    if (isGoal && !goalTriggered && scrollToSection) {
      setGoalTriggered(true);
      // Small delay for visual satisfaction, then smoothly scroll to Skills section
      setTimeout(() => {
        scrollToSection(0.8); // 0.8 is the Skills section offset
      }, 400);
    }
  });

  return (
    <group>
      <mesh ref={ballRef} position={[0, 1.5, 20]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} wireframe />
      </mesh>
    </group>
  );
}