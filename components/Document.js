import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Document = () => {
  // TODO: Add links to PDFs
  const documents = [
    {
      title: "SD1 Initial Project Document (Divide & Conquer)",
      desc: "Initial project description and block diagram document from EEL 4914",
      file: "./documents/SD1_G7_D&C.pdf",
    },
    {
      title: "SD1 Final Documentation",
      desc: "120 page final documentation from EEL 4914",
      file: "./documents/SD1_Final_Paper.pdf",
    },
    {
      title: "SD2 CDR Presentation",
      desc: "Slides from midterm Critical Design Review (CDR) from EEL4915",
      file: "./documents/SD2_G7_CDR_Slideshow.pdf",
    },
    {
      title: "SD2 Proceedings Paper",
      desc: "Proceedings conference paper presented to faculty committee in EEL4915",
      file: "./documents/SD2_G7_Proceedings_Paper.pdf",
    },
    {
      title: "SD2 Final Presentation",
      desc: "Slides from final presentation provided to faculty committee in EEL4915",
      file: "./documents/SD2_G7_Final_Presentation.pdf",
    },
    {
      title: "SD2 Final Documentation (Coming Soon)",
      desc: "Updated final documentation from EEL4915",
      file: "#document",
      // file: "./documents/SD2_G7_Final_Paper.pdf",
    },
  ];

  return (
    <section className="section" id="document">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Documents</span>
              </h3>
              <p className="text-muted">
                Documents associated with our Senior Design project spanning
                from Senior Design I through Senior Design II
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {documents.map((document, key) => (
            <Col key={key} lg={4} md={6}>
              <div>
                <h5 className="text-dark font-weight-normal pt-1 mb-4">
                  <Link
                    href={document.file}
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <a>{document.title} &rarr;</a>
                  </Link>
                </h5>
                <p className="text-muted mb-4">{document.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Document;
