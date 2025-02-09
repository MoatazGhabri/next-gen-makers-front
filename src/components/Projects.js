import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ed.jpg";
import projImg2 from "../assets/img/ec.jpg";
import projImg3 from "../assets/img/agen.png";
import projImg4 from "../assets/img/chat.png";
import projImg5 from "../assets/img/food.jpg";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Education Application",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Delivery Application",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Travel agency Website",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Chat Application",
      description: "Design & Development",
      imgUrl: projImg4,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                   
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
