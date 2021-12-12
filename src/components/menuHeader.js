import '../App.css';
import * as React from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MenuHeader = () => {
  const categories = ['beef', 'chicken','fish', 'side-item','beverages','happy-meal','desserts','breakfast','mcCafe']
  let {section} = useParams();
  return (
    <div>
      <Nav className ="menu-nav"fill variant="tabs" defaultActiveKey={section ?`/section/${section}`: `/home`}>
        <Nav.Item>
            <Nav.Link href="/home">Full Menu</Nav.Link>
        </Nav.Item>
          {
            categories.map(category=>{
              return (
                <Nav.Item>
                  <Nav.Link href={`/section/${category}`}>{category}</Nav.Link>
                </Nav.Item>
              )
            })
          }
      </Nav>
    </div>
  )
}

export default MenuHeader




