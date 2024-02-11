import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WhyContainer = () => {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="mt-4"
      >
        <Card
          style={{
            width: "98%",
            display: "flex",
            alignItems: "center",
          }}
          className="p-4"
        >
          <Card.Img
            variant="bottom"
            src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1706665836/HighPerformance/934996-abstract-lines-red-red-background2_1_fzrflr.png"
          />
          <Card.Body>
            <Container fluid>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "center",
                  flexDirection: "column",
                }}
                className="mx-20"
              >
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
                    style={{ color: "#ffffff" }}
                    className="text-2xl p-8 mx-16 text-center"
                  >
                    <p>
                      {" "}
                      If you're looking for the best calibration service, then
                      you've found the right place. <br /> Here in High
                      Performance Calibrations we offer the best quality service
                      at just the right price.{" "}
                    </p>
                  </Col>
                </Row>

                <Row
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="p-24"
                >
                  <Col sm={12} lg={6}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                      className="text-xl"
                    >
                      <div>
                        <p>
                          Unlike other companies, we offer a comprehensive suite
                          of ADAS calibration services, catering to a wide range
                          of vehicle makes and models. From camera calibrations
                          to radar adjustments, our technicians are equipped to
                          handle all your calibration needs.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col sm={12} lg={6}>
                    <Image
                      src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1699147686/HighPerformance/122587_2397_63886e83-9e66-493c-ab85-2c1e9725d2c4_1_ktouvz.jpg"
                      rounded
                      className="sm:shadow-none lg:shadow-md lg:ml-16 sm:m-0"
                    />
                  </Col>
                </Row>

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
                    style={{ color: "#ffffff" }}
                    className="text-2xl p-8 mx-16 text-center"
                  >
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </p>

                    <Row>
                      <Col></Col>

                      <Col></Col>

                      <Col></Col>
                    </Row>
                  </Col>
                </Row>

                <Row
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="p-24"
                >
                  <Col sm={12} lg={6}>
                    <Image
                      src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1699147686/HighPerformance/122587_2397_63886e83-9e66-493c-ab85-2c1e9725d2c4_1_ktouvz.jpg"
                      rounded
                      className="mb:shadow-none lg:shadow-md"
                    />
                  </Col>
                  <Col sm={12} lg={6}>
                    <div className="text-center">
                      <h1>What are ADAS Calibrations?</h1>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                      className="text-xl"
                    >
                      <div>
                        <p>
                          ADAS calibration (and recalibration) is the precise
                          physical alignment, testing, and electronic aiming of
                          sensors that collect data to inform your vehicle's
                          advanced driver assistance systems (ADAS), like
                          forward collision warning (FCW), lane departure
                          warning (LDW), automatic emergency braking (AEB), and
                          several others.
                        </p>
                      </div>

                      <div>
                        <p>
                          Recalibration tells sensors where to look. It also
                          shows sensors their position in relation to the
                          vehicle. Most ADAS sensors require precise aiming. As
                          AAA explains, “… a sensor on the car that is out of
                          alignment by a fraction of an inch or even one degree
                          will be aimed at an area significantly off axis 50 or
                          more feet down the road.” Likewise, according to IIHS
                          Advisory 43, a change as little as .6 degrees would
                          cut the reaction time of AEB in half.
                        </p>
                      </div>

                      <div>
                        <p>
                          Unfortunately, ADAS sensors don't all have
                          self-diagnostic capabilities to tell the driver when
                          they are out of calibration. Automotive professionals
                          need to know and follow OEM standards regarding ADAS
                          calibration, so that a vehicle's ADAS systems properly
                          function.
                        </p>
                      </div>
                    </div>
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

export default WhyContainer;
