import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Stage } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';

// Modelo de coche de ejemplo (puedes reemplazarlo con modelos más detallados)
function CarModel({ position = [0, 0, 0], color = 'red' }) {
  const carRef = useRef();
  
  return (
    <group ref={carRef} position={position} scale={[0.5, 0.5, 0.5]}>
      {/* Cuerpo del coche */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[3, 1, 6]} />
        <meshStandardMaterial color={color} />
      </mesh>
      
      {/* Techo */}
      <mesh position={[0, 1.2, -0.5]} castShadow>
        <boxGeometry args={[2.5, 0.6, 3.5]} />
        <meshStandardMaterial color={color} />
      </mesh>
      
      {/* Ventanas */}
      <mesh position={[0, 1.2, -0.5]} castShadow>
        <boxGeometry args={[2.6, 0.5, 3.6]} />
        <meshStandardMaterial color="#87CEEB" transparent opacity={0.7} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Ruedas */}
      {[-1, 1].map((side) => (
        <group key={side}>
          <mesh position={[1.2 * side, 0.3, 1.5]} castShadow>
            <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
            <meshStandardMaterial color="#333333" />
          </mesh>
          <mesh position={[1.2 * side, 0.3, -1.5]} castShadow>
            <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
            <meshStandardMaterial color="#333333" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Escena del concesionario
function Showroom() {
  const [selectedCar, setSelectedCar] = useState(0);
  const cars = [
    { id: 1, name: 'Deportivo Rojo', color: '#FF3B30', price: '$45,000' },
    { id: 2, name: 'Clásico Azul', color: '#007AFF', price: '$35,000' },
    { id: 3, name: 'Elegante Negro', color: '#1C1C1E', price: '$50,000' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '70%', height: '100%' }}>
        <Canvas shadows camera={{ position: [10, 5, 10], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            <Stage environment="city" intensity={0.6}>
              <CarModel position={[0, 0, 0]} color={cars[selectedCar].color} />
            </Stage>
            
            <OrbitControls 
              enableZoom={true}
              enablePan={true}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Suspense>
        </Canvas>
      </div>
      
      <div style={{ 
        width: '30%', 
        padding: '20px', 
        overflowY: 'auto'
      }}>
        <h2>Concesionario 3D</h2>
        <h3>{cars[selectedCar].name}</h3>
        <p>Precio: {cars[selectedCar].price}</p>
        
        <div style={{ marginTop: '20px' }}>
          <h4>Modelos disponibles:</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {cars.map((car, index) => (
              <button
                key={car.id}
                onClick={() => setSelectedCar(index)}
                style={{
                  padding: '10px',
                  backgroundColor: selectedCar === index ? car.color : '#e0e0e0',
                  color: selectedCar === index ? 'white' : 'black',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s',
                }}
              >
                {car.name}
              </button>
            ))}
          </div>
        </div>
        
        <div style={{ marginTop: '30px' }}>
          <h4>Características:</h4>
          <ul>
            <li>Motor: 2.0L Turbo</li>
            <li>Potencia: 250 HP</li>
            <li>Transmisión: Automática</li>
            <li>Tracción: Trasera</li>
          </ul>
        </div>
        
        <button style={{
          marginTop: '20px',
          padding: '12px 24px',
          backgroundColor: '#007AFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          width: '100%'
        }}>
          Solicitar Prueba de Manejo
        </button>
      </div>
    </div>
  );
}

export default Showroom;
