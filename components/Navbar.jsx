"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false)

  return (
    <header className="w-full border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          KDESA
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <button
            onClick={() => setMegaOpen(!megaOpen)}
            className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition"
          >
            Menu
          </button>
        </div>
      </nav>

      {megaOpen && (
        <div className="w-full bg-black/90 border-t border-white/10">
          <div className="container mx-auto px-6 py-6 grid md:grid-cols-3 gap-6">
            <div className="p-4">
              <h4 className="font-semibold mb-2">Featured</h4>
              <Link href="/projects/nebula-ui" className="block mb-1">
                Nebula UI — Motion system
              </Link>
              <Link href="/projects/kdesa-landing" className="block mb-1">
                KDESA Landing
              </Link>
            </div>

            <div className="p-4">
              <h4 className="font-semibold mb-2">Pages</h4>
              <Link href="/about" className="block mb-1">
                About
              </Link>
              <Link href="/projects" className="block mb-1">
                Projects
              </Link>
              <Link href="/contact" className="block mb-1">
                Contact
              </Link>
            </div>

            <div className="p-4">
              <h4 className="font-semibold mb-2">Connect</h4>
              <a
                href="https://github.com/kingkdesa"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-1"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-1"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
