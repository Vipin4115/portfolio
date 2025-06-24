import React from 'react'
import Navbar from "../Components/Navbar";
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT." text="Im a friendly 
      Web Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About