import "./styles/Career.css";
import { profile } from "../data/profile";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> activities
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {profile.education.map((item) => (
            <div className="career-info-box" key={item.title}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.title}</h4>
                  <h5>{item.organization}</h5>
                </div>
                <h3>{item.meta}</h3>
              </div>
              <p>{item.details.join(" • ")}</p>
            </div>
          ))}
          {profile.activities.map((item) => (
            <div className="career-info-box" key={item.title}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.title}</h4>
                  <h5>{item.organization}</h5>
                </div>
                <h3>{item.meta}</h3>
              </div>
              <p>{item.details.join(" • ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
