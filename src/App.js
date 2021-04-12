import React from 'react'
// import { Helmet } from 'react-helmet';
import './App.css';
import ContactModal from './components/ContactModal';
import FullPage from './components/FullPage';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      {/* <Helmet>
        <script src="./js/scrolling.js" type="text/javascript" />
      </Helmet> */}
      <NavBar/>
      <FullPage/>
      <ContactModal/>
    </div>
  );
}

export default App;
