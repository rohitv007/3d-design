import React from 'react'
import aboutimg from "../assets/design.jpg";
import '../css/about2.css'
import Carousel from 'react-bootstrap/Carousel'

function About2() {
    return (
        <Carousel className='about2_slides' style={{width: '100%', height: 'auto'}} interval={3000} fade>
            <Carousel.Item>
                <div className="slide-container container">
                    <div className="col-10 col-sm-6 col-md-6 col-lg-6 about_img">
                        <img src={aboutimg} alt="pic" className="shadow rounded"/>
                    </div>
                    <div className="text-content col-12 col-sm-6 col-md-6 col-lg-6">
                        <h1>What is 3D</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate
                        </p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slide-container container">
                    <div className="col-10 col-sm-6 col-md-6 col-lg-6 order-sm-2 order-1 about_img">
                        <img src={aboutimg} alt="pic" className="shadow rounded"/>
                    </div>
                    <div className="text-content col-12 col-sm-6 col-md-6 col-lg-6 order-sm-1 order-2">
                        <h1>What is 3DKarigari</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate
                        </p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default About2
