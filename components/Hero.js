import React from "react";
import { Container, Row, Col } from "reactstrap";

const Hero = () => {
  return (
    <section className="section position-relative" id="home">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-normal text-primary font-weight-medium f-12">
                UCF ECE Senior Design Group 7
              </p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                The Smart Bird Feeder{" "}
              </h1>
              <p className="text-muted mb-4 pb-2">
                The Smart Bird Feeder is the perfect product for the busy bird
                enthusiast. Our team found that it’s challenging to devote
                enough time to be properly rewarded by bird feeding. Our
                team&apos;s motivation is to maximize the potential of the
                birdwatching hobby and minimize the required time commitment
                from the user, while still achieving maximum results. The Smart
                Bird Feeder utilizes object detection technology to identify
                sought after bird species with a confidence interval of 90% or
                better, and includes auto defense mechanisms for backyard pests.
                The accompanying mobile application includes the ability to
                autosave bird memories, categorize birds, and send
                notifications. To our knowledge, there is no product that exists
                on the marketplace with all these features, and thus our group
                seeks to fill this empty space by making a specialized bird
                feeder like no other.
              </p>
              <a href="#feature" className="btn btn-warning">
                Learn More <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img
                src="/images/feeder_round_img.jpg"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
