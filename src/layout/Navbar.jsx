import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          Delancey Finney
        </Link>

        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/community">
            Community
          </NavLink>
          <NavLink to="/training">
            Training
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;