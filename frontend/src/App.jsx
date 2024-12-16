import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Appoinment from './pages/Appoinment';
import Contact from './pages/Contact';
import Doctors from './pages/doctors';
import Login from './pages/Login';
import Myappointment from './pages/Myappointment';
import Myprofile from './pages/Myprofile';
import Navbar from './componants/Navbar';
import Footer from './componants/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <ToastContainer />
      <Navbar />
      <main className='mt-6'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/appointment/:docid' element={<Appoinment />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/doctors/:speciality' element={<Doctors />} />
          <Route path='/login' element={<Login />} />
          <Route path='/myappointment' element={<Myappointment />} />
          <Route path='/myprofile' element={<Myprofile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
