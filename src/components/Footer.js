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
                        <li><a target='blank' rel='noopener noreferrer' href='https://www.instagram.com/'><FiInstagram color='black' fill='rgb(250, 57, 89, 0.8)' size="1.2em"/></a></li>
                        <li><a target='blank' rel='noopener noreferrer' href='https://twitter.com/'><FiTwitter color='black' fill='#00aced' size="1.2em"/></a></li>
                        <li><a target='blank' rel='noopener noreferrer' href='tel: +4733378901'><FiPhone color='black' fill='rgb(0, 200, 0)' size="1.2em"/></a></li>
                        <li><a target='blank' rel='noopener noreferrer' href="mailto:someone@example.com"><FiMail color='black' fill='#4285F4' size="1.2em"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
