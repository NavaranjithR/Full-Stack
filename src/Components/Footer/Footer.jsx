import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../Assets/Logo.png";
// import { Container } from "@mui/material";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

export default function Contact() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className="footer-logo">
              <img src={Logo} alt="Logo" />
            </div>
            <Row className="text-center gap-2 mt-4 detail">
              <Col sm={12}>
                <div>
                  <h5>CONTACT US</h5>
                  <div>
                    <p>123, Main Street, Anytown ST 12345</p>
                    <p>Email : info@nexware-global.com</p>
                    <p>Phone : +91 73050 24280</p>
                  </div>
                </div>
              </Col>
              <Col sm={12}>
                <div className="text-center">
                  <h5>USEFUL LINK</h5>
                  <div className="footer-links text-center">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Shop</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="footer-subscribe-content">
              <div className="footer-subscribe">
                <h1>Subscribe To Us!</h1>
                <p>Find out about new releases and offers</p>
              </div>
              <div className="footer-email">
                <input type="email" placeholder="your email address" />
                <button>Subscribe</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
