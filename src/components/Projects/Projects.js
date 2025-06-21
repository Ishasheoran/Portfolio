import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { motion } from "framer-motion";

import lms from "../../Assets/Projects/lms.png";
import vote from "../../Assets/Projects/vote.png";
import bank from "../../Assets/Projects/bank.png";
import blg from "../../Assets/Projects/1.png";

const projects = [
  {
    imgPath: lms,
    title: "College Library System",
    description: "A comprehensive MERN-stack application developed for my college department, currently in active use. The system streamlines library operations with secure authentication, role-based access, and an intuitive admin panel.",
    ghLink: "https://github.com/adarshh-h/HNB-Library-System.git",
    demoLink: "https://hnb-library-system.vercel.app/",
    techStack: ['MongoDB', 'Express', 'React', 'Node.js']
  },
  {
    imgPath: vote,
    title: "Share Your Vote",
    description: "A secure online voting platform built with the MERN stack. Includes admin dashboard for candidate management and real-time result tracking with robust security measures.",
    ghLink: "https://github.com/adarshh-h/Online-Voting-System",
    demoLink: "https://online-voting-system-sepia.vercel.app/",
    techStack: ['MongoDB', 'Express', 'React', 'Node.js']
  },
  {
    imgPath: blg,
    title: "BlogApp",
    description: "A modern blogging platform using the MERN stack. Features dark mode, responsive design, and full CRUD functionality for posts with user authentication.",
    ghLink: "https://github.com/adarshh-h/BlogApp-backend.git",
    demoLink: "https://profound-sprinkles-22fdf2.netlify.app/",
    techStack: ['MongoDB', 'Express', 'React', 'Node.js']
  },
  {
    imgPath: bank,
    title: "Bank Management System",
    description: "C++ banking system utilizing OOP principles and file streams for data storage. Supports account management, transactions, and balance inquiries through CLI.",
    ghLink: "https://github.com/adarshh-h/Bank-Management-System.git",
    techStack: ['C++', 'OOP']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

function Projects() {
  return (
    <Container fluid className="project-section" style={{ paddingTop: 0, marginTop: -72 }}>
      <Particle />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
          style={{
            paddingTop: 12,
            paddingBottom: 8,
            background: "none",
          }}
        >
          <h3
            className="project-heading"
            style={{
              fontWeight: 800,
              fontSize: "2.5rem",
              color: "#fff",
              marginBottom: 8,
              letterSpacing: "0.5px",
              textShadow: "0 2px 8px rgba(80,40,120,0.18)",
            }}
          >
            My Recent <span className="purple" style={{ color: "#c770f0" }}>Works</span>
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="g-4 mt-1">
            {projects.map((project, index) => (
              <Col key={index} xs={12} md={6} lg={4}>
                <motion.div variants={itemVariants}>
                  <ProjectCard {...project} isBlog={false} />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;