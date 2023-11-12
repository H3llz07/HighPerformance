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
            src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1699750697/HighPerformance/posche_HighP_1_1_wob5re.jpg"
          />
          <Card.Body>
            <Card.Text
              style={{ position: "absolute", top: "200px", left: "250px" }}
              className="text-4xl"
            >
              Slogan
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
                    className="text-lg p-4"
                  >
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam deserunt autem, pariatur quam veritatis cum aperiam
                      vero id earum sunt voluptates aut dignissimos rem unde
                      ducimus necessitatibus, tempora amet veniam!{" "}
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
                    className="text-lg p-4"
                  >
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam deserunt autem, pariatur quam veritatis cum aperiam
                      vero id earum sunt voluptates aut dignissimos rem unde
                      ducimus necessitatibus, tempora amet veniam!{" "}
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
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus facilis ipsa est molestiae cumque
                      reprehenderit, sint quos ratione, fuga harum consequatur?
                      Deleniti aliquam tempore velit perferendis, inventore
                      temporibus mollitia blanditiis.
                    </p>
                  </Col>

                  <Col md="4">
                    <Row className="mb-1 mx-1">
                      <Button variant="danger" href="HighPerformance/contact">
                        {" "}
                        hi{" "}
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
                          <Image src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1699750054/HighPerformance/posche_HighP_1_ochtlo.jpg" />
                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                              Nulla vitae elit libero, a pharetra augue mollis
                              interdum.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <Image src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1699750054/HighPerformance/posche_HighP_1_ochtlo.jpg" />
                          <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <Image src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1699750054/HighPerformance/posche_HighP_1_ochtlo.jpg" />
                          <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur.
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
                      style={{ marginTop: "1rem" }}
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
