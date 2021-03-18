import React from "react";
import { UncontrolledCarousel } from "reactstrap";
// import carousel1 from "../images/carousel1.png"
import "./carouselContainer.css";

const items = [
  {
    src:
      "https://images.unsplash.com/photo-1616078328793-ec201521e5e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=949&q=80",
    altText: "",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src:
      "https://images.unsplash.com/photo-1616078329159-2b4a545c48df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=949&q=80",
    altText: "",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src:
      "https://images.unsplash.com/photo-1616078329037-ca0cadbdea58?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=949&q=80",
    altText: "",
    caption: "",
    header: "",
    key: "3",
  },
];

const CarouselComponent = () => (
  <div className="carousel-container">
    <UncontrolledCarousel
      className=" carousel_"
      items={items}
    />
  </div>
);

export default CarouselComponent;
