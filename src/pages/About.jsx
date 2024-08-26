import Navbar from '../components/Navbar';
import Breadcumb from '../components/Breadcumb';
import AboutInfo from '../components/AboutInfo';
import Resume from '../components/Resume';
import Counter from '../components/Counter';
import Footer from '../components/Footer';

function About() {
  return (
    <>
    <Navbar/>
    <Breadcumb currentPage="About" pageName="About"/>
    <AboutInfo/>
    <Resume/>
    <Counter/>
    <Footer/>
    </>
  )
}

export default About;