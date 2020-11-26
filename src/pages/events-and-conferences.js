import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Events from "../components/Events";
import Seo from "../components/Seo";


function EventsAndConferences() {

return (
  <>
    <Seo title="Events and Conferences" />
    <NavBar />
    <Events />
    <Footer />
  </>
);
}

export default EventsAndConferences;
