import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'\nimport AnimatedCursor from '../components/AnimatedCursor'\nimport CommandPalette from '../components/CommandPalette'\nimport ThemeToggle from '../components/ThemeToggle'\nimport PageOverlay from '../components/PageOverlay'

export const metadata = {
  title: 'Kdesa — Ultra Portfolio v3',
  description: 'Kdesa — ultra high-fidelity portfolio inspired by top design sites. v3',
  openGraph: {
    title: 'Kdesa — Portfolio',
    description: 'Motion-first portfolio — Kdesa',
    images: ['/og1.png']
  },
  themeColor: '#060607'
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <head>\n    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Clash+Display:wght@600;700;900&display=swap" rel="stylesheet">\n        <link rel="preconnect" href="https://fonts.googleapis.com" />\n        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
        <meta name="theme-color" content="#060607" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <AnimatedCursor />\n        <CommandPalette />\n        <ThemeToggle />
        <Navbar />\n        <PageOverlay />\n        
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
