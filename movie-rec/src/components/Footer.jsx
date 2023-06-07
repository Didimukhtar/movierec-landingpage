import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import "../styles/footer.css" 

export default function Footer(){
  return (
    <footer className="footer bg-dark text-light mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>About Us</h5>
            <p>
              Movie Recommender is a website that helps users decide on a movie to watch based on a set of recommendations
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Contact</h5>
            <p>Email: info@movierecommender.com</p>
            <p>Phone: +1 123 456 7890</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle className="icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram className="icon" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

