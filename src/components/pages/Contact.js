import React from "react";
import NavTabs from "../../components/NavTabs";
import "../pages/Home.css";
import { Col, Row } from "react-bootstrap";
import MyForm from "../../components/myform.js";


function Contact() {
  return (
    <div className="contact-container">




      <div id="contact-wrapper">
        <Row>



          <Row className="contact-title jumbotron-4 justify-content-center">
          <Col></Col>
          <Col xs={6} className = "title-wrapper">
            <Row className="justify-content-center">
            <h1 className="display-4">Contact</h1>
            </Row>
          </Col>
          <Col></Col>
          </Row>

          <Row className="contact-wrapper">
            <Col></Col>
            <Col xs={6} className="form-wrapper">
              {/* Insert form component */}
              <Row className = "justify-content-center">
              <MyForm />
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Row>
        <Row className="about-Nav" >
          <Col></Col>
          <Col xs={6} className="justify-content-center">
            <NavTabs />
          </Col>
          <Col></Col>
        </Row>




        {/* </Row> */}
      </div>
    </div >

  );
}

export default Contact;
