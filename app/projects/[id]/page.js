import PageTransition from "@/components/PageTransition"
import ImageBlock from "@/components/ImageBlock"
import projects from "@/data/projects"

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.id)

  if (!project) {
    return (
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </main>
    )
  }

  return (
    <main>
      <PageTransition>
        <section className="container mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <p className="text-lg text-gray-300 mb-10">{project.description}</p>

          <ImageBlock project={project} detailed />
        </section>
      </PageTransition>
    </main>
  )
}
