import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";
import { Button } from "@material-ui/core";
import "./Thanks.css";

function Thanks() {
  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "thanks.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  const imageData = data.background.childImageSharp.fluid;
  return (
    <BackgroundImage
      Tag="section"
      className="thanks_bg"
      fluid={imageData}
      backgroundColor={`#03004d`}
    >
      <div className="text-center thanks-container ">
        <h3 className="mt-5">Thank you for subscribing</h3>
        <p>
          You will receive motivational quotes and scriptures every week :){" "}
        </p>
        <Button
          variant="contained"
          className="btn mt-3 "
          color="primary"
          size="large"
          href="/"
        >
          Go back
        </Button>
      </div>
    </BackgroundImage>
  );
}

export default Thanks;
