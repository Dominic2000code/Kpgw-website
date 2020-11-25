import React from 'react'
import Img from 'gatsby-image'

function AboutUsCard({image, name}) {
    return (
        <div className="card shadow" style={{width: '19rem', height: '21rem'}}>
            <Img fixed={image} className="card-img-top p-0" />
            <div className="card-body p-0">
                <p className="card-title p-0 text-center"> {name} </p>
            </div>
        </div>
    )
}

export default AboutUsCard
