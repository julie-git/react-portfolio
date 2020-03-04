import React from "react";
import NavTabs from "../../components/NavTabs";
import "../pages/Home.css";
import { Col, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RAD from "../../images/RAD.jpg";
import Parlor from "../../images/parlorflix.jpg";
import Pup from "../../images/pupmatch1200_750.jpg";
import Weather from "../../images/weatherdashboard.jpg";
import Emp from "../../images/emp_mgmt_cms.jpg"



function Portfolio() {
    return (
        <div className="port-container">
            <div id="port-wrapper">
                <Row>

                    <Row className="about-title jumbotron-4 justify-content-center">
                        <h1 className="display-4">Portfolio</h1>
                    </Row>
                    <Row>
                        <Carousel >

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Parlor}
                                    alt="Parlor Flix"
                                />

                                <Carousel.Caption>
                                    <h4>Parlor Flix</h4>
                                    <h6>An interactive app for finding TV shows and movies streaming online </h6>
                                    <h6>Technology: Server Side APIs OMDB,YouTube, UTelly,HTML,CSS, Materialize, @Keyframes Animation Library</h6>
                                    <a href="https://github.com/tysonvonnbeck/ProjectOne" target="_blank"><i class="fab fa-github"></i></a>
                                    <a href="https://tysonvonnbeck.github.io/ProjectOne/" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Pup}
                                    alt="Pup Match"
                                />
                                <Carousel.Caption>
                                    <h4>Pup Match</h4>
                                    <h6>Fun online quiz for finding your dog breed match</h6>
                                    <h6>Technology: React, React Material-UI, React Reveal Animation, Server Side API-DogAPI</h6>
                                    <a href="https://github.com/julie-git/puppy-match" target="_blank"><i class="fab fa-github"></i></a>
                                    <a href="https://puppy-match2020.herokuapp.com/" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Weather}
                                    alt="Weather Dashboard"
                                />

                                <Carousel.Caption>
                                    <h4>Weather Dashboard</h4>
                                    <h6>Search for weather information for today and the next five days for any city in the World. Save your previous searches</h6>
                                    <h6>Technology: Server-side API OpenWeather, Bootstrap, Local Storage </h6>
                                    <a href="https://github.com/julie-git/weatherdashboard"  target="_blank"><i class="fab fa-github"></i></a>
                                    <a href="https://julie-git.github.io/weatherdashboard/"  target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={RAD}
                                    alt="Handyman R.A.D"
                                />
                                <Carousel.Caption>
                                    <h4>Handyman R.A.D Rapid Automated Dispatch</h4>
                                    <h6>Application for Scheduling Service Providers and Customers to Schedule Handyman Services</h6>
                                    <h6>CRUD application in Handlebars, MySQL, Sequilize, HTML, CSS, Heroku</h6>
                                    <a href="https://github.com/aritse/rad-project" target="_blank"><i class="fab fa-github"></i></a>
                                    <a href="https://handyman-rad.herokuapp.com/"  target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Emp}
                                    alt="Employee Management System"
                                />
                            <Carousel.Caption>
                                    <h4>Team Profile Generator CMS</h4>
                                    <h6>Node.js CLI CMS application for creating an employee org chart</h6>
                                    <h6>Node.js, HTML, CSS, Bootstrap, Inquirer</h6>
                                    <a href="https://github.com/julie-git/teamprofilegen" target="_blank"><i class="fab fa-github"></i></a>
                                    <a href="https://github.com/julie-git/teamprofilegen/blob/master/devteamgen.gif"  target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                    
                    <Row className="about-Nav port-Nav" >
                        <Col></Col>
                        <Col xs={3} className="justify-content-center">
                            <NavTabs />
                        </Col>
                        <Col></Col>
                    </Row>
                    </Row>
{/* 
                    <div className="row">
                        <Col></Col>
                        <Col xs={12} className="justify-content-center">
                                    <p class=" footer2">&copy;Copyright 2020 Julie Gran</p>
                        </Col>
                        <Col></Col>
                     </div> */}

                    {/* <Row className="justify-content-center"> */}
                        {/* <Col ></Col> */}
                        {/* <Col xs={7} className="justify-content-center"> */}
                            {/* <p className="footer2">&copy;Copyright 2020 Julie Gran</p> */}
                        {/* </Col> */}
                        {/* <Col></Col> */}
                    {/* </Row> */}
                    
                {/* </Row> */}




            </div>
        </div >

    );
}

export default Portfolio;
