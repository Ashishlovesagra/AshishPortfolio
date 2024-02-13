import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutInfo() {
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
      <div className="video-info-display-section section-gap-tb-165">
        <div className="video-info-display-box">
          <div className="container">
            <div className="video-info-display-wrapper">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-8 col-10 offset-1 offset-sm-2 offset-md-3 offset-lg-0">
                  <div className="video-card">
                    {/* <Link
                      className="wave-btn vbox-item"
                      to="/"
                      data-autoplay="true"
                      data-vbtype="video"
                    >
                      <div className="ripple">
                        <FaPlay />
                      </div>
                    </Link> */}
                    <Link
                      onClick={handleDownload}
                      className="btn btn-xl btn-outline-one icon-space-left"
                    >
                      Get Resume <FaDownload />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-8 offset-md-2 offset-lg-0 offset-xl-1">
                  <div className="video-info-content">
                    <h2 className="title">I’m Ashish Singh</h2>
                    <h3 className="sub-title">Software Developer</h3>
                    <p>
                      A results-driven Software Developer with a passion for
                      creating exceptional web experiences. With a Bachelor's
                      degree in Technology from FGIET, Raebareli (Class of
                      2022), I've spent the last 3+ years immersed in the world
                      of Web Development, Project Management, Designing, and
                      Coding. As a professional, I've honed my skills in React
                      JS, JavaScript, and ES6+. I thrive on translating ideas
                      into interactive and user-friendly web applications. My
                      expertise extends to: In-depth knowledge of React and its
                      ecosystem (Redux, React Router, etc.).
                      <br /> Server-side development using Node.js and
                      Express.js. Understanding of NoSQL databases, particularly
                      MongoDB. Knowledge of RESTful API design and
                      implementation. Version control using Git. Familiarity
                      with build tools and package managers (Webpack, npm,
                      etc.). Basic understanding of web security and best
                      practices. Knowledge of deployment and hosting processes.
                      I'm on a continuous journey of learning and growth, and
                      I'm passionate about tackling complex challenges in the
                      digital space. Let's connect and explore new opportunities
                      together! Feel free to reach out to me for exciting
                      collaborations, discussions, or opportunities. <br />
                      <Link
                        className="btn btn-outline-one"
                        style={{ marginTop: "15px" }}
                        to="https://github.com/Ashishlovesagra"
                        target="_blank"
                      >
                        {" "}
                        GitHub
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutInfo;
