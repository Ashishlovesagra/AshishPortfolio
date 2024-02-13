import React from "react";
import serviceIcon2 from "../assets/serviceIcon2.svg";
import { Link } from "react-router-dom";

function MyServices() {
  return (
    <>
      <div className="service-display-section section-gap-tb-165 pos-relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Start Section Content */}
              <div className="section-content">
                <span className="section-tag">My Services</span>
                <h2 className="section-title">
                  Service Provide For My Clients.
                </h2>
              </div>
              {/* End Section Content */}
            </div>
          </div>
        </div>
        {/* Start Service Section Wrapper */}
        <div className="service-display-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="service-display-slider">
                  <div
                    className="service-box-single-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                    // style={{ width: 352, marginRight: 45 }}
                  >
                    <div className="inner-shape inner-shape-top-right" />
                    <div className="icon">
                      <img src={serviceIcon2} alt="developer" />
                    </div>
                    <h4 className="title">
                      <Link to="">Web Developer</Link>
                    </h4>
                    <ul className="list-item">
                      <li>HTML / CSS</li>
                      <li>Animations</li>
                      <li>Javascript</li>
                      <li>React.js</li>
                      <li>Express.js</li>
                      <li>Node.js</li>
                    </ul>
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

export default MyServices;
