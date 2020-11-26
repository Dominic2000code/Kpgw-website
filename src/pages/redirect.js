import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

function redirect() {
    return (
      <>
        <Seo title="Thank you" />
        <NavBar />
        <Footer />
      </>
    );
}

export default redirect
