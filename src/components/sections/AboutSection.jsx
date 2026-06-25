function AboutSection() {
  return (
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
          Estoy construyendo mi camino como desarrollador full stack creando proyectos reales,
          publicandolos y mejorandolos con criterio tecnico. Mi objetivo es dominar frontend,
          backend, base de datos, seguridad y experiencia de usuario para resolver problemas
          completos.
        </p>
        <p>
          Me interesa especialmente transformar ideas en MVPs funcionales: interfaces claras,
          arquitectura simple, datos bien modelados y una experiencia pensada para usuarios reales.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
