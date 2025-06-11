import { Canvas } from '@react-three/fiber';
import { OrbitControls, Cone } from '@react-three/drei';

export default function PyramidScene() {

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Cone position={[0, 0, 0]} args={[1, 1, 4]}>
        <meshStandardMaterial 
          color="red"
          wireframeColor="red"
          wireframe
        />
      </Cone>
      <OrbitControls />
    </Canvas>
  );
}
