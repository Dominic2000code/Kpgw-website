import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import "./LocateUs.css";

const LocateUs = () => {
  const data = useStaticQuery(graphql`
    query {
      Map: file(relativePath: { eq: "map@2x.png" }) {
        childImageSharp {
          fixed(width: 280, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className="locateUs-container mb-5">
      <h2 className="locateUs__head-title text-center mb-3">Locate us at</h2>
      <div className="inner-container">
        <div className="map mr-3">
          {data.Map && <Img fixed={data.Map.childImageSharp.fixed} />}
        </div>
        <p className="location">Tema Comm. 4, Opp. Ghana Water Co.</p>
      </div>
    </div>
  );
};

export default LocateUs;
