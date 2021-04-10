import React from 'react'
import { FiInstagram, FiMail, FiPhone, FiTwitter } from 'react-icons/fi';
import '../css/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_container">
                <div className="footer_left">
                    <p>2021 &copy; 3D Karigari</p>
                </div>
                <div className="footer_right">
                    <ul className='social_links'>
                        <li><FiInstagram size="1.5em"/></li>
                        <li><FiTwitter size="1.5em"/></li>
                        <li><FiPhone size="1.5em"/></li>
                        <li><FiMail size="1.5em"/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
