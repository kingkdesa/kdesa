"use client"

import projects from "@/data/projects"
import PageTransition from "@/components/PageTransition"
import Link from "next/link"

export default function Projects() {
  return (
    <PageTransition>
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-12">All Projects</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/projects/${p.id}`}
              className="block p-6 border border-white/10 rounded-2xl hover:border-pink-500 transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-400">{p.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </PageTransition>
  )
}
