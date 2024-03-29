import React, { useState, useEffect } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{isLargeScreen ? <LargeNavbar /> : <SmallNavbar />}</div>;
};

const LargeNavbar = () => {
  return (
    <>
      {/* web navbar */}
      <header className="header-section sticky-header d-none d-lg-block">
        <div className="header-wrapper">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col">
                {/* Start Header Logo */}
                <Link to="/" className="header-logo">
                  <img style={{mixBlendMode:"multiply"}} src={Logo} alt="developer" />
                </Link>
                {/* End Header Logo */}
              </div>
              <div className="col-auto">
                {/* Start Header Menu */}
                <ul className="header-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/service">Service</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
                {/* End Header Menu */}
              </div>
              <div className="col">
                <div className="header-btn-link text-end">
                  <Link
                    to="/contact"
                    className="btn btn-sm btn-outline-one icon-space-left"
                  >
                    Hire Me
                    <FaAngleDoubleRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const SmallNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu button to open the menu */}
      <div className="mobile-header d-block d-lg-none">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col">
              <div className="mobile-logo">
                <Link to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="mobile-action-link text-end">
                <Link
                  className="offcanvas-toggle offside-menu"
                  onClick={handleMenuToggle}
                >
                  <TiThMenuOutline />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu-offcanvas"
          className="offcanvas offcanvas-rightside offcanvas-mobile-menu-section offcanvas-open"
        >
          {/* Offcanvas Header */}
          <div className="offcanvas-header text-end">
            <button className="offcanvas-close" onClick={handleMenuClose}>
              <RiCloseLine />
            </button>
          </div>

          {/* Offcanvas Mobile Menu Wrapper */}
          <div className="offcanvas-mobile-menu-wrapper">
            {/* Start Mobile Menu  */}
            <div className="mobile-menu-bottom">
              {/* Start Mobile Menu Nav */}
              <div className="offcanvas-menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/service">Service</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* End Mobile Menu Nav */}
            </div>
            {/* End Mobile Menu */}
            <div className="mobile-contact-info text-center">
              <ul className="social-link">
                <li>
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/singh.ashish1009?igsh=MXN6b21hMG00MWc4Ng=="
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/in/ashish-singh-10sep/"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="https://twitter.com/SinghAshish009">
                    <FaTwitter />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
