import React from "react";
import Navbar from "../components/Navbar.js";
import Hero2 from "../components/Hero2.js"
import Footer from "../components/Footer.js";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="ABOUT." text="learn about me" />
      <Footer />
    </div>
  );
};


export default About;
