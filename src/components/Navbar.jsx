import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-dot"></span>
          Dev Patel
        </Link>

        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="nav-cta">
          <Link className="btn" to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
