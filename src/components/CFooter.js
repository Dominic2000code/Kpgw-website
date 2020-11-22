import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import "./CFooter.css"


const Footer = () => {
    return ( 
        <footer className="footer">
            <p>Join Us Virtually</p>
            <ul className="icon__list">
                <li className="instagram-icon social-list_item">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"> <InstagramIcon fontSize="large" /> </a>
                </li>
                <li className="twitter-icon social-list_item">
                    <a href="https://web.facebook.com/kindompowergloryworldwide" target="_blank" rel="noreferrer"> <FacebookIcon fontSize="large" /> </a>
                </li>
                <li className="facebook-icon social-list_item">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer"> <TwitterIcon fontSize="large"/> </a>
                </li>
            </ul>
            <p>No One Joins This Ark And Goes Down</p>
        </footer>
);
}

export default Footer;