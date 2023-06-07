/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/header.css'


export default function Header(){
  return (
    <Navbar bg="dark" variant="dark" expand="xxl" className='navbar'>
      <Navbar.Brand href="/">Movie Recommendation</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="https://movie-recommender-rn4b.onrender.com">Top 100</Nav.Link>
          <Nav.Link href="">Recommend</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


