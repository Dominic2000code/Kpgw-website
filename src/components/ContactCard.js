import React from "react"
import "./ContactCard.css"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import LocationCityIcon from '@material-ui/icons/LocationCity'

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
            fluid(quality: 100, maxWidth: 420) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        office: file(relativePath: { eq: "Icon metro-location-city@2x.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 420) {
              ...GatsbyImageSharpFluid
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
            <p className="pb-5"><PhoneIcon/> Phone:</p>
            <a className="aOne " href="tel://+233 555 555 555">
              <p className="pb-5">+233 555 555 555</p>
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
            <p className="pb-5"><EmailIcon/> Email:</p>
            <a className="aOne " href="mailto:kpgw@gmail.com">
              <p className="pb-5">kpgw@gmail.com</p>
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
            <p className="pb-5"><LocationCityIcon/> Church Office:</p>
            <p className="pb-5">Tema Comm. 11 Near Presby University</p>
          </BackgroundImage>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
