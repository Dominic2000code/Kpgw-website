import React from "react";
import { UncontrolledCarousel } from "reactstrap";
// import carousel1 from "../images/carousel1.png"
import "./carouselContainer.css";

const items = [
  {
    src:
      "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/309603788_1270652113753669_5693968975881584751_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHeM7AvBztrPlJ3lPwaYCg-AqprI4FkUwgCqmsjgWRTCA6TglicF9SI31WTIeZou8047cRRfqPNveR89-fbdGrQ&_nc_ohc=G6KnxIjMY9QAX8yL7VY&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&oh=00_AT_ecHuIT7i7-Hx-3zxTeNCdFuvU96HFW0r2_Gknhav2Qw&oe=633B7DCF",
    altText: "",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src:
      "https://scontent.facc6-1.fna.fbcdn.net/v/t1.6435-9/90153766_141716010707707_1874025412430921728_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeHG1U-s7bp6tpsZGfsNjMSgGxa1TDDn11YbFrVMMOfXVsHSbZqYI7lm2jASJFBIrSBbF9yyLhi5gQ6I4R506kl0&_nc_ohc=wA8V0NbyWGsAX_o76U5&_nc_ht=scontent.facc6-1.fna&oh=00_AT9hfCoxtMqJTAu9dOJpx6og0Ggg8KZrFaOwBaxM0_lsYQ&oe=635C21EE",
    altText: "",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src:
      "https://scontent.facc6-1.fna.fbcdn.net/v/t1.6435-9/106404311_180116653534309_1444603392564162663_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGgrcRNi3kx-fc-lcCmVIgcZ_-Pi1-whGln_4-LX7CEafGlHipFa8WdbMHTVQ0lEHEPLbEWXDiH_CE4F5oujSZg&_nc_ohc=1ndd7l5yySAAX9Wu9Yl&tn=h_r0LxnKxaUUxn95&_nc_ht=scontent.facc6-1.fna&oh=00_AT9gRJriDktSBvbg0ZBc-wG8I2tGY7OVZsyL9Vo39kq5kQ&oe=635A612A",
    altText: "",
    caption: "",
    header: "",
    key: "3",
  },
];

const CarouselComponent = () => (
  <div className="carousel-container">
    <UncontrolledCarousel className=" carousel_" items={items} />
  </div>
);

export default CarouselComponent;
