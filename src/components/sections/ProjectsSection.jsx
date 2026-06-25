import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { projects } from '../../data/projects.js'
import SectionIntro from '../ui/SectionIntro.jsx'

function ProjectPreview({ project }) {
  return (
    <div
      className="project-preview"
      style={{
        '--project-image-fit': project.imageFit || 'cover',
        '--project-image-position': project.imagePosition || 'center top',
      }}
    >
      <img src={project.image} alt={project.imageAlt} loading={project.featured ? 'eager' : 'lazy'} />
    </div>
  )
}

function ProjectsSection() {
  const featuredProject = projects.find((project) => project.featured)
  const secondaryProjects = projects.filter((project) => !project.featured)

  return (
    <section className="section-shell section-divider" id="projects">
      <SectionIntro
        eyebrow="Portfolio"
        title="Proyectos destacados"
        description="Estos proyectos muestran practica real de frontend, despliegue, diseno de interfaces y construccion orientada a producto."
      />

      {featuredProject && (
        <article className="featured-project">
          <ProjectPreview project={featuredProject} />
          <div className="project-content">
            <p className="eyebrow">{featuredProject.category}</p>
            <h3>{featuredProject.name}</h3>
            <p>{featuredProject.description}</p>
            <div className="tag-list">
              {featuredProject.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a className="text-link" href={featuredProject.url} target="_blank" rel="noreferrer">
              Ver proyecto en vivo
              <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
          </div>
        </article>
      )}

      <div className="project-grid">
        {secondaryProjects.map((project) => (
          <article className="project-card" key={project.name}>
            <ProjectPreview project={project} />
            <div>
              <p className="eyebrow">{project.category}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-card-footer">
              <div className="tag-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                Abrir
                <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
