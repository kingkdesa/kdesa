"use client"

import projects from "@/data/projects"
import PageTransition from "@/components/PageTransition"
import Link from "next/link"

export default function Home() {
  return (
    <PageTransition>
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-6xl font-extrabold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Welcome to KDESA
        </h1>
        <p className="text-center text-lg text-gray-300 mb-16">
          Building futuristic web experiences with design, performance, and motion in mind.
        </p>

        <section>
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="p-6 rounded-2xl border border-white/10 hover:border-purple-500 transition group bg-gradient-to-br from-white/5 to-white/0"
              >
                <h3 className="text-xl font-semibold group-hover:text-purple-400">
                  {p.title}
                </h3>
                <p className="text-gray-400 mt-2">{p.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
