import React from "react";
import { Card, CardHeader, CardText, CardBody } from "reactstrap";
import "./CardComponent.css";

const CardComponent = () => {
  return (
    <div className="container mt-5 mb-5">
      <Card className="m-3 shadow-lg card">
        <CardHeader className="text-center font-weight-bold">
          OUR MISSION
        </CardHeader>
        <CardBody className="text-center">
          <CardText className="CardText_">
            To spread the good news to all corners of the earth and empower the
            children of God to do exploits.
          </CardText>
        </CardBody>
      </Card>

      <Card className="m-3 shadow-lg card font-weight-bold">
        <CardHeader className="text-center">OUR VISION</CardHeader>
        <CardBody className="text-center">
          <CardText className="CardText_">
            To change the mindsets of Christians from just praying all the time
            to adding actions to the prayer and making a difference.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;
