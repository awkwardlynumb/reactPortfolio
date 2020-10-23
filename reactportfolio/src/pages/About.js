import React from "react"

function About() {
    return(
        <div className="container">
            <div className="row"> 
                <div className="col-md-1"></div>
                <div className="col-md-8">
                    <div className="row heading" >
                        <div className="col-md-12" id="aboutMeHeading">
                            <h2>About Me</h2>
                        </div>
                    </div>
                    <div className="row bioBody">
                        <div className="col-md-6">
                            <img className="handsome img-fluid" src="igCover.jpg" alt="selfie"/>
                        </div>
                        <div className="col-md-6">
                            <p>Welcome to the first ever mobile-friendly responsive playground of Matt Pearce: frequently panicked programming student at the University of Arizona's Coding Bootcamp.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p>I'm thrilled that you decided to visit, so why not click a few links? You know, so it doesn't feel like I wasted my time in making them. Kidding, hahaha unless...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About