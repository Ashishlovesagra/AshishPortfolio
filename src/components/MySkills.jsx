import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";


function MySkills() {
  const handleDownload = () => {
    // Replace 'your-pdf-url.pdf' with the actual URL of your PDF file
    const pdfUrl = "https://drive.google.com/file/d/1a-I4U1rFzeL8-vTFk8nedLGRmZGAkR1X/view?usp=sharing";
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="skill-display-section section-gap-tb-165 section-bg pos-relative">
        <div className="skill-display-section-box">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-xxl-5">
                {/* Start Section Content */}
                <div className="section-content">
                  <span className="section-tag">Special Skills</span>
                  <h2 className="section-title">
                    My Special Skill Field Here.
                  </h2>
                  <Link
                    onClick={handleDownload}
                    className="btn btn-xl btn-outline-one icon-space-left"
                  >
                    Get Resume <FaDownload />
                  </Link>
                </div>
                {/* End Section Content */}
              </div>
              <div className="col-xl-6 col-xxl-6 offset-xxl-1">
                {/* Start Skill Display Wrapper */}
                <div className="skill-display-wrapper">
                  {/* Start Skill Progress Single Item */}
                  <div className="skill-progress-single-item">
                    <span className="tag">Communication</span>
                    <div className="skill-box">
                      <div
                        className="progress-line"
                        data-width={75}
                        style={{ width: "75%" }}
                      >
                        <span className="skill-percentage">75%</span>
                      </div>
                    </div>
                  </div>
                  {/* ENd Skill Progress Single Item */}
                  {/* Start Skill Progress Single Item */}
                  <div className="skill-progress-single-item">
                    <span className="tag">Leadership</span>
                    <div className="skill-box">
                      <div
                        className="progress-line"
                        data-width={70}
                        style={{ width: "70%" }}
                      >
                        <span className="skill-percentage">70%</span>
                      </div>
                    </div>
                  </div>
                  {/* ENd Skill Progress Single Item */}
                  {/* Start Skill Progress Single Item */}
                  <div className="skill-progress-single-item">
                    <span className="tag">Teamwork</span>
                    <div className="skill-box">
                      <div
                        className="progress-line"
                        data-width={90}
                        style={{ width: "90%" }}
                      >
                        <span className="skill-percentage">90%</span>
                      </div>
                    </div>
                  </div>
                  {/* ENd Skill Progress Single Item */}
                  {/* Start Skill Progress Single Item */}
                  <div className="skill-progress-single-item">
                    <span className="tag">Flexibility</span>
                    <div className="skill-box">
                      <div
                        className="progress-line"
                        data-width={90}
                        style={{ width: "90%" }}
                      >
                        <span className="skill-percentage">90%</span>
                      </div>
                    </div>
                  </div>
                  {/* ENd Skill Progress Single Item */}
                </div>
                {/* End Skill Display Wrapper */}
              </div>
            </div>
          </div>
        </div>
        <div className="skill-display-shape" />
      </div>
    </>
  );
}

export default MySkills;
