'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  useEffect(()=>{ function onScroll(){ setScrolled(window.scrollY>40); } window.addEventListener('scroll', onScroll); onScroll(); return ()=> window.removeEventListener('scroll', onScroll); },[]);

  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full z-50 top-0 left-0 backdrop-blur bg-black/30 border-b border-white/6">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-display text-xl font-bold tracking-tight" data-cursor="hover">kdesa</Link>
        <nav className={"hidden md:flex gap-8 items-center text-gray-300 transition-all "+(scrolled? 'text-white':'')}>
          <Link href="/projects" data-cursor="hover" className={path==='/projects'?'text-white':''}>Projects</Link>
          <Link href="/about" data-cursor="hover" className={path==='/about'?'text-white':''}>About</Link>
          <Link href="/contact" data-cursor="hover" className={path==='/contact'?'text-white':''}>Contact</Link>
          <a href="#" data-cursor="hover" className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-a)] to-[var(--accent-b)] text-black font-semibold">Hire me</a>\n          <button onClick={()=> setMegaOpen(v=>!v)} className="px-3 py-2 text-sm border rounded-md">Explore</button>
        </nav>
        <button className="md:hidden p-2" onClick={()=> setOpen(!open)} aria-label="menu" data-cursor="hover">
          {open ? <FiX size={20}/> : <FiMenu size={20}/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/80 border-t border-white/6">
          <div className="container py-4 flex flex-col gap-3">
            <Link href="/projects" onClick={()=> setOpen(false)}>Projects</Link>
            <Link href="/about" onClick={()=> setOpen(false)}>About</Link>
            <Link href="/contact" onClick={()=> setOpen(false)}>Contact</Link>
            <a href="#" className="mt-2 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-a)] to-[var(--accent-b)] text-black font-semibold">Hire me</a>
          </div>
        </div>
      )}
    </header>


  {megaOpen && (
    <div className="w-full bg-black/90 border-t border-white/6">
      <div className="container mx-auto px-6 py-6 grid md:grid-cols-3 gap-6">
        <div className="p-4"><h4 className="font-semibold mb-2">Featured</h4><a href="/projects/nebula-ui" className="block mb-1">Nebula UI — Motion system</a><a href="/projects/kdesa-landing" className="block mb-1">KDESA Landing</a></div>
        <div className="p-4"><h4 className="font-semibold mb-2">Case Studies</h4><a href="/projects/data-viz" className="block mb-1">Data Viz Suite</a></div>
        <div className="p-4"><h4 className="font-semibold mb-2">Resources</h4><a href="#" className="block mb-1">Design tokens</a><a href="#" className="block mb-1">Motion utilities</a></div>
      </div>
    </div>
  )}
</header>
