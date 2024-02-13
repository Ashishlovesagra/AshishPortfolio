import React from "react";

function ProjectDetaSection() {
  return (
    <>
      <div className="project-details-section section-gap-tb-165">
        <div className="project-details-box">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Start Project Content Section */}
                <div className="project-content-section pos-relative">
                  <div className="project-hero-image">
                    <img
                      src="assets/images/project/project-details-hero-img.jpg"
                      alt="developer"
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-8">
                      {/* Start Section Content */}
                      <div className="default-content-style pos-relative">
                        <span className="section-tag">
                          Givest - Non Profit Website
                        </span>
                        <h2 className="title">
                          Givest is a non profit and fund rising website.
                        </h2>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the indust
                          standard dummy text ever since the 1500s, when an
                          unknown printer took a galley of type and scrambled it
                          to make a type specimen book. It has survived not only
                          five centuries, but also the leap into electronic
                          typesetting, remaining essentially unchanged.
                        </p>
                        <h3 className="sub-title">How to complete this?</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the indust
                          standard dummy text ever since the 1500s, when an
                          unknown printer took a galley of type and scrambled it
                          typesetting, remaining essentially unchanged.
                        </p>
                        <ul className="content-list-item content-list-with-icon">
                          <li>
                            <div className="left">
                              <div className="icon">
                                <i className="icofont-bulb-alt" />
                              </div>
                            </div>
                            <div className="right">
                              <h4 className="list-title">Idea Generate</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry has been the standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type typesetting,
                                remaining essentially unchanged.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="left">
                              <div className="icon">
                                <i className="icofont-ruler-pencil-alt-2" />
                              </div>
                            </div>
                            <div className="right">
                              <h4 className="list-title">
                                Reasearch &amp; Sketching
                              </h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry has been the standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type typesetting,
                                remaining essentially unchanged.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="left">
                              <div className="icon">
                                <i className="icofont-airplane" />
                              </div>
                            </div>
                            <div className="right">
                              <h4 className="list-title">Launced Project</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry has been the standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type typesetting,
                                remaining essentially unchanged.
                              </p>
                            </div>
                          </li>
                        </ul>
                        <h3 className="sub-title">
                          Project result and summery
                        </h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the indust
                          standard dummy text ever since the 1500s, when an
                          unknown printer took a galley of type and scrambled it
                          typesetting, remaining essentially unchanged.
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the indust
                          standard dummy text ever since the 1500s, when an
                          unknown printer took a galley of type and scrambled it
                          typesetting, remaining essentially unchanged.
                        </p>
                      </div>
                      {/* End Section Content */}
                    </div>
                    <div className="col-xl-3 col-lg-4 offset-xl-1">
                      <div className="project-sidebar">
                        <h3 className="title">Information</h3>
                        {/* Start Project Sidebar Item */}
                        <ul className="project-sidebar-list-item">
                          {/* Start Project Single Box */}
                          <li className="project-sidebar-single-box">
                            <h6 className="title-text">Project Name:</h6>
                            <span className="text">Givest</span>
                          </li>
                          {/* End Project Single Box */}
                          {/* Start Project Single Box */}
                          <li className="project-sidebar-single-box">
                            <h6 className="title-text">Clients:</h6>
                            <span className="text">Reatha Alcorn</span>
                          </li>
                          {/* End Project Single Box */}
                          {/* Start Project Single Box */}
                          {/* <li className="project-sidebar-single-box">
                            <h6 className="title-text">Budget:</h6>
                            <span className="text">$890.00</span>
                          </li> */}
                          {/* End Project Single Box */}
                          {/* Start Project Single Box */}
                          <li className="project-sidebar-single-box">
                            <h6 className="title-text">Duration:</h6>
                            <span className="text">25 days</span>
                          </li>
                          {/* End Project Single Box */}
                          {/* Start Project Single Box */}
                          <li className="project-sidebar-single-box">
                            <h6 className="title-text">Date:</h6>
                            <span className="text">09 Feb, 2021</span>
                          </li>
                          {/* End Project Single Box */}
                        </ul>
                        {/* End Project Sidebar Item */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Project Content Section */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetaSection;
