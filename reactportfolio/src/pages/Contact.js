import React from "react"

function Contact() {
    return(
        <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <div className="row heading">
              <div className="col-md-12">
                <h2>Contact</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <form>
                  <div className="form-group">
                    <label for="nameSpace">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="form-group">
                    <label for="emailSpace">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <div className="form-group">
                    <label for="messageSpace">Message</label>
                    <input
                      type="email"
                      className="form-control message"
                      placeholder="Type your message..."
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contact;