import React from "react";
import { UncontrolledCarousel } from "reactstrap";
// import carousel1 from "../images/carousel1.png"
import "./carouselContainer.css";

const items = [
  {
    src:
      "https://scontent.facc5-1.fna.fbcdn.net/v/t1.0-9/126210951_832534704232081_4645599909965832650_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_eui2=AeGP8pX32oSXOMTl2I_WTXSCEY2wdBjHH-MRjbB0GMcf48TM9CM7cjnKT5jDP0YX0oWEdrkzWYiu-5NXZGMySrrI&_nc_ohc=rMXV9tOQVJcAX-ql6Zb&_nc_ht=scontent.facc5-1.fna&oh=9fb547e2160ca508854b03feac7f2aa0&oe=5FD99848",
    altText: "",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src:
      "https://scontent.facc5-1.fna.fbcdn.net/v/t1.0-9/126180532_832533314232220_8732185669765073732_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_eui2=AeH1ubSWlzHYTHzXEru4qBL310hVmsBkBhrXSFWawGQGGsaxVMBkL_2F84LE1nrXECChdvdewmqwoGTge90pKaWo&_nc_ohc=ua0zYtymIRAAX9b4oBu&_nc_ht=scontent.facc5-1.fna&oh=1a523b2d53653668bf2d114e4d4ce41b&oe=5FDB6A7B",
    altText: "",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src:
      "https://scontent.facc5-1.fna.fbcdn.net/v/t1.0-9/126138698_832540227564862_6640669568543394505_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_eui2=AeG-E13-LVSwR5kndIkKjfS-AG2n0Fd96wsAbafQV33rC4mR1kLTjrymjQueIgtro0kl7nTbuVDdRKag34qHz6Nk&_nc_ohc=vni_qZ0MRlcAX-jsza1&_nc_ht=scontent.facc5-1.fna&oh=1007f6ec8787b4fe1eed8517e16cf8c5&oe=5FD983B5",
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
