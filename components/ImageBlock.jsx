"use client"

import Image from "next/image"
import Link from "next/link"

export default function ImageBlock({ project, detailed }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={500}
        className="w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        {!detailed && (
          <Link
            href={`/projects/${project.slug}`}
            className="text-primary-400 hover:underline"
          >
            View project →
          </Link>
        )}
      </div>
    </div>
  )
}
