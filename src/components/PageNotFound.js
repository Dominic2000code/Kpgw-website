import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";
import { Button } from "@material-ui/core";
import "./PageNotFound.css";

function PageNotFound() {
  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "404.jpg" }) {
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
      className="pageNotFound_bg"
      fluid={imageData}
      backgroundColor={`#03004d`}
    >
      <div className="text-center">
        <h1>404: Page Not Found</h1>
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

export default PageNotFound;
