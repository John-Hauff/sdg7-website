import React from "react";
import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                About <span className="text-warning">Us</span>
              </h3>
              <p className="text-muted">
                Our team has worked tirelessly on the design and implementation
                of The Smart Bird Feeder. We are a team of four undergraduate
                students at the University of Central Florida, graduating in the
                Fall of 2021. Our team is comprised of three undergraduate
                students studying Computer Engineering, and one undergraduate
                student studying Electrical Engineering. We&apos;re very excited
                to introduce you to The Smart Bird Feeder!
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">
              Meet the team behind The Smart Bird Feeder
            </h2>
          </Col>
          <Col md={{ size: 7, offset: 1 }}>
            <Row>
              <Col md={6}>
                <img
                  src={"./images/paul.jpg"}
                  alt="Paul Amoruso Profile Picture"
                  className="img-fluid d-block mx-auto"
                  width="100"
                  height="150"
                />
                <p className="text-muted font-weight-light">
                  Paul Amoruso is a Computer Engineering student at the
                  University of Central Florida planning to graduate this
                  semester with his bachelor&apos;s degree. After graduating, he
                  will pursue his Master’s degree in Computer Engineering
                  starting Spring of 2022 at UCF. Other interests include
                  Computer Architecture topics and gardening in the greenhouse
                  he built.
                </p>
              </Col>
              <Col md={6}>
                <img
                  src={"./images/john.png"}
                  alt="John Hauff Profile Picture"
                  className="img-fluid d-block mx-auto"
                  width="100"
                  height="150"
                />
                <p className="text-muted font-weight-light">
                  John Hauff is a Senior ​​baccalaureate student in Computer
                  Engineering at the University of Central Florida. His
                  interests include software development and embedded systems,
                  and mentoring others in these areas. After graduating, John
                  hopes to begin his career as a computer engineer or software
                  engineer in the Orlando area.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={{ size: 7, offset: 1 }}>
            <Row>
              <Col md={6}>
                <img
                  src={"./images/nikki.png"}
                  alt="Nikki Marrow Profile Picture"
                  className="img-fluid d-block mx-auto"
                  width="100"
                  height="150"
                />
                <p className="text-muted font-weight-light">
                  Nikki Marrow is an Electrical Engineering student at the
                  University of Central Florida. She is currently working as a
                  firmware engineer at Lockheed Martin in Orlando, previously
                  working on circuit design and testing. After graduating, she
                  plans to work at Lockheed full-time. Other interests of hers
                  include research in surface science and molecular dynamics.
                </p>
              </Col>
              <Col md={6}>
                <img
                  src={"./images/matt.jpg"}
                  alt="Matthew Wilkinson Profile Picture"
                  className="img-fluid d-block mx-auto"
                  width="100"
                  height="150"
                />
                <p className="text-muted font-weight-light">
                  Matthew Wilkinson is a graduating Computer Engineering student
                  from the University of Central Florida. Following graduation
                  he will be working for Disney’s Design and Engineering team as
                  a Controls Engineer. He hopes to continue pursuing a career
                  path in controls with a focus in entertainment.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
