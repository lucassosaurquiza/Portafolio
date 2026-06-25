import { stackGroups } from '../../data/stack.js'
import SectionIntro from '../ui/SectionIntro.jsx'
import TechIcon from '../ui/TechIcon.jsx'

function StackSection() {
  return (
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
  )
}

export default StackSection
