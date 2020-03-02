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



          <Row className="about-title jumbotron-4 justify-content-center">
            <h1 className="display-4">Contact</h1>

          </Row>
            




          <Row className="contact-">
            <Col></Col>
            <Col xs={10}>
            <MyForm/>
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
          
         
                            

        </Row>
    </div>
    </div >

  );
}

export default Contact;
