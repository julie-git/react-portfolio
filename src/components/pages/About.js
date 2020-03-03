import React from "react";
import NavTabs from "../../components/NavTabs";
import "../pages/Home.css";
import { Col, Row } from "react-bootstrap";
import photo from "../../images/mypic.jfif";

function About() {
  return (
    <div className="about-container">




      <div id="aboutme-wrapper">
        <Row>



          <Row className="about-title jumbotron-4 justify-content-center">
            <h1 className="display-4">About Me</h1>

          </Row>



          <Row className="photo-row justify-content-center">
            <img className="my-img" src={photo} alt="Julie" />
          </Row>


          <Row className="about-text">
            <Col></Col>
            <Col xs={8}>
              <p>Hi, I’m Julie and I am creative and passionate about turning great ideas into tangible software.</p>

              <p>After earning a degree in Computer Science, I worked at corporations and startups developing and leading Technical projects. At Verizon and Humana I lead major initiatives in transforming both technical platforms and processes to improve Software Quality. I worked closely with the Sofware Architects, vendors, QA and Business. </p>

              <p>   I am a recent graduate of the University of Washington full-time Web Development Programming Bootcamp. I have the foundational knowledge of a full-stack developer (MERN), prior experience in leading technical projects, and experience as in QA, which gives me a unique perspective on managing technical projects.  I enjoy working with teams on throughout the full project lifecyle and the pride that comes from delivering a quality product.  I look forward to bringing my professional and educational experiences to my next employer.</p>
            </Col>
            <Col></Col>
          </Row>

          <Row className="about-Nav" >
          <Col></Col>
          <Col xs={3} className ="justify-content-center">
            <NavTabs />
          </Col>
          <Col></Col>
          </Row>
          {/* </div> */}
          {/* <!-- End Main Section --> */}

          {/* <!-- Begin Footer Row--> */}

         
                            

        </Row>
    </div>
    </div >

  );
}

export default About;
