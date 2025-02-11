import React from "react";
// import "./App.css";
import HeroSection from "../components/HeroSection";
import MainServices from "../components/MainServices";
// import FeaturedWorks from "./components/FeaturedWorks";
import FeaturedWork from "../components/FeaturedWork";
import Construction from "../components/Construction";
import Offer from "../components/Offer";
import Testimonial from "../components/Testimonial";
import Partners from "../components/Partners";
// import CarouselSlider from "./components/CarouselSlider";


function Home() {
  return (
    <div className="App">
     
      <HeroSection />
      <MainServices />
      <FeaturedWork/>
      <Construction/>
      <Offer/>
      <Partners/>
      <Testimonial/>

    </div>
  );
}

export default Home;
