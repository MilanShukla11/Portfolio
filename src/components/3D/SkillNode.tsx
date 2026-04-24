import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html, useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { type NodeData } from '../../store/useStore';

export default function SkillNode({ data }: { data: NodeData }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (!cardRef.current) return;
    
    // Track where the ball is on the pitch (Z: 20 down to Z: -60)
    const ballProgress = Math.min(Math.max((scroll.offset - 0.1) / 0.6, 0), 1);
    const ballZ = THREE.MathUtils.lerp(20, -60, ballProgress);

    // Reveal the card when the ball is 10 units away or has passed it
    const isRevealed = ballZ <= data.position[2] + 10;

    // Bulletproof direct DOM manipulation (Zero React lag)
    if (isRevealed) {
      cardRef.current.style.opacity = '1';
      cardRef.current.style.transform = 'translateY(0) scale(1)';
      cardRef.current.style.pointerEvents = 'auto';
    } else {
      cardRef.current.style.opacity = '0';
      cardRef.current.style.transform = 'translateY(20px) scale(0.8)';
      cardRef.current.style.pointerEvents = 'none';
    }
  });

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={0.5} floatingRange={[-0.2, 0.2]}>
      {/* Positioned exactly where your SquadData dictates */}
      <group position={data.position}>
        <Html center zIndexRange={[50, 0]}>
          <div 
            ref={cardRef}
            className="w-56 md:w-64 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out"
            style={{ opacity: 0, transform: 'translateY(20px) scale(0.8)', pointerEvents: 'none' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: data.color, boxShadow: `0 0 10px ${data.color}` }} />
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                {data.type === 'project' ? 'Project' : 'Skill'}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-2 leading-tight">{data.title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">{data.description}</p>
            
            <div className="flex flex-wrap gap-1">
              {data.techStack?.map(tech => (
                <span key={tech} className="px-2 py-1 text-[9px] font-bold uppercase bg-white/5 border border-white/10 rounded text-white/70">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Html>
      </group>
    </Float>
  );
}