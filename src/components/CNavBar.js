import { Link } from "gatsby"
import React from "react"
// import Img from "gatsby-image"
// import {graphql, useStaticQuery} from "gatsby"
import KpgwLogo from "../images/KPGW-Logo.png"
import "./CNavBar.css"

const NavBar = () => {
    // const data = useStaticQuery(graphql`
    //     query{
    //         imageSharp(fluid:{originalName: {eq: "KPGW-Logo.png"}}){
    //             fluid(maxWidth:2){
    //                 ...GatsbyImageSharpFluid
    //             }
    //         }
    //     }
    // `)
    return (
        <header className="NavBar">
            <Link to="/" className="logo">
                <img src={KpgwLogo} alt="Kpgw logo"/>
            </Link>
            <nav >
                <ul className="nav__links">
                    <li ><Link to="/" >Home</Link></li>
                    <li ><Link to="/contact-us/" >Contact-us</Link></li>
                    <li ><Link to="#" >About-us</Link></li>
                </ul>
            </nav>
        </header>
    )
}

// export const query = graphql`
//     query{
//         KpgwLogo: file(relativePath:{eq: "KPGW-Logo.png"}){
//             childImageSharp{
//                 fluid(maxWidth:200){
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }
// `


export default NavBar
