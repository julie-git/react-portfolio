import React from "react";
import NavTabs from "../../components/NavTabs";

function Home() {
    return (
        <div className="contact-container">



            <div size="md-12">
                <div class="container">

                    <h1>Contact</h1>
                        <NavTabs />
                    
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