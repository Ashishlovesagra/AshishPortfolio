import React from "react";
import Navbar from "../components/Navbar";
import Breadcumb from "../components/Breadcumb";
import Section404 from "../components/Section404";
import Footer from "../components/Footer";

function Error404() {
  return (
    <>
    <Navbar/>
    <Breadcumb currentPage="404" pageName="Page Not Found"/>
    <Section404/>
    <Footer/>
    </>
  );
}

export default Error404;
