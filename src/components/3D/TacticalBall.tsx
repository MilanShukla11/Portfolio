import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export default function TacticalBall() {
  const ballRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (!ballRef.current) return;
    
    const offset = scroll.offset;

    // THE FIX: We cap the ball's animation so it finishes rolling early 
    // instead of stretching across the entire 6-page site.
    // This creates a percentage from 0 to 1, but it maxes out when offset hits 0.4
    const ballProgress = Math.min(offset / 0.4, 1);

    // Move ball from your goal (z: 20) to the opponent's penalty box (z: -20)
    ballRef.current.position.z = THREE.MathUtils.lerp(20, -20, ballProgress);
    
    // Spin the ball from 0 to 8 times PI (4 full rotations)
    ballRef.current.rotation.x = THREE.MathUtils.lerp(0, -Math.PI * 8, ballProgress);
  });

  return (
    <mesh ref={ballRef} position={[0, 1, 20]}>
      <sphereGeometry args={[1, 16, 16]} />
      {/* Keeping the color over 1 so it glows slightly */}
      <meshBasicMaterial color={[1.5, 1.5, 1.5]} wireframe /> 
    </mesh>
  );
}