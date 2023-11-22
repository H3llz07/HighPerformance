import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" bg="white">
        <Container>
          <Navbar.Brand href="/HighPerformance">
            <img
              src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1700620928/HighPerformance/s8oasljxb7zori2vxkqc_1_1_krgiln.png"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto ml-32"
              style={{ fontSize: "1.15rem", display: "flex", gap: "50px" }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  paddingTop: "0.5rem",
                  fontWeight: "500",
                  textAlign: "center",
                }}
                className="hvr-underline-from-left pr-3 pb-1"
              >
                {" "}
                HOME{" "}
              </Link>
              <Link
                to="/why"
                style={{
                  textDecoration: "none",
                  color: "black",
                  paddingTop: "0.5rem",
                  fontWeight: "500",
                  textAlign: "center",
                }}
                className="hvr-underline-from-left pb-1"
              >
                {" "}
                US{" "}
              </Link>
              <Link
                to="/services"
                style={{
                  textDecoration: "none",
                  color: "black",
                  paddingTop: "0.5rem",
                  fontWeight: "500",
                  textAlign: "center",
                }}
                className="hvr-underline-from-left pr-3 pb-1"
              >
                {" "}
                SERVICES{" "}
              </Link>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "black",
                  paddingTop: "0.5rem",
                  fontWeight: "500",
                  textAlign: "center",
                }}
                className="hvr-underline-from-left pr-3 pb-1"
              >
                {" "}
                CONTACT{" "}
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand
            style={{ paddingLeft: "5rem", display: "flex", gap: "20px" }}
          >
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              <BsFacebook />
            </a>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
