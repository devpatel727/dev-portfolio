export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          A focused set of tools I use to analyze data, build models, and communicate insights.
        </p>

        <div className="grid grid-3">
          <div className="card">
            <h3>Languages</h3>
            <div className="badges">
              <span className="badge">Python</span>
              <span className="badge">SQL</span>
              <span className="badge">R</span>
              <span className="badge">Java</span>
            </div>
          </div>

          <div className="card">
            <h3>Analytics & ML</h3>
            <div className="badges">
              <span className="badge">Pandas</span>
              <span className="badge">NumPy</span>
              <span className="badge">EDA</span>
              <span className="badge">Feature Engineering</span>
              <span className="badge">Model Evaluation</span>
              <span className="badge">Machine Learning</span>
            </div>
          </div>

          <div className="card">
            <h3>BI & Tools</h3>
            <div className="badges">
              <span className="badge">Tableau</span>
              <span className="badge">Power BI</span>
              <span className="badge">Excel</span>
              <span className="badge">JIRA</span>
              <span className="badge">Agile</span>
            </div>
          </div>
        </div>

        <div className="grid grid-2" style={{ marginTop: "16px" }}>
          <div className="card">
            <h3>Databases</h3>
            <div className="badges">
              <span className="badge">MySQL</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge">SQL Server</span>
              <span className="badge">MongoDB</span>
              <span className="badge">Snowflake</span>
            </div>
          </div>

          <div className="card">
            <h3>Other</h3>
            <div className="badges">
              <span className="badge">Data Cleaning</span>
              <span className="badge">Dashboards</span>
              <span className="badge">Reporting</span>
              <span className="badge">Stakeholder Communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
