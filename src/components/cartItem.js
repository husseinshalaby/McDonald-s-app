import '../App.css';
import * as React from 'react';
import { Card,Button } from 'react-bootstrap';

const CartItem = ({itemQuantity,decreaseQuantity, increaseQuantity,RemoveFromCart,name, price,image, id}) => {
  const [quantity, setQuantity] = React.useState(itemQuantity)
  const handleIncrement = (id) =>{
    setQuantity(quantity + 1)
    increaseQuantity(id)
  }
  const handleDecrement = (id) =>{
    if (quantity > 1) {
      setQuantity(quantity - 1)
      decreaseQuantity(id)
    }else{
      RemoveFromCart(id)
    } 
  }
  return (
    <div>
      <Card >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          <p>
            <Button onClick={()=>{handleIncrement(id)}} variant="outline-dark">+</Button>
            <span> {quantity} </span>
            <Button onClick={()=>{handleDecrement(id)}} variant="outline-dark">-</Button>
          </p>
          <p>price: {price * quantity}</p>
          <Button onClick={()=>{RemoveFromCart(id)}} variant="danger">Remove from cart</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CartItem
