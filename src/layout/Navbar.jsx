import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>Delancey Finney</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/community">Community Organizing</Link>
        <Link to="/training">Training</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;