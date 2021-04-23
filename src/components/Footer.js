import React from 'react'
// import { FiInstagram, FiMail, FiPhone, FiTwitter } from 'react-icons/fi';
import makeii from '../assets/makeii.png'
import '../css/footer.css'
import insta from '../assets/svg/029-instagram.svg'
import twitter from '../assets/svg/008-twitter.svg'
import wapp from '../assets/svg/005-whatsapp.svg'
import mail from '../assets/svg/050-mail.svg'

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
