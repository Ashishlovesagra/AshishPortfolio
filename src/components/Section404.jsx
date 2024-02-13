import React from 'react';
import Error404 from '../assets/Error404.png';

function Section404() {
  return (
    <>
      <div className="error-404-section section-gap-tb-165">
        <div className="error-404-box">
          <div className="container">
            <div className="row align-items-center flex-md-row flex-column-reverse">
              <div className="col-xl-5 col-md-6">
                <div className="error-404-content">
                  <h2 className="title">Sorry!</h2>
                  <h4 className="sub-title">This Page is Not Found.</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and dard
                    dummy text ever since the 1500 when an uniknown specimen
                    book has not only five.
                  </p>
                  <a
                    href="index.html"
                    className="btn btn-md btn-outline-one icon-space-right"
                  >
                    <i className="icofont-double-left" /> Back To Home
                  </a>
                </div>
              </div>
              <div className="col-xl-6 offset-xl-1 col-md-6">
                <div className="image">
                  <img
                    className="img-fluid"
                    src={Error404}
                    alt="developer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section404