'use client';
import PageTransition from '../../components/PageTransition';
import { useEffect } from 'react';
import { listenKonami } from '../../utils/konami';

export default function About(){
  useEffect(()=>{
    const off = listenKonami(()=>{ document.body.classList.toggle('kdesa-easter'); alert('Konami: theme toggled'); });
    return ()=> off();
  },[]);

  return (
    <main className="pt-28">
      <PageTransition>
        <section className="container mx-auto px-6 md:px-12 py-16">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-gray-300">I’m a designer-developer focused on motion-first experiences that emphasize clarity, speed, and delight.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h4 className="font-semibold mb-2">Experience</h4>
              <p>6+ years designing and building interfaces across startups and agencies.</p>
            </div>
            <div className="card p-6">
              <h4 className="font-semibold mb-2">Tools</h4>
              <p>React, Next.js, Tailwind, Framer Motion, GSAP, Three.js, D3.</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4">Timeline</h3>
            <ol className="space-y-6">
              <li className="card p-4"><strong>2024</strong> — Senior UI Engineer at Imaginary Co.</li>
              <li className="card p-4"><strong>2022</strong> — Built Nebula UI design system.</li>
              <li className="card p-4"><strong>2020</strong> — Focused on motion systems and accessibility.</li>
            </ol>
          </div>
        </section>
      </PageTransition>
    </main>
  )
}
