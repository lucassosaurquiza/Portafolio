import { useState } from 'react'

const navItems = [
  { label: 'Inicio', href: '#home' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Sobre mi', href: '#about' },
  { label: 'Contacto', href: '#contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegacion principal">
        <a className="brand" href="#home" onClick={closeMenu}>
          LUCAS
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-links ${isMenuOpen ? 'nav-links--open' : ''}`}>
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Trabajemos
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
