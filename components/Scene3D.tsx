"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

function FloatingTile({ position, color, rotation }: { position: [number, number, number]; color: string; rotation?: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position} rotation={rotation} castShadow receiveShadow>
        <boxGeometry args={[1.5, 1.5, 0.2]} />
        <meshStandardMaterial 
            color={color} 
            roughness={0.1} 
            metalness={0.1} 
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
    return (
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <mesh position={position} scale={scale} castShadow receiveShadow>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial 
              color={color} 
              roughness={0.2} 
              metalness={0.5} 
          />
        </mesh>
      </Float>
    );
  }

export default function Scene3D() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        
        <group position={[0, 0, 0]}>
            <FloatingTile position={[-2, 1, 0]} color="#F4A261" rotation={[0.5, 0.5, 0]} />
            <FloatingTile position={[2, -1, -1]} color="#2A9D8F" rotation={[-0.5, 0.5, 0]} />
            <FloatingTile position={[0, 0, 1]} color="#E9C46A" rotation={[0, 0, 0.2]} />
            
            <FloatingSphere position={[2, 2, -2]} color="#ffffff" scale={0.8} />
            <FloatingSphere position={[-2, -2, -2]} color="#264653" scale={1.2} />

            {/* Extra Crowded Elements */}
            <FloatingSphere position={[-3, 3, -3]} color="#CCFF00" scale={0.5} />
            <FloatingTile position={[3, -3, -2]} color="#5B21B6" rotation={[0.2, 0.2, 0]} />
            <FloatingSphere position={[0, 3, -4]} color="#FF5F1F" scale={0.6} />
            <FloatingTile position={[-1, -3, 1]} color="#111827" rotation={[0.1, 0.1, 0]} />
        </group>

        <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={2.5} far={4.5} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

