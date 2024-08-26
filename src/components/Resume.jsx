import { useState } from "react";

function Resume() {
  // Consolidated state object
  const [contentVisibility, setContentVisibility] = useState({
    showFullContent1: false,
    showFullContent2: false,
    showFullContent3: false,
  });

  // Content Definitions
  const content1 = `Gained comprehensive hands-on experience in developing dynamic web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Demonstrated proficiency in building scalable APIs, designing efficient database schemas, and implementing responsive user interfaces. Acquired essential skills in both frontend and backend technologies, enabling the creation of robust and scalable applications.`;
  const truncatedContent1 = `${content1.slice(0, 225)}...`;

  const content2 = `As a JavaScript team member at a multinational software service company, I specialized in React.js, Redux, Node.js, and Express, providing support to colleagues on JavaScript-related issues. I maintained large-scale frontends, improved product performance through lazy loading and image optimization, conducted unit testing, identified and resolved bugs, and contributed to R&D, requirement gathering, and the design of low-level design documents, features, and data flow.`;
  const truncatedContent2 = `${content2.slice(0, 225)}...`;

  const content3 = `Developed and maintained dynamic, responsive user interfaces using React.js, collaborating with design teams to implement intuitive UI/UX components. Utilized state management libraries like Redux for efficient application state management and integrated the React.js frontend with Node.js (Express) backend services for seamless functionality. Developed and optimized backend services with Node.js (Express) to ensure robust and scalable server-side logic, and designed and implemented RESTful APIs to facilitate communication between frontend and backend systems.`;
  const truncatedContent3 = `${content3.slice(0, 225)}...`;

  // Event Handlers
  const handleReadMore = (key) => {
    setContentVisibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="resume-info-display-section section-gap-tb-165 section-bg">
      <div className="resume-info-display-box">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="resume-tab nav">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#education-tab"
                  >
                    Education
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#experience-tab"
                  >
                    Experience
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="resume-info-display-wrapper">
            <div className="row">
              <div className="col-12">
                <div className="tab-content" id="myTabContent">
                  {/* Education Tab */}
                  <div
                    className="tab-pane fade show active"
                    id="education-tab"
                    role="tabpanel"
                  >
                    <ul className="resume-list">
                      <li className="resume-tab-list-single-item">
                        <div className="content">
                          <div className="left">
                            <span className="year">2018 - 2022</span>
                          </div>
                          <div className="right">
                            <h3 className="title">Bachelor of Technology</h3>
                            <span className="institute-name">
                              Feroze Gandhi Institute Of Engineering And Technology- [FGIET], RaeBareli
                            </span>
                            <p>Electronics and Communication Engineering (ECE)</p>
                          </div>
                        </div>
                      </li>
                      <li className="resume-tab-list-single-item">
                        <div className="content">
                          <div className="left">
                            <span className="year">2017</span>
                          </div>
                          <div className="right">
                            <h3 className="title">Intermediate</h3>
                            <span className="institute-name">
                              S G R I C Kurra Chittarpur, Agra
                            </span>
                            <p>UP Board</p>
                          </div>
                        </div>
                      </li>
                      <li className="resume-tab-list-single-item">
                        <div className="content">
                          <div className="left">
                            <span className="year">2015</span>
                          </div>
                          <div className="right">
                            <h3 className="title">High School</h3>
                            <span className="institute-name">
                              John Milton Public School Nehru Enclave, Agra
                            </span>
                            <p>CBSE Board</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Experience Tab */}
                  <div
                    className="tab-pane fade"
                    id="experience-tab"
                    role="tabpanel"
                  >
                    <ul className="resume-list">
                      <li className="resume-tab-list-single-item">
                        <div className="content">
                          <div className="left">
                            <span className="year">June 2023 - Present</span>
                          </div>
                          <div className="right">
                            <h3 className="title">Full Stack Developer</h3>
                            <span className="institute-name">Ohara IT Solutions</span>
                            <p>
                              {contentVisibility.showFullContent3 ? content3 : truncatedContent3}
                            </p>
                            <button
                              className="btn btn-outline-one"
                              onClick={() => handleReadMore('showFullContent3')}
                            >
                              {contentVisibility.showFullContent3 ? "Hide" : "Read More"}
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className="resume-tab-list-single-item">
                        <div className="content">
                          <div className="left">
                            <span className="year">Jan 2022 - May 2023</span>
                          </div>
                          <div className="right">
                            <h3 className="title">Software Developer</h3>
                            <span className="institute-name">TSS (The Star Solution)</span>
                            <p>
                              {contentVisibility.showFullContent2 ? content2 : truncatedContent2}
                            </p>
                            <button
                              className="btn btn-outline-one"
                              onClick={() => handleReadMore('showFullContent2')}
                            >
                              {contentVisibility.showFullContent2 ? "Hide" : "Read More"}
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className="resume-tab-list-single-item">
                        <div className="content">
                          <div className="left">
                            <span className="year">Aug 2021 - Jan 2022</span>
                          </div>
                          <div className="right">
                            <h3 className="title">Internship</h3>
                            <span className="institute-name">Prepbytes</span>
                            <p>
                              {contentVisibility.showFullContent1 ? content1 : truncatedContent1}
                            </p>
                            <button
                              className="btn btn-outline-one"
                              onClick={() => handleReadMore('showFullContent1')}
                            >
                              {contentVisibility.showFullContent1 ? "Hide" : "Read More"}
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
