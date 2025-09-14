import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AnimatedCursor from "@/components/AnimatedCursor"
import CommandPalette from "@/components/CommandPalette"
import ThemeToggle from "@/components/ThemeToggle"
import PageOverlay from "@/components/PageOverlay"

export const metadata = {
  title: "KDESA — Ultra Portfolio v5",
  description: "The most detailed and beautiful portfolio site ever built",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <AnimatedCursor />
        <CommandPalette />
        <PageOverlay />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
