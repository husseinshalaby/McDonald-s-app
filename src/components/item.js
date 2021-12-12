import '../App.css';
import * as React from 'react';
import { Card,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Item = ({cart,name, price,image, id, toggleItem,inCart}) => {
  let isFound = inCart || false
  isFound = cart.some(element => {
    if (element.id === id) {
      return true;
    }
  });
   
  const toggle = (id) => {
    toggleItem(id)
  }
  return (
    <div>
      <Card className = 'card'>
        <div id='card-img'><Card.Img variant="top" src={image} /></div>
        <Card.Body>
          <Link className = "itemName" to={`/products/${id}`}><Card.Title>{name}</Card.Title></Link>
          <Card.Text>
            {price} EGP
          </Card.Text>
          <br/>
          <Button onClick={()=>{toggle(id)}} variant={isFound===true?"danger":"primary"}>{isFound===true?"Remove from cart":"Add to cart"}</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item

