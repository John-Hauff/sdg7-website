import React from "react";
import { Container, Row, Col } from "reactstrap";
import YoutubeEmbed from "./YouTubeEmbed";

const Media = () => {
  const media = [
    {
      title: "SD2 CDR Presentation Video",
      desc: "Midterm Critical Design Review (CDR) video presentation provided to faculty in EEL4915",
      embedId: "tGb6ywEsaQM",
    },
    {
      title: "SD2 Final Presentation Video",
      desc: "Final presentation video provided to faculty committee in EEL4915",
      embedId: "mcmvIO2XrkA",
    },
    {
      title: "SD2 Midterm Demonstration Video",
      desc: "Midterm demonstration video provided to faculty in EEL4915",
      embedId: "xSqTVMkoWeY",
    },
    {
      title: "SD2 Final Demonstration Video",
      desc: "Final demonstration video provided to faculty committee in EEL4915",
      embedId: "l-X8m7HehnA",
    },
    {
      title: "Senior Design Showcase Video",
      desc: "Senior Design Showcase - The Smart Bird Feeder - Group 7 University of Central Florida ECE Department (EE, CpE)",
      embedId: "k6gtYkkJu6Q",
    },
  ];

  return (
    <section className="section" id="media">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">
                  Presentations & Demonstrations
                </span>
              </h3>
              <p className="text-muted">
                Here are the presentations and demos that we created to show off
                The Smart Bird Feeder
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {media.map((video, key) => (
            <Col key={key} lg={4} md={6}>
              <div>
                <YoutubeEmbed embedId={video.embedId} />
                <h5 className="text-dark font-weight-normal pt-1 mb-4">
                  {video.title}
                </h5>
                <p className="text-muted mb-4">{video.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Media;
