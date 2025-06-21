// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";
// import { FaCode } from "react-icons/fa";

// function ProjectCards(props) {
//   return (
//     <Card
//       className="project-card-view enhanced-project-card"
//       style={{
//         borderRadius: 20,
//         background: "rgba(40, 20, 60, 0.22)",
//         border: "1.5px solid #c084f5",
//         boxShadow: "0 8px 32px 0 rgba(120, 60, 180, 0.18)",
//         marginBottom: 32,
//         transition: "transform 0.25s, box-shadow 0.25s",
//         overflow: "hidden",
//       }}
//     >
//       <Card.Img
//         variant="top"
//         src={props.imgPath}
//         alt="card-img"
//         style={{
//           borderRadius: "18px 18px 0 0",
//           padding: 0,
//           objectFit: "cover",
//           minHeight: 180,
//           maxHeight: 220,
//           width: "100%",
//         }}
//       />
//       <Card.Body style={{ padding: 26 }}>
//         <Card.Title
//           style={{
//             fontWeight: 700,
//             fontSize: "1.3em",
//             color: "#e0d7f7",
//             marginBottom: 8,
//             letterSpacing: "normal",
//             position: "relative",
//           }}
//         >
//           {props.title}
//           <div
//             style={{
//               width: 48,
//               height: 4,
//               background: "linear-gradient(90deg, #c770f0 60%, #623686 100%)",
//               borderRadius: 2,
//               marginTop: 6,
//               marginBottom: 10,
//             }}
//           />
//         </Card.Title>
//         <Card.Text
//           style={{
//             textAlign: "justify",
//             color: "#d1c4e9",
//             fontSize: "1.08em",
//             marginBottom: 18,
//             minHeight: 70,
//           }}
//         >
//           {props.description}
//         </Card.Text>
//         {props.techStack && props.techStack.length > 0 && (
//           <div style={{ marginBottom: 18, marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
//             {props.techStack.map((tech, i) => (
//               <span
//                 key={i}
//                 className="project-tech-tag"
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   background: "linear-gradient(90deg, #f3e6ff 70%, #e9d6fa 100%)",
//                   color: "#6c2eb7",
//                   borderRadius: 16,
//                   padding: "5px 14px 5px 10px",
//                   fontSize: "0.97em",
//                   border: "1px solid #e0cfff",
//                   fontWeight: 500,
//                   boxShadow: "0 2px 8px 0 rgba(120, 60, 180, 0.07)",
//                   letterSpacing: 0.1,
//                   marginRight: 0,
//                   marginBottom: 0,
//                   transition: 'background 0.2s',
//                 }}
//               >
//                 <FaCode style={{ marginRight: 7, fontSize: '1em', color: '#a084e8' }} />
//                 {tech}
//               </span>
//             ))}
//           </div>
//         )}
//         <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 8 }}>
//           <Button
//             variant="primary"
//             href={props.ghLink}
//             target="_blank"
//             style={{ minWidth: 110, fontWeight: 500, borderRadius: 8, fontSize: "1em" }}
//           >
//             <BsGithub /> &nbsp;
//             {props.isBlog ? "Blog" : "GitHub"}
//           </Button>
//           {"\n"}
//           {"\n"}

//           {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

//           {!props.isBlog && props.demoLink && (
//             <Button
//               variant="primary"
//               href={props.demoLink}
//               target="_blank"
//               style={{ minWidth: 110, fontWeight: 500, borderRadius: 8, fontSize: "1em" }}
//             >
//               <CgWebsite /> &nbsp;
//               {"Demo"}
//             </Button>
//           )}
//         </div>
//       </Card.Body>
//     </Card>
//   );
// }
// export default ProjectCards;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";

