"use client"

import { useParams } from "next/navigation"
import projects from "@/data/projects"
import PageTransition from "@/components/PageTransition"
import ImageBlock from "@/components/ImageBlock"

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </main>
    )
  }

  return (
    <PageTransition>
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-600/20 border border-purple-600/40 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.images.map((img, i) => (
          <ImageBlock key={i} src={img.src} alt={project.title} caption={img.caption} />
        ))}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            View Project →
          </a>
        )}
      </main>
    </PageTransition>
  )
}
