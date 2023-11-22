import Styles from "./Footer.module.css";

import { BsTelephone, BsEnvelope, BsClock, BsGeoAltFill } from "react-icons/bs";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div>
      <footer>
        <Container fluid>
          <Row
            style={{
              backgroundColor: "#af1616",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            className="sm:pr-4 md:pr-16 py-3 text-xl"
          >
            <Col
              md={2}
              style={{
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="pr-4">
                <BsTelephone />
              </div>
              <div>
                <p>
                  CALL US <br /> (213)-858-8930
                </p>
              </div>
            </Col>

            <Col
              md={1}
              style={{
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p> | </p>
            </Col>

            <Col
              md={2}
              style={{
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="pr-4">
                <BsEnvelope />
              </div>
              <div>
                <p>
                  EMAIL US <br /> sbuitrago@hpautoservices.com
                </p>
              </div>
            </Col>

            <Col
              md={1}
              style={{
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p> | </p>
            </Col>

            <Col
              md={2}
              style={{
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="pr-4">
                <BsClock />
              </div>
              <div>
                <p>
                  OPEN HOURS <br /> Mon - Fri: 8am - 5pm Sat - Sun: Closed
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <div className={Styles.top}>
          <div className={Styles.pages}>
            <div className="mb-2">
              <BsGeoAltFill />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 style={{ marginBottom: "1rem" }}>Visit us</h3>
              <p style={{ fontSize: "1.25rem" }}>
                9832 Rush St <br /> South El Monte, CA 91733
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.info}>
          <div> &copy; 2023 HIGHPERFORMANCE CALIBRATIONS</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
