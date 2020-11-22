import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import CNavBar from "../components/CNavBar"
import CFooter from "../components/CFooter"
import ContactCard from "../components/ContactCard"
import "../components/Container.css"

const ContactUs = () => {
    return (
        <>
            <CNavBar />
            <ContactCard />
            <CFooter />
        </>
    )
}

export default ContactUs
