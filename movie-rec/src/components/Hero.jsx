// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Container, Button } from 'react-bootstrap';
import "../styles/hero.css"

export default function Hero(){
  return (
    <Container fluid className="hero">
      <div className="hero-content">
        <h1>Discover Your Next Favorite Movie</h1>
        <div className='button-container'>
        <Button variant="secondary">Get Started</Button>
        </div>
      </div>
    </Container>
  )
} 



