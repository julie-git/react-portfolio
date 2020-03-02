import React from "react";

import NavTabs from "../../components/NavTabs";
import "../../components/pages/Home.css";

// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Col,Row} from "react-bootstrap";

function Home() {
    return (
        <div className="home-container">



            {/* <div size="md-12"> */}
                <div className="container">

                    <div id="home-wrapper">

                        <div className="row">

                            {/* <div className="col-md-col-2"></div> */}
                            <div className="col-12">

                                <div className="row name-title jumbotron-4 justify-content-center">
                                    <h1 className="display-3">Julie Gran</h1>
                                </div>

                                {/* <!--End About Me Outer Row--> */}
                                <div className="row subtitle d-flex justify-content-center">
                                    {/* <h5>Full Stack Web Developer <span>&#183;</span> Technical Project Manager </h5> */}
                                </div>
                                <Row className= "d-flex justify-content-center">
                                <Row className="row icon-row">
                                    <Col size="xs"><a href="https://github.com/julie-git"><i className="fab fa-github fa-2x"></i></a></Col>
                                    <Col size ="xs"><a href="https://www.linkedin.com/in/juliegran/"><i className="fab fa-linkedin fa-2x"></i></a></Col>
                                   <Col size ="xs"> <a href="assets/JulieG_Resume_Online.pdf" download> <i className="fas fa-file fa-2x"></i></a></Col>
                                 </Row>
                                 </Row>
                                <div className="row justify-content-center about-Nav" >
                                    <NavTabs />
                                </div>
                                {/* </div> */}
                                {/* <!-- End Main Section --> */}

                                {/* <!-- Begin Footer Row--> */}

                                <div className="row">
                                    <p className="d-flex justify-content-center footer">&copy;Copyright 2020 Julie Gran</p>
                                </div>
                            </div>
                            {/* <div className="col-md-col-2"></div> */}
                        </div>
                    </div>
                </div>
            </div>



    
   


            );
        }
        
export default Home;