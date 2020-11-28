import React from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"
import Seo from "../components/Seo";

function AboutUS() {
    return (
      <>
        <Seo title="About-Us" />
        <NavBar />
        <AboutUs />
        <Footer />
      </>
    );
}

export default AboutUS;
