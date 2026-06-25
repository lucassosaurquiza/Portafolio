import { FaArrowRight, FaEnvelope } from 'react-icons/fa6'

function HeroSection() {
  return (
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
            Soy Lucas Sosa Urquiza. Construyo productos digitales completos, desde la interfaz hasta
            la logica backend, con foco en claridad, rendimiento y valor real para el negocio.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#projects">
              Ver proyectos
              <FaArrowRight aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="#contact">
              <FaEnvelope aria-hidden="true" />
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
  )
}

export default HeroSection
