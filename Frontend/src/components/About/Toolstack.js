import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMacos />
        <p style={{ fontSize: "0.8rem" }}>macOS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiVisualstudiocode />
        <p style={{ fontSize: "0.8rem" }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPostman />
        <p style={{ fontSize: "0.8rem" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiSlack />
        <p style={{ fontSize: "0.8rem" }}>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiVercel />
        <p style={{ fontSize: "0.8rem" }}>Vercel</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
