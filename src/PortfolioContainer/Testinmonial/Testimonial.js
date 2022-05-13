import React from "react";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <div className="test-container">
      <div className="test-parent">
        <h3>Testimonial</h3>
        <h5>What My Client Say About Me</h5>
      </div>

      <div className="card-container">
        <div className="card-detail">
          <p>
            Full stack web and mobile developer with background knowledge of
            MERN stacks with redux, along with a knack
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={require("../../assets/Testimonial/bg-1.jpg")}
              alt="img footer"
              style={{ width: "50px", height: "50px", borderRadius: "50px" }}
            />
            <div>
              <p>John Smith</p>
              <p>Director</p>
            </div>
          </div>
        </div>

        <div className="card-detail">
          <p>
            Full stack web and mobile developer with background knowledge of
            MERN stacks with redux, along with a knack
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={require("../../assets/Testimonial/bg-1.jpg")}
              alt="img footer"
              style={{ width: "50px", height: "50px", borderRadius: "50px" }}
            />
            <div>
              <p>John Smith</p>
              <p>Director</p>
            </div>
          </div>
        </div>

        <div className="card-detail">
          <p>
            Full stack web and mobile developer with background knowledge of
            MERN stacks with redux, along with a knack
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={require("../../assets/Testimonial/bg-1.jpg")}
              alt="img footer"
              style={{ width: "50px", height: "50px", borderRadius: "50px" }}
            />
            <div>
              <p>John Smith</p>
              <p>Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
