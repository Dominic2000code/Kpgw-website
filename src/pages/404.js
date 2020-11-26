import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "../components/PageNotFound";
import Seo from "../components/Seo";

function notFound() {
    return (
      <>
        <Seo title="404:Not Found" />
        <NavBar />
        <PageNotFound />
        <Footer />
      </>
    );
}

export default notFound
