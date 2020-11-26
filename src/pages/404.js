import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "../components/PageNotFound";

function notFound() {
    return (
        <>
            <NavBar />
            <PageNotFound/>
            <Footer/>
        </>
    )
}

export default notFound
