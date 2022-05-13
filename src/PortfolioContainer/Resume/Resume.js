import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-parent">
        <h3>Resume</h3>
        <h5>My formal Bio Details</h5>
      </div>

      <div className="resume-details">
        <div className="resume-description">
          <p
            style={{
              backgroundColor: "#1f2235",
              color: "white",
              width: "250px",
              height: "40px",
              borderRadius: " 0 30px 30px 0",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            Education
          </p>
          <p>Work History</p>
          <p>Programming Skills</p>
          <p>Projects</p>
          <p>Interests</p>
        </div>
        <div className="resume-titles">
          <div style={{ marginLeft: "12px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "6px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="resume-dot"></p>
                <p> Full Stack web and mobile development</p>
              </div>

              <p className="resume-year">2014-2018</p>
            </div>

            <p style={{ marginLeft: "12px" }}>
              BACHELOR OF SCIENCE INFORMATION TECHNOLOGY
            </p>
          </div>

          <div style={{ marginLeft: "12px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "6px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="resume-dot"></p>
                <p> National Youth Service Corps</p>
              </div>

              <p className="resume-year">2014-2018</p>
            </div>

            <p style={{ marginLeft: "12px" }}>
              Ministry Of Science And Technogy. Uyo Akwa Ibom State
            </p>
          </div>

          <div style={{ marginLeft: "12px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "6px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="resume-dot"></p>
                <p> High School</p>
              </div>

              <p className="resume-year">2014-2018</p>
            </div>

            <p style={{ marginLeft: "12px" }}>Command Secondary School Mbiri</p>
          </div>
        </div>
      </div>
    </div>
  );
}
