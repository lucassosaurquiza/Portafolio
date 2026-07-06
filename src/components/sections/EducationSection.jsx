import { certificatesByCategory } from '../../data/certificates.js'
import CertificateCard from '../ui/CertificateCard.jsx'
import SectionIntro from '../ui/SectionIntro.jsx'

function EducationSection() {
  return (
    <section className="section-shell section-divider education-section" id="education">
      <SectionIntro
        eyebrow="Formacion"
        title="Estudios y certificaciones"
        description="Combino formacion academica con aprendizaje continuo en programacion, diseño digital y producto. Esta seleccion muestra los certificados mas relevantes para mi perfil full stack."
      />

      <div className="education-summary">
        <article>
          <span>Academica</span>
          <h3>Licenciatura en Sistemas</h3>
          <p>
            Actualmente en curso. Base formal para profundizar en programacion, arquitectura,
            bases de datos e ingenieria de software.
          </p>
        </article>
        <article>
          <span>Formacion continua</span>
          <h3>Platzi</h3>
          <p>
            39 certificados completados. En esta seccion destaco los mas alineados al portfolio y
            al perfil full stack.
          </p>
        </article>
      </div>

      <div className="certificate-groups">
        {certificatesByCategory.map((group) => (
          <section className="certificate-group" key={group.category} aria-labelledby={`cert-${group.category}`}>
            <div className="certificate-group-header">
              <div>
                <p className="eyebrow">Certificaciones</p>
                <h3 id={`cert-${group.category}`}>{group.category}</h3>
              </div>
              <p>{group.description}</p>
            </div>

            <div className="certificate-grid">
              {group.certificates.map((certificate) => (
                <CertificateCard certificate={certificate} key={certificate.file} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export default EducationSection
