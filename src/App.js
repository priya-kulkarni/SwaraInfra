import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Packages from './Pages/Packages';
import About from './Pages/About';
import Contact from './components/contact';
import Projects from './components/Projects';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTopButton from './components/Backtotop';
import CustomCursor from './components/Cursor';




const App = () => {
  return (
        
    <Router basename="/SwaraInfra">
      <div>
        <CustomCursor/>
        <TopBar/>
      <Navbar/>
      <BackToTopButton/>
        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
    <Footer/>  </div>
    </Router>
    
    

  );
};

export default App;
