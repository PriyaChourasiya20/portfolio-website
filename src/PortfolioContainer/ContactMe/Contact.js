import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-parent">
        <h3>Contact Me</h3>
        <h5>Lets Keep In Touch</h5>
      </div>

      <div className="contact-detail">
        <div style={{ width: "60%", padding: "10px" }}>
          <p style={{ color: "white" }}>Get In Touch 📧</p>
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <p style={{ color: "white" }}>Send Your Email Here!</p>
          <img
            src={require("../../assets/mail.jpeg")}
            alt="img footer"
            style={{ width: "100%", height: "50%" }}
          />
        </div>
        <div
          style={{
            width: "40%",
            borderRadius: "20px",
            padding: "20px",
            border: "2px solid black",
            backgroundColor: "white",
            marginTop: "50px",
          }}
        >
          <form action="/action_page.php">
            <label for="username">Username:</label> <br />
            <input type="text" id="username" name="username" />
            <br />
            <label for="pwd">Password:</label>
            <br />
            <input type="password" id="pwd" name="pwd" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
