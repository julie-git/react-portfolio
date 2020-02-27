import React from "react";
import NavTabs from "../../components/NavTabs";
function Home() {
    return (
        <div className="home-container">



            <div size="md-12">
                <div class="container">

                    <div id="aboutme-wrapper">

                        <div className="row">
                            {/* <!--Main Section--> */}

                            {/* <!--About Me Section--> */}
                            <div className="col-md-col-12 name-title jumbotron-4 d-flex justify-content-center">
                                <h1 class="display-3">Julie Gran</h1>
                            </div>
                        </div>
                        {/* <!--End About Me Outer Row--> */}
                        <div className="row subtitle d-flex justify-content-center">
                            <h5>Full Stack Web Developer <span>&#183;</span> Technical Project Manager </h5>
                        </div>
                        <div className="row d-flex justify-content-center icon-row">
                            {/* <a href="https://github.com/julie-git"><i class="fab fa-github fa-2x"></a></i> */}
                            <a href="https://www.linkedin.com/in/juliegran/"><i class="fab fa-linkedin fa-2x"></i></a>
                            <a href="assets/JulieG_Resume_Online.pdf" download> <i class="fas fa-file fa-2x"></i></a>
                        </div>
                        <NavTabs />
                    </div>
                    {/* <!-- End Main Section --> */}

                    {/* <!-- Begin Footer Row--> */}

                    <div className="row">
                        <p class="d-flex justify-content-center footer">&copy;Copyright 2020 Julie Gran</p>
                    </div>


                </div>

            </div>
        </div>
            );
        }
        
export default Home;