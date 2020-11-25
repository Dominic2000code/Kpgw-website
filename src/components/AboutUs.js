import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";
import "./AboutUs.css";
import AboutUsCard from "./AboutUsCard";

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

        ps_jeff: file(relativePath: { eq: "ps_Jeff.png" }) {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        ps_Cynthia: file(relativePath: { eq: "ps_Cynthia.png" }) {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        ps_Richmond: file(relativePath: { eq: "ps_Richmond.png" }) {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        ps_Victor: file(relativePath: { eq: "ps_Victor.png" }) {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        UncleDan: file(relativePath: { eq: "UncleDan.png" }) {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
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
        <h2 className="main-head">Get To Know Us</h2>
      </BackgroundImage>

      <div className="people m-5">
        <h2 className="text-center pastors-head_title">Our Pastors</h2>
        <div className="main-ps mt-3">
          <AboutUsCard
            image={data.ps_jeff.childImageSharp.fixed}
            name="Pastor Jeffery Yaw Baah"
          />
          <AboutUsCard
            image={data.ps_Cynthia.childImageSharp.fixed}
            name="Pastor Cynthia Baah"
          />
        </div>

        <div className="supporting-ps mt-4">
          <AboutUsCard
            image={data.ps_Richmond.childImageSharp.fixed}
            name="Pastor Richmond Koranteng"
          />
          <AboutUsCard
            image={data.ps_jeff.childImageSharp.fixed}
            name="Rev. Benjamin Ahadzie"
          />
          <AboutUsCard
            image={data.ps_Victor.childImageSharp.fixed}
            name="Pastor Victor Owusu Sekyere"
          />
        </div>
        <h2 className="leader-head_title mt-5 text-center">Our Leaders</h2>
        <div className="leaders mt-3">
          <AboutUsCard
            image={data.ps_Victor.childImageSharp.fixed}
            name="Mr Alex Quoicoe"
          />
          <AboutUsCard
            image={data.ps_Victor.childImageSharp.fixed}
            name="Mrs Dzifa Quoicoe"
          />
          <AboutUsCard
            image={data.ps_Victor.childImageSharp.fixed}
            name="Mrs Dorothy Ahadzie"
          />
          <AboutUsCard
            image={data.ps_Victor.childImageSharp.fixed}
            name="Mrs Livia Adanuvor"
          />
          <AboutUsCard
            image={data.ps_Victor.childImageSharp.fixed}
            name="Mr Daniel Doku"
          />
          <AboutUsCard
            image={data.ps_Victor.childImageSharp.fixed}
            name="Mr Kwasi Owusu Ofori"
          />
          <AboutUsCard
            image={data.ps_Victor.childImageSharp.fixed}
            name="Mr Devine Dompreh"
          />
          <AboutUsCard
            image={data.ps_Victor.childImageSharp.fixed}
            name="Mr Dela Ampim"
          />
          <AboutUsCard
            image={data.ps_Victor.childImageSharp.fixed}
            name="Mr Reginald Owoo"
          />
          <AboutUsCard
            image={data.ps_Victor.childImageSharp.fixed}
            name="Mr Micheal Agyapong"
          />
          <AboutUsCard
            image={data.UncleDan.childImageSharp.fixed}
            name="Mr Daniel Owusu"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
