import React, { useEffect, useState } from "react";
import "../css/test.css";
import Footer from "./Footer";
import Carousel from 'react-bootstrap/Carousel'
import { testdata } from "../js/testdata";
import netflix from '../assets/svg/netflix.svg'
import lexus from '../assets//svg/lexus.svg'
import ps from '../assets//svg/playstation.svg'
import warner from '../assets/svg/warner.svg'
import beats from '../assets/svg/beats.svg'
import adidas from '../assets/svg/adidas.svg'
import senn from '../assets/svg/sennheiser.svg'
import tag from '../assets/svg/tag.svg'
import taco from '../assets/svg/taco-bell.svg';


function Testimonials() {

  const [flag, setFlag] = useState(false)

    const screenResize = () => {
        if (window.innerWidth < 576) 
          setFlag(true)
        else 
          setFlag(false)
    }
    
    useEffect(()=>{
      window.addEventListener('load', screenResize)
      window.addEventListener('resize', screenResize)

      return () => {
        window.removeEventListener('load', screenResize)
        window.removeEventListener('resize', screenResize)
      }
    })

  return (
    <>
      <div className="test">
        {!flag ?  
        (
          <div className="test_container container">
            <h1 className="text-center">Testimonials</h1>
            <div className="row test_row">
              <div className="col-sm-4 border">
                <img src={netflix} alt="svg" />
              </div>
              <div className="col-sm-4 border">
                <img src={ps} alt="svg" />
              </div>
              <div className="col-sm-4 border">
                <img src={lexus} alt="svg" />
              </div>
            </div>
            <div className="row test_row border">
              <div className="col-sm-4 border">
                <img src={warner} alt="svg" />
              </div>
              <div className="col-sm-4 border">
                <img src={beats} alt="svg" />
              </div>
              <div className="col-sm-4 border">
                <img src={adidas} alt="svg" />
              </div>
            </div>
            <div className="row test_row border">
              <div className="col-sm-4 border">
                <img src={senn} alt="svg" />
              </div>
              <div className="col-sm-4 border">
                <img src={tag} alt="svg" />
              </div>
              <div className="col-sm-4 border">
                <img src={taco} alt="svg" />
              </div>
            </div>
          </div>
        ) : (
          <div className='w-100' style={{display: 'block'}}>
          <h1 className="text-center">Testimonials</h1>
          <Carousel className='test_slides' interval={1000} fade style={{width: '100%', height: 'auto'}}>
            {
              testdata.map(({id, img}) => {
                return (
                  <Carousel.Item key={id} className='w-100'>
                    <img
                      className='w-100'
                      src={img}
                      alt="First slide"
                    />
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
          </div>
        )
      }
      </div>
      <footer className="footer_section ">
        <Footer />
      </footer>
    </>
  );
}

export default Testimonials;
