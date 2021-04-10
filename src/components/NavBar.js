import React from 'react'
import '../css/navbar.css'
import { handleOpen } from './ContactModal'

function NavBar() {

    return (
        <div className='navbar'>
            <div className="main_navbar">
                <div className='navbar_header'>
                    <p className="shadow">3D</p>
                </div>
                <nav className="navlinks">
                    <ul className='links'>
                        <li className="navlink"><a href='#s1' className="shadow">Home</a></li>
                        <li className="navlink"><a href='#s2' className="shadow">About</a></li>
                        <li className="navlink"><a href='#s3' className="shadow">Testimonials</a></li>
                        <li className="navlink"><button className="shadow" onClick={handleOpen}>Contact</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
