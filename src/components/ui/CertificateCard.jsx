import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import TechIcon from './TechIcon.jsx'

function CertificateCard({ certificate }) {
  const preview = certificate.file.replace('/certificates/', '/certificates/previews/').replace('.pdf', '.png')

  return (
    <article className="certificate-card">
      <div className="certificate-visual">
        <div className="certificate-logo-panel" aria-hidden="true">
          <TechIcon name={certificate.icon} className="certificate-logo" />
          <span>{certificate.platform}</span>
        </div>
        <div className="certificate-preview">
          <img src={preview} alt={`Diploma de ${certificate.title}`} loading="lazy" />
        </div>
      </div>

      <div className="certificate-content">
        <h4>{certificate.title}</h4>
        <p>{certificate.platform}</p>
      </div>

      <div className="certificate-actions">
        <a href={certificate.file} target="_blank" rel="noreferrer">
          Ver diploma
          <FaArrowUpRightFromSquare aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export default CertificateCard
