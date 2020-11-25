import { Link } from "gatsby";
import React, { useState } from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
// import KpgwLogo from "../images/KPGW-Logo.png";
import "./NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "KPGW-Logo.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const handleClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    // <header className="NavBar">
    //     <Link to="/" className="logo">
    //         <img src={KpgwLogo} alt="Kpgw logo"/>
    //     </Link>
    //     <nav >
    //         <ul className="nav__links">
    //             <li ><Link to="/" >Home</Link></li>
    //             <li ><Link to="/contact-us/" >Contact-us</Link></li>
    //             <li ><Link to="/about-us/" >About-us</Link></li>
    //         </ul>
    //     </nav>
    // </header>

    <nav className="NavbarItems">
      <Link to="/" className="navbar-logo">
        <Img fixed={data.file.childImageSharp.fixed} />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {navToggle ? (
          <CloseIcon fontSize="large" style={{ color: "white" }} />
        ) : (
          <MenuIcon fontSize="large" style={{ color: "white" }} />
        )}
      </div>
      <ul className={navToggle ? "nav-menu active" : "nav-menu"}>
        <li className="nav-links">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-links">
          <Link to="/contact-us/">Contact-us</Link>
        </li>
        <li className="nav-links">
          <Link to="/about-us/">About-us</Link>
        </li>
      </ul>
    </nav>
  );
};

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

export default NavBar;
