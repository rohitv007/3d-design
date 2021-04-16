import React from 'react'
import '../css/home.css'
import homevid from "../assets/clock.mp4"

function Home() {
    return (
        <div className='home'>
            {/* <div className="container"> */}
            <div className='home_video'>   
                <video keepPlaying autoPlay muted width='100%' loop>
                    <source src={homevid} type="video/mp4"/>
                </video>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Home

