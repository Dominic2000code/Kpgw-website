import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import ContactCard from "../components/ContactCard"
import "../components/Container.css"

function ContactUs(){
    return (
        <>
            <NavBar />
            <ContactCard />
            <Footer />
        </>
    )
}

export default ContactUs
