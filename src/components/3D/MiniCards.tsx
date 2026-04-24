import {useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html, useScroll } from '@react-three/drei';
import * as THREE from 'three';

type MiniCardData = {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  positionZ: number;   // ball triggers card when it passes this Z
  side: 'left' | 'right';
};

const cardsData: MiniCardData[] = [
  { id: 'card1', title: 'C++ & OOP', subtitle: 'Memory-efficient logic', color: '#00599C', positionZ: 14, side: 'left' },
  { id: 'card2', title: 'Python & ML', subtitle: 'Predictive data analysis', color: '#3776AB', positionZ: 5, side: 'right' },
  { id: 'card3', title: 'Node.js', subtitle: 'Scalable REST APIs', color: '#339933', positionZ: -8, side: 'left' },
  { id: 'card4', title: 'PostgreSQL', subtitle: 'Relational schema design', color: '#336791', positionZ: -22, side: 'right' },
  { id: 'card5', title: 'Full‑Stack Projects', subtitle: 'E‑commerce · ML · Blogs', color: '#f59e0b', positionZ: -40, side: 'left' },
];

export default function MiniCards() {
  const scroll = useScroll();
  const [revealed, setRevealed] = useState<string[]>([]);

  useFrame(() => {
    const ballProgress = Math.min(Math.max((scroll.offset - 0.1) / 0.6, 0), 1);
    const ballZ = THREE.MathUtils.lerp(20, -60, ballProgress);

    cardsData.forEach(card => {
      if (ballZ <= card.positionZ + 1 && !revealed.includes(card.id)) {
        setRevealed(prev => [...prev, card.id]);
      }
    });
  });

  return (
    <group>
      {cardsData.map(card => {
        const isVisible = revealed.includes(card.id);
        const xPos = card.side === 'left' ? -5 : 5;   // closer to center
        const yPos = 3;                               // higher up, in camera view
        const zPos = card.positionZ;

        return (
          <Float key={card.id} speed={1.2} rotationIntensity={0} floatIntensity={0.3} floatingRange={[-0.1, 0.1]}>
            <group position={[xPos, yPos, zPos]}>
              <Html center zIndexRange={[40, 0]} distanceFactor={8}>
                <div
                  className="w-56 backdrop-blur-xl rounded-2xl p-5 transition-all duration-700 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.8)',
                    pointerEvents: isVisible ? 'auto' : 'none',
                    background: 'rgba(10, 10, 10, 0.6)',
                    border: `1px solid ${card.color}60`,
                    boxShadow: isVisible ? `0 0 30px ${card.color}30` : 'none',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: card.color, boxShadow: `0 0 10px ${card.color}` }} />
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Skill</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 tracking-tight">{card.title}</h3>
                  <p className="text-xs text-gray-300 font-light">{card.subtitle}</p>
                </div>
              </Html>
            </group>
          </Float>
        );
      })}
    </group>
  );
}
