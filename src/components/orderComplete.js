import '../App.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import deliveryImage from "../images/delivery.jpeg";

const OrderComplete = () => {
  return (
    <header >
      <h3>Order complete</h3>
      <p className = 'complete'
         style={{ 
           backgroundImage: `url(${deliveryImage})` 
         }}
      ></p> 
      <p>Continue Shopping<Link to='/home'><button 
            className="btn btn-primary btn-circle btn-lg button-submit"
            >Home
          </button></Link></p>
    </header>
  )
}

export default OrderComplete