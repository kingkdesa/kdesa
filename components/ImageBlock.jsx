"use client"

import Image from "next/image"

export default function ImageBlock({ src, alt, caption }) {
  return (
    <figure className="my-8">
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={src}
          alt={alt || "Project image"}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-center text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
