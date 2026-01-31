import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar__logo">Mesones de las croquetas</h2>

      <ul className="navbar__links">
        <li>
          <NavLink to="/" end>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/croquetas">
            Croquetas
          </NavLink>
        </li>
        <li>
          <NavLink to="/nueva">
            Nueva croqueta
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
