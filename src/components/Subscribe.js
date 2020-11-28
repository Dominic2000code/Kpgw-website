import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { navigate } from "gatsby-link";
import BackgroundImage from "gatsby-background-image";
import "./Subscribe.css";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Subscribe = ({ className }) => {
  const [email, setEmail] = useState({});

  const handleChange = e => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...email,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
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
        <h3 className="text-center">Subscribe to our newsletter</h3>

        <div className="form-container mt-5">
          <form
            name="subscription"
            method="post"
            action="/redirect/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="subscription" />
            <p hidden>
              <label>
                Don't fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <input
              type="email"
              name="email"
              placeholder="john@doe.com"
              onChange={handleChange}
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
