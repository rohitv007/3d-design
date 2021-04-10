import React from 'react'
import Home from './Home';
import About from './About';
import Testimonials from './Testimonials';
import ReactFullpage from '@fullpage/react-fullpage';
import '../css/fullp.css'

const FullPage = () => (

    <ReactFullpage 

        licenseKey = {'KEY'}
        navigation =  {true}
        navigationTooltips = {['Home', 'About', 'Testimonials']}
        autoScrolling = {true}    
        scrollingSpeed = {1000}
        anchors = {['s1', 's2', 's3']}

        render={() => {
            return (
                <div id='3d_app'>
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <div className='home_comp'>
                                <Home/>
                            </div>
                        </div>
                        <div className="section">
                            <div className='about_comp'>
                                <About/>
                            </div>
                        </div>
                        <div className="section">
                            <div className='test_comp'>
                                <Testimonials/>
                            </div>
                        </div>
                    </ReactFullpage.Wrapper>
                </div>
            );
        }}
    />
)

export default FullPage

