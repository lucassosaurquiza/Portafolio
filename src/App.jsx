import './App.css'
import Header from './components/header.jsx'

const projects = [
  {
    name: 'MedSync',
    category: 'HealthTech / Gestion medica',
    description:
      'Sistema web para gestion de turnos, pacientes y organizacion operativa de una clinica. El foco del proyecto esta en claridad, rapidez de uso y una experiencia profesional.',
    stack: ['React', 'Vite', 'UI Responsive'],
    url: 'https://medsync-blond.vercel.app/',
    image: '/projects/medsync-preview.png',
    imageAlt: 'Hero de MedSync con propuesta de gestion de turnos y consultorio digital',
    featured: true,
  },
  {
    name: 'Obxel',
    category: 'Sitio web / Producto digital',
    description:
      'Landing moderna orientada a presentar una marca digital con buena jerarquia visual, secciones claras y foco en conversion.',
    stack: ['React', 'CSS', 'Vercel'],
    url: 'https://obxel.vercel.app/',
    image: '/projects/obxel-preview.png',
    imageAlt: 'Pagina principal de Obxel con hero de consultoria tecnologica y software destacado',
  },
  {
    name: 'Exporting Experts',
    category: 'Landing page / Negocio',
    description:
      'Pagina empresarial pensada para comunicar servicios, generar confianza y convertir visitas en contactos comerciales.',
    stack: ['React', 'UX/UI', 'Responsive'],
    url: 'https://landing-empresarial-nicolas.vercel.app/',
    image: '/projects/landing-empresarial-preview.png',
    imageAlt: 'Landing de Exporting Experts con propuesta para conseguir trabajo remoto en el extranjero',
  },
]

const stackGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML semantico', icon: 'html' },
      { name: 'CSS responsive', icon: 'css' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: 'node' },
      { name: 'Express', icon: 'express' },
      { name: 'APIs REST', icon: 'api' },
      { name: 'JWT', icon: 'jwt' },
    ],
  },
  {
    title: 'Base de datos',
    items: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Modelado relacional', icon: 'schema' },
      { name: 'Consultas SQL', icon: 'sql' },
      { name: 'Validaciones', icon: 'check' },
    ],
  },
  {
    title: 'Producto',
    items: [
      { name: 'UX/UI', icon: 'design' },
      { name: 'Landing pages', icon: 'landing' },
      { name: 'Conversion', icon: 'conversion' },
      { name: 'Deploy en Vercel', icon: 'vercel' },
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description:
      'Entender el problema, el usuario y el objetivo del negocio antes de escribir codigo.',
  },
  {
    number: '02',
    title: 'Arquitectura',
    description:
      'Definir estructura, datos, componentes y flujo principal para evitar deuda tecnica temprana.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    description:
      'Construir interfaces limpias, logica mantenible y una base preparada para crecer.',
  },
  {
    number: '04',
    title: 'Lanzamiento',
    description:
      'Publicar, medir, corregir y mejorar el producto segun uso real y objetivos concretos.',
  },
]

const contactLinks = [
  {
    label: 'Email',
    value: 'lucassosaurquiza97@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=lucassosaurquiza97@gmail.com&su=Consulta%20desde%20tu%20portfolio',
  },
  {
    label: 'GitHub',
    value: 'lucassosaurquiza',
    href: 'https://github.com/lucassosaurquiza',
  },
  {
    label: 'LinkedIn',
    value: 'Lucas Sosa Urquiza',
    href: 'https://www.linkedin.com/in/lucas-sosa-urquiza/',
  },
]

function ProjectPreview({ project }) {
  return (
    <div className="project-preview">
      <img src={project.image} alt={project.imageAlt} loading={project.featured ? 'eager' : 'lazy'} />
    </div>
  )
}

