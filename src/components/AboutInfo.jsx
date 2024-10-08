import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutInfo = () => {
  const handleDownload = () => {
    const pdfUrl = "https://drive.google.com/file/d/1fgqPvTX6tAlOwnAp-SdgdpJT97NrF9T_/view?usp=sharing";
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="video-info-display-section section-gap-tb-165">
      <div className="video-info-display-box">
        <div className="container">
          <div className="video-info-display-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-8 col-10 offset-1 offset-sm-2 offset-md-3 offset-lg-0">
                <div className="video-card">
                  <Link
                    onClick={handleDownload}
                    className="btn btn-xl btn-outline-one icon-space-left"
                  >
                    Download Resume <FaDownload />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-8 offset-md-2 offset-lg-0 offset-xl-1">
                <div className="video-info-content">
                  <h2 className="title">Hi, I&#39;m Ashish Singh</h2>
                  <h3 className="sub-title">Passionate Software Developer</h3>
                  <p>
                    As a dedicated Software Developer, I specialize in crafting high-quality web experiences. Holding a Bachelor&#39;s degree in Technology from FGIET, Raebareli (Class of 2022), I bring over 3 years of hands-on experience in web development, project management, and software design.
                    <br /><br />
                    My expertise spans a broad range of technologies and practices, including:
                  </p>
                  <ul>
                    <li><strong>Programming Languages:</strong> JavaScript (ES6+), TypeScript, HTML5, CSS3</li>
                    <li><strong>Frameworks & Libraries:</strong> React.js (v18.0+), React Native, Next.js, Redux, Styled Components, Material UI, Bootstrap</li>
                    <li><strong>Tools & Platforms:</strong> Git, Webpack, Babel, Vite, Jest, React Testing Library, Postman</li>
                    <li><strong>APIs & Integration:</strong> RESTful APIs, GraphQL, Axios, Fetch, WebSockets</li>
                    <li><strong>Backend Technologies:</strong> Node.js, Express.js, MongoDB, SQL</li>
                    <li><strong>Cloud Services:</strong> AWS</li>
                  </ul>
                  <br />
                  <p>
                    I am committed to translating complex ideas into intuitive and engaging web applications. My approach is centered around continuous learning and improvement, ensuring I stay at the forefront of technology. If you&#39;re looking for a driven professional to tackle challenging projects, let&#39;s connect!
                    <br /><br />
                    For collaboration or inquiries, feel free to explore my work and connect with me on 
                    <Link
                      className="btn btn-outline-one"
                      style={{ marginLeft: "5px" }}
                      to="https://github.com/Ashishlovesagra"
                      target="_blank"
                    >
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
  );
}

export default AboutInfo;
