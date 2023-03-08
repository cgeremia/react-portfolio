import "./HeroStyles.css";
import React from "react";
import IntroImg from "../assets/pexels-steve-johnson-1843717.jpg";
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="texture background" />
      </div>
      <div className="content">
        <p>Full-Stack Developer</p>
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
