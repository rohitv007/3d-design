import React from 'react'
import './App.css';
import ContactModal from './components/ContactModal';
import FullPage from './components/FullPage';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <FullPage/>
      <ContactModal/>
    </div>
  );
}

export default App;
