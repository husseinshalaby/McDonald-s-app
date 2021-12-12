import '../App.css';
import * as React from 'react';
import CartItem from './cartItem';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = ({total,RemoveFromCart,increaseQuantity,decreaseQuantity,list}) => {
  return (
    <div>
      
        {!list.length 
        ? <p>Your cart is empty </p>
        :
        <div>
          <ul className ='event-bubbling cart'>       
            { 
              list.map((item) =>  {
                return (
                  <li className = {'child'} key ={item.id}> 
                    <CartItem 
                      increaseQuantity ={increaseQuantity}
                      decreaseQuantity = {decreaseQuantity}
                      RemoveFromCart ={RemoveFromCart}
                      name = {item.name}
                      price = {item.price}
                      image = {item.image}
                      id={item.id}
                      itemQuantity = {item.quantity}
                    />
                  </li>
                )
              })
            }
          </ul>
          <p>total :{total}</p>
          {
            !window.localStorage.user
            ?<Link to='/login'><Button  variant="primary">total :{total}Checkout </Button></Link>
            :<Link to='/checkout'><Button  variant="primary">total :{total}Checkout </Button></Link>
          }
        </div>
        }
    </div>
   
  )
}

export default Cart