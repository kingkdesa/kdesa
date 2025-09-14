'use client';
import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
const ThreeHero = dynamic(() => import('./ThreeHero'), { ssr: false });

// We provide a lightweight WebGL shader using a full-screen fragment canvas if available.
// For portability we fall back to the ThreeHero component which uses react-three.
export default function ShaderHero(){ 
  const canvasRef = useRef(null);

  useEffect(()=>{
    // Simple animated gradient using 2D canvas as a lightweight fallback for devices without WebGL.
    const c = canvasRef.current;
    if(!c) return;
    const ctx = c.getContext('2d');
    let raf = null;
    function resize(){ c.width = c.clientWidth; c.height = c.clientHeight; }
    function tick(t){
      const w = c.width, h = c.height;
      const g = ctx.createLinearGradient(0, 0, w, h);
      const a = Math.sin(t/2000) * 0.5 + 0.5;
      g.addColorStop(0, `rgba(96,165,250,${0.25 + 0.1*Math.sin(t/700)})`);
      g.addColorStop(1, `rgba(167,139,250,${0.25 + 0.1*Math.cos(t/900)})`);
      ctx.fillStyle = g;
      ctx.fillRect(0,0,w,h);
      raf = requestAnimationFrame(tick);
    }
    resize();
    window.addEventListener('resize', resize);
    raf = requestAnimationFrame(tick);
    return ()=>{ window.removeEventListener('resize', resize); cancelAnimationFrame(raf); };
  }, []);

  // show canvas on small/medium screens and ThreeHero on large for higher fidelity
  return (
    <div className="w-full h-96 md:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden card relative">
      <canvas ref={canvasRef} className="w-full h-full block lg:hidden" />
      <div className="hidden lg:block w-full h-full"><ThreeHero /></div>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent mix-blend-overlay"></div>
    </div>
  )
}
