// src/components/three/CubeScene.js
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

export default function CubeScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Box position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="white"
          wireframe
          wireframeColor="white"
        />
      </Box>
      <OrbitControls />
    </Canvas>
  );
}