import React, { useState } from "react";
import BlogImg from '../assets/BlogImg.png';
import ProjImg2 from '../assets/ProjImg2.png';
import EcommImg from '../assets/EcommImg.png';
import FoodAppImg from '../assets/FoodAppImg.png';
import ProjImg1 from '../assets/ProjImg1.png';
import ProjImg3 from '../assets/ProjImg3.png';
import { Link } from "react-router-dom";

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const projects = [
    {
      category: ".javascript",
      imageUrl:ProjImg2,
      title: "Tic Tac Toe",
      tags: ["Self Project"],
    },
    {
      category: ".javascript",
      imageUrl:ProjImg3,
      title: "Guess My Number",
      tags: ["Self Project"],
    },
    {
      category: ".react",
      imageUrl:BlogImg,
      title: "Blog App",
      tags: ["Self Project"],
    },
    {
      category: ".react",
      imageUrl: ProjImg1,
      title: "Ongrid Website Clone",
      tags: ["Self Project"],
    },
    {
      category: ".fullstack",
      imageUrl:FoodAppImg,
      title: "Food App",
      tags: ["Self Project"],
    },
    {
        category: ".fullstack",
        imageUrl:EcommImg,
        title: "E-commerce App",
        tags: ["Self Project"],
      },
    // Add more projects as needed
  ];

  return (
    <>
      <div className="project-section section-gap-tb-165">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="projects-gallery-filter-nav">
                <button
                  className={`btn btn-outline-secondary ${
                    activeFilter === "*" ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick("*")}
                >
                  All
                </button>
                <button
                  className={`btn btn-outline-secondary ${
                    activeFilter === ".javascript" ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick(".javascript")}
                >
                  Javscript
                </button>
                <button
                  className={`btn btn-outline-secondary ${
                    activeFilter === ".react" ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick(".react")}
                >
                  React.js
                </button>
                <button
                  className={`btn btn-outline-secondary ${
                    activeFilter === ".fullstack" ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick(".fullstack")}
                >
                  Full Stack
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="projects-wrapper-gallery-content"
                style={{ position: "relative" }}
              >
                <div className="row">
                  {projects
                    .filter(
                      (project) =>
                        activeFilter === "*" ||
                        project.category === activeFilter
                    )
                    .map((project, index) => (
                      <div
                        key={index}
                        className="col-md-6 filter-item"
                        style={{ marginBottom: "20px" }}
                      >
                        {/* Start Project Box Single Item */}
                        <div className="project-box-single-item">
                          <div className="img-box">
                            <div className="bg-overlay" />
                            <div className="bg-image">
                              <img src={project.imageUrl} alt="developer" />
                            </div>
                            <div className="image">
                              <img src={project.imageUrl} alt="developer" />
                            </div>
                          </div>
                          <div className="content">
                            <h4 className="title">
                              <Link to="">{project.title}</Link>
                            </h4>
                            <ul className="catagory-nav-item">
                              {project.tags.map((tag, tagIndex) => (
                                <li key={tagIndex}>
                                  <Link to="" >{tag}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {/* End Project Box Single Item */}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
