import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './object';
import * as THREE from 'three';

export default function App() {
  return (
    <Canvas camera={{ fov: 45, position: [-4, 2, -4] }}>
      <color attach="background" args={['#eb7200']} />
      <directionalLight intensity={1.8} color={new THREE.Color('#eb7200')} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
