'use client';
import { useEffect, useRef } from 'react';

export default function AnimatedCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const raf = useRef(null);

  useEffect(()=>{
    const D = dot.current, R = ring.current;
    if(!D || !R) return;
    let mx=-9999,my=-9999,rx=-9999,ry=-9999;
    const speed = 0.14;
    function onMove(e){ mx = e.clientX; my = e.clientY; D.style.transform = `translate3d(${mx}px, ${my}px, 0)`; }
    function loop(){ rx += (mx-rx)*speed; ry += (my-ry)*speed; R.style.transform = `translate3d(${rx}px, ${ry}px, 0)`; raf.current = requestAnimationFrame(loop); }
    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(loop);

    function addHover(){ document.querySelectorAll('a,button,[data-cursor="hover"]').forEach(el=>{ el.addEventListener('mouseenter', ()=>{ D.classList.add('k--active'); R.classList.add('k--active-ring'); if(el.dataset.cursorText){ D.setAttribute('data-label', el.dataset.cursorText); } }); el.addEventListener('mouseleave', ()=>{ D.classList.remove('k--active'); R.classList.remove('k--active-ring'); D.removeAttribute('data-label'); }); }); }
    addHover();

    return ()=>{ window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf.current); }
  },[]);

  return (
    <>
      <div ref={ring} className="k-ring" aria-hidden />
      <div ref={dot} className="k-dot" aria-hidden />
      <style jsx>{`
        .k-dot{ position:fixed; left:0; top:0; width:10px; height:10px; border-radius:50%; background:#fff; transform:translate3d(-9999px,-9999px,0); pointer-events:none; z-index:9999; transition: transform .12s linear, background .18s; box-shadow: 0 6px 18px rgba(0,0,0,0.6); }
        .k-ring{ position:fixed; left:0; top:0; width:46px; height:46px; border-radius:50%; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06), rgba(255,255,255,0.02)); transform:translate3d(-9999px,-9999px,0); pointer-events:none; z-index:9998; transition: width .22s cubic-bezier(.2,.9,.2,1), height .22s cubic-bezier(.2,.9,.2,1), opacity .18s; box-shadow: 0 6px 30px rgba(0,0,0,0.45); backdrop-filter: blur(6px); }
        .k-dot.k--active { transform: translate3d(-50%,-50%,0) scale(1.8); background: #fff; }\n        .k-dot[data-label]::after{ content: attr(data-label); position: absolute; top: -34px; left: 50%; transform: translateX(-50%); font-size: 12px; color: white; background: rgba(255,255,255,0.06); padding:4px 8px; border-radius:8px; backdrop-filter: blur(6px); }
        .k-ring.k--active-ring { width: 84px; height:84px; opacity: .98; }
        @media (prefers-reduced-motion: reduce){ .k-dot, .k-ring { display:none; } }
      `}</style>
    </>
  )
}
