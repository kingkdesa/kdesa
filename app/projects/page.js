import PageTransition from "@/components/PageTransition"
import ImageBlock from "@/components/ImageBlock" // make sure this file exists

export default function Projects() {
  const projects = [
    {
      title: "Nebula UI — Motion system",
      slug: "nebula-ui",
      description: "Experimental UI kit with smooth motion design",
      image: "/projects/nebula-ui.png",
    },
    {
      title: "KDESA Landing",
      slug: "kdesa-landing",
      description: "Landing page with 3D hero and parallax scrolling",
      image: "/projects/kdesa-landing.png",
    },
  ]

  return (
    <main>
      <PageTransition>
        <section className="container mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-12">Projects</h1>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <ImageBlock key={i} project={project} />
            ))}
          </div>
        </section>
      </PageTransition>
    </main>
  )
}
