import "./HeroStyles.css";
import React from "react";
import IntroImg from "../assets/pexels-life-of-pix-8892.jpg";
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="texture background" />
      </div>
      <div className="content">
        <p>Hello, my name is</p>
        <h1>Cristina Geremia</h1>
        <Link to="/projects" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Hero;
