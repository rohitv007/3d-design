import React from 'react'
// import { FiInstagram, FiMail, FiPhone, FiTwitter } from 'react-icons/fi';
import makeii from '../assets/makeii.png'
import '../css/footer.css'
import insta from '../assets/174834-social-media-logos/png/029-instagram.png'
import twitter from '../assets/174834-social-media-logos/png/008-twitter.png'
import wapp from '../assets/174834-social-media-logos/png/005-whatsapp.png'
import mail from '../assets/174834-social-media-logos/svg/050-mail.svg'

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
                        <li><a target='blank' rel='noopener noreferrer' href='https://www.instagram.com/'><img src={insta} width='18px' height='18px' alt="svg"/></a></li>
                        <li><a target='blank' rel='noopener noreferrer' href='https://twitter.com/'><img src={twitter} width='18px' height='18px' alt="svg"/></a></li>
                        <li><a target='blank' rel='noopener noreferrer' href='https://api.whatsapp.com/send?phone=+91XXXX'><img src={wapp} width='18px' height='18px' alt="svg"/></a></li>
                        <li><a target='blank' rel='noopener noreferrer' href="mailto:someone@example.com"><img src={mail} width='18px' height='18px' alt="svg"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
