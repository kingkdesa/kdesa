'use client';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
export default function Footer(){ 
  return (
    <footer className="mt-24 py-12 border-t border-white/6">
      <div className="container flex items-center justify-between">
        <div className="text-sm text-gray-400">© {new Date().getFullYear()} kdesa — handcrafted.</div>
        <div className="flex gap-4 text-gray-300">
          <a href="#" aria-label="github"><FiGithub /></a>
          <a href="#" aria-label="linkedin"><FiLinkedin /></a>
          <a href="#" aria-label="email"><FiMail /></a>
        </div>
      </div>
    </footer>
  )
}
