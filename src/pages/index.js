import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import CarouselComponent from "../components/CarouselComponent"
import CardComponent from "../components/CardComponent"
import MeetingTable from "../components/MeetingTable"
import EventsAndConferences from "../components/Events&Conferences"
import LocateUs from "../components/LocateUs"
import Subscribe from "../components/Subscribe"
// import "../components/carouselContainer.css"
import "../components/Container.css"

export default function Home() {
  return (
    <>
      <NavBar />
      <CarouselComponent />
      <CardComponent />
      <MeetingTable />
      <EventsAndConferences />
      <LocateUs />
      <Subscribe />
      <Footer />
    </>
  )
}
