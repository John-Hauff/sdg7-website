import React from "react";
import { Container, Row, Col } from "reactstrap";

const Gallery = () => {
  const gallery = [
    {
      src: "./../images/gallery/hanging_feeder_front_r.jpg",
      alt: "hanging_feeder_front_r.jpg",
    },
    {
      src: "./../images/gallery/hanging_feeder_back.jpg",
      alt: "hanging_feeder_back.jpg",
    },
    {
      src: "./../images/gallery/feeder_front_straight.jpg",
      alt: "feeder_front_straight.jpg",
    },
    {
      src: "./../images/gallery/feeder_front_right.jpg",
      alt: "feeder_front_right.jpg",
    },
    {
      src: "./../images/gallery/feeder_front_left.jpg",
      alt: "feeder_front_left.jpg",
    },
    {
      src: "./../images/gallery/bird_at_feeder.jpg",
      alt: "bird_at_feeder.jpg",
    },
    {
      src: "./../images/gallery/mid_demo_feeder_pcb.png",
      alt: "mid_demo_feeder_pcb.png",
    },
    {
      src: "./../images/gallery/nano2launchpad_UART.jpg",
      alt: "nano2launchpad_UART.jpg",
    },
    {
      src: "./../images/gallery/pcb_bare.jpg",
      alt: "pcb_bare.jpg",
    },
  ];

  return (
    <section className="section" id="gallery">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Gallery</span>
              </h3>
            </div>
          </Col>
        </Row>
        <Row>
          {gallery.map((image, key) => (
            <Col key={key} lg={4} md={6}>
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid d-block mx-auto"
              />{" "}
              <div>
                {/* heading added for spacing purposes */}
                <h5 className="text-dark font-weight-normal pt-1 mb-4"></h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Gallery;
