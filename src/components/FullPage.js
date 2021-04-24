import React from 'react'
import Home from './Home'
import About from './About'
import Testimonials from './Testimonials'
// import ReactFullpage from '@fullpage/react-fullpage'
import '../css/fullp.css'
import '../js/scrolling'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

// const FullPage = () => (

//     <ReactFullpage 
//         licenseKey = {null}                       // required
//         navigation =  {true}
//         navigationTooltips = {['Home', 'About', 'Testimonials']}
//         autoScrolling = {true}    
//         scrollingSpeed = {1000}
//         controlArrows = {false}
//         slidesNavigation = {true}
//         scrollHorizontally = {true}
//         fitToSection = {true}
//         delay = {0}
//         // anchors = {['s1', 's2', 's3']}

//         render={() => {

//             return (
//                 <div id='3d_app'>
//                     <ReactFullpage.Wrapper>
//                         <div className="section section1">
//                             <div className='home_comp'>
//                                 <Home/>
//                             </div>
//                         </div>
//                         <div  className="section section2">
//                             <div className='slide'>
//                                 <About/>
//                             </div>
//                             <div className="slide">
//                                 <About/>
//                             </div>
//                             <div className="slide">
//                                 <About/>
//                             </div>
//                         </div>
//                         <div className="section section4">
//                             <div className='test_comp'>
//                                 <Testimonials/>
//                             </div>
//                         </div>
//                     </ReactFullpage.Wrapper>
//                 </div>
//             );
//         }}
//     />
// )

function FullPage() {

    return (
        <Fullpage>
            <FullPageSections>
                <FullpageSection><Home/></FullpageSection>
                <FullpageSection><About/></FullpageSection>
                <FullpageSection><Testimonials/></FullpageSection>
            </FullPageSections>
        </Fullpage>
    );
}   



export default FullPage

