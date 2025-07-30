import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Cubo individual do Rubik's Cube
const RubikCube = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Cores para as faces do cubo de Rubik
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff8800', '#ffffff'];

  // Criar um cubo 3x3x3
  const cubes = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cubes.push({ position: [x, y, z] as [number, number, number] });
      }
    }
  }

  return (
    <group ref={groupRef} rotation={[0.2, 0.2, 0]}>
      {cubes.map((cube, index) => (
        <mesh key={index} position={cube.position}>
          <boxGeometry args={[0.9, 0.9, 0.9]} />
          <meshStandardMaterial
            color={colors[index % colors.length]}
            transparent
            opacity={0.9}
          />
          {/* Bordas pretas para definir melhor os cubos */}
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(0.9, 0.9, 0.9)]} />
            <lineBasicMaterial color="#000000" linewidth={2} />
          </lineSegments>
        </mesh>
      ))}
    </group>
  );
};

// Componente Scene principal
export const Scene = () => {
  return (
    <Canvas
      camera={{ position: [8, 8, 8], fov: 50 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1}
        castShadow
      />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      <RubikCube />
      
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={1}
        minDistance={6}
        maxDistance={20}
      />
    </Canvas>
  );
};