import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"

function AboutUS() {
    return (
        <>
            <NavBar />
            <AboutUs/>
            <Footer />
        </>
    );
}

export default AboutUS;
