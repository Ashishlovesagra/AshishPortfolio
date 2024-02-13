import React, { useState } from "react";

function Resume() {
  const [showFullContent1, setShowFullContent1] = useState(false);
  const [showFullContent2, setShowFullContent2] = useState(false);

  // Article 1
  const content1 = `I immersed myself in mastering MERN (MongoDB, Express.js, React.js, Node.js) stack technologies. This intensive experience not only fortified my technical proficiency but also honed my problem-solving skills and collaborative mindset. From delving into MongoDB's database intricacies to crafting seamless interfaces with React.js, and architecting robust APIs using Node.js and Express.js, the comprehensive curriculum at PrepBytes equipped me with a versatile skill set. This immersive journey not only fueled my passion for web development but also instilled a deep appreciation for cutting-edge solutions, preparing me for dynamic contributions in the ever-evolving tech landscape.`;

  const truncatedContent1 = `${content1.slice(0, 225)}...`;

  const handleReadMore1 = () => {
    setShowFullContent1(!showFullContent1);
  };

  // Article 2
  const content2 = `It is a multi-national software service-based company. I am working here as a JavaScript team member and helping other team members to solve their JavaScript problems. Especially worked here on the front-end, as the React JS, Angular, Electron, and worked on backend technologies as a Node.js developer on some good and large-scale projects with international clients. Interacting with users and performing Unit Testing of applications; identified and resolved the bug in the module and RND, requirement gathering, design low-level design documents and features and data-flow.`;

  const truncatedContent2 = `${content2.slice(0, 225)}...`;

  const handleReadMore2 = () => {
    setShowFullContent2(!showFullContent2);
  };
  return (
    <>
      <div className="resume-info-display-section  section-gap-tb-165 section-bg">
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
                    <div
                      className="tab-pane fade show active"
                      id="education-tab"
                      role="tabpanel"
                    >
                      <ul className="resume-list">
                        {/* Start Resume Tab List Single Item */}
                        <li className="resume-tab-list-single-item">
                          <div className="content">
                            <div className="left">
                              <span className="year">2018 - 2022</span>
                            </div>
                            <div className="right">
                              <h3 className="title">Bachelor of Technology</h3>
                              <span className="institute-name">
                                Feroze Gandhi Institute Of Engineering And
                                Technology- [FGIET], RaeBareli
                              </span>
                              <p>
                                Electronics and Communication Engineering (ECE)
                                {/* <br />
                                7.1 CGPA */}
                              </p>
                            </div>
                          </div>
                        </li>
                        {/* End Resume Tab List Single Item */}
                        {/* Start Resume Tab List Single Item */}
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
                              <p>
                                UP Board
                                 {/* <br /> 70.4 %{" "} */}
                              </p>
                            </div>
                          </div>
                        </li>
                        {/* End Resume Tab List Single Item */}
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
                              <p>
                              CBSE Board
                                {/*  <br /> 6.8 CGPA */}
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="experience-tab"
                      role="tabpanel"
                    >
                      <ul className="resume-list">
                        {/* Start Resume Tab List Single Item */}
                        <li className="resume-tab-list-single-item">
                          <div className="content">
                            <div className="left">
                              <span className="year">Feb 2022 - Present</span>
                            </div>
                            <div className="right">
                              <h3 className="title">Software Developer</h3>
                              <span className="institute-name">
                                TSS (The Star Solution)
                              </span>
                              <p>
                                {showFullContent2
                                  ? content2
                                  : truncatedContent2}
                              </p>
                              {!showFullContent2 && (
                                <button
                                  className="btn btn-outline-one"
                                  onClick={handleReadMore2}
                                >
                                  Read More
                                </button>
                              )}
                              {showFullContent2 && (
                                <button
                                  className="btn btn-outline-one"
                                  onClick={handleReadMore2}
                                >
                                  Hide
                                </button>
                              )}
                            </div>
                          </div>
                        </li>
                        {/* End Resume Tab List Single Item */}
                        {/* Start Resume Tab List Single Item */}
                        <li className="resume-tab-list-single-item">
                          <div className="content">
                            <div className="left">
                              <span className="year">Aug 2021 - Jan 2022</span>
                            </div>
                            <div className="right">
                              <h3 className="title">Training</h3>
                              <span className="institute-name">Prepbytes</span>
                              <p>
                                {showFullContent1
                                  ? content1
                                  : truncatedContent1}
                              </p>
                              {!showFullContent1 && (
                                <button
                                  className="btn btn-outline-one"
                                  onClick={handleReadMore1}
                                >
                                  Read More
                                </button>
                              )}
                              {showFullContent1 && (
                                <button
                                  className="btn btn-outline-one"
                                  onClick={handleReadMore1}
                                >
                                  Hide
                                </button>
                              )}
                            </div>
                          </div>
                        </li>
                        {/* End Resume Tab List Single Item */}
                      </ul>
                    </div>
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

export default Resume;
