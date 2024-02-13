import React from 'react';
import Navbar from '../components/Navbar';
import Breadcumb from '../components/Breadcumb';
import MyServices from '../components/MyServices';
import Footer from '../components/Footer';
import Counter from '../components/Counter';

function Service() {
  return (
    <>
    <Navbar/>
    <Breadcumb currentPage="Service List" pageName="Services"/>
    <MyServices/>
    <Counter/>
    <Footer/>
    </>
  )
}

export default Service;