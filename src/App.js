import React, { useState } from 'react'
import { FiInstagram, FiMail, FiPhone, FiTwitter } from 'react-icons/fi';
import './App.css';
import ContactModal from './components/ContactModal';
import FullPage from './components/FullPage';
import NavBar from './components/NavBar';


function App() {

  const [showModal, setShowModal] = useState(false)

  // window.addEventListener('mousewheel', () => {
  //   setShowModal(false)
  // })
  
  return (
    <div className="App">
      <NavBar navBtnOpen={() => setShowModal(true)}/>
      <FullPage/>
      <ContactModal open={showModal} close={() => setShowModal(false)}/>
      <ul className='home_social' style={{background: '#444', display: 'block', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: '35%', right: '0', padding: '0'}}>
        <li><a target='blank' rel='noopener noreferrer' href='https://www.instagram.com/'><FiInstagram size="1.1em"/></a></li>
        <li><a target='blank' rel='noopener noreferrer' href='https://twitter.com/'><FiTwitter size="1.1em"/></a></li>
        <li><a target='blank' rel='noopener noreferrer' href='tel: +4733378901'><FiPhone size="1.1em"/></a></li>
        <li><a target='blank' rel='noopener noreferrer' href="mailto:someone@example.com"><FiMail size="1.1em"/></a></li>
      </ul>
    </div>
  );
}

export default App;
