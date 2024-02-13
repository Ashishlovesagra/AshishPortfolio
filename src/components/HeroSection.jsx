import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGit } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from '../assets/Portfolio.png';

function HeroSection() {
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
      <div className="hero-section section-dark-blue-bg">
        <div className="hero-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7">
                <div className="hero-content">
                  <h3 className="title-big">Hello! I’m</h3>
                  <h2 className="title-large">
                    Ashish <span className="shape-mark">Singh</span>
                  </h2>
                  <p>
                    MERN stack developer proficient in MongoDB, Express.js,
                    React.js, and Node.js, crafting seamless and efficient web
                    applications.
                  </p>
                  <Link
                    onClick={handleDownload}
                    className="btn btn-xl btn-outline-one icon-space-left"
                  >
                    Get Resume <FaDownload />
                  </Link>
                  {/* <div className="video-link">
                    <Link
                      className="wave-btn vbox-item"
                      to=""
                      data-autoplay="true"
                      data-vbtype="video"
                    >
                      <div className="ripple">
                        <FaPlay />
                      </div>
                    </Link>
                    <span className="video-text"> Watch Video</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="hero-shape hero-top-shape">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-shape hero-bottom-shape">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-portrait">
            <div className="image">
              <img
                className="img-fluid"
                src={Portfolio}
                alt="developer"
              />
              <div className="image-half-round-shape" />
              <div className="social-link">
                <Link
                  to="https://www.linkedin.com/in/ashish-singh-10sep"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to="https://www.instagram.com/singh.ashish1009?igsh=MXN6b21hMG00MWc4Ng=="
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
                <Link to="https://twitter.com/SinghAshish009" target="_blank">
                  <FaTwitter />
                </Link>
                <Link to="https://github.com/Ashishlovesagra" target="_blank">
                  <FaGit />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
