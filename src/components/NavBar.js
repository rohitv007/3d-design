import React from 'react'
import '../css/navbar.css'
import { handleOpen } from './ContactModal'

function NavBar() {

    return (
        <div className='navbar'>
            <nav>
                <div className='navbar_header'>
                    <p>3D</p>
                </div>
                <ul className='nav-links'>
                    <li className="navlink"><a href='/' className="shadow">Home</a></li>
                    <li className="navlink"><a href='/' className="shadow">About</a></li>
                    <li className="navlink"><a href='/' className="shadow">Testimonials</a></li>
                    <li className="navlink"><button className="shadow" onClick={handleOpen}>Contact</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
