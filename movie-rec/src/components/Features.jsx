import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Features(){
    return (
        <Container>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Top 100 Movies of All Time</Card.Title>
              <Card.Text>
                Discover the top-rated movies of all time and explore their
                ratings, reviews, and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Recommendation</Card.Title>
              <Card.Text>
                Get personalized movie recommendations based on your
                preferences and viewing history.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>General</Card.Title>
              <Card.Text>
                Get a list of all available movies and search based on your interests.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    )
}