import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function Effects() {
  return (
    // multisampling={0} prevents the composer from doing its own heavy antialiasing
    <EffectComposer multisampling={0}> 
      <Bloom 
        luminanceThreshold={1} 
        mipmapBlur 
        intensity={1.2} 
        // THIS IS THE MAGIC BULLET: Render the glow at half resolution
        resolutionScale={0.5} 
      />
    </EffectComposer>
  );
}