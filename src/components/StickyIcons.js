import React from 'react'
// import { FiInstagram, FiMail, FiPhone, FiTwitter } from 'react-icons/fi'
import '../css/sticky.css'
import insta from '../assets/174834-social-media-logos/png/029-instagram.png'
import twitter from '../assets/174834-social-media-logos/png/008-twitter.png'
import wapp from '../assets/174834-social-media-logos/png/005-whatsapp.png'
import mail from '../assets/174834-social-media-logos/svg/050-mail.svg'


function StickyIcons() {
    return (
        <>
            <ul className='home_social'>
                <li><a target='blank' rel='noopener noreferrer' href='https://www.instagram.com/'><img src={insta} width='18px' height='18px' alt="svg"/></a></li>
                <li><a target='blank' rel='noopener noreferrer' href='https://twitter.com/'><img src={twitter} width='18px' height='18px' alt="svg"/></a></li>
                <li><a target='blank' rel='noopener noreferrer' href='https://api.whatsapp.com/send?phone=+91999999999' ><img src={wapp} width='18px' height='18px' alt="svg"/></a></li>
                <li><a target='blank' rel='noopener noreferrer' href="mailto:someone@example.com"><img src={mail} width='18px' height='18px' alt="svg"/></a></li>
            </ul>
        </>
    )
}

export default StickyIcons
