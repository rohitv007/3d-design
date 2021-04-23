import React from 'react'
// import { FiInstagram, FiMail, FiPhone, FiTwitter } from 'react-icons/fi'
import '../css/sticky.css'
import insta from '../assets/svg/029-instagram.svg'
import twitter from '../assets/svg/008-twitter.svg'
import wapp from '../assets/svg/005-whatsapp.svg'
import mail from '../assets/svg/050-mail.svg'


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
