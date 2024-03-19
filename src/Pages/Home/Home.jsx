import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bookstore from "../../Components/Assets/bookstore.png";
import "./Home.css";
import {
  PiRocketLaunchLight,
  PiHeartStraightLight,
  PiBrainLight,
} from "react-icons/pi";
import { GiHealthPotion } from "react-icons/gi";
import { FaChildren } from "react-icons/fa6";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import bookstore1 from "../../Components/Assets/Book-Cover-01.jpg";
import book2 from "../../Components/Assets/Book-Cover-02.jpg";
import book3 from "../../Components/Assets/Book-Cover-03.jpg";
import book4 from "../../Components/Assets/Book-Cover-04.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gift1 from "../../Components/Assets/gifting-idea-01.jpg";
import Gift2 from "../../Components/Assets/gifting-idea-02.jpg";
import Gift3 from "../../Components/Assets/gifting-idea-03.jpg";
import Gift4 from "../../Components/Assets/gifting-idea-04.jpg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "25px",
      },
    },
  ],
};

const Home1 = () => {
  return (
    <div>
      <section>
        <Container fluid className="hero">
          <Row>
            <Col xs={12} lg={6} className="img-fluid">
              <div className="hero-img">
                <img src={bookstore} alt="Books" />
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="hero-content">
                <span>Get All The Books You Need!</span>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </p>
                <button>Start Reading</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-offer">
        <div className="hero-offer">
          <p>10% off on orders above $100 use code happy user</p>
        </div>
      </section>
      <section className="section-genre">
        <Container fluid>
          <Row className="genre-list">
            <Col lg={2} md={12} xs={12} className="genre">
              <a href="/sci-fi">
                <PiRocketLaunchLight />
                <p>Sci-Fi</p>
              </a>
            </Col>
            <Col lg={2} md={12} xs={12} className="genre">
              <a href="/">
                <PiHeartStraightLight />
                <p>Romance</p>
              </a>
            </Col>
            <Col lg={2} md={12} xs={12} className="genre">
              <a href="/">
                <PiBrainLight />
                <p>Philosophy</p>
              </a>
            </Col>
            <Col lg={2} md={12} xs={12} className="genre">
              <a href="">
                <IoSearchOutline />
                <p>Mystery</p>
              </a>
            </Col>
            <Col lg={2} md={12} xs={12} className="genre">
              <a href="">
                <FaChildren />
                <p>Kids Books</p>
              </a>
            </Col>
            <Col lg={2} md={12} xs={12} className="genre">
              <a href="/">
                <GiHealthPotion />
                <p>Health</p>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-seller">
        <Container fluid className="seller-content">
          <div className="content-title">
            <p>Bestsellers You Can't Miss</p>
          </div>
          <Row className="product-cards">
            <Col lg={3} md={6} sm={12} className="product-card">
              <div className="card">
                <img src={bookstore1} alt="Blue Hues Of the World" />
                <div className="product-detail">
                  <h4>Blue Hues</h4>
                  <h6>Fiction</h6>
                  <p className="price">$19.99</p>
                  <Rating name="customized-5" defaultValue={4} max={5} />
                </div>
                <div>
                  <button>
                    <span>
                      <IoCartOutline />
                    </span>
                    Add to Cart
                  </button>
                </div>
                <span className="ribbon">Sale</span>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="product-card">
              <div className="card">
                <img src={book2} alt="Business Leader" />
                <div className="product-detail">
                  <h4>Business Leader</h4>
                  <h6>Philosophy</h6>
                  <p className="price">$23.00</p>
                  <Rating name="customized-5" defaultValue={4} max={5} />
                </div>
                <div>
                  <button>
                    <span>
                      <IoCartOutline />
                    </span>
                    Add to Cart
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="product-card">
              <div className="card">
                <img src={book3} alt="Featuring The Future" />
                <div className="product-detail">
                  <h4>Featuring The Future</h4>
                  <h6>Mystery</h6>
                  <p className="price">$19.00</p>
                  <Rating name="customized-5" defaultValue={3} max={5} />
                </div>
                <div>
                  <button>
                    <span>
                      <IoCartOutline />
                    </span>
                    Add to Cart
                  </button>
                </div>
                <span className="ribbon">Sale</span>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="product-card">
              <div className="card">
                <img src={book4} alt="Abstract Art" />
                <div className="product-detail">
                  <h4>Abstract Art</h4>
                  <h6>Non-Fiction</h6>
                  <p className="price">$49.00</p>
                  <Rating name="customized-5" defaultValue={4} max={5} />
                </div>
                <div>
                  <button>
                    <span>
                      <IoCartOutline />
                    </span>
                    Add to Cart
                  </button>
                </div>
                <span className="ribbon">Sale</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-gift">
        <Container>
          <div className="gift-title mb-5">
            <h1>Great Gifting Ideas</h1>
          </div>
          <div className="gift-carousel">
            <Slider {...settings}>
              <div className="gift-card">
                <img alt="" src={Gift1} />
                <p>VENTURE INTO A MAGICAL WORLD</p>
              </div>
              <div className="gift-card">
                <img alt="" src={Gift2} />
                <p>GRATEFUL GIFTS WITH LOVE</p>
              </div>
              <div className="gift-card">
                <img alt="" src={Gift3} />
                <p>PERFECT GIFTED TREASURES</p>
              </div>
              <div className="gift-card">
                <img alt="" src={Gift4} />
                <p>MORE THAN WORDS CAN SAY</p>
              </div>
            </Slider>
          </div>
          <div className="gift-button">
            <button className="gift-btn">Start Gifting</button>
          </div>
        </Container>
      </section>
      <section className="section-subscription">
        <Container fluid>
          <div className="subscription-title">
            <h1>Subscription Plan</h1>
            <hr className="hr-custom" />
          </div>
          <div className="subscription-cards d-flex">
            <Row className="subscription-card">
              <Col lg={4} md={12} sm={12} className="plan-cards">
                <div className="card plan-card">
                  <div className="card-content">
                    <h5>6 Month Plan</h5>
                    <h1>$39</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna
                    </p>
                  </div>
                  <div className="card-button">
                    <button>Get Plan</button>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12} sm={12} className="plan-cards">
                <div className="card plan-card">
                  <div className="card-content">
                    <h5>6 Month Plan</h5>
                    <h1>$39</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna
                    </p>
                  </div>
                  <div className="card-button">
                    <button>Get Plan</button>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12} sm={12} className="plan-cards">
                <div className="card plan-card">
                  <div className="card-content">
                    <h5>1 Year Plan</h5>
                    <h1>$49</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna
                    </p>
                  </div>
                  <div className="card-button">
                    <button>Get Plan</button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home1;
