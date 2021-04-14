import React from 'react'
import '../css/home.css'
import homevid from "../assets/home-vid.mp4"

function Home() {
    return (
        <div className='home'>
            <div className="container">
            <div className='home_video'>   
                {/* <iframe 
                    width="100%" height="100%" 
                    src="https://www.youtube.com/embed/4fQeaM62mOY" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    scrolling="yes"
                /> */}
                <video data-keepplaying data-autoplay muted width='100%' height='100%' loop>
                    <source src={homevid} type="video/mp4"/>
                </video>
            </div>
            </div>
        </div>
    )
}

export default Home

