import React from 'react'
import '../css/home.css'
import homevid from "../assets/clock.mp4"

function Home() {
    return (
        <div className="home">
            <video id="homeVid" keepplaying="true" loop autoPlay muted width='100%'>
                <source src={homevid} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Home

