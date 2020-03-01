import React from "react";
import NavTabs from "../../components/NavTabs";
import "../pages/Home.css";
import { Col, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RAD from "../../images/RAD.jpg";
import Parlor from "../../images/parlorflix.jpg";
import Pup from "../../images/pupmatch1200_750.jpg";
import Weather from "../../images/weatherdashboard.jpg";



function Portfolio() {
    return (
        <div className="port-container">
            <div id="port-wrapper">
                <Row>

                    <Row className="about-title jumbotron-4 justify-content-center">
                        <h1 className="display-4">Portfolio</h1>
                    </Row>

                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={RAD}
                                alt="Handyman R.A.D"
                            />
                            <Carousel.Caption>
                                <h3>Handyman R.A.D</h3>
                                <p>Application for Scheduling Service Providers and Customers to Schedule Handyman Services</p>
                                <p>CRUD application in Handlebars, MySQL, Sequilize, HTML, CSS, Heroku</p>
                                <a href="https://github.com/julie-git"><i class="fab fa-github fa-2x"></i></a>
                                <a href="https://rad-prototype.herokuapp.com/"><i class="fa fa-external-link fa-2x" aria-hidden="true"></i></a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Parlor}
                                alt="Parlor Flix"
                            />

                            <Carousel.Caption>
                                <h3>Parlor Flix</h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Pup}
                                alt="Pup Match"
                            />

                            <Carousel.Caption>
                                <h3>Weather Dashboard</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Weather}
                                alt="Weather Dashboard"
                            />

                            <Carousel.Caption>
                                <h3>Pup Match</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>







                </Row>
            </div>
        </div >

    );
}

export default Portfolio;
