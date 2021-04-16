import React from 'react'
import '../css/navbar.css'
import 'animate.css';

function NavBar({ navBtnOpen }) {

    return (
        <div className='navbar'>
            <nav>
                <div className='navbar_header'>
                    <p>3D</p>
                </div>
                <ul className='nav-links'>
                    <li className="navlink"><a href='/'>Home</a></li>
                    <li className="navlink"><a href='/'>Products</a></li>
                    {/* <li className="navlink"><a href='/'>Testimonials</a></li> */}
                    <ul className='contact_navlink'>
                        <li className="navlink"><button onClick={navBtnOpen}>Contact</button></li>
                    </ul>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
