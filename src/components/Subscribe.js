import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";
import "./Subscribe.css";

const Subscribe = ({ className }) => {
  const [email, setEmail] = useState("");

  const AddEmail = e => {
    e.preventDefault();
    // addTodo(title)
    // console.log(title, author)
    setEmail("");
  };

  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "bg.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // Set ImageData.
  const imageData = data.background.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className="subscribe_bg"
      fluid={imageData}
      backgroundColor={`#03004d`}
    >
      <div className="subscribe-container p-5 ">
        <h2 className="text-center">Subscribe to our newsletter</h2>

        <div className="form-container mt-5">
          <form onSubmit={AddEmail}>
            <input
              type="email"
              placeholder="john@doe.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Subscribe;
