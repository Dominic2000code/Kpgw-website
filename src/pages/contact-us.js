import React from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import ContactCard from "../components/ContactCard"
// import "../components/Container.css"
import Seo from "../components/Seo";

function ContactUs(){
    return (
      <>
        <Seo title="Contact-Us" />
        <NavBar />
        <ContactCard />
        <Footer />
      </>
    );
}

export default ContactUs
