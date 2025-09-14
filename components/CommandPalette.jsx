'use client';
import { useEffect, useState } from 'react';
import projects from '../data/projects';
export default function CommandPalette(){ 
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(()=>{
    function onKey(e){
      if((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'){ e.preventDefault(); setOpen(o=>!o); }
      if(e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return ()=> window.removeEventListener('keydown', onKey);
  },[]);

  useEffect(()=>{
    const q = query.toLowerCase().trim();
    if(!q) return setResults(projects.slice(0,6));
    setResults(projects.filter(p => p.title.toLowerCase().includes(q) || p.tags.join(' ').toLowerCase().includes(q)).slice(0,8));
  },[query]);

  if(!open) return null;
  return (
    <div className="fixed inset-0 z-60 flex items-start justify-center pt-24">
      <div className="w-full max-w-2xl mx-4 bg-neutral-900 border border-white/6 rounded-2xl p-4 shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects, pages, tags..." className="flex-1 p-3 bg-neutral-950/30 rounded-md outline-none" />
          <button onClick={()=> setOpen(false)} className="px-3 py-2 bg-white/6 rounded-md">Close</button>
        </div>
        <div className="grid gap-2">
          {results.map(r => (
            <a key={r.id} href={r.link} className="p-3 rounded-md hover:bg-white/4 flex items-center gap-3" data-cursor="hover">
              <div className="w-12 h-8 bg-neutral-800 rounded overflow-hidden flex-shrink-0"><img src={r.image} alt="" className="w-full h-full object-cover" /></div>
              <div>
                <div className="font-semibold">{r.title}</div>
                <div className="text-sm text-gray-400">{r.tags.join(' · ')}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
