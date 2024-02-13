import React from "react";
import { Link } from "react-router-dom";

function Breadcumb({ currentPage , pageName }) {
  return (
    <>
      <div className="breadcrumb-section section-bg overflow-hidden pos-relative">
        <div className="breadcrumb-shape-top-left" />
        <div className="breadcrumb-shape-bottom-right" />
        <div className="breadcrumb-box">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-content">
                  <h2 className="title">{pageName}</h2>
                  <ul className="breadcrumb-link">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="active">{currentPage}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcumb;
