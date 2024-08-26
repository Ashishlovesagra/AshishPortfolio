import ProjectImg2 from '../assets/ProjectImg2.png';
import ProjectImg3 from '../assets/ProjectImg3.png';
import EcommImg from '../assets/EcommImg.png';
import FoodAppImg from '../assets/FoodAppImg.png';
import { Link } from "react-router-dom";

function ProjectDisplay() {
  return (
    <>
      <div className="project-display-section section-gap-tb-165">
        <div className="project-display-box">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-12 d-block d-md-flex justify-content-between">
                {/* Start Section Content */}
                <div className="section-content pos-relative">
                  <span className="section-tag">Awesome Portfolio</span>
                  <h2 className="section-title">My Complete Projects</h2>
                </div>
                {/* End Section Content */}
              </div>
            </div>
          </div>
          <div className="project-display-wrapper">
            <div className="project-display-slider">
              {/* Swiper */}
              <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                <div
                  className="swiper-wrapper"
                  id="swiper-wrapper-107af88dc328c72cd"
                  aria-live="polite"
                  style={{ transform: "translate3d(0px, 0px, 0px)" }}
                >
                  {/* Slides */}
                  {/* Start Project Box Single Item */}
                  <div
                    className="project-box-single-item swiper-slide swiper-slide-active"
                    role="group"
                    aria-label="1 / 4"
                    style={{ width: "556.5px", marginRight: 50 }}
                  >
                    <div className="img-box">
                      <div className="bg-overlay" />
                      <div className="bg-image">
                        <img
                          src={ProjectImg2}
                          alt="developer"
                        />
                      </div>
                      <div className="image">
                        <img
                          src={EcommImg}
                          alt="developer"
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <Link href="">
                          E-Commerce App
                        </Link>
                      </h4>
                      <ul className="catagory-nav-item">
                        {/* <li>
                          <Link href>Chairty</Link>
                        </li>
                        <li>
                          <Link href>Fund Rising</Link>
                        </li>
                        <li>
                          <Link href>Non Profit</Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  {/* End Project Box Single Item */}
                  {/* Start Project Box Single Item */}
                  <div
                    className="project-box-single-item swiper-slide swiper-slide-next"
                    role="group"
                    aria-label="2 / 4"
                    style={{ width: "556.5px", marginRight: 50 }}
                  >
                    <div className="img-box">
                      <div className="bg-overlay" />
                      <div className="bg-image">
                        <img
                          src={ProjectImg3}
                          alt="developer"
                        />
                      </div>
                      <div className="image">
                        <img
                          src={FoodAppImg}
                          alt="developer"
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <Link href="project-details.html">
                          Food App
                        </Link>
                      </h4>
                      <ul className="catagory-nav-item">
                        {/* <li>
                          <Link href>Gardeining</Link>
                        </li>
                        <li>
                          <Link href>Landscaping</Link>
                        </li>
                        <li>
                          <Link href>Greem</Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  {/* End Project Box Single Item */}
                </div>
                <span
                  className="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDisplay;
