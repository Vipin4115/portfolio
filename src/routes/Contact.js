import React from 'react'
import Navbar from "../Components/Navbar";
import HeroImg2 from '../Components/HeroImg2';
import Form from '../Components/Form';
import Footer from '../Components/Footer';


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT." text="Lets have 
      a chat."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact