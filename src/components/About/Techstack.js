import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiBootstrap
} from "react-icons/di";
import {
    SiPostgresql,
} from "react-icons/si";

const techStack = [
  { icon: <CgCPlusPlus />, name: "C++" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <DiGit />, name: "Git" },
  {icon: <DiBootstrap />, name:"Bootstrap"}
  // { icon: <SiNextdotjs />, name: "Next.js" },
  // { icon: <DiJava />, name: "Java" },
];

function Techstack() {
  const [hovered, setHovered] = useState(null);
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, idx) => (
        <Col
          key={idx}
          xs={6}
          sm={4}
          md={2}
          className="tech-icons"
          style={{
            marginBottom: "24px",
            background: hovered === idx ? "rgba(120, 60, 180, 0.18)" : "rgba(40, 20, 60, 0.18)",
            borderRadius: "14px",
            boxShadow: hovered === idx ? "0 8px 24px 0 rgba(120, 60, 180, 0.22)" : "0 4px 16px 0 rgba(120, 60, 180, 0.13)",
            transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
            padding: "28px 0 16px 0",
            cursor: "pointer",
            minHeight: "140px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: hovered === idx ? "scale(1.07)" : "scale(1)",
          }}
          onMouseOver={() => setHovered(idx)}
          onMouseOut={() => setHovered(null)}
        >
          {/* Icon uses .tech-icons font-size (4.5em) by default */}
          {tech.icon}
          {/* <div style={{ fontSize: "1em", marginTop: "12px", fontWeight: 400, color: "#e0d7f7", letterSpacing: "0.5px" }}>{tech.name}</div> */}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
