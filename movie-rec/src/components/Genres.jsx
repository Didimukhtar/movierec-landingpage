import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Genres(){
  const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Adventure' },
    { id: 3, name: 'Comedy' },
    { id: 4, name: 'Drama' },
    { id: 5, name: 'Horror'},
    { id: 6, name: 'Thriller'},
    { id: 7, name: 'Crime'},
    { id: 8, name: 'Romance'},
    // Add more genres as needed
  ];

  return (
    <Container>
      <h2 className="mt-5 mb-4">Movie Genres</h2>
      <Row>
        {genres.map((genre) => (
          <Col key={genre.id} xs={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Body>
                  <Card.Title>{genre.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}