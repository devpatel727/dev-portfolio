import resumePdf from "../assets/Dev_Patel_Resume.pdf";

export default function Home() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-card">
          <span className="kicker">
            Data Analytics • Machine Learning • Dashboards
          </span>

          <h1>
            Hi, I’m <span className="gradient-text">Dev Patel</span> 👋
          </h1>

          <p>
            Master’s student in Data Analytics at Northeastern University.
            I build data-driven solutions using Python, SQL, ML, and BI dashboards.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn" href={resumePdf} download>
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="mini-card">
            <h3>Current Focus</h3>
            <p>Data science internships, analytics projects, ML modeling.</p>
          </div>

          <div className="mini-card">
            <h3>Tools</h3>
            <p>Python • SQL • Tableau • Power BI • ML</p>
          </div>

          <div className="mini-card">
            <h3>Location</h3>
            <p>Boston, MA • Open to Relocate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
