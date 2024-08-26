import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Service from '../pages/Service';
import Error404 from '../pages/Error404';
import ProjectDetails from '../pages/ProjectDetails';

function AllRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/project-details' element={<ProjectDetails/>} />
        <Route path='*' element={<Error404/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes;