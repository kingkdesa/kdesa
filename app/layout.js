import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedCursor from '../components/AnimatedCursor'
import CommandPalette from '../components/CommandPalette'
import ThemeToggle from '../components/ThemeToggle'
import PageOverlay from '../components/PageOverlay'

export const metadata = {
  title: 'Kdesa — Ultra Portfolio v5',
  description: 'The most aesthetic, interactive portfolio for Kdesa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageOverlay />
        <AnimatedCursor />
        <CommandPalette />
        <ThemeToggle />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
