import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Iha.JPG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate developer with expertise in building responsive, user-friendly web applications. My strength lies in crafting clean, efficient code with modern technologies like React, JavaScript, Tailwind CSS, and Node.js. I love turning ideas into interactive experiences while prioritizing performance and accessibility. 🤷‍♂️
              <br />
              <br />🔹 What I Bring to the Table:<br />

🚀 Full-stack proficiency with a focus on frontend development.<br />

🎨 Eye for design and detail, ensuring intuitive user interfaces.<br />

🔄 Experience with REST APIs, state management, and databases.<br />

📱 Commitment to responsive and cross-browser compatibility.<br />
              
              <br />
              <br />
              My fields of interest include building new&nbsp;
              <i>
                <b className="purple">web technologies and products.</b>
              </i>
              <br />
              <br />
             When I’m not coding, I enjoy contributing to open-source projects, learning new frameworks, and sharing tech insights. Let’s build something amazing together!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ishasheoran"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/isha-sheoran-8a391026b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/adarshh___h?igsh=ZTM4OXU0MGJ5OXkx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
