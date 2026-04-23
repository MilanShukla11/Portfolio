import { useMemo } from 'react';
import * as THREE from 'three';
import { Line, Grid } from '@react-three/drei';

// 1. Create a reusable Goal Component
const GoalPost = ({ position, rotationY }: { position: [number, number, number], rotationY: number }) => {
  // We use the exact same neon color here so the goals glow alongside the pitch lines
  const goalColor = new THREE.Color(0, 4, 2);
  
  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* Front Frame (Crossbar and Posts) */}
      <Line points={[[-7, 0, 0], [-7, 4, 0], [7, 4, 0], [7, 0, 0]]} color={goalColor} lineWidth={4} />
      
      {/* Back Netting Frame (Faded lines to give the illusion of depth/mesh) */}
      <Line points={[[-7, 0, -3], [-7, 4, 0]]} color={goalColor} lineWidth={1} opacity={0.3} transparent />
      <Line points={[[7, 0, -3], [7, 4, 0]]} color={goalColor} lineWidth={1} opacity={0.3} transparent />
      <Line points={[[-7, 0, -3], [7, 0, -3]]} color={goalColor} lineWidth={1} opacity={0.3} transparent />
    </group>
  );
};

export default function Pitch() {
  // Define our neon color. Notice the G (Green) value is 4. 
  // Because 4 > 1, the Bloom effect from our Effects file will make it glow.
  const neonMint = new THREE.Color(0, 4, 2);

  // Mathematically generate a perfect circle for the center of the pitch
  const centerCircle = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      // Radius of 10
      points.push(new THREE.Vector3(Math.cos(angle) * 10, 0, Math.sin(angle) * 10));
    }
    return points;
  }, []);

  return (
    <group>
      {/* 1. The Dark Void (Ground) */}
      {/* Pushed slightly down on the Y axis (-0.1) so lines don't clip into it */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <planeGeometry args={[300, 500]} />
        <meshBasicMaterial color="#050505" />
      </mesh>

      {/* 2. The Digital Grid (Adds depth to the background) */}
      <Grid 
        args={[100, 100]} 
        position={[0, -0.05, 0]} 
        cellColor="#111" 
        sectionColor="#222" 
        fadeDistance={80} 
      />

      {/* 3. The Main Pitch Boundaries (Width: 60, Length: 100) */}
      <Line
        points={[
          [-30, 0, -50], // Bottom Left
          [30, 0, -50],  // Bottom Right
          [30, 0, 50],   // Top Right
          [-30, 0, 50],  // Top Left
          [-30, 0, -50]  // Back to start
        ]}
        color={neonMint}
        lineWidth={3}
      />

      {/* 4. The Halfway Line */}
      <Line 
        points={[[-30, 0, 0], [30, 0, 0]]} 
        color={neonMint} 
        lineWidth={3} 
      />

      {/* 5. The Center Circle */}
      <Line 
        points={centerCircle} 
        color={neonMint} 
        lineWidth={3} 
      />

      {/* 6. The Tactical Goals */}
      {/* Opponent's Goal (Top of the pitch) */}
      <GoalPost position={[0, 0, -50]} rotationY={0} />
      
      {/* Your Goal (Bottom of the pitch, rotated 180 degrees to face the center) */}
      <GoalPost position={[0, 0, 50]} rotationY={Math.PI} />

    </group>
  );
}