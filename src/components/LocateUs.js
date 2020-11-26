import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import "./LocateUs.css";

const LocateUs = () => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "map@2x.png" } }) {
        fixed(width: 280, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `);
 const Fixed = data.imageSharp.fixed
  return (
    <div className="locateUs-container mb-5">
      <h2 className="locateUs__head-title text-center mb-3">Locate us at</h2>
      <div className="inner-container">
        <div className="map mr-3">
          <Img fixed={Fixed && data.imageSharp.fixed} />
        </div>
        <p className="location">Tema Comm. 4, Opp. Ghana Water Co.</p>
      </div>
    </div>
  );
};

export default LocateUs;
