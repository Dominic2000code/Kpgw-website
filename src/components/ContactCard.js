import React from "react";
import "./ContactCard.css";
import { graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";

const ContactCard = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        phone: file(relativePath: { eq: "Icon awesome-phone-alt@2x.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 420) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        email: file(relativePath: { eq: "Icon material-email@2x.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        office: file(relativePath: { eq: "Icon metro-location-city@2x.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  return (
    <div>
      <h3 className="mt-2">Contact Information</h3>
      <div className="ContactCard-Container mt-3">
        <div className="card_ shadow align-self-center mb-3">
          <BackgroundImage
            Tag="section"
            className="bg"
            fluid={data.phone.childImageSharp.fluid}
            backgroundColor={`#fff`}
          >
            <p className="pb-5">Phone:</p>
            <a className="aOne " href="tel://+233 555 555 555">
              <p>+233 555 555 555</p>
            </a>
          </BackgroundImage>
        </div>

        <div className="card_ shadow align-self-center mb-3">
          <BackgroundImage
            Tag="section"
            className="bg"
            fluid={data.email.childImageSharp.fluid}
            backgroundColor={`#fff`}
          >
            <p className="pb-5">Email:</p>
            <a className="aOne" href="mailto:kpgw@gmail.com">
              <p>kpgw@gmail.com</p>
            </a>
          </BackgroundImage>
        </div>

        <div className="card_ shadow align-self-center mb-5">
          <BackgroundImage
            Tag="section"
            className="bg"
            fluid={data.office.childImageSharp.fluid}
            backgroundColor={`#fff`}
          >
            <p className="pb-5">Church Office:</p>
            <p>Tema Comm. 11 Near Presby University</p>
          </BackgroundImage>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
