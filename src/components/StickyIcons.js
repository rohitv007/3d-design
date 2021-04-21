import React from 'react'
import { FiInstagram, FiMail, FiPhone, FiTwitter } from 'react-icons/fi'
import '../css/sticky.css'

function StickyIcons() {
    return (
        <>
            <ul className='home_social'>
                <li><a target='blank' rel='noopener noreferrer' href='https://www.instagram.com/'><FiInstagram size="1.1em"/></a></li>
                <li><a target='blank' rel='noopener noreferrer' href='https://twitter.com/'><FiTwitter size="1.1em"/></a></li>
                <li><a target='blank' rel='noopener noreferrer' href='tel: +4733378901'><FiPhone size="1.1em"/></a></li>
                <li><a target='blank' rel='noopener noreferrer' href="mailto:someone@example.com"><FiMail size="1.1em"/></a></li>
            </ul>
        </>
    )
}

export default StickyIcons
