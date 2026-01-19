export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="brand">
          <span className="brand-dot"></span>
          Dev Patel
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-cta">
          <a className="btn" href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}
