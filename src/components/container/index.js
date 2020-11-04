import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import projects from "../../utils/projects.json"

function Box() {
    return(
        <Container>
            <Row>
                {projects.map(project => (
                    <div className="col-md-4">
                        <a href={project.url} target="_blank">
                            <img className="img-fluid" src={project.image}/>
                        </a>
                        <p>{project.text}</p>
                    </div>
                ))}
            </Row>
        </Container>
    )
}

export default Box;