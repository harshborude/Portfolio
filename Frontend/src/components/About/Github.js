import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="harshborude"
        blockSize={15}
        blockMargin={5}
        color="#30578c"
        fontSize={16}
      />
      <img
  src="https://leetcard.jacoblin.cool/harsh_borude11"
  alt="LeetCode stats"
  justifyContent-center
/>

    </Row>
    
  );
}

export default Github;
