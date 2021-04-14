import React from 'react'
import Fade from 'react-reveal/Fade';
import '../css/contactmodal.css'


function ContactModal({open, close}) {

    if (!open) return null;

    const handleSub = (e) => {
        e.preventDefault();
        console.log('Subscribed to 3D');
    }

    return (
        <Fade right>
            <div id='cmodal' className='contact_modal animate__animated' data-backdrop="static">
                <div className="modal_header">
                    <h1>Contact Us</h1>
                    <div onClick={close} className='container closeBtn'>
                        <div className='line1'></div>
                        <div className='line2'></div>
                    </div>
                </div>
                <div className="form_container container-fluid">
                    <form onSubmit={handleSub}>
                        <div className="row form_row">
                            <label htmlFor='name'>Name</label>
                            <input type="text" name='name' required/>
                        </div>
                        <div className="row form_row">
                            <label htmlFor='email'>Email</label>
                            <input type="text" name='email' required/>
                        </div>
                        <div className="row form_row">
                            <label htmlFor='mobile'>Mobile</label>
                            <input type="text" name='mobile' required/>
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
