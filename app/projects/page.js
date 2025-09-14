'use client';
import PageTransition from '../../../../components/PageTransition';
import projects from '../../../../data/projects';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ImageBlock = dynamic(() => import('../../../../components/ImageBlock'), { ssr: false });

export default function ProjectDetail({ params }){
  const id = params.id;
  const project = projects.find(p => p.id === id);
  useEffect(()=>{
    gsap.from('.case-section', { y: 24, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.case-section', start: 'top 92%' } });
  },[]);

  if(!project) return <main className="pt-28 container mx-auto px-6 md:px-12 py-12"><h2>Project not found</h2></main>;

  return (
    <main className="pt-28">
      <PageTransition>
        <section className="w-full">
          <div className="relative w-full h-[52vh] md:h-[64vh] overflow-hidden">
            <ImageBlock src={project.image} alt={project.title} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <div className="text-sm text-gray-200 mt-2">{project.tags.join(' · ')}</div>
            </div>
          </div>

          <div className="container mx-auto px-6 md:px-12 py-16 space-y-12">
            <article className="case-section card p-6">\n              <div className="mb-4 text-sm text-gray-400">Timeline</div>\n              <div className="flex gap-2 text-sm text-gray-300 mb-4"><div className="px-2 py-1 bg-neutral-800 rounded">Research</div><div className="px-2 py-1 bg-neutral-800 rounded">Prototype</div><div className="px-2 py-1 bg-neutral-800 rounded">Delivery</div></div>
              <h3 className="text-2xl font-bold mb-3">Problem</h3>
              <p className="text-gray-300">{project.description} — the challenge was to deliver clarity and performance at scale.</p>
            </article>

            <article className="case-section card p-6">\n              <div className="mb-4 text-sm text-gray-400">Timeline</div>\n              <div className="flex gap-2 text-sm text-gray-300 mb-4"><div className="px-2 py-1 bg-neutral-800 rounded">Research</div><div className="px-2 py-1 bg-neutral-800 rounded">Prototype</div><div className="px-2 py-1 bg-neutral-800 rounded">Delivery</div></div>
              <h3 className="text-2xl font-bold mb-3">Process</h3>
              <p className="text-gray-300">Research, rapid prototyping, motion system creation, and iterative testing with users to ensure accessibility.</p>
            </article>

            <article className="case-section card p-6">\n              <div className="mb-4 text-sm text-gray-400">Timeline</div>\n              <div className="flex gap-2 text-sm text-gray-300 mb-4"><div className="px-2 py-1 bg-neutral-800 rounded">Research</div><div className="px-2 py-1 bg-neutral-800 rounded">Prototype</div><div className="px-2 py-1 bg-neutral-800 rounded">Delivery</div></div>
              <h3 className="text-2xl font-bold mb-3">Solution</h3>
              <p className="text-gray-300">A tokenized motion system, progressive loading of assets, and a small interactive demo embedded in the page.</p>
            </article>
          </div>
        </section>
      </PageTransition>
    </main>
  )
}
