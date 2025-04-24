import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

import lms from "../../Assets/Projects/lms.png";
import vote from "../../Assets/Projects/vote.png";
import bank from "../../Assets/Projects/bank.png";
import blg from "../../Assets/Projects/1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lms}
              isBlog={false}
              title="Library Management System"
              description="Developed a MERN-stack library management system to streamline book operations for my college. Implemented authentication and role-based access for Admin and Student. Designed an Admin Panel to manage books (add, edit, delete, search) with category and tracking deatils. Built a book issue and return system with due date tracking and fine calculation. Created a student portal to browse books,track borrowing history."
              ghLink="https://github.com/adarshh-h/Library-Management-System.git"
              demoLink="https://library-management-system-liart-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vote}
              isBlog={false}
              title="Share Your Vote"
              description="Developed a secure online voting system using the MERN stack. Designed an Admin Panel for candidate management and real-time result tracking. Ensured data integrity and security, preventing duplicate or unauthorized votes of user (voters)."
              ghLink="https://github.com/adarshh-h/Online-Voting-System"
              demoLink="https://online-voting-system-sepia.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blg}
              isBlog={false}
              title="BlogApp"
              description="Builiding a fully functional blogging platform using MERN stack. Enabled users to create, edit, and delete blog posts in a seamless and responsive UI. Designed a dark mode feature, ensuring an enhanced user experience across devices."
              ghLink="https://github.com/adarshh-h/BlogApp-backend.git"
              demoLink="https://profound-sprinkles-22fdf2.netlify.app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Bank Management System"
              description="Developed a banking system in C++, utilizing Object-Oriented Programming (OOP) concepts. Implemented file streams for efficient data storage and retrieval. Designed key banking functionalities, including account creation, transactions, balance inquiries, and accountmanagement"
              ghLink="https://github.com/adarshh-h/Bank-Management-System.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
