import '../App.css';
import * as React from 'react';
import {useParams} from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';


const ProductDetails = ({cart,toggleItem,list}) => {
  let {id} = useParams();
  id = parseInt(id)
  const isFound = cart.some(element => {
    if (element.id === id) {
      return true;
    }
  });
  
  const toggle = (id) => {
    toggleItem(id)
  }
  const getProductById =(id) => {
    const product = list.find(item => item.id === id)
    return product
  }
  const product = getProductById(+id)
  const {image, name, price} = product
  return (
    <div>
      <Card className ='product-details' >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          <br/>
          <Button onClick={()=>{toggle(id)}} variant={isFound===true?"danger":"primary"}>{isFound===true?"Remove from cart":"Add to cart"}</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductDetails