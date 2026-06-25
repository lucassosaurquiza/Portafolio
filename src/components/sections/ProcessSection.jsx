import { processSteps } from '../../data/process.js'
import SectionIntro from '../ui/SectionIntro.jsx'

function ProcessSection() {
  return (
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
  )
}

export default ProcessSection
