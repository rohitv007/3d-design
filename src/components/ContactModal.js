import React from 'react'
import '../css/contactmodal.css'

export const handleClose = () => {
    document.getElementById('cmodal').style.visibility = 'hidden'
};

export const handleOpen = () => {
    document.getElementById('cmodal').style.visibility = 'visible'
};


function ContactModal() {

    const handleSub = (e) => {
        e.preventDefault();
        console.log('Subscribed to 3D');

        handleClose();
    }
    // console.log('outside scroll event')
    // window.addEventListener("scroll", handleClose)
    // let element = document.getElementById('3d_app');
    // element.onscroll = function(event) {
    //     console.log("scrolling...")
    //     handleClose();
    // };

    return (
        <div id='cmodal' className='contact_modal' data-backdrop="static">
            <div className="modal_header">
                <h1>Contact Us</h1>
                <span onClick={handleClose}>&times;</span>
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
    )
}

export default ContactModal
