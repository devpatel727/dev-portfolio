export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Selected projects that highlight my analytics, machine learning, and dashboarding work.
        </p>

        <div className="grid grid-2">
          <div className="project-card">
            <h3>Customer KPI Analytics Project</h3>
            <p>
              Built ETL pipelines and feature-engineered datasets for KPI forecasting.
              Developed predictive models and Tableau dashboards to visualize trends and performance.
            </p>

            <div className="project-actions">
              <a className="link" href="#" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="link" href="#" target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Fake News Detection System</h3>
            <p>
              Developed Random Forest and BERT-based models for text classification.
              Built a dashboard to monitor misinformation trends and summarize insights.
            </p>

            <div className="project-actions">
              <a className="link" href="#" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="link" href="#" target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-2" style={{ marginTop: "16px" }}>
          <div className="project-card">
            <h3>Tableau Portfolio Dashboards</h3>
            <p>
              Created interactive dashboards for NYPD Arrest Data, NYC Motor Vehicle Collisions,
              Superstore Sales, and demographic analysis with a focus on KPI storytelling.
            </p>

            <div className="project-actions">
              <a className="link" href="#" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Data Preparation & Multi-Format Pipeline</h3>
            <p>
              Built reusable Python utilities to process CSV, Excel, JSON, SQLite, and HTML data,
              enabling consistent and automated data cleaning workflows.
            </p>

            <div className="project-actions">
              <a className="link" href="#" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
