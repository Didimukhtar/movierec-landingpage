import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/features.css'
import top100 from '../../src/images/top-100.jpg';
import backgroundimg2 from '../../src/images/backgroundimg2.jpeg';
import backgroundimg3 from '../../src/images/backgroundimg3.png';

export default function Features(){
    const features = [
        { id: 1, title: 'Top 100 Movies', description: 'Discover the top-rated movies of all time', backgroundImage: top100 },
        { id: 2, title: 'Recommendation Page', description: 'Get personalized movie recommendations', backgroundImage: backgroundimg2 },
        { id: 3, title: 'Another Feature', description: 'Explore more exciting features', backgroundImage: backgroundimg3 },
      ];
        return (
            <Container>
                <h2 className="mt-5 mb-4">Features</h2>
      <Row>
        {features.map((feature) => (
          <Col key={feature.id} xs={12} sm={6} md={4} className="mb-4">
            <Card className="h-100">
              <div
                className="card-image"
                style={{ backgroundImage: `url(${feature.backgroundImage})` }}
              />
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
            </Container>
    )
}