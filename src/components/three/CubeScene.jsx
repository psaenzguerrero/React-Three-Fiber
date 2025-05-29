// src/components/three/CubeScene.js
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useRef } from 'react';

export default function CubeScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <MovingSphere />
      <OrbitControls />
    </Canvas>
  );
}

function MovingSphere() {
  const sphereRef = useRef();
  
  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.5; // Rotate along X axis
      sphereRef.current.rotation.y += delta * 0.5; // Rotate along Y axis
    }
  });

  return (
    <Sphere ref={sphereRef} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="black"
        wireframe
        wireframeColor="black"
      />
    </Sphere>
  );
}