import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { motion } from "framer-motion";

import lms from "../../Assets/Projects/Sms.png";
import vote from "../../Assets/Projects/Land.png";
import bank from "../../Assets/Projects/Solar.png";
import blg from "../../Assets/Projects/Job.png";

const projects = [
  {
    imgPath: lms,
    title: "University Management System",
    description: "A full-stack web application for managing student records, featuring user authentication, CRUD operations, and a responsive UI.",
    demoLink: "https://student-management-system-chi-jet.vercel.app/",
    techStack: ['MongoDB', 'Express', 'React', 'Node.js']
  },
  
  {
    imgPath: blg,
    title: "Job Tracker",
    description: "A platform with filtering, job listings, and application tracking. Developed using React, Redux, and Tailwind CSS for a seamless user experience",
    ghLink: "https://github.com/Ishasheoran/job_frontend",
    demoLink: "https://job-frontend-plum.vercel.app/",
    techStack: ['MongoDB', 'Express', 'React', 'Node.js']
  },{
    imgPath: vote,
    title: "Ecommerce Landing Page",
    description: "A sleek, responsive landing page designed for a SaaS product, with animations and a clean layout.",
    ghLink: "https://github.com/Ishasheoran/Landingpage",
    demoLink: "https://ishasheoran.github.io/Landingpage",
    techStack: ['HTML', 'CSS']
  },
  {
    imgPath: bank,
    title: "Solar Company Website",
    description: "An interactive landing page promoting solar energy solutions, featuring dynamic UI elements and smooth scrolling.",
    ghLink: "https://github.com/Ishasheoran/Solar",
      demoLink: "https://ishasheoran.github.io/Solar/",
    techStack: ['HTML', 'CSS','JavaScript']
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