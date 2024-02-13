import React from 'react';
import CounterupIcon2 from '../assets/CounterupIcon2.jpg';
import CounterupIcon3 from '../assets/CounterupIcon3.jpg';

function Counter() {
  return (
    <>
      <div className="counter-display-section section-gap-tb-165 section-bg-2">
        <div className="counter-display-wrapper">
          <div className="container">
            <div className="row justify-content-center justify-content-sm-start">
              {/* <div className="d-block d-md-flex justify-content-md-start col-12 col-sm-4 col-md-4">
                Start Counterup Single Item
                <div className="counterup-single-item">
                  <div className="icon">
                    <img src="assets/images/icon/counterup-icon-1.png" alt="developer" />
                  </div>
                  <div className="content">
                    <h2 className="number">
                      <span className="counter">2</span>+
                    </h2>
                    <span className="text">Happy Clients</span>
                  </div>
                </div>
                End Counterup Single Item
              </div> */}
              <div className="d-block d-md-flex justify-content-md-center col-12 col-sm-4 col-md-6">
                {/* Start Counterup Single Item */}
                <div className="counterup-single-item">
                  <div className="icon">
                    <img src={CounterupIcon2} alt="developer" />
                  </div>
                  <div className="content">
                    <h2 className="number">
                      <span className="counter">25</span>+
                    </h2>
                    <span className="text">Project Complete</span>
                  </div>
                </div>
                {/* End Counterup Single Item */}
              </div>
              <div className="d-block d-md-flex justify-content-md-end col-12 col-sm-4 col-md-4">
                {/* Start Counterup Single Item */}
                <div className="counterup-single-item">
                  <div className="icon">
                    <img src={CounterupIcon3} alt="developer" />
                  </div>
                  <div className="content">
                    <h2 className="number">
                      <span className="counter">3</span>+
                    </h2>
                    <span className="text">Years of Experience</span>
                  </div>
                </div>
                {/* End Counterup Single Item */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;