import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MyServices from '../components/MyServices';
import MySkills from '../components/MySkills';
import Counter from '../components/Counter';
import ProjectDisplay from '../components/ProjectDisplay';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <MyServices/>
    <MySkills/>
    <Counter/>
    <ProjectDisplay/>
    <Footer/>
    </>
  )
}

export default Home;