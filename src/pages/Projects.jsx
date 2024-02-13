import React from 'react'
import Navbar from '../components/Navbar';
import Breadcumb from '../components/Breadcumb';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';

function Projects() {
  return (
    <>
    <Navbar/>
    <Breadcumb currentPage="Project List" pageName="Projects"/>
    <ProjectSection/>
    <Footer/>
    </>
  )
}

export default Projects;