function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function TechIcon({ name }) {
  const icons = {
    react: (
      <>
        <ellipse cx="24" cy="24" rx="18" ry="7" />
        <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(120 24 24)" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </>
    ),
    javascript: (
      <>
        <rect x="9" y="9" width="30" height="30" rx="3" />
        <path d="M19 30c0 3-1.6 4.5-4.4 4.5-1.4 0-2.5-.4-3.4-1.2" />
        <path d="M25.5 33.2c1 .9 2.3 1.3 3.9 1.3 2.2 0 3.6-1 3.6-2.6 0-1.5-.9-2.1-3.4-2.8-2.4-.7-4.1-1.7-4.1-4.1 0-2.6 2.2-4.3 5.1-4.3 1.8 0 3.2.4 4.3 1.4" />
      </>
    ),
    html: (
      <>
        <path d="M12 8h24l-2.2 26.8L24 40l-9.8-5.2L12 8Z" />
        <path d="M18 15h12M18.8 21h10.4l-.7 8.3L24 31.7l-4.5-2.4" />
      </>
    ),
    css: (
      <>
        <path d="M12 8h24l-2.2 26.8L24 40l-9.8-5.2L12 8Z" />
        <path d="M18 15h12l-1 6H19l.7 5h8.5l-.6 3.4L24 31.7l-3.8-2" />
      </>
    ),
    node: (
      <>
        <path d="M24 6 39 14.7v18.6L24 42 9 33.3V14.7L24 6Z" />
        <path d="M17 29V19l7 10V19M31 19v10" />
      </>
    ),
    express: (
      <>
        <path d="M8 24h32" />
        <path d="M13 17h13M13 31h13" />
        <path d="m30 17 10 14M40 17 30 31" />
      </>
    ),
    api: (
      <>
        <path d="M17 14 8 24l9 10" />
        <path d="m31 14 9 10-9 10" />
        <path d="m27 10-6 28" />
      </>
    ),
    jwt: (
      <>
        <circle cx="24" cy="24" r="15" />
        <path d="M24 9v9M24 30v9M9 24h9M30 24h9M14 14l6.5 6.5M27.5 27.5 34 34M34 14l-6.5 6.5M20.5 27.5 14 34" />
      </>
    ),
    mysql: (
      <>
        <ellipse cx="24" cy="13" rx="14" ry="6" />
        <path d="M10 13v19c0 3.3 6.3 6 14 6s14-2.7 14-6V13" />
        <path d="M10 22c0 3.3 6.3 6 14 6s14-2.7 14-6" />
      </>
    ),
    schema: (
      <>
        <rect x="9" y="9" width="10" height="10" rx="2" />
        <rect x="29" y="9" width="10" height="10" rx="2" />
        <rect x="19" y="29" width="10" height="10" rx="2" />
        <path d="M19 14h10M24 19v10" />
      </>
    ),
    sql: (
      <>
        <rect x="8" y="10" width="32" height="28" rx="3" />
        <path d="M14 18h20M14 24h10M14 30h16" />
      </>
    ),
    check: (
      <>
        <circle cx="24" cy="24" r="15" />
        <path d="m16 24 5 5 11-12" />
      </>
    ),
    design: (
      <>
        <rect x="8" y="10" width="32" height="28" rx="3" />
        <path d="M8 19h32M18 19v19M24 28h10" />
      </>
    ),
    landing: (
      <>
        <rect x="10" y="8" width="28" height="32" rx="3" />
        <path d="M15 16h18M15 23h12M15 31h18" />
      </>
    ),
    conversion: (
      <>
        <path d="M10 31h12c7 0 12-5 12-12v-5" />
        <path d="m28 14 6-6 6 6" />
        <path d="M10 38h28" />
      </>
    ),
    vercel: <path d="M24 10 41 39H7L24 10Z" fill="currentColor" />,
  }

  return (
    <svg className={`tech-icon tech-icon--${name}`} viewBox="0 0 48 48" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

function App() {
  const featuredProject = projects.find((project) => project.featured)
  const secondaryProjects = projects.filter((project) => !project.featured)

  return (
    <>
      <Header />

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="availability">
                <span />
                Disponible para nuevos proyectos
              </p>
              <h1 className="hero-title" aria-label="Full Stack Developer and Product Builder">
                <span className="title-gradient title-gradient--medsync">Full Stack</span>
                <span className="title-gradient title-gradient--obxel">Developer</span>
                <span className="title-gradient title-gradient--product">& Product Builder</span>
              </h1>
              <p className="hero-lead">
                Soy Lucas Sosa Urquiza. Construyo productos digitales completos,
                desde la interfaz hasta la logica backend, con foco en claridad,
                rendimiento y valor real para el negocio.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#projects">
                  Ver proyectos
                  <span aria-hidden="true">-&gt;</span>
                </a>
                <a className="button button--secondary" href="#contact">
                  Contactarme
                </a>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Resumen profesional">
              <div className="panel-row">
                <span>Perfil</span>
                <strong>Full Stack</strong>
              </div>
              <div className="panel-row">
                <span>Base</span>
                <strong>React + Node</strong>
              </div>
              <div className="panel-row">
                <span>Enfoque</span>
                <strong>Producto digital</strong>
              </div>
              <div className="metric-grid">
                <div>
                  <strong>3</strong>
                  <span>Proyectos online</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Deploy real</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-shell section-divider" id="projects">
          <SectionIntro
            eyebrow="Portfolio"
            title="Proyectos destacados"
            description="Estos proyectos muestran practica real de frontend, despliegue, diseño de interfaces y construccion orientada a producto."
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
                  <span aria-hidden="true">-&gt;</span>
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
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-divider" id="stack">
          <SectionIntro
            eyebrow="Stack"
            title="Tecnologias y criterio tecnico"
            description="La herramienta importa, pero mas importa saber por que usarla, como ordenarla y como mantenerla cuando el proyecto crece."
          />

          <div className="stack-grid">
            {stackGroups.map((group) => (
              <article className="stack-column" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <TechIcon name={item.icon} />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section section-divider">
          <div className="section-shell">
            <SectionIntro
              eyebrow="Proceso"
              title="Como convierto una idea en producto"
              description="Un buen desarrollo no empieza en el editor. Empieza entendiendo que problema hay que resolver y que version minima puede validar valor."
            />

            <div className="process-grid">
              {processSteps.map((step) => (
                <article className="process-step" key={step.number}>
                  <strong>{step.number}</strong>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell section-divider about-section" id="about">
          <div className="about-visual">
            <div className="portrait-frame">
              <img src="/profile/lucas-profile.jpg" alt="Retrato profesional de Lucas Sosa Urquiza" />
            </div>
          </div>

          <div className="about-content">
            <p className="eyebrow">Sobre mi</p>
            <h2>Desarrollo con mentalidad de producto, no solo de codigo.</h2>
            <p>
              Estoy construyendo mi camino como desarrollador full stack creando
              proyectos reales, publicandolos y mejorandolos con criterio tecnico.
              Mi objetivo es dominar frontend, backend, base de datos, seguridad y
              experiencia de usuario para resolver problemas completos.
            </p>
            <p>
              Me interesa especialmente transformar ideas en MVPs funcionales:
              interfaces claras, arquitectura simple, datos bien modelados y una
              experiencia pensada para usuarios reales.
            </p>
          </div>
        </section>

        <section className="contact-section section-divider" id="contact">
          <div className="section-shell contact-layout">
            <div>
              <p className="eyebrow">Contacto</p>
              <h2>Construyamos algo real.</h2>
              <p>
                Si queres hablar de un proyecto, una colaboracion o una oportunidad,
                estos son mis canales principales.
              </p>
            </div>

            <div className="contact-grid">
              {contactLinks.map((link) => (
                <a className="contact-card" href={link.href} key={link.label} target="_blank" rel="noreferrer">
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <span>Lucas Sosa Urquiza</span>
          <span>Portfolio Full Stack Developer</span>
        </div>
      </footer>
    </>
  )
}

export default App
