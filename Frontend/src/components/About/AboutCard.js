import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Harsh Borude </span>
            from <span className="purple"> Pune, Maharashtra.</span>
            <br/>
            <br />
            I am an undergraduate student at <b className="purple">Indian Institute of Technology,Kharagpur</b>.
            At IIT Kharagpur, I’ve been actively involved in student-run organizations and fests.
            I’ve contributed to <b className="purple">Kshitij, the institute’s techno-management fest</b>, worked as a <b className="purple">Student
             Member of the Students' Alumni Cell </b>, and served as the <b className="purple">Technology Events Secretary of
              Rajendra Prasad Hall of Residence</b>. These experiences have helped me develop strong skills
            in <b className="purple">time management, teamwork, and leadership.</b>
            <br/>
            <br />
            My other hobbies include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching and Making Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
