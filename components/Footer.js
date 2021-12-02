import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Site Map",
      child: [
        { title: "Home", link: "#home" },
        { title: "Features", link: "/#feature" },
        { title: "Presentations & Demos", link: "/#media" },
        { title: "Documents", link: "/#documentation" },
        { title: "About", link: "/#about" },
      ],
    },
  ];

  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={4}></Col>
          <Col lg={8}>
            <Row>
              {links.map((link, key) => (
                <Col key={key} md={4}>
                  <h6 className="text-dark mb-3">{link.title}</h6>
                  <ul className="list-unstyled company-sub-menu">
                    {link.child.map((fLink, key) => (
                      <li key={key}>
                        <a href={fLink.link}>{fLink.title}</a>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}

              <Col md={4}>
                <h6 className="text-dark mb-3">Contact</h6>
                <h6 className="text-muted pb-2">
                  Email: sdgroup7project@gmail.com
                </h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Footer;
