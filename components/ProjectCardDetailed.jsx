'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectCardDetailed({ project, onOpen }){
  const ref = useRef();
  function onMove(e){
    if(!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${(-y*8)}deg) rotateY(${(x*12)}deg)`;
  }
  function onLeave(){ if(ref.current) ref.current.style.transform = 'none'; }
  return (
    <motion.article ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} whileHover={{ scale: 1.02 }} className="card transition-transform will-change-transform">
      <div className="relative overflow-hidden rounded-lg mb-4" style={{height: '220px'}} role="img" aria-label={project.title}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" fetchPriority="low" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-400 mt-2">{project.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <button onClick={()=> onOpen(project)} className="px-3 py-2 rounded-md bg-white/6" data-cursor="hover">Quick view</button>
        <a href={project.link} className="text-sm text-gray-300" data-cursor="hover" onMouseEnter={()=>{ try{ import('../utils/prefetch').then(m=>m.prefetchLink(project.link)); }catch(e){} }}>Case study →</a>
      </div>
    </motion.article>
  )
}
