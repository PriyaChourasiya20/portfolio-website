import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="aboutme-parent">
        <h3>About Me</h3>
        <h5>Why Choose Me?</h5>
      </div>
      <div className="aboutme-detail">
        {/* <div className="image"> */}
        <img src={require("../../assets/Home/me.jpg")} alt="img footer" />
        {/* </div> */}
        <div className="content">
          <p>
            Full stack web and mobile developer with background knowledge of
            MERN stacks with redux, along with a knack of building applications
            with utmost efficiency. Strong professional with a BSC willing to be
            an asset for an organization
          </p>

          <h5 style={{ paddingLeft: "20px" }}>Here are a Few Highlights:</h5>
          <div
            style={{
              display: "flex",

              //   justifyContent: "center",
              alignItems: "center",
              //   paddingLeft: "6px",
            }}
          >
            <p className="dot"></p>
            <p> Full Stack web and mobile development</p>
          </div>
          <div
            style={{
              display: "flex",
              //   justifyContent: "center",
              alignItems: "center",
              //   paddingLeft: "6px",
            }}
          >
            <p className="dot"></p>
            <p>Interactive Front End as per the design</p>
          </div>
          <div
            style={{
              display: "flex",
              //   justifyContent: "center",
              alignItems: "center",
              //   paddingLeft: "6px",
            }}
          >
            <p className="dot"></p>
            <p>React and React Native</p>
          </div>
          <div
            style={{
              display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   paddingLeft: "6px",
            }}
          >
            <p className="dot"></p>
            <p>Redux for State Mnanagement</p>
          </div>
          <div
            style={{
              display: "flex",
              //   justifyContent: "center",
              alignItems: "center",
              //   paddingLeft: "6px",
            }}
          >
            <p className="dot"></p>
            <p> Building REST API</p>
          </div>
          <div
            style={{
              display: "flex",
              //   justifyContent: "center",
              alignItems: "center",
              //   paddingLeft: "6px",
            }}
          >
            <p className="dot"></p>
            <p style={{ textAlign: "left !important", paddingLeft: "6px" }}>
              Managing database
            </p>
          </div>
          <div className="profile-optionss">
            <button className="btn primary-btn">Hire Me</button>
            <a href="#" download="Ehiedu ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
