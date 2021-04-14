import React from "react";
import aboutimg from "../assets/design.jpg";
import "../css/about.css";

function About() {
  return (
    <div className="about">
      <div className="container-fluid about_container">
        <div className="row about_row row1">
          <div className="col-10 col-sm-6 col-md-6 col-lg-6 about_img">
            <img src={aboutimg} alt="pic" className="shadow rounded" />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <h1>What is 3D</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
          </div>
        </div>
        <div className="row about_row row2">
          <div className="col-10 col-sm-6 col-md-6 col-lg-6 order-sm-2 order-1 about_img">
            <img src={aboutimg} alt="pic" className="shadow rounded" />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 order-sm-1 order-2">
          <h1>What is 3DKarigari </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
