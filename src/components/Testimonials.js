import React from "react";
import "../css/test.css";
// import pssvg from "../assets/playstation.svg";
import lexussvg from "../assets/lexus.svg";
import Footer from "./Footer";

function Testimonials() {
  return (
    <div className="main_contain">
      <div className="test">
        <div className="test_container container">
          <div className="row test_row">
            <div className="col-4 col-sm-4">
              <img src={lexussvg} alt="PS" />
            </div>
            <div className="col-4 col-sm-4">
              <img src={lexussvg} alt="PS" />
            </div>
            <div className="col-4 col-sm-4">
              <img src={lexussvg} alt="PS" />
            </div>
          </div>
          <div className="row test_row">
            <div className="col-4 col-sm-4">
              <img src={lexussvg} alt="PS" />
            </div>
            <div className="col-4 col-sm-4">
              <img src={lexussvg} alt="PS" />
            </div>
            <div className="col-4 col-sm-4">
              <img src={lexussvg} alt="PS" />
            </div>
          </div>
          <div className="row test_row">
            <div className="col-4 col-sm-4">
              <img src={lexussvg} alt="PS" />
            </div>
            <div className="col-4 col-sm-4">
              <img src={lexussvg} alt="PS" />
            </div>
            <div className="col-4 col-sm-4">
              <img src={lexussvg} alt="PS" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_section">
        <Footer />
      </div>
    </div>
  );
}

export default Testimonials;
