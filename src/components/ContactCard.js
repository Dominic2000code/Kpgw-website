import React from "react"
import "./ContactCard.css"
// import { graphql, useStaticQuery } from "gatsby"

// import BackgroundImage from "gatsby-background-image"

const ContactCard = () => {
  return (
    <div>
      <h3 className="mt-2">Contact Information:</h3>
      <div className="ContactCard-Container mt-3">
        <div className="card_ shadow align-self-center mb-3">
          <p className="pb-5">Phone:</p>
          <a className="aOne" href="tel://+233 555 555 555">
            <p>+233 555 555 555</p>
          </a>
        </div>

        <div className="card_ shadow align-self-center mb-3">
          <p className="pb-5">Email:</p>
          <a className="aOne" href="mailto:kpgw@gmail.com">
            <p>kpgw@gmail.com</p>
          </a>
        </div>

        <div className="card_ shadow align-self-center mb-5">
          <p className="pb-5">Church Office:</p>
          <p>Tema Comm. 11 Near Presby University</p>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
