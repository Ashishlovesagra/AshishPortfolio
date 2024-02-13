import React from 'react'
import Navbar from '../components/Navbar';
import Breadcumb from '../components/Breadcumb';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
    <Navbar/>
    <Breadcumb currentPage="Contact" pageName="Contact"/>
    <ContactInfo/>
    <Footer/>
    </>
  )
}

export default Contact;