import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Started My 3D Journey</h4>
                <h5>Learning</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Began learning 3D and developing self-initiated projects, 
              focusing on realism, lighting, and visual storytelling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior 3D Artist</h4>
                <h5>3D Artist & Freelance Work</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked professionally as a senior 3D artist in a company while delivering 
              freelance projects for international clients (US & UK), specializing 
              in product visualization and storytelling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder — Cosmos Visual Studios</h4>
                <h5>Leading</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading my own creative studio, producing high-end product visuals, 
              CGI, and brand-focused content that helps businesses present their ideas 
              with clarity and realism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