function ProjectCards({ 
  imgPath, 
  title, 
  description, 
  ghLink, 
  demoLink, 
  techStack = [], 
  isBlog = false
}) {
  // Tech icon mapping for badges
  const techIconMap = {
    "C++": <CgCPlusPlus style={{ color: '#00599C' }} />, // blue
    "JavaScript": <DiJavascript1 style={{ color: '#F7DF1E' }} />, // yellow
    "Node.js": <DiNodejs style={{ color: '#3C873A' }} />, // green
    "React": <DiReact style={{ color: '#61DAFB' }} />, // cyan
    "MongoDB": <DiMongodb style={{ color: '#47A248' }} />, // green
    "PostgreSQL": <SiPostgresql style={{ color: '#336791' }} />, // blue
    "Git": <DiGit style={{ color: '#F05032' }} />, // orange
    "Next.js": <SiNextdotjs style={{ color: '#fff' }} />, // white
    "Java": <DiJava style={{ color: '#007396' }} />, // blue
    "Express": <SiExpress style={{ color: '#fff' }} />, // white
    // Add more as needed
  };

  const techDescMap = {
    "C++": "C++ programming language",
    "JavaScript": "JavaScript programming language",
    "Node.js": "Node.js runtime",
    "React": "React.js library",
    "MongoDB": "MongoDB database",
    "PostgreSQL": "PostgreSQL database",
    "Git": "Version control with Git",
    "Next.js": "Next.js React framework",
    "Java": "Java programming language",
    "Express": "Express.js framework",
    "OOP": "Object-Oriented Programming",
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 40px 0 rgba(120, 60, 180, 0.25)" }}
      transition={{ type: "spring", stiffness: 300 }}
      tabIndex={0}
      aria-label={`Project card: ${title}`}
      style={{ outline: "none" }}
    >
      <Card
        className="project-card-view enhanced-project-card"
        style={{
          borderRadius: 20,
          background: "#231942",
          border: "2px solid #c084f5",
          boxShadow: "0 8px 32px 0 rgba(120, 60, 180, 0.18)",
          marginBottom: 32,
          transition: "transform 0.25s, box-shadow 0.25s, border 0.25s",
          overflow: "hidden",
          height: "100%",
        }}
      >
        <Card.Img
          variant="top"
          src={imgPath}
          alt={`Screenshot of ${title}`}
          loading="lazy"
          style={{
            borderRadius: "18px 18px 0 0",
            padding: 0,
            objectFit: "cover",
            minHeight: 180,
            maxHeight: 220,
            width: "100%",
            aspectRatio: "16/9",
            borderBottom: "2px solid #c084f5"
          }}
        />
        <Card.Body style={{ padding: 26, display: "flex", flexDirection: "column" }}>
          <Card.Title
            as="h2"
            style={{
              fontWeight: 700,
              fontSize: "1.3em",
              color: "#fff",
              marginBottom: 8,
              letterSpacing: "normal",
              position: "relative"
            }}
          >
            {title}
            <div
              style={{
                width: 48,
                height: 4,
                background: "linear-gradient(90deg, #c770f0 60%, #623686 100%)",
                borderRadius: 2,
                marginTop: 6,
                marginBottom: 0,
              }}
            />
          </Card.Title>
          <Card.Text
            as="p"
            style={{
              textAlign: "justify",
              color: "#e0d7f7",
              fontSize: "1.08em",
              marginBottom: 18,
              flexGrow: 1,
            }}
          >
            {description}
          </Card.Text>
          {techStack.length > 0 && (
            <div style={{ 
              marginBottom: 18, 
              marginTop: 12, 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '8px' 
            }}>
              {techStack.map((tech, i) => {
                const icon = techIconMap[tech] || <FaCode style={{ color: '#a084e8' }} />;
                const desc = techDescMap[tech] || tech;
                return (
                  <OverlayTrigger
                    key={i}
                    placement="top"
                    overlay={<Tooltip id={`tooltip-tech-${i}`}>{desc}</Tooltip>}
                  >
                    <motion.span
                      whileHover={{ scale: 1.08 }}
                      className="project-tech-tag"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        background: "linear-gradient(90deg, #f3e6ff 70%, #e9d6fa 100%)",
                        color: "#6c2eb7",
                        borderRadius: 16,
                        padding: "5px 14px 5px 10px",
                        fontSize: "0.97em",
                        border: "1px solid #e0cfff",
                        fontWeight: 500,
                        boxShadow: "0 2px 8px 0 rgba(120, 60, 180, 0.07)",
                        letterSpacing: 0.1,
                        transition: 'all 0.2s ease',
                        cursor: 'help',
                        gap: 7,
                      }}
                      tabIndex={0}
                      aria-label={`Technology: ${tech}`}
                    >
                      {icon}
                      {tech}
                    </motion.span>
                  </OverlayTrigger>
                );
              })}
            </div>
          )}
          <div style={{ 
            display: "flex", 
            gap: 14, 
            flexWrap: "wrap", 
            marginTop: "auto" 
          }}>
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                minWidth: 110, 
                fontWeight: 500, 
                borderRadius: 8, 
                fontSize: "1em",
                background: "#623686",
                border: "none",
                transition: 'all 0.3s ease',
                outline: 'none',
              }}
              className="project-button"
              aria-label={`View ${title} on GitHub`}
            >
              <BsGithub /> &nbsp;
              {isBlog ? "Blog" : "GitHub"}
            </Button>
            {!isBlog && demoLink && (
              <Button
                variant="primary"
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  minWidth: 110, 
                  fontWeight: 500, 
                  borderRadius: 8, 
                  fontSize: "1em",
                  background: "#c770f0",
                  border: "none",
                  transition: 'all 0.3s ease',
                  outline: 'none',
                }}
                className="project-button"
                aria-label={`View live demo of ${title}`}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCards;