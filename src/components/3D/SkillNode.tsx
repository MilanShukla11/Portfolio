import { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Float, useScroll } from '@react-three/drei';
import { useStore, type NodeData } from '../../store/useStore';

export default function SkillNode({ data }: { data: NodeData }) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const setActiveNode = useStore((state) => state.setActiveNode);
  const scroll = useScroll();

  const glowColor = new THREE.Color(data.color).multiplyScalar(hovered ? 3 : 1.5);

  useFrame(() => {
    if (!groupRef.current) return;
    
    // 1. The Clustering Physics
    const offset = scroll.offset; // Get scroll percentage
    const isProjectSection = offset > 0.15 && offset < 0.6;

    // Define the base (wide) position
    const [baseX, baseZ] = data.position;
    
    // Define the clustered (tight) position (pulling everything closer to center x:0, z:-25)
    const clusterX = baseX * 0.3; 
    const clusterZ = -25 + (baseZ + 25) * 0.4; 

    // Determine target position based on scroll
    const targetX = isProjectSection ? clusterX : baseX;
    const targetZ = isProjectSection ? clusterZ : baseZ;

    // Smoothly Lerp (glide) the pins to their target positions
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.05);

    // 2. Hover Scale
    const targetScale = hovered ? 1.3 : 1;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    // Float makes the entire pin bob up and down gracefully
    <Float speed={2} rotationIntensity={0} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
      <group
        ref={groupRef}
        position={data.position} // Start at base position
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'auto'; }}
        onClick={(e) => { e.stopPropagation(); setActiveNode(data); }}
      >
        
        {/* THE TACTICAL PIN GEOMETRY */}
        {/* 1. The Player Head (Sphere) */}
        <mesh position={[0, 1.8, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial color={glowColor} />
        </mesh>

        {/* 2. The Player Body/Base (Cone) */}
        <mesh position={[0, 0.8, 0]}>
          <coneGeometry args={[0.6, 1.6, 8]} />
          <meshBasicMaterial color={glowColor} wireframe={data.type === 'skill'} opacity={0.8} transparent />
        </mesh>
        
        {/* 3. The Ground Shadow/Ring */}
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.7, 0.9, 16]} />
          <meshBasicMaterial color={glowColor} transparent opacity={0.5} />
        </mesh>

      </group>
    </Float>
  );
}