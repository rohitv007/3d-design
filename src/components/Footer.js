import React from 'react'
import { FiInstagram, FiMail, FiPhone, FiTwitter } from 'react-icons/fi';
import makeii from '../assets/makeii.png'
import '../css/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_container row">
                <div className="footer_left col-6 col-sm-4">
                    <p>2021 &copy; 3D&nbsp;Karigari</p>
                </div>
                <div className="footer_mid col-6 col-sm-4">
                    <img src={makeii} alt='#makeinindia'/>  
                </div>
                <div className="footer_right col-12 col-sm-4">
                    <ul className='social_links'>
                        <li><FiInstagram fill='rgb(250, 57, 89, 0.8)' size="1.5em"/></li>
                        <li><FiTwitter fill='#00aced' size="1.5em"/></li>
                        <li><FiPhone fill='rgb(0, 200, 0)' size="1.5em"/></li>
                        <li><FiMail fill='#4285F4' size="1.5em"/></li>
                    </ul>
                    {/* <select name="Social Links" id="mediaLinks" className="select_links">
                        <option value="instagram">Instagram</option>
                        <option value="twitter">Twitter</option>
                        <option value="phone">Phone</option>
                        <option value="mail">Mail</option>
                    </select> */}
                </div>
            </div>
        </div>
    )
}

export default Footer
