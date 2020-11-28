import React from 'react'
import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
import Thanks from "../components/Thanks";
import Seo from "../components/Seo";

function redirect() {
    return (
      <>
        <Seo title="Thank you" />
        <NavBar />
        <Thanks/>
        {/* <Footer /> */}
      </>
    );
}

export default redirect
