import React from 'react';
import { useGLTF } from '@react-three/drei';

const Model = () => {
  const { nodes } = useGLTF('/athlete_statue.glb');

  return (
    <mesh geometry={nodes.athlete_statue.geometry}>
      <meshStandardMaterial
        attach="material"
        roughness={0.2}
        metalness={0.5}
        normalMap={nodes.athlete_statue.material.normalMap}
        map={nodes.athlete_statue.material.map}
      />
    </mesh>
  );
};

export default Model;
