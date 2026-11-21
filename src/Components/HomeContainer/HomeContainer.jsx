"use client";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const HomeContainer = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Card
          style={{
            width: "98%",
            display: "flex",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#ececec",
          }}
        >
          <Card.Img
            variant="bottom"
            src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1706664943/HighPerformance/posche_HighP_1_1_wob5re_1_xoxzd5.jpg"
          />
          <Card.Body>
            <Card.Text className="sm:text-xl md:text-3xl p-4 sm:ml-44 md:ml-20 text-center">
              Driving Confidence, Calibrating Precision: Your ADAS Experts.
            </Card.Text>
            <Container fluid>
              <Col>
                <Row
                  style={{
                    backgroundColor: "#fd3131",
                    width: "96.9vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="p-8"
                >
                  <Col
                    md={4}
                    style={{ color: "#ffffff" }}
                    className="text-2xl p-4 ml-4"
                  >
                    <p>
                      Our team of highly skilled technicians boasts years of
                      hands-on experience in Advanced Driver Assistance Systems
                      (ADAS) calibrations. We pride ourselves on staying ahead
                      of industry trends and maintaining a deep understanding of
                      the latest technologies.
                    </p>
                  </Col>
                  <Col
                    md={2}
                    style={{
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className="text-lg"
                  >
                    <p> | </p>
                  </Col>
                  <Col
                    md={4}
                    style={{ color: "#ffffff" }}
                    className="text-2xl p-4 mr-4"
                  >
                    <p>
                      We understand the importance of getting your vehicle back
                      on the road promptly. Our streamlined processes and
                      efficient workflows enable us to provide quick turnaround
                      times without compromising on the quality of our
                      calibrations.
                    </p>
                  </Col>
                </Row>
                <Row
                  className="p-8"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Col md="4" className="mr-8">
                    <p className="text-2xl text-center font-semibold">
                      COME AND VISIT US
                    </p>
                    <p className="text-xl">
                      We understand the value of your time. With conveniently
                      located service centers and flexible scheduling options,
                      we strive to make the calibration process as hassle-free
                      as possible for our customers.
                    </p>
                  </Col>

                  <Col md="4">
                    <Row className="mb-1 mx-1">
                      <Button
                        style={{
                          backgroundColor: "#fd3131",
                          borderColor: "#fd3131",
                        }}
                        href="HighPerformance/contact"
                      >
                        {" "}
                        Book your visit!{" "}
                      </Button>
                    </Row>
                    <Row>
                      <Image
                        src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1699752725/HighPerformance/what-is-adas-calibration-scaled-pe6v30pqmk4d3fvgpjqntnek3vkap5qz4x1vxuc6fc_1_hcszlp_2_fh0niv.jpg"
                        rounded
                      />
                    </Row>
                  </Col>
                </Row>

                <Row
                  className="p-8"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fd3131",
                  }}
                >
                  <Col
                    md={10}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      flexDirection: "column",
                    }}
                  >
                    <Row className="text-3xl">
                      <p>Some of our services!</p>
                    </Row>
                    <Row>
                      <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                          <Image src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1707621116/HighPerformance/traffic-sign-recognition-scaled-pe6vqli01yeabbmk18mrv77sitcqrucldm5capdoco_1_npg8se_3_gyh7zl.jpg" />
                          <Carousel.Caption className="bg-stone-950/75">
                            <h3>Traffic Sign Recognition</h3>
                            <p className="text-xl">
                              Traffic Sign Recognition (TSR) is an advanced
                              driver assistance system (ADAS) that recognizes
                              and relays traffic sign information to drivers via
                              the instrument panel, multimedia, or heads-up
                              display. In the United States, TSR systems can
                              recognize speed limit signs, do not enter signs,
                              and stop signs.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <Image src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1707621186/HighPerformance/Services/lane-departure-cover-MAIN_1_mqif8c_2_e9fvd7.jpg" />
                          <Carousel.Caption className="bg-stone-950/75">
                            <h3>Lane Departure Warning</h3>
                            <p className="text-xl">
                              Lane departure warning is designed to help you
                              avoid crashes due to drifting or departing your
                              lane. The system detects lane markers and alerts
                              you when a tire touches a lane marker. The warning
                              is usually a flashing indicator and/or it beeps
                              from the corresponding side.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <Image src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1707621262/HighPerformance/Services/maxresdefault_1_occy1f_1_j9pejc.jpg" />
                          <Carousel.Caption className="bg-stone-950/75">
                            <h3>Pedestrian Detection</h3>
                            <p className="text-xl">
                              Pedestrian detection is an advanced driver
                              assistance system (ADAS). It uses sensors,
                              cameras, and artificial intelligence to identify
                              pedestrians near vehicles. By analyzing the
                              surrounding environment, the system can recognize
                              human forms and movements, helping to prevent or
                              mitigate potential collisions between vehicles and
                              pedestrians.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                    </Row>
                  </Col>
                </Row>
                <Row
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="sm:gap-4 lg:gap-0 mt-4"
                >
                  <Col sm={12} lg={6} className="text-center">
                    <h1>Going through insurance?</h1>
                    <h4 className="px-12">
                      We work with a variety of insurances that cover most of
                      your needs related to ADAS calibrations!
                    </h4>
                    <Button
                      variant="danger"
                      href="HighPerformance/contact"
                      size="lg"
                      style={{
                        marginTop: "1rem",
                        backgroundColor: "#fd3131",
                        borderColor: "#fd3131",
                      }}
                    >
                      Contact us!
                    </Button>
                  </Col>

                  <Col sm={12} lg={6}>
                    <Image
                      src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1698021884/HighPerformance/image-asset_1_o4vrwt.jpg"
                      rounded
                    />
                  </Col>
                </Row>
              </Col>
            </Container>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HomeContainer;
