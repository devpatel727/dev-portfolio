export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Where I’ve applied analytics and data science skills in real work.
        </p>

        <div className="timeline">
          <div className="card">
            <div className="role">
              <div>
                <h3>Data Scientist Intern — Singular™ (Remote)</h3>
                <p className="section-subtitle" style={{ margin: 0 }}>
                  Supported data preparation, exploratory analysis, and ML model evaluation.
                </p>
              </div>
              <div className="meta">Dec 2025 – Present</div>
            </div>

            <ul className="bullets">
              <li>Built and maintained datasets using Python and SQL for analytics and modeling.</li>
              <li>Assisted with feature engineering, model validation, and performance tracking.</li>
              <li>Prepared insights and visuals to support stakeholder decision-making.</li>
            </ul>
          </div>

          <div className="card">
            <div className="role">
              <div>
                <h3>Data Analyst — Sky Tech (Ahmedabad, India)</h3>
                <p className="section-subtitle" style={{ margin: 0 }}>
                  Delivered insights using optimized SQL, automation, and BI dashboards.
                </p>
              </div>
              <div className="meta">Jun 2023 – Jul 2024</div>
            </div>

            <ul className="bullets">
              <li>Designed and maintained 10+ Tableau/Power BI dashboards tracking 40+ KPIs.</li>
              <li>Optimized SQL queries and reporting workflows to speed up analysis.</li>
              <li>Automated data tasks using Python, improving efficiency and consistency.</li>
              <li>Worked in Agile delivery using JIRA and regular stakeholder updates.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
