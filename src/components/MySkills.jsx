import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

function MySkills() {
  const handleDownload = () => {
    const pdfUrl = "https://drive.google.com/file/d/1O0dkSkK2RVlGbxim6e8Fa-lk10CvpYF0/view?usp=sharing";
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { tag: "Communication", percentage: 75 },
    { tag: "Leadership", percentage: 70 },
    { tag: "Teamwork", percentage: 90 },
    { tag: "Flexibility", percentage: 90 },
  ];

  return (
    <div className="skill-display-section section-gap-tb-165 section-bg pos-relative">
      <div className="skill-display-section-box">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-xxl-5">
              <div className="section-content">
                <span className="section-tag">Special Skills</span>
                <h2 className="section-title">My Special Skill Field Here.</h2>
                <Link
                  onClick={handleDownload}
                  className="btn btn-xl btn-outline-one icon-space-left"
                >
                  Get Resume <FaDownload />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-xxl-6 offset-xxl-1">
              <div className="skill-display-wrapper">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-progress-single-item">
                    <span className="tag">{skill.tag}</span>
                    <div className="skill-box">
                      <div
                        className="progress-line"
                        data-width={skill.percentage}
                        style={{ width: `${skill.percentage}%` }}
                      >
                        <span className="skill-percentage">{skill.percentage}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skill-display-shape" />
    </div>
  );
}

export default MySkills;
