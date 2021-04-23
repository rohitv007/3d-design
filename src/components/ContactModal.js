import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import '../css/contactmodal.css'


function ContactModal({open, close}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')

    if (!open) return null;

    const handleSub = (e) => {
        e.preventDefault();
        console.log('Subscribed to 3D');
    }

    return (
        <Fade top>
            <div id='cmodal' className='contact_modal animate__animated' data-backdrop="static">
                <div className="modal_header">
                    <h1>Contact Us</h1>
                    <div onClick={close} className='container closeBtn'>
                        <div className='line1'></div>
                        <div className='line2'></div>
                    </div>
                </div>
                <div className="form_container container-fluid">
                    <form className='form' onSubmit={handleSub}>
                        <div className="row form_row">
                            <label htmlFor='name'>Name</label>
                            <input onChange={(e) => setName(e.target.value)} value={name} type="text" name='name' required/>
                        </div>
                        <div className="row form_row">
                            <label htmlFor='email'>Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name='email' required/>
                        </div>
                        <div className="row form_row">
                            <label htmlFor='mobile'>Mobile</label>
                            <input onChange={(e) => setMobile(e.target.value)} value={mobile} type="text" name='mobile' required/>
                        </div>
                        <div className="row form_row">
                            <button type='submit'>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fade>
    )
}

export default ContactModal
