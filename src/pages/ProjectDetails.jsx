import React from 'react'
import Navbar from '../components/Navbar';
import Breadcumb from '../components/Breadcumb';
import ProjectDetaSection from '../components/ProjectDetaSection';

function ProjectDetails() {
  return (
   <>
   <Navbar/>
   <Breadcumb currentPage="Project Details" pageName="Project Details" />
   <ProjectDetaSection/>
   </>
  )
}

export default ProjectDetails;