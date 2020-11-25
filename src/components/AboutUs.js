import React from 'react'
import { graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";
import "./AboutUs.css"

function AboutUs() {

    const data = useStaticQuery(
        graphql`
        query {
          background: file(relativePath: { eq: "aboutUs_bg.png" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `
    );

    const imageData = data.background.childImageSharp.fluid;
    return (
        <div>
            <BackgroundImage
                Tag="div"
                className="aboutUs_bg "
                fluid={imageData}
                backgroundColor={`#F5F6FA`}
            >
                <h2>Get To Know Us</h2>
            </BackgroundImage>
        </div>
    );
}

export default AboutUs
