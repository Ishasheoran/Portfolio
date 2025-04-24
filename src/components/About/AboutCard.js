import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I’m <span className="purple">Adarsh Kumar Gupta </span>
            from <span className="purple"> Muzaffarpur, Bihar, India. </span>
            {/* <br />
            I am currently employed as a software developer at Juspay.
            <br /> */}
            <br />
            <br/>
            I’m a final year Computer Science and Engineering student at Hemvati Nandan Bahuguna Garhwal University (A Central University), located in Srinagar Garhwal, Uttarakhand.
            <br />
            <br/>
            Apart from coding, I’m passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Cricket Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Adarsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
