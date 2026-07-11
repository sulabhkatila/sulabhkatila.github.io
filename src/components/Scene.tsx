import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const TorusKnot = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slow auto-rotation
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;

      // Mouse parallax
      const targetX = (state.pointer.x * Math.PI) / 10;
      const targetY = (state.pointer.y * Math.PI) / 10;
      meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;

      // Native scroll mapping
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const offset = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      
      const scale = 1 - offset * 0.5;
      meshRef.current.scale.set(scale, scale, scale);

      meshRef.current.position.y = offset * 2;
      meshRef.current.position.x = Math.sin(offset * Math.PI * 2) * 1;
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={1} speed={2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.35, 200, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={2}
          roughness={0.1}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#ffffff"
        />
      </mesh>
    </Float>
  );
};

const DisintegratedParticles = () => {
  const particlesRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 150; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15
        ),
        rotation: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ),
        scale: Math.random() * 0.2 + 0.05,
      });
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const offset = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      
      particlesRef.current.rotation.y += delta * 0.05;
      
      const targetScale = Math.max(0, (offset - 0.2) * 2); 
      particlesRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      particlesRef.current.position.x = (state.pointer.x * Math.PI) / 5;
      particlesRef.current.position.y = (state.pointer.y * Math.PI) / 5;
    }
  });

  return (
    <group ref={particlesRef} scale={0}>
      {particles.map((props, i) => (
        <mesh key={i} position={props.position} rotation={props.rotation} scale={props.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial 
            color="#ffffff" 
            metalness={0.8} 
            roughness={0.2} 
            transmission={0.5} 
            thickness={0.5} 
          />
        </mesh>
      ))}
    </group>
  );
};

const Scene = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={['#050510']} />
        
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0055ff" />
        <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" castShadow />
        
        <Environment preset="city" />

        <TorusKnot />
        <DisintegratedParticles />
      </Canvas>
    </div>
  );
};

export default Scene;
