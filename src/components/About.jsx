export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">
          I am a Master’s student in Data Analytics at Northeastern University with hands-on experience
          in data analysis, predictive modeling, and data visualization.
        </p>

        <div className="grid grid-2">
          <div className="card">
            <h3>What I Do</h3>
            <p>
              I work across the full data lifecycle — data cleaning, exploratory analysis,
              machine learning, and dashboard development — to turn raw data into insights.
            </p>
          </div>

          <div className="card">
            <h3>What I’m Looking For</h3>
            <p>
              Data Analyst and Data Scientist internships or entry-level roles where I can
              contribute using analytics, ML, and business storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
