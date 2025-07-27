import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <CgCPlusPlus size={40} />
        <p style={{ fontSize: "0.8rem" }}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiJavascript1 size={40} />
        <p style={{ fontSize: "0.8rem" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <TbBrandGolang size={40} />
        <p style={{ fontSize: "0.8rem" }}>Go</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiNodejs size={40} />
        <p style={{ fontSize: "0.8rem" }}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiReact size={40} />
        <p style={{ fontSize: "0.8rem" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiSolidity size={40} />
        <p style={{ fontSize: "0.8rem" }}>Solidity</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiMongodb size={40} />
        <p style={{ fontSize: "0.8rem" }}> MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiNextdotjs size={40} />
        <p style={{ fontSize: "0.8rem" }}>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiGit size={40} />
        <p style={{ fontSize: "0.8rem" }}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiFirebase size={40} />
        <p style={{ fontSize: "0.8rem" }}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiRedis size={40} />
        <p style={{ fontSize: "0.8rem" }}>Redis</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPostgresql size={40} />
        <p style={{ fontSize: "0.8rem" }}>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiPython size={40} />
        <p style={{ fontSize: "0.8rem" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiJava size={40} />
        <p style={{ fontSize: "0.8rem" }}>Java</p>
      </Col>
    </Row>
  );
}

export default Techstack;
