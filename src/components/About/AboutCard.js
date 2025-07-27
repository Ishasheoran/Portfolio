import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ background: "rgba(40, 20, 60, 0.18)", borderRadius: 16, boxShadow: "0 4px 24px 0 rgba(120, 60, 180, 0.13)", border: "1.5px solid #c084f5", padding: 16, marginTop: -70 }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "1em", lineHeight: 1.8, color: "#e0d7f7", marginBottom: 18, fontWeight: 400 }}>
            Hello everyone! I'm <span className="purple" style={{ fontWeight: 600, fontSize: "1em" }}>Isha</span> from <span className="purple" style={{ fontWeight: 600, fontSize: "1em" }}>Charkhi Dadri, Haryana, India</span>.<br /><br />
            I have successfully completed my Bachelor of Technology in Computer Science and Engineering from Hemvati Nandan Bahuguna Garhwal University (a Central University) in Srinagar Garhwal, Uttarakhand.<br /><br />
            Beyond coding, I am passionate about:
          </p>
          <ul style={{ marginLeft: 0, paddingLeft: 22, marginBottom: 18 }}>
            <li className="about-activity" style={{ marginBottom: 7, color: "#c084f5", fontWeight: 500, fontSize: "0.97em", letterSpacing: 0.1 }}> 
              <ImPointRight style={{ marginRight: 8, fontSize: "1em" }} /> Sketching
            </li>
            <li className="about-activity" style={{ marginBottom: 7, color: "#c084f5", fontWeight: 500, fontSize: "0.97em", letterSpacing: 0.1 }}>
              <ImPointRight style={{ marginRight: 8, fontSize: "1em" }} /> Travelling
            </li>
            {/* <li className="about-activity" style={{ marginBottom: 7, color: "#c084f5", fontWeight: 500, fontSize: "0.97em", letterSpacing: 0.1 }}>
              <ImPointRight style={{ marginRight: 8, fontSize: "1em" }} /> Writing cricket blogs
            </li> */}
          </ul>
          <p style={{ color: "#c084f5", fontStyle: "italic", fontWeight: 600, fontSize: "1em", marginBottom: 0, letterSpacing: 0.2 }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer" style={{ color: "#a588c0", marginTop: 10, fontSize: "0.95em", fontWeight: 500 }}>Isha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
