import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import AboutUsImg from "../../../../Images/AboutUs.jpg";

const AboutUs = () => {
  return (
    <div className="container-fluid mt-5">
      <Row>
        <Col md={6} className="d-flex align-items-center text-justify" >
          <Image src={AboutUsImg} alt="" fluid />
        </Col>
        <Col md={5} className="d-flex align-items-center text-justify">
          <div>
            <h2>
              We’r dynamic team of talented people of innovtive and marketing
              expert
            </h2>
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to betaPodcasting Override the digital divide with
              additional clickthroughs from Devtechnology immersion along the
              information highway will close the loop on focusing solely on the
              bottom line. Taking seamless key performance indicators offline to
              maximise the long tail. Keeping your eye on.
            </p>
            <Button variant="light">READ MORE {">"}</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
