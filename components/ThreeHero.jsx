'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

function FloatingBlob(){ 
  const ref = useRef();
  useFrame((state, delta)=>{
    if(!ref.current) return;
    ref.current.rotation.y += 0.12 * delta;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 6) * 0.06;
    ref.current.position.y = Math.sin(state.clock.elapsedTime / 1.5) * 0.08;
  });
  return (
    <mesh ref={ref} scale={[1.6,1.6,1.6]}>
      <icosahedronGeometry args={[1, 32]} />
      <MeshWobbleMaterial factor={0.6} speed={1.1} envMapIntensity={0.6} clearcoat={0.4} roughness={0.2} metalness={0.05} color={'#60A5FA'} />
    </mesh>
  )
}

export default function ThreeHero(){ 
  // mouse parallax
  useEffect(()=>{ const onMove = (e)=>{ const root = document.querySelector('.three-hero-root'); if(!root) return; const rx = (e.clientX / window.innerWidth - 0.5) * 8; const ry = (e.clientY / window.innerHeight - 0.5) * 6; root.style.transform = `translate3d(${rx}px, ${ry}px, 0)`; }; window.addEventListener('mousemove', onMove); return ()=> window.removeEventListener('mousemove', onMove); }, []);

  return (\n    <div className="w-full h-96 md:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden card three-hero-root" style={{transition: "transform .18s ease-out"}}>
      <Canvas camera={{ position:[0,0,3], fov:40 }} gl={{ antialias:true, toneMapping: THREE.ACESFilmicToneMapping }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5,3,5]} intensity={1.0} />
        <directionalLight position={[-5,-2,-5]} intensity={0.6} />
        <Environment preset="city" />
        <FloatingBlob />
      </Canvas>
    </div>
  )
}
