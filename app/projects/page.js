'use client';
import PageTransition from '../../components/PageTransition';
import projects from '../../data/projects';

export default function Projects(){
  return (
    <main className="pt-28">
      <PageTransition>
        <section className="container mx-auto px-6 md:px-12 py-16">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map(p => (
              <article key={p.id} className="card">
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-400 mt-2">{p.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <a href={p.link} className="text-sm text-gray-300">Open →</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </PageTransition>
    </main>
