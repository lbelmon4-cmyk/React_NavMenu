import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">NavMenu</div>
        <ul className="navbar-menu">
          <li>
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Inici
            </Link>
          </li>
          <li>
            <Link
              to="/quisom"
              className={`nav-link ${isActive('/quisom') ? 'active' : ''}`}
            >
              Qui som
            </Link>
          </li>
          <li>
            <Link
              to="/contacte"
              className={`nav-link ${isActive('/contacte') ? 'active' : ''}`}
            >
              Formulari
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
