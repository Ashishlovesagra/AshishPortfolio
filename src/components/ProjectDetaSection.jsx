function ProjectDetaSection() {
  return (
    <div className="project-details-section section-gap-tb-165">
      <div className="project-details-box">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="project-content-section pos-relative">
                {/* Hero Image */}
                <div className="project-hero-image">
                  <img
                    src="assets/images/project/project-details-hero-img.jpg"
                    alt="Project Hero"
                  />
                </div>

                <div className="row">
                  {/* Main Content */}
                  <div className="col-lg-8">
                    <div className="default-content-style pos-relative">
                      <span className="section-tag">
                        Givest - Non Profit Website
                      </span>
                      <h2 className="title">
                        Givest is a non profit and fund raising website.
                      </h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                      </p>
                      <h3 className="sub-title">How to complete this?</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it,
                        remaining essentially unchanged.
                      </p>

                      {/* Content List */}
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
                            <h4 className="list-title">Research & Sketching</h4>
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
                            <h4 className="list-title">Launched Project</h4>
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

                      <h3 className="sub-title">Project Result and Summary</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it,
                        remaining essentially unchanged.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it,
                        remaining essentially unchanged.
                      </p>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="col-xl-3 col-lg-4 offset-xl-1">
                    <div className="project-sidebar">
                      <h3 className="title">Information</h3>
                      <ul className="project-sidebar-list-item">
                        <li className="project-sidebar-single-box">
                          <h6 className="title-text">Project Name:</h6>
                          <span className="text">Givest</span>
                        </li>
                        <li className="project-sidebar-single-box">
                          <h6 className="title-text">Clients:</h6>
                          <span className="text">Reatha Alcorn</span>
                        </li>
                        <li className="project-sidebar-single-box">
                          <h6 className="title-text">Duration:</h6>
                          <span className="text">25 days</span>
                        </li>
                        <li className="project-sidebar-single-box">
                          <h6 className="title-text">Date:</h6>
                          <span className="text">09 Feb, 2021</span>
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
    </div>
  );
}

export default ProjectDetaSection;
