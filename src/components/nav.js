import '../App.css';
import * as React from 'react';
import {Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const NavBar = () => { 
  return (
    <div>
     
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">
            <Link to='/'>Eat</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">
            <Link to='/About'>About</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">
            <Link to='/cart'>Cart</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default NavBar