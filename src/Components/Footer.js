import "./Footer.css";

import React from 'react'
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff",marginRight: "2rem"}}/>
                    <div>
                        <p>H-No: 204,Raghu Towers.</p>
                        <p>Sriharipuram,Visakhapatnam.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: 
                        "#fff",marginRight: "2rem"}}/> 
                        91-6301678504</h4>
                </div>
                <div className="gmail">
                    <h4><FaMailBulk size={20} style={{color: 
                        "#fff",marginRight: "2rem"}}/> 
                        vipinsaibanavath@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>I'm Banavath Vipin Sai Naik, a B.Tech student 
                    at VIT-AP University passionate about software 
                    development, currently focusing on web development 
                    and Java programming.</p>
                <div className="social">
                    <FaFacebook
                        size={30} 
                        style={{color: "#fff",
                        marginRight: "1rem"}}
                    /> 
                    <FaTwitter
                        size={30} 
                        style={{color: "#fff",
                        marginRight: "1rem"}}
                    />
                    <FaLinkedin
                        size={30} 
                        style={{color: "#fff",
                        marginRight: "1rem"}}
                    /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer