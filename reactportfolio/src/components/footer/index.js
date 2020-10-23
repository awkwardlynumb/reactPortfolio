import React from "react";
import Portfolio from "../../pages/Portfolio";

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-4">
          <h5>Media:</h5>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/matthew-pearce-33aaa21a6/">
                LinkdIn
              </a>
            </li>
            <li>
              <a href="https://github.com/awkwardlynumb">Github</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Thanks for stopping by!</h5>
        </div>
        <div className="col-md-4">
          <ul>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
