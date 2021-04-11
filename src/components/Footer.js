import React from 'react'
import { FiInstagram, FiMail, FiPhone, FiTwitter } from 'react-icons/fi';
import '../css/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_container">
                <div className="footer_left">
                    <p>2021 &copy; 3D&nbsp;Karigari</p>
                </div>
                <div className="footer_right">
                    <ul className='social_links'>
                        <li><FiInstagram fill='rgb(250, 57, 89, 0.8)' size="1.5em"/></li>
                        <li><FiTwitter fill='#00aced' size="1.5em"/></li>
                        <li><FiPhone fill='rgb(0, 200, 0)' size="1.5em"/></li>
                        <li><FiMail fill='#4285F4' size="1.5em"/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
