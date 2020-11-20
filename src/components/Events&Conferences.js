import { Button } from '@material-ui/core';
import React from 'react';
import "./Events&Conferences.css"
import Img from "gatsby-image"
import {graphql, useStaticQuery} from "gatsby"


const EventsAndConferences = () => {
    const data = useStaticQuery(graphql`
        query{
            imageSharp(fluid:{originalName: {eq: "Event.jpg"}}){
                fluid{
                    ...GatsbyImageSharpFluid
                }
            }
        }
    `)

    return (
        <div className="Container_ mb-5 mt-5">
            <h2 className="head-title_">Events and conferences</h2>
            <div className="img">
                <Img fluid={ data.imageSharp.fluid} />
            </div>
            <Button variant="contained" className="btn mt-3 " color="primary" size="large" >View</Button>
        </div>
    );
}

export default EventsAndConferences;