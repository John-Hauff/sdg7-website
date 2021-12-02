import React from "react";
import { Container, Row, Col } from "reactstrap";

const FeatureBox = (props) => {
  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <Row
            key={key}
            className={
              feature.id === 1
                ? "align-items-center"
                : "align-items-center mt-5"
            }
          >
            <Col md={5}>
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
            <Col md={{ size: 6, offset: 1 }}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
              </div>
            </Col>
          </Row>
        ) : (
          <Row key={key} className="align-items-center mt-5">
            <Col md={6}>
              <div className="mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
              </div>
            </Col>
            <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
          </Row>
        )
      )}
    </>
  );
};
const Feature = () => {
  const features = [
    {
      id: 1,
      img: "https://i.imgur.com/zhbYIfP.gif",
      title: "Keep The Squirrels At Bay",
      desc: "The Smart Bird Feeder will detect when an invading squirrel is nearby and will activate its defense system: cutting the squirrel off from the bird feed and playing a sound to deter them even further.",
    },
    {
      id: 2,
      img: "https://i.imgur.com/lUi0xNJ.gif",
      title: "Easily Refill Your Feeder",
      desc: "The Smart Bird Feeder is equipped with an easy-to-use refill spout, complete with a stylish bird ornament, which allows you to refill your feeder without the need to get inside of it.",
    },
    {
      id: 3,
      img: "https://i.imgur.com/1iLpSSV.gif",
      title: "Portable And Rechargeable, With A Battery That Lasts",
      desc: "The Smart Bird Feeder is portable and includes a rechargeable battery that will last hours. This is largely possible due to the power-efficient motion sensor built into The Smart Bird Feeder, which allows the feeder to use less power when there is nothing nearby.",
    },
    {
      id: 4,
      img: "https://i.imgur.com/Tz9XItZ.gif",
      title: "Stay Notified of Bird Activity and Never Miss a Moment",
      desc: "The Smart Bird Feeder will immediately notify you when it captures a new memory of a bird that's feeding from it. It's also able to detect the species of the bird and conveniently display it for you in a push notification and in the beautiful Bird Memories Gallery on our mobile app. This means you'll never need to wait around watching for birds, and instead you can view high quality images giving the best up-close views of the birds on your phone, or spring into action and go see the birds in-person whenever you get a notification.",
    },
    {
      id: 5,
      img: "https://i.imgur.com/LP6SytZ.gif",
      title: "You'll Know When The Birds Are Getting Hungry",
      desc: "The Smart Bird Feeder will also automatically notify you when it is running out of bird feed by pushing a notification to your phone. This means you'll know exactly when to refill your feeder, without having to constantly check it yourself.",
    },
  ];
  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Features</span>
              </h3>
              <p className="text-muted">
                The Smart Bird Feeder comes equipped with a plethora of features
                that will impress even the most seasoned bird enthusiast
              </p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
};
export default Feature;
