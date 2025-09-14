'use client';
import dynamic from 'next/dynamic';
import PageTransition from '../components/PageTransition';
import ProjectCardDetailed from '../components/ProjectCardDetailed';
import Modal from '../components/Modal';
import SplitText from '../components/SplitText';
import { useEffect, useState, useRef } from 'react';
import projects from '../data/projects';
import useIsomorphicLayoutEffect from '../utils/useIsomorphicLayoutEffect';
const ShaderHero = dynamic(()=> import('../components/ShaderHero'), { ssr:false });
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Howl } from 'howler';

gsap.registerPlugin(ScrollTrigger);

export default function Home(){
  const [selected, setSelected] = useState(null);
  const heroRef = useRef(null);

  useIsomorphicLayoutEffect(()=>{
    const ctx = gsap.context(()=>{
      const chars = heroRef.current?.querySelectorAll('.split-chars > span > span') || [];
      gsap.set(chars, { y: 28, opacity: 0 });
      gsap.to(chars, { y:0, opacity:1, stagger: 0.03, duration: 0.7, ease: 'power3.out', delay: 0.12 });

      gsap.from('.card', {
        y: 18, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.card', start: 'top 92%', toggleActions: 'play none none reverse' },
        stagger: 0.06
      });
    }, heroRef);
    return ()=> ctx.revert();
  }, []);

  useEffect(()=>{
    // tiny hover sound setup
    const sound = new Howl({ src: [], volume: 0.08 });
    document.querySelectorAll('button,a').forEach(el=>{
      el.addEventListener('mouseenter', ()=> { /* placeholder for hover sound */ });
    });
    return ()=> sound.unload();
  }, []);

  return (
    <main className="pt-28">
      <PageTransition>
        <section ref={heroRef} className="container mx-auto px-6 md:px-12 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl md:text-7xl hero-title split-chars">
              <SplitText>I'm</SplitText>
              <span className="inline-block mr-2 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-a)] to-[var(--accent-b)]"><SplitText>Kdesa</SplitText></span>
              <br />
              <span className="inline-block"><SplitText>— I craft interfaces</SplitText></span>
            </h1>
            <p className="mt-6 lead max-w-xl">Motion-forward UI, careful typography and playful micro-interactions. I design and build polished experiences that feel alive.</p>
            <div className="mt-8 flex gap-4">
              <a href="/projects" data-cursor="hover" className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--accent-a)] to-[var(--accent-b)] text-black px-5 py-3 rounded-full shadow-md">View Work</a>\n              <a href="/contact" data-cursor="hover" data-cursor-text="Contact" className="btn-primary">Contact</a>
              <a href="/contact" data-cursor="hover" className="inline-flex items-center gap-3 border border-white/8 px-5 py-3 rounded-full text-sm">Contact</a>
            </div>

            <div className="mt-6 text-sm text-gray-400 max-w-md">
              <p><strong>Selected:</strong> Design systems · Motion · 3D · Performance</p>
            </div>
          </div>
          <div className="w-full md:w-1/2"><ShaderHero /></div>
        </section>

        <section className="container mx-auto px-6 md:px-12 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Selected Work</h2>
            <p className="text-gray-400">Case studies and experiments — motion, clarity, and performance.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map(p => <ProjectCardDetailed key={p.id} project={p} onOpen={(proj)=> setSelected(proj)} />)}
          </div>
        </section>

        <section className="container mx-auto px-6 md:px-12 py-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Philosophy</h3>
            <p className="text-gray-300">Interfaces should feel alive, precise, and performant. Animation should inform, not distract. I focus on building interfaces that are fast, accessible, and delightful.</p>
          </div>
        </section>
      </PageTransition>
      <Modal item={selected} onClose={()=> setSelected(null)} />
    </main>
  )
}
