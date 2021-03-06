import React, { useState } from 'react'
import './App.css'
import ContactModal from './components/ContactModal'
import FullPage from './components/FullPage'
import NavBar from './components/NavBar'
import StickyIcons from './components/StickyIcons'


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
      <StickyIcons/>
    </div>
  );
}

export default App;
