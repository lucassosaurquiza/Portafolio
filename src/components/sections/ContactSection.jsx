import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa6'
import { SiGithub } from 'react-icons/si'
import { contactLinks } from '../../data/contact.js'

const contactIcons = {
  Email: FaEnvelope,
  GitHub: SiGithub,
  LinkedIn: FaLinkedinIn,
}

function ContactSection() {
  return (
    <section className="contact-section section-divider" id="contact">
      <div className="section-shell contact-layout">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Construyamos algo real.</h2>
          <p>
            Si queres hablar de un proyecto, una colaboracion o una oportunidad, estos son mis
            canales principales.
          </p>
        </div>

        <div className="contact-grid">
          {contactLinks.map((link) => {
            const Icon = contactIcons[link.label]

            return (
              <a className="contact-card" href={link.href} key={link.label} target="_blank" rel="noreferrer">
                <div className="contact-card-icon">{Icon && <Icon aria-hidden="true" />}</div>
                <div>
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
