'use client';
import { useEffect, useState } from 'react';
export default function ThemeToggle(){
  const [light, setLight] = useState(false);
  useEffect(()=>{
    const prefers = window.matchMedia('(prefers-color-scheme: light)').matches;
    setLight(prefers);
    document.body.classList.toggle('light', prefers);
  },[]);
  function toggle(){ setLight(v=>{ document.body.classList.toggle('light', !v); return !v; }); }
  return (
    <div className="fixed right-6 top-6 z-60">
      <button onClick={toggle} className="p-2 rounded-full bg-white/6" aria-label="Toggle theme" data-cursor="hover">
        {light ? '🌞' : '🌙'}
      </button>
    </div>
  )
}